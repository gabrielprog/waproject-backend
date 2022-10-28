const requestApiFilms = require("../../models/requestFilms")
const modelFilms = require("../../models/films")

const conn = require("../../../config/connectDatabase")
const instanceModelFilms = modelFilms(conn)

const create = async (req, res) => {
    const responseFilms = await requestApiFilms()

    responseFilms.forEach(item => {

        instanceModelFilms.create({
            ...item,
            image_url: item.image,
            movie_banner_url: item.movie_banner,
            rate_score: item.rt_score,
            url_destination: item.url
        }).catch(e => e)

    })
    
    
    return res.status(200).json({ 
        status: true,
        message: "Database updated"
    })
}

const read = async (req, res) => {

    let { page } = req.query;
    const LIMIT = 10

    if(page <= 0) page = 1

    if(page) page = (page - 1) * LIMIT 
    
    const { rows: resultDataFilms, count} = await instanceModelFilms.findAndCountAll({
        limit: LIMIT,
        offset: page ? page : 0
    })

    if(!resultDataFilms || resultDataFilms.length === 0) return res.status(404).json({ message: "Pagination ended"})
    
    const current_page = page ? Number.parseInt(page / LIMIT) + 1 : 1
    const total_page = Number.parseInt(count / LIMIT) + 1
    
    return res.status(200).json({
        resultDataFilms,
        current_page,
        total_page,
        has_next_page: current_page !== total_page ? true : false
    })
}

module.exports = {
    create,
    read
}