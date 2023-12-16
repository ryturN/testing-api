const Directory = require("./directories");

const createDirectories = async (name, description) => {
    try {
        const newDirectory = await Directory.create({
            name,
            description,
            
        });
        return newDirectory;
    } catch (error) {
        throw error;
    }
};

module.exports = createDirectories;
