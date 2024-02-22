import { NextRequest, NextResponse } from 'next/server'
import { parse } from 'csv-parse/sync';
import { Engine } from "@thirdweb-dev/engine";
import { collections, randomSelection } from './options';
import { Console } from 'console';
import JSZip from 'jszip';


function arrayToCSV(data: NftRecord[]) {
  if (data.length === 0) {
    return "wallet_address,collection\n"; // Return header only if no data
  }
  
  // Convert array of objects to CSV string
  const csvRows = data.map(row => `${row.wallet_address},${row.collection}`);
  // Add header at the start
  csvRows.unshift("wallet_address,collection");
  
  return csvRows.join("\n");
}

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

type NftRecord = {
  wallet_address: string
  collection: string
  metadata_name?: string
  metadata_description?: string
  metadata_image?: string
  metadata_asset_id?: string
  metadata_licensor?: string
  metadata_rarity?: string
  metadata_event_type?: string
  metadata_color?: string
  metadata_size?: string
  metadata_character?: string
  metadata_external_url?: string
  metadata_art_name?: string
  metadata_date?: string
}

async function mint(item: any, _collection?: string) {

  const {collection: item_collection } = item;

  const collection = item_collection ?? _collection;

  //@ts-ignore
  const collection_info = collections[collection];

  if (!collection_info) {
    // console.log(item, item.collection, item['collection'])
    throw new Error(`${collection} is not configured`);
  }

  /**
   * We randomly select one base asset, and return its metadata to use for the mint.
   */
  const item_extra = randomSelection(collection);

  if (!item_extra) {
    throw new Error(`${collection} is not a valid collection`);
  }

  const capitalize = (s: string) => {
    return s
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  /**
   * find all keys with "metadata_" prefix and place the value in an array of objects
   * structured as { trait_type: key, value: value }
   */
  const attributes = Object.keys(item_extra)
    .filter((key) => key.startsWith('attribute_'))
    .map((key) => ({
      trait_type: capitalize(key.replace('attribute_', '').replace('_', ' ')),
      // @ts-ignore
      value: item_extra[key],
    }));
    
  

  const metadata = 
  {
    receiver: item.wallet_address ?? item['wallet_address'],
    metadata: {
      name: item_extra.metadata_name,
      description: item_extra.metadata_description,
      image: item_extra.metadata_image,
      attributes: attributes
    },
    /**
     * this could be a variable passed in from the sheet at some point
     */
    supply: '1',
  }

  return await engine.erc721.mintTo(
    BLOCKCHAIN as string,
    collection_info as string,
    BACKEND_WALLET_ADDRESS as string,
    // @ts-ignore
    metadata
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
  const rows = buffer.toString().split('\r')
  // const records: NftRecord[] = []

  const records = parse(buffer.toString(), {
    columns: true,
    skip_empty_lines: true
  })
  const goodIndexes: NftRecord[] = [];
  const ignoredIndexes: NftRecord[] = [];
  const erroredIndexes: NftRecord[] = [];

  for (let i = 0; i < records.length; i++) {
    try {
      if (records[i].collection) {
        console.log(records[i])
        await mint(records[i]);
        goodIndexes.push(records[i]);
      } else {
        ignoredIndexes.push(records[i]);
      }

    } catch (e) {
      console.log(e, '<---- error');
      erroredIndexes.push(records[i]);

      // console.log(e);
    }
  }  
  /**
   * Optional - was used to return the results in seperated files for debugging purposes
   */
  // Create a new instance of JSZip
  const zip = new JSZip();

  const folder = zip.folder('records')
  // Add CSV files to the zip
  folder?.file('goodIndexes.csv', arrayToCSV(goodIndexes));
  folder?.file('ignoredIndexes.csv', arrayToCSV(ignoredIndexes));
  folder?.file('erroredIndexes.csv', arrayToCSV(erroredIndexes));

  // Generate the zip file as a Node.js Buffer
  const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });

  // Set up the response to return the zip file
  const response = new Response(zipBuffer, {
    status: 200, // OK Status
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': 'attachment; filename="records.zip"',
    },
  });

  console.log("DONE")

  return response;
}