const Directory = require('../../models/directories');
const createModel = require('../../models/createDirectory');

exports.getAllDirectory= async (req, res) => {
  try {
    const directories = await Directory.findAll();
    return res.status(200).json({ status: 'success', message: 'get all directory success', data: Directory });
  } catch (error) {
    throw error;
  }
};

exports.getDirectoryById = async (req, res) => {
  try {
    const directoryId = req.params.directoryId;
    const directory = await Directory.findOne({ where: { directory_id: directoryId } });
    return res.status(200).json({ status: 'success', message: 'get directory by id success', data: directory });
  } catch (error) {
    throw error;
  }
};

exports.createDirectory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newDirectory = await Directory.create({ name, description });
    return res.status(201).json({ status: 'success', message: 'directory created successfully', data: newDirectory });
  } catch (error) {
    throw error;
  }
};

exports.updateDirectory = async (req, res) => {
  try {
    const directoryId = req.params.directoryId;
    const directory = await Directory.findOne({ where: { directory_id: directoryId } });
    const { name, description } = req.body;
    const updatedDirectory = { name, description };
    await directory.update(updatedDirectory);
    return res.status(200).json({ status: 'success', message: 'update directory success' });
  } catch (error) {
    throw error;
  }
};

exports.deleteDirectory = async (req, res) => {
  try {
    const directoryId = req.params.directoryId;
    await Directory.destroy({ where: { directory_id: directoryId } });
    return res.status(200).json({ status: 'success', message: 'delete directory success' });
  } catch (error) {
    throw error;
  }
};
