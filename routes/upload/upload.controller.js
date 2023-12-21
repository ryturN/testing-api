const upload  = require('../../config/helper');
// const { upload } = require('./upload.router');

const uploadController = async (req, res) => {
  try {
    const file  = req.file; 

  
     const result = await upload({
      fileName: req.file.originalname,
      file : file
    });

 
    res.status(200).json(result);
  } catch (error) {
  
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = uploadController;
