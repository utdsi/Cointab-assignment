

const express = require('express');
const { Users } = require("../model/get.model.js")



const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getRouter = express.Router()

getRouter.post("/", async (req, res) => {


    try {

        const response = await fetch('https://randomuser.me/api/?results=50');
        const data = await response.json();
        const { results } = data

        
        const modifiedUsersToInsert = results.map(item => ({ 
            name: item.name.title+" "+item.name.first+" "+item.name.last,
            email : item.email,
            city : item.location.city,
            state : item.location.state,
            nat:item.nat,
            age:item.dob.age
        }));

       await Users.bulkCreate(modifiedUsersToInsert);
       
       res.status(200).send("users added successfully")

    } catch (error) {


        console.log(error)

    }






})



getRouter.delete("/del",async(req,res)=>{

    try {
         await Users.destroy({
            where: {}, 
            truncate: true 
          });

          res.status(200).send("users deleted successfully")
    } catch (error) {
        console.log(error)
    }
})

getRouter.get("/asc",async(req,res)=>{
    try {

        const ascendingUsers = await Users.findAll({
            order: [['age', 'ASC']]
          });
          res.status(200).send(ascendingUsers)
        
    } catch (error) {
        console.log(error)
    }
})

getRouter.get("/dsc",async(req,res)=>{
    try {

        const descendingUsers = await Users.findAll({
            order: [['age', 'DESC']]
          });
          res.status(200).send(descendingUsers)
        
    } catch (error) {
        console.log(error)
    }
})

module.exports = { getRouter }