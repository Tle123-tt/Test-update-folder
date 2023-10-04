import { useParams } from "react-router-dom";
import "../../../css/sanpham.css";
import { Button, Badge, Rate, Modal, Input, Steps, Tabs } from "antd";
import { ShoppingCartOutlined, EditOutlined } from "@ant-design/icons";
import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../../redux/cart";

function Sanpham() {
  const param = useParams();

  const dispatch = useDispatch();

  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  const { TextArea } = Input;

  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  const steps1 = [
    {
      title: "Thông tin",
      content: (
        <>
          <p>Họ tên:</p>
          <Input className='bg-gray-200' placeholder='Nhập họ tên' />
          <p>Số điện thoại:</p>
          <Input className='bg-gray-200' placeholder='Nhập số điện thoại' />
          <p>Email:</p>
          <Input className='bg-gray-200' placeholder='Nhập email' />
          <p>Địa chỉ:</p>
          <Input className='bg-gray-200' placeholder='Nhập địa chỉ' />
          <p>Ghi chú: </p>
          <TextArea
            className='mb-7'
            showCount
            maxLength={100}
            onChange={onChange}
          />
        </>
      ),
    },
    {
      title: "Thanh toán",
      content: (
        <>
          <h1>Thanh toán</h1>
        </>
      ),
    },
    {
      title: "Hoàn tất",
      content: (
        <>
          <h1>Hoàn tất</h1>
        </>
      ),
    },
  ];

  const steps2 = [
    {
      title: "Thông tin",
      content: (
        <>
          <p>Họ tên:</p>
          <Input className='bg-gray-200' placeholder='Nhập họ tên' />
          <p>Số điện thoại:</p>
          <Input className='bg-gray-200' placeholder='Nhập số điện thoại' />
          <p>Email:</p>
          <Input className='bg-gray-200' placeholder='Nhập email' />
          <p>Ghi chú: </p>
          <TextArea
            className='mb-7'
            showCount
            maxLength={100}
            onChange={onChange}
          />
        </>
      ),
    },
    {
      title: "Thanh toán",
      content: (
        <>
          <h1>Thanh toán</h1>
        </>
      ),
    },
    {
      title: "Hoàn tất",
      content: (
        <>
          <h1>Hoàn tất</h1>
        </>
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const items1 = steps1.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const items2 = steps2.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const onTabs = (key) => {
    console.log(key);
  };

  const [count, setCount] = useState(0);

  const tabs1 = [
    {
      key: "1",
      label: "Sách cứng",
      children: (
        <>
          <div className='flex items-center justify-center my-6'>
            <Button
              className='bg-red-600 text-white font-semibold'
              onClick={() => setCount(count - 1)}
            >
              -
            </Button>
            <span className='mx-3 font-normal'>{count}</span>
            <Button
              className='bg-blue-600 text-white font-semibold'
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>

          <div className='flex justify-evenly'>
            <Button
              className='bt-dhang font-medium mb-4'
              onClick={() => dispatch(addtoCart(sach))}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
          <div className='flex justify-evenly'>
            <Button
              className='bt-dhang font-medium'
              icon={<ShoppingCartOutlined />}
              onClick={showModal1}
            >
              Mua
            </Button>
          </div>
        </>
      ),
    },
    {
      key: "2",
      label: "Sách mềm",
      children: (
        <>
          <div className='flex justify-evenly'>
            <Button className='bt-dthu font-medium mb-4'>Đọc thử</Button>
          </div>
          <div className='flex justify-evenly'>
            <Button
              className='bt-dhang font-medium mb-4'
              onClick={() => dispatch(addtoCart(sach))}
            >
              Thêm vào giỏ hàng
            </Button>
          </div>
          <div className='flex justify-evenly'>
            <Button
              className='bt-dhang font-medium'
              icon={<ShoppingCartOutlined />}
              onClick={showModal2}
            >
              Mua
            </Button>
          </div>
        </>
      ),
    },
  ];

  // console.log("dtaBook:", sach);

  const [sach, setDtSach] = useState({});
  console.log("param: ", param);

  useEffect(() => {
    const getSach = async () => {
      const sachData = await axios.get(`/api/book/spham/${param.id}`);
      // console.log("Book Data: ", sachData);
      setDtSach(sachData.data);
    };
    getSach();
  }, [param.id]);

  console.log(sach, "sach");

  return (
    <div>
      <div className='flex mx-16 my-10 p-5 justify-evenly '>
        <div className='mx-8'>
          <img src={sach.image} alt='sach' />
        </div>
        <div className='mx-8 '>
          <div>
            <h1>{sach.name}</h1>
          </div>
          <div className=' w-72 '>
            <h2 className='post-ctiet p-3'>Giá: {sach.price}đ</h2>
            <h3 className='post-ctiet p-3'>
              Tình trạng:{" "}
              {sach.soluong > 0 ? (
                <Badge className='bg-green-700 text-white p-3 rounded-full'>
                  Còn hàng
                </Badge>
              ) : (
                <Badge className='bg-red-700 text-white p-3 rounded-full'>
                  Hết hàng
                </Badge>
              )}
            </h3>
            <h3 className='post-ctiet p-3'>
              Rating: <Rate disabled value={sach.rating} />
            </h3>
            <h3 className='post-ctiet p-3'>Số trang: {sach.page}</h3>
            <h3 className='post-ctiet p-3'>Ngày xuất bản: {sach.date}</h3>
            <h3 className='post-ctiet p-3'>Nhà xuất bản: {sach.NXB}</h3>
          </div>

          <Tabs defaultActiveKey='1' items={tabs1} onChange={onTabs} />

          {/* Modal thanh toán */}
          <Modal
            title='Thanh toán'
            open={isModalOpen1}
            onOk={handleOk1}
            onCancel={handleCancel1}
            width={850}
            footer={[]}
          >
            <Steps current={current} items={items1}>
              <Steps.Step icon={<EditOutlined />} />
            </Steps>
            <div>{steps1[current].content}</div>
            <div>
              {current < steps1.length - 1 && (
                <Button
                  className='w-40 me-7 bg-sky-600 text-white'
                  onClick={() => next()}
                >
                  Next
                </Button>
              )}
              {current === steps1.length - 1 && (
                <Button
                  className='me-7 w-40 bg-red-600 text-white'
                  onClick={() =>
                    dispatch(
                      addtoCart(sach),
                      toast.success("🦄 Wow so easy!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      })
                    )
                  }
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button className='w-40 me-7' onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Modal>

          <Modal
            title='Thanh toán'
            open={isModalOpen2}
            onOk={handleOk2}
            onCancel={handleCancel2}
            width={850}
            footer={[]}
          >
            <Steps current={current} items={items2}>
              <Steps.Step icon={<EditOutlined />} />
            </Steps>
            <div>{steps2[current].content}</div>
            <div>
              {current < steps2.length - 1 && (
                <Button
                  className='w-40 me-7 bg-sky-600 text-white'
                  onClick={() => next()}
                >
                  Next
                </Button>
              )}
              {current === steps2.length - 1 && (
                <Button
                  className='me-7 w-40 bg-red-600 text-white'
                  onClick={() =>
                    dispatch(
                      addtoCart(sach),
                      toast.success("🦄 Wow so easy!", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      })
                    )
                  }
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button className='w-40 me-7' onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Modal>
        </div>
      </div>

      <div className='container'>
        <h1>Giới thiệu</h1>
      </div>
      <ToastContainer
        position='top-center'
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
    </div>
  );
}
export default Sanpham;
