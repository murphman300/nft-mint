import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'csv-parse/sync';
import { Engine } from "@thirdweb-dev/engine";

const {
  BLOCKCHAIN,
  BACKEND_WALLET_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  ENGINE_URL,
  // Poorly named, this is the access token for the thirdweb engine
  // NOT the secret from the Settings/API
  THIRDWEB_SECRET_KEY,
} = process.env;

const engine = new Engine({
  url: ENGINE_URL as string,
  accessToken: THIRDWEB_SECRET_KEY as string,
});

interface NftRecord {
  wallet_address: string
  metadata_name: string
  metadata_description: string
  metadata_image: string
  metadata_asset_id: string
  metadata_licensor: string
  metadata_rarity: string
  metadata_character: string
  metadata_size: string
}

async function mint(item: NftRecord) {
  // console.log(item);
  const resp = await engine.erc721.mintTo(
    BLOCKCHAIN as string,
    NFT_CONTRACT_ADDRESS as string,
    BACKEND_WALLET_ADDRESS as string,
    {
      receiver: item.wallet_address,
      metadata: {
        name: item.metadata_name,
        description: item.metadata_description,
        image: item.metadata_image,
        // TODO(tom) thirdweb engine sdk has a bug where
        // the type of attributes is null, so it complains
        // if you put anything here
        attributes: [
          { trait_type: "Asset ID", value: item.metadata_asset_id },
          { trait_type: "Licensor", value: item.metadata_licensor },
          { trait_type: "Rarity", value: item.metadata_rarity },
          { trait_type: "Character", value: item.metadata_rarity },
          { trait_type: "Size", value: item.metadata_rarity }
        ],
      },
    }
  );
}

export async function POST(request: NextRequest) {
  if (
    !BACKEND_WALLET_ADDRESS ||
    !NFT_CONTRACT_ADDRESS ||
    !ENGINE_URL ||
    !THIRDWEB_SECRET_KEY ||
    !BLOCKCHAIN
  ) {
    throw 'Server misconfigured. Did you forget to add a ".env.local" file?';
  }

  const data = await request.formData()
  const file: File | null = data.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ success: false })
  }

  // TODO(tom) If your data set it huge this approach risks using up
  // all of your memory, if you're sub 1000 records in CSV this should be fine
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const records = parse(buffer.toString(), {
    columns: true,
  });

  // console.log(records);
  for (let i = 0; i < records.length; i++) {
    await mint(records[i]);
  }

  return NextResponse.json({ success: true })
}