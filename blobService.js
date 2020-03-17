const { BlobServiceClient } = require('@azure/storage-blob');
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const blobName = 'quickstart' + uuidv1() + '.jpg';
module.exports = { blobFunction: blobName };

async function main() {
    
console.log('Azure Blob storage v12 - JavaScript quickstart sample');

// Login to Azure
const blobServiceClient = await BlobServiceClient.fromConnectionString("DefaultEndpointsProtocol=https;AccountName=euroleaguenews;AccountKey=jJjG0sfWC9I3TMLi4HvCtN2snTq/wMfloAEcbbjBD660/6vg8towP0P1s9W2/tr+pTNnhnnecjLw2pG9WP5kPQ==;EndpointSuffix=core.windows.net");

//Container name
const containerName = 'euroleaguenewsimages';

// Get container
const containerClient = await blobServiceClient.getContainerClient(containerName);

// Get a block blob client
const blockBlobClient = containerClient.getBlockBlobClient(blobName);
console.log('\nUploading to Azure storage as blob:\n\t', blobName);

const uploadBlobResponse = await blockBlobClient.uploadFile('./gintaras-einikis.jpg');
console.log("Blob was uploaded successfully. requestId: ", uploadBlobResponse.requestId);
module.exports = containerName;
}

main().then(() => console.log('Done')).catch((ex) => console.log(ex.message));
