const express = require("express")
const router = express.Router();

const requestFilmsController = require("./controllers/filmsController")

router.get('/', (req, res) => {
    
    return res.send('Welcome!')
})

router.get('/films/update', requestFilmsController.create)
router.get('/films', requestFilmsController.read)

module.exports = router