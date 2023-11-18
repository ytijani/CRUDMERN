const express = require('express')

const router = express.Router();

const userConroller = require("../Controllers/userController")

router.get("/getInfo", userConroller.getInfo);
router.post("/addInfo", userConroller.addInfo);
router.put("/updateInfo", userConroller.updateInfo);
router.delete("/deleteuser",userConroller.deleteInfo);



module.exports = router
