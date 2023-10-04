import { Button, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../redux/cart";
import { useQuery } from "@tanstack/react-query";

const Sach = () => {
  const dispatch = useDispatch();

  const query = useQuery({ queryKey: ["todos"], queryFn: fetch });

  console.log(query)

  const [dtbook, setDtBook] = useState({});
  console.log("dtabook: ", dtbook);
  useEffect(() => {
    const getBook = async () => {
      const bookData = await axios.get(`/api/book/`);
      setDtBook(bookData.data);
    };
    getBook();
  }, []);

  console.log(dtbook);

  return (
    <>
      {dtbook?.data?.length > 0
        ? dtbook?.data?.map((books) => (
            <div
              className='sach mx-7 bg-slate-50 mt-4 mb-7 rounded-lg shadow-xl shadow-gray-400'
              key={books._id}
            >
              <Link to={`/sach/${books._id}`}>
                <img src={books.image} alt='' className='rounaded-t-lg' />
              </Link>

              <div className='px-3 overflay'>
                <h2>
                  <Link to={`/sach/${books._id}`} className='font-sans'>
                    {books.name}
                  </Link>
                </h2>
                <div>
                  <Rate disabled allowHalf value={books.rating} />
                </div>
                <div className='text-xl font-semibold pt-3'>
                  Giá: {books.price}đ
                </div>
                <div className='flex p-4'>
                  <Button
                    type='button'
                    className='mb-3 mx-auto bg-red-500 dhang border-0 h-12 text-white'
                    icon={<ShoppingCartOutlined />}
                    onClick={() => dispatch(addtoCart(books))}
                  >
                    Đặt hàng
                  </Button>
                </div>
              </div>
            </div>
          ))
        : null}
    </>
  );
};
export default Sach;
