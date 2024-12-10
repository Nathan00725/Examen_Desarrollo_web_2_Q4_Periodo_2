const express = require ('express')
const sequelize = require('./config/database')
const Empleado = require('./model/Empleado')
const Producto = require('./model/Producto')
const cors = require('cors')

const app = express()
app.use(express.json())
var port = 5000

app.use(cors())

app.get('/AVG_categoryCode', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'puntos']
            ],
            group: ["categoryCode"]
        })
        resp.json(result)
    } catch (error) {
   
        resp.status(500).json({ error: 'Ocurrio un error' + error })
    }
})

app.get('/count_brandCode', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'brandCode',
                [sequelize.fn('COUNT', sequelize.col('value')), 'productos']
            ],
            group: ["brandCode"]
        })
        
        resp.json(result)
    } catch (error) {
       
        resp.status(500).json({ error: 'Ocurrio un error' + error })
    }
})

app.get('/sumar_categoryCode', async (req, resp) => {
    try {
        const result = await Producto.findAll({
            attributes: [
                'categoryCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'Suma']
            ],
            group: ["categoryCode"]
        })
       
        resp.json(result)
    } catch (error) {
       
        resp.status(500).json({ error: 'Ocurrio un error' + error })
    }
})







app.listen(port, ()=>{
    console.log('aplicacion ejecutando en puerto:' , port)
})