const User = require('../../models/users');
const createUsers = require('../../models/createUsers');
const auth = require('../../controller/authFunction');
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await auth.login(email, password);
    if (!user) {
      return res.status(400).json({ status: 'fail', message: 'username or password is wrong' });
    }
    return res.status(200).json({ status: 'success', message: 'login success', data: user });
  } catch (error) {
    throw error
  }
}

exports.register = async (req, res) => {
  try {
      const { nama, email, password } = req.body;
      const newUser = await createUsers(nama, email, password);

      return res.status(200).json({
          status: 'success',
          message: 'User was registered successfully!',
          data: {
              email: newUser.email,
              username: newUser.username,
              point: newUser.point,
              image_url: newUser.image_url,
          },
      });
  } catch (error) {
      throw error;
  }
};


exports.getAllUser = async (req, res) => {
  try {
    const user = await User.findAll();
    return res.status(200).json({ status: 'success', message: 'get all user success', data: user });
  } catch (error) {
    throw error
  }
}

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ where: { id_user: userId } });
    return res.status(200).json({ status: 'success', message: 'get user by id success', data: user });
  } catch (error) {
    throw error
  }
}

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ where: { id_user: userId } }); 
    const { nama, email, password } = req.body;
    const updatedUser = {
      nama,
      email,
      password
    }
    await user.update(updatedUser);
    return res.status(201).json({ status: 'success', message: 'update user success' });
  } catch (error) {
    throw error
  }
}

