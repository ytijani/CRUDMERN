
const { PrismaClient } = require("@prisma/client");
const { existsSync } = require("fs");
const prisma = new PrismaClient();

const getInfo = async (req, res) => {

    try {
        const user = await prisma.user.findMany({
            select: {
                id : true,
                firstname: true,
                lastname: true,
                email: true,
                age: true,
                country: true,
            }
        })
        return (res.json(user))
    } catch (error) {
        console.log("getINFO : ", error);
        res.status(500).json(error);
    }
}

const addInfo = async (req, res) => {
    const { firstname, lastname, age, email, country } = req.body;
    if (!firstname || !lastname || !age || !country || !email)
        return (res.status(400).json({ message: "all field are required" }))
    try {
        const newUser = await prisma.user.create({
            data: {
                firstname: firstname,
                lastname: lastname,
                age: age,
                country: country,
                email: email,
            }
        })
        return (res.json("user created successfully"))
    } catch (error) {
        return res.status(500).json(error);

    }
}

const updateInfo = async (req, res) => {

    
    try{ 
        const updateuser  = await prisma.user.update({
            where : {
                id : req.body.id
            },
            data : {
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                country : req.body.country,
                age : req.body.age
            }
        })
        return (res.send("data update successfullt"))
    }catch(error)
    {
        return res.status(500).json(error);
    }

}

const deleteInfo = async (req, res) => {

    try {
        const deleteuser = await prisma.user.delete({
            where : {
                id : req.query.id
            }
            
        })
       return (res.send("user deleted successfully"))
    } catch (error) {
        console.log("DELETE INFO : ", error);
        res.status(500).json(error);
    }
}

module.exports = {
    getInfo,
    updateInfo,
    addInfo,
    deleteInfo
}