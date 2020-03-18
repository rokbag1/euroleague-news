const { BlobServiceClient } = require('@azure/storage-blob');
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const blobName = 'euro_league_image_' + uuidv1() + '.jpg';

require('dotenv/config');

module.exports = { blobFunction: blobName };

async function main() {
    
console.log('Azure Blob storage v12 - JavaScript quickstart sample');

// Login to Azure
const blobServiceClient = await BlobServiceClient.fromConnectionString(process.env.AZURE_STORAGE_CONNECTION_STRING);

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
