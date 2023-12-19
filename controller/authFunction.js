const bcrypt = require("bcryptjs");
const User = require("../models/users");

exports.login = async (email, password) => {
    try {
        const findUser = await User.findOne({ where: { email } });
        if (!findUser) {
            return false;
        }
        const comparePassword = await bcrypt.compare(password, findUser.password);
        if (!comparePassword) {
            return false;
        }
        return findUser;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

exports.register = async (userId, nama, email, password) => {
    try {
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = await User.create({ user_id: userId, nama: nama, email: email, password: hashPassword });
        return user;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
