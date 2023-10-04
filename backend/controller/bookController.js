const { Productbook, Userdata } = require("../model/webModel");
const {GetAllBook} = require("../services/bookServices");

const bookController = {
  getAllBook: async (req, res) => { 
    console.log(req.query)
    try {
      const {limit, page, sort, filter}=req.query
      const allBook=await GetAllBook(Number(limit) || 10, Number(page) || 0, sort, filter);
      res.status(200).json(allBook); 
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getIdBook: async (req, res) => {
    try {
      const bookId = await Productbook.findById(req.params.id);
      if (!bookId) {
        res.status(200).json({
          status: "ERR",
          message: "The bookId is required",
        });
      }
      res.status(200).json(bookId);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addBook: async (req, res) => {
    try {
      const newBook = new Productbook(req.body);
      if (!newBook) {
        res.status(200).json({
          status: "ERR",
          message: "The input in required",
        });
      }
      const saveBook = await newBook.save();
      res.status(200).json({
        status: "OK",
        message: "SUCCESS",
        data: saveBook,
      });
    } catch (err) { 
      res.status(500).json(err);
    }
  },
  updateBook: async (req, res) => {
    try {
      const upBook = await Productbook.findById(req.params.id);
      if (upBook === null) {
        res.status(200).json({
          status: "OK",
          message: "The book is not defined",
        });
      }
      await upBook.updateOne({ $set: req.body });
      res.status(200).json({ 
        status: "OK", 
        message: "Updated successfully!" 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deletedBook:async(req,res)=>{
    try {
      const deletedBook=await Productbook.findByIdAndDelete(req.params.id);
      if(deletedBook===null){
        res.status(200).json({
          status:"OK",
          message:"The book is not defined"
        })
      }
      res.status(200).json({
        status: "OK", 
        message: "Deleted successfully!" 
      })
    } catch (err) {
      res.status(500).json(err);
    }
  } 
};

module.exports = bookController;
