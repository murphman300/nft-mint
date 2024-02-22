import { NextResponse } from "next/server";
import { Engine } from "@thirdweb-dev/engine";

const {
  BACKEND_WALLET_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  ENGINE_URL,
  THIRDWEB_SECRET_KEY,
} = process.env;

const engine = new Engine({
  url: ENGINE_URL as string,
  accessToken: THIRDWEB_SECRET_KEY as string,
});

export async function POST(request: Request) {
  if (
    !BACKEND_WALLET_ADDRESS ||
    !NFT_CONTRACT_ADDRESS ||
    !ENGINE_URL ||
    !THIRDWEB_SECRET_KEY
  ) {
    throw 'Server misconfigured. Did you forget to add a ".env.local" file?';
  }

  const { userWalletAddress } = await request.json();

  const resp = await engine.erc721.mintTo(
    'mumbai',
    NFT_CONTRACT_ADDRESS,
    BACKEND_WALLET_ADDRESS,
    {
      receiver: userWalletAddress,
      metadata: {
        name: "Acme Inc. Superfan",
        description: "Created with thirdweb Engine",
        image: "ipfs://QmciR3WLJsf2BgzTSjbG5zCxsrEQ8PqsHK7JWGWsDSNo46/nft.png",
        // @ts-ignore
        attributes: {
          "Asset ID": "thumbnail",
          "Licensor": "McFarlane Toys",
          "Rarity": "Common",
        },
      },
    }
  );
  if (resp.result.queueId) {
    console.log("[DEBUG] ok", resp.result.queueId);
  } else {
    console.log("[DEBUG] not ok", resp);
  }

  return NextResponse.json({ message: "Success!" });
}
