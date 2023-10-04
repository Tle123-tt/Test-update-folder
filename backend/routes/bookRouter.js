const router=require('express').Router();

const bookController=require('../controller/bookController');
const {authUsermiddleWare, authMiddleWare}=require('../middleware/authMiddleware');

router.get("/book/", bookController.getAllBook);

router.get("/book/spham/:id", bookController.getIdBook);

router.post("/book/addbook", bookController.addBook);

router.put("/book/spham/:id", bookController.updateBook);

router.delete("/book/deletebook/:id", bookController.deletedBook);

module.exports=router;   