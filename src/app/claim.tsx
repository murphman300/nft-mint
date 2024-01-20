"use client";
import {
  ConnectWallet,
  ThirdwebProvider,
  useAddress,
} from "@thirdweb-dev/react";
import { useState } from "react";

export default function Home() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
    >
      <ClaimPage />
    </ThirdwebProvider>
  );
}

function ClaimPage() {
  const userWalletAddress = useAddress();
  console.log(process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID);

  const [text, setText] = useState('');

  const onClick = async () => {
    const resp = await fetch("/api/claim", {
      method: "POST",
      body: JSON.stringify({ userWalletAddress }),
    });
    if (resp.ok) {
      alert(`🎉 A reward has been sent to your wallet: ${userWalletAddress}`);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!text) {
      return;
    }

    const resp = await fetch("/api/check", {
      method: "POST",
      body: JSON.stringify({ queueId: text }),
    });
    if (resp.ok) {
      console.log(resp);
    }
  };

  return (
    <main className="flex flex-col gap-y-8 items-center p-24">
      <h2 className="text-4xl font-extrabold">
        Thank you for being a superfan! ❤️
      </h2>
      <ConnectWallet />
      {userWalletAddress && (
        <button
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
          onClick={onClick}
        >
          Claim my reward
        </button>
      )}

      <form onSubmit={onSubmit}>
        <label>
          Check Status of QueueId
          <input type="text" className="text-black" value={text} onChange={(e) => { console.log(e); setText(e.target.value.trim())} } />
          <input type="submit" value="Search"/>
        </label>
      </form>
    </main>
  );
}
