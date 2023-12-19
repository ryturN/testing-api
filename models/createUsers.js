const User = require("../models/users");
const bcrypt = require("bcryptjs");

const createUsers = async (nama, email, password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            nama,
            email: email,
            password: hashedPassword,
            point: 0, 
            image_url: "default_image_url.jpg", // Tambahkan URL gambar default atau sesuaikan
        });
        return newUser;
    } catch (error) {
        throw error;
    }
};

module.exports = createUsers;
