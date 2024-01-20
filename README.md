# Airdrop NFTs with thirdweb Engine

This guide shows how thirdweb Engine can be used by a brand to mint free NFTs for their superfans.

## Instructions

Using Node v18 at least install deps
```
npm i
```

Create a `.env.local` by copying the `.env.example` and filling in the details of your project.

Start the server with your favorite package manager.

```bash
npm run dev
```

Navigate to http://localhost:3000

Upload your csv. It needs to look like the following:


```csv
wallet_address,metadata_name,metadata_description,metadata_image,metadata_asset_id,metadata_licensor,metadata_rarity
"0x71E8E12b0cB16506C946FF83C0A0064B2357AE04","Cool NFT","Cool NFT Description","ipfs://QmciR3WLJsf2BgzTSjbG5zCxsrEQ8PqsHK7JWGWsDSNo46/nft.png","sf_test","McFarlane Toys","Epic"
"0x71E8E12b0cB16506C946FF83C0A0064B2357AE04","Cool NFT","Cool NFT Description","ipfs://QmciR3WLJsf2BgzTSjbG5zCxsrEQ8PqsHK7JWGWsDSNo46/nft.png","sf_test","McFarlane Toys","Epic"
"0x71E8E12b0cB16506C946FF83C0A0064B2357AE04","Cool NFT","Cool NFT Description","ipfs://QmciR3WLJsf2BgzTSjbG5zCxsrEQ8PqsHK7JWGWsDSNo46/nft.png","sf_test","McFarlane Toys","Epic"
```