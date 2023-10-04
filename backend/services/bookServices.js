const { Productbook, Userdata } = require("../model/webModel");

const GetAllBook = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalBook = await Productbook.count();
      if (filter) {
        const label = filter[0];
        const allBookfilter = await Productbook.find({
          [label]: { $regex: filter[1] },
        });
        resolve({
          data: allBookfilter,
          total: totalBook,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalBook / limit),
        });
      }
      if (sort) {
        console.log("okok");
        const objectSort = {};
        objectSort[sort[1]] = sort[0];
        console.log("Object Sort", objectSort);
        const allBooksort = await Productbook.find()
          .limit(limit)
          .skip(page * limit)
          .sort(objectSort);
        resolve({
          data: allBooksort,
          total: totalBook,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalBook / limit),
        });
      }
      const allBook = await Productbook.find()
        .limit(limit)
        .skip(page * limit);
      resolve(
        {
          data: allBook,
          total: totalBook,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalBook / limit),
        }
        // allBook
      );
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = { GetAllBook };
