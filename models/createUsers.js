const User = require("../models/users");
const bcrypt = require("bcryptjs");

const createUsers = async (username, email, password) => {
    try {
        const hashedPasswordc = await bcrypt.hash(password, 10)
        await User.create(
            username,
            email,
            password = hashedPasswordc

        )
    } catch (error) {
        throw error
    }
}

return createUsers



