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
  const { queueId } = await request.json();

  const resp = await engine.transaction.status(queueId);
  if (resp.result.queueId) {
    console.log("[DEBUG] ok checked", resp.result.queueId);
  } else {
    console.log("[DEBUG] not ok", resp);
  }

  return NextResponse.json(resp);
}
