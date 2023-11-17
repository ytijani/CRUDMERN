const express = require("express")
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173/",
}))



const userRouter = require("./Routes/userRoute");

app.use("user", userRouter)

app.all('*', (req, res, next)=> {
    res.sendStatus(404); 
})

app.listen(3000, () => {
    console.log("app is listing in port 3000")
})