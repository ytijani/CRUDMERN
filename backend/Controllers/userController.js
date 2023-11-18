
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
        console.log(error)
        res.status(500).json(error);

    }
}

const updateInfo = async (req, res) => {


}

const deleteInfo = async (req, res) => {

    try {
        const res = await prisma.user.delete({
            where : {
                id : req.query.id
            }
            
        })
       return (res.send("user deleted successfully"))
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getInfo,
    updateInfo,
    addInfo,
    deleteInfo
}