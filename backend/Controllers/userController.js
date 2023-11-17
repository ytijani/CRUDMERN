
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const getInfo = async (req, res) => {

    const {username, password} = res.body;
    if(!username || !password)  return (res.status(400).json({message : "all field are required"}))
    try {
        const user = await prisma.user.findUnique({
            where:{
                id : id,
            }
        })
        return (res.json(user))
    } catch (error) {
        res.status(500).json(error);
    }
}

const addInfo = async (req, res) => {
    const {firstname, lastname, username ,age, country, email, password} = res.body;
    if(!firstname || !lastname || !age ||  !username || !country ||  !email || !password)
        return (res.status(400).json({message : "all field are required"}))
    try
    {
        const newUser = await prisma.user.create({
            data: {
                firstname : firstname,
                lastname : lastname,
                age : age,
                country : country,
                email : email,
                password : password
            }
        })
    }catch(error)
    {
        res.status(500).json(error);

    }
}

const updateInfo = async (req, res) => {


}

const deleteInfo = async (req, res) => {

}

module.exports = {
    getInfo,
    updateInfo,
    addInfo,
    deleteInfo
}