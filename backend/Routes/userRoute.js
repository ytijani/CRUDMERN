const express = require('express')

const router = express.Router();

const userConroller = require("../Controllers/userController")

router.get("/getInfo", userConroller.getInfo);
router.post("/addInfo", userConroller.addInfo);
router.put("/updateInfo", userConroller.updateInfo);
router.delete("/deleteInfo",userConroller.deleteInfo);



module.exports = router
