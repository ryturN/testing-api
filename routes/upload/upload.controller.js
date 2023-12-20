const { upload } = require('../../config/helper');
// const { upload } = require('./upload.router');

const uploadController = async (req, res) => {
  try {
    const { target } = req.body; 

  
    if (!['users', 'freelancers', 'projects'].includes(target)) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid target. Allowed targets are users, freelancers, or projects.'
      });
    }

 
    const result = await upload({
      target,
      fileName: req.file.originalname,
      file: req.file,
    });

 
    res.status(200).json(result);
  } catch (error) {
  
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = uploadController;
