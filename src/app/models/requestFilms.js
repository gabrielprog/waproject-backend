const api = require("../services/sgfilms")

const readContent = async () => {
    try {

        const responseFilms = await api.get()
        return responseFilms.data

    } catch (error) {

        return {
            error: true,
            message: error
        }
        
    }
    
}

module.exports = readContent