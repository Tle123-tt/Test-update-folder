const router = require("express").Router();

const { userController } = require("../controller/userController");
const {
  authMiddleWare,
  authUsermiddleWare,
} = require("../middleware/authMiddleware"); 

router.get("/user/",userController.getAllUser);

router.get("/user/ngdung/:id",userController.getIdUser);

router.post("/user/add", userController.addUser);

router.put("/user/update/:id", userController.updateUser);

router.post("/user/sigup", userController.SigupUser);

router.post("/user/login", userController.LoginUser);

router.delete("/user/deleted/:id", userController.DeleteUser);



module.exports = router;
