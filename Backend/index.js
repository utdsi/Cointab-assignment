const express = require("express")
const  cors = require('cors')
const {sequelize} = require("./config/db.js")
const {getRouter} = require("./routes/fetch.route.js")

const app = express()

app.use(express.json())
app.use(cors())


app.use("/",getRouter )


app.listen(8000,async()=>{

    try {
        await sequelize.sync();
        console.log("connected to db")
    } catch (error) {

        console.log(error)
        
    }
})