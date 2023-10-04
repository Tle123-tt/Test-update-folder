import "../../css/header.css";
import { Dropdown, Space, Button } from "antd";
import CustomIcon from "../../common/CustomIcon";
import Modal1 from "../screens/Modal1";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Header = ({ size }) => {
  const navigate = useNavigate();

  const ex1 = [
    {
      label: <a href='/'> Sản phẩm</a>,
      key: "ex1-0",
    },
    {
      label: <a href='/'>Item2</a>,
      key: "ex1-1",
    },
    {
      label: <a href='/'>Item3</a>,
      key: "ex1-2",
    },
    {
      label: <a href='/'>Item4</a>,
      key: "ex1-3",
    },
  ];

  const ex2 = [
    {
      label: <a href='/'>I1</a>,
      key: "ex2-0",
    },
    {
      label: <a href='/'>I2</a>,
      key: "ex2-1",
    },
    {
      label: <a href='/'>I3</a>,
      key: "ex2-2",
    },
    {
      label: <a href='/'>I4</a>,
      key: "ex2-3",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    toast.success("Đăng xuất thành công!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const user = [
    {
      label: <Link to='/admin'>Admin</Link>,
      key: "user-0",
    },
    {
      label: (
        <Link to='#' onClick={handleLogout}>
          Đăng xuất
        </Link>
      ),
      key: "user-1",
    },
  ];

  const [modal1, setModal1] = useState(false);

  const cartItem = useSelector((state) => state.cart.cart);

  const isAuth = localStorage.getItem("isLogin");

  const getTotalQuantity = () => {
    let total = 0;
    cartItem.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div className='bg-red-300 header '>
      <div className=' flex h-14 p-4 justify-between items-center '>
        <div>
          <a
            href='/'
            className='logo text-amber-600 font-semibold text-5xl font-sans'
          >
            BookShop
          </a>
        </div>

        <div className='flex'>
          <div>
            <a
              href='/'
              className='m-3.5 text-2xl text-white font-sans font-medium hover:underline'
            >
              Trang chủ
            </a>
          </div>
          <div>
            {/* <a href="/" className="m-3.5 text-2xl text-white font-sans font-medium hover:underline">Danh mục</a> */}
            <Dropdown menu={{ items: ex1 }} trigger={["click"]}>
              <a
                href='/'
                onClick={(e) => e.preventDefault()}
                className='m-3.5 text-2xl text-white font-sans font-medium hover:underline'
              >
                <Space>
                  Danh mục
                  {<CustomIcon src='/icon/chevron-down-solid.svg' width={18} />}
                </Space>
              </a>
            </Dropdown>
          </div>
          <div>
            <a
              href='/'
              className='m-3.5 text-2xl text-white font-sans font-medium hover:underline'
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href='/'
              className='m-3.5 text-2xl text-white font-sans font-medium hover:underline'
            >
              Liên hệ
            </a>
          </div>
          <div>
            <Dropdown menu={{ items: ex2 }} trigger={["click"]}>
              <a
                href='/'
                onClick={(e) => e.preventDefault()}
                className='m-3.5 text-2xl text-white font-sans font-medium hover:underline'
              >
                <Space>
                  Khác
                  {<CustomIcon src='/icon/chevron-down-solid.svg' width={18} />}
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>

        <div className='flex'>
          <div className='m-3.5'>
            <Button
              className='bg-red-300 border-0'
              icon={
                <CustomIcon src='/icon/magnifying-glass-solid.svg' width={24} />
              }
              onClick={() => setModal1(true)}
            ></Button>
            {modal1 === true && <Modal1 setModal={setModal1} />}
          </div>

          {/* {isAuth ? (
            <div className='m-3.5'>
              <Dropdown
                menu={{
                  items: user,
                }}
                placement='bottom'
              >
                <Button
                  className='bg-red-300 border-0'
                  icon={<CustomIcon src='/icon/user-solid.svg' width={24} />}
                  type='link'
                  to='/login'
                ></Button>
              </Dropdown>
            </div>
          ) : (
            <div className='m-3.5'>
              <Link to='/login'>
                <Button
                  className='bg-red-300 border-0'
                  icon={<CustomIcon src='/icon/user-solid.svg' width={24} />}
                  type='link'
                  to='/login'
                ></Button>
              </Link>
            </div>
          )} */}

          <div className='m-3.5'>
            <Link to='/login'>
              <Button
                className='bg-red-300 border-0'
                icon={<CustomIcon src='/icon/user-solid.svg' width={24} />}
                type='link'
                to='/login'
              ></Button>
            </Link>
          </div>

          <div className='m-3.5'>
            <Link to='/giohang'>
              <Button
                className='bg-red-300 border-0 cart-icon'
                icon={
                  <CustomIcon src='/icon/cart-shopping-solid.svg' width={24} />
                }
              >
                <span className='cart-badge bg-red-600 text-white px-1.5 rounded-full '>
                  {getTotalQuantity() || 0}
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default Header;
