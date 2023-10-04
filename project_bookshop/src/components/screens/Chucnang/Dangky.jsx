import { Input, Button } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import InputForm from "../../../InputForm/InputForm";
import InputFormPass from "../../../InputForm/InputFormpass";

const Dky = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleOnchangeUsername = (value) => {
    setUsername(value);
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePhone = (value) => {
    setPhone(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSingIn = async (e) => {};

  return (
    <div className='flex justify-center'>
      <div className='bg-slate-300 w-6/12 my-24 px-10 py-5'>
        <h1 className=' text-black font-sans'>Đăng ký</h1>
        <form onSubmit={handleSubmit(onSingIn)}>
          <div>
            <p>Tên người dùng:</p>
          </div>
          <div>
            <Controller
              control={control}
              name='email'
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <InputForm
                  placeholder='Nhập tên người dùng'
                  value={username}
                  handleOnchange={handleOnchangeUsername}
                />
              )}
            />
            {errors.email && (
              <p className='text-red-600 font-sans'>Nhập tên là bắt buộc!</p>
            )}
          </div>
          <div>
            <p>Email:</p>
          </div>
          <div>
            <Controller
              control={control}
              name='email'
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <InputForm
                  type='email'
                  placeholder='Nhập email'
                  value={email}
                  handleOnchange={handleOnchangeEmail}
                />
              )}
            />
            {errors.email && (
              <p className='text-red-600 font-sans'>Nhập email là bắt buộc!</p>
            )}
          </div>
          <div>
            <p>Số điện thoại</p>
          </div>
          <div>
            <Controller
              control={control}
              name='email'
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <InputForm
                  // type='number'
                  placeholder='Nhập số điện thoại'
                  value={phone}
                  handleOnchange={handleOnchangePhone}
                />
              )}
            />
            {errors.email && (
              <p className='text-red-600 font-sans'>Nhập số điện thoại là bắt buộc!</p>
            )}
          </div>
          <div>
            <p>Nhập mật khẩu:</p>
          </div>
          <div>
            <Controller
              control={control}
              name='email'
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <InputFormPass
                  placeholder='Nhập mật khẩu'
                  value={password}
                  handleOnchange={handleOnchangePassword}
                />
              )}
            />
            {errors.email && (
              <p className='text-red-600 font-sans'>Nhập password là bắt buộc!</p>
            )}
          </div>
          <div className='py-5'>
            <Button
              htmlType='submit'
              className='bg-red-600 text-white w-44 h-12 font-sans'
            >
              Đăng ký
            </Button>
          </div>
        </form>
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
      <ToastContainer />
    </div>
  );
};
export default Dky;
