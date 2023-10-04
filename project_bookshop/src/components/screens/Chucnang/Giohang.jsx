import { Link } from "react-router-dom";
import "../../../css/giohang.css";
// import data from '../../../data';
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removetoCart,
  dectrementQuantity,
  incrementQuantity,
} from "../../../redux/cart";

const Cartshop = () => {
  const dispatch = useDispatch();

  const cartshopping = useSelector((state) => state.cart.cart);

  const getToal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cartshopping.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <div className='flex justify-evenly mt-12 mb-64'>
      <div className='ghang bg-zinc-200 rounded-xl' style={{ width: "60%" }}>
        <h1 className='px-10 py-2 border-0 border-b border-black border-solid font-sans'>
          Giỏ hàng
        </h1>
        <div className='px-7 pb-3'>
          {cartshopping.map((books) => {
            return (
              <div
                className='flex items-center justify-between my-3 font-sans'
                key={books.id}
                quantity={books.quantity}
              >
                <img src={books.image} alt='' style={{ width: "57px" }} />
                <Link
                  to={`/sach/${books.id}`}
                  className='text-xl font-semibold font-sans text-black'
                >
                  {books.name}
                </Link>
                <div className=''>
                  <Button
                    className='bg-red-600 text-white'
                    onClick={() => dispatch(dectrementQuantity(books.id))}
                  >
                    -
                  </Button>
                  <span className='mx-3 font-normal'>{books.quantity}</span>
                  <Button
                    className='bg-blue-600 text-white'
                    onClick={() => dispatch(incrementQuantity(books.id))}
                  >
                    +
                  </Button>
                </div>
                <div className=''>
                  <p className='text-lg font-sans font-medium'>
                    {books.price}đ
                  </p>
                </div>
                <div>
                  <Button
                    className='bg-red-600'
                    icon={<CloseOutlined className='text-white' />}
                    onClick={() => dispatch(removetoCart(books.id))}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className='tong bg-zinc-200 rounded-xl '
        style={{ width: "30%", height: "207px" }}
      >
        <h1 className='px-10 py-2 border-0 border-b border-black border-solid font-sans'>
          Tổng
        </h1>
        <div className='px-7 '>
          <h2 className='font-normal font-sans'>
            Số lượng: {getToal().totalQuantity}
          </h2>
          <h2 className='font-normal font-sans'>
            Tổng tiền: {getToal().totalPrice} đ
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Cartshop;
