const { googleBucket } = require("../config/storage");

const uploadPhoto = async ({ fileName, file }) => {
    return new Promise((resolve, reject) => {

        const fileBuffer = file.buffer;
    
        const fileUpload = googleBucket.file(`photos/${fileName}`);
        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        });
        
        blobStream.on('error', (error) => {
            reject(error);
        })
    
        blobStream.on('finish', () => {
            const response = {
                status: 'success',
                message: 'file uploaded successfully',
                publicUrl: `https://storage.googleapis.com/${googleBucket.name}/photos/${fileName}`
            }
            resolve(response);
        })
    
        blobStream.end(fileBuffer);
    })
    
}

module.exports = uploadPhoto;