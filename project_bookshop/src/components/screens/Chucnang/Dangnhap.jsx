import { Input, Button, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import InputForm from "../../../InputForm/InputForm";
import InputFormPass from "../../../InputForm/InputFormpass";

const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  // const isAUth = localStorage.getItem("isLogin");
  // if (isAUth) {
  //   navigate("/admin");
  // }

  // const {
  //   // handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  // const onSubmit = (data) => {

  //   // if (data.email === user.email && data.password === user.password) {

  //   //   localStorage.setItem("isLogin",true);

  //   //   toast.success("Đăng nhập thành công!", {
  //   //     position: "top-right",
  //   //     autoClose: 5000,
  //   //     hideProgressBar: false,
  //   //     closeOnClick: true,
  //   //     pauseOnHover: true,
  //   //     draggable: true,
  //   //     progress: undefined,
  //   //     theme: "light",
  //   //   });

  //   //   setTimeout(() => {
  //   //     navigate("/admin");
  //   //   }, 1000);

  //   // } else {

  //   //   toast.error("Đăng nhập ko thành công!", {
  //   //     position: "top-right",
  //   //     autoClose: 5000,
  //   //     hideProgressBar: false,
  //   //     closeOnClick: true,
  //   //     pauseOnHover: true,
  //   //     draggable: true,
  //   //     progress: undefined,
  //   //     theme: "light",
  //   //   });

  //   // }
  // };

  const onLogin= ()=>{
    console.log('data', email, password)
  }

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className='flex justify-center'>
      <div className='bg-slate-300 w-6/12 my-24 px-10 py-5'>
        <h1 className='text-black font-sans'>Đăng nhập</h1>
        {/* <form onSubmit={onLogin}> */}
          <div>
            <p className='font-sans text-xl'>Email:</p>
          </div>
          <div className='email'>
            {/* <Controller
              control={control}
              name='email'
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input
                  type='email'
                  {...field}
                  className='w-3/5'
                  placeholder='Nhập email'
                />
              )}
            />
            {errors.email && (
              <p className='text-red-600 font-sans'>Nhập email là bắt buộc!</p>
            )} */}
            <InputForm
                  type='email'
                  className='w-3/5'
                  placeholder='Nhập email'  
                  value={email}
                  handleOnchange={handleOnchangeEmail}               
            />
          </div>
          <div>
            <p className='font-sans text-xl'>Mật khẩu:</p>
          </div>
          <div className='password'>
            {/* <Controller
              control={control}
              name='password'
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input.Password
                  type='password'
                  className='w-3/5'
                  {...field}
                  placeholder='Nhập password'
                />
              )}
            />
            {errors.password && (
              <p className='text-red-600 font-sans'>
                Nhập password là bắt buộc!
              </p>
            )} */}
                <InputFormPass
                  type='password'
                  className='w-3/5'
                  placeholder='Nhập password'
                  value={password}
                  handleOnchange={handleOnchangePassword}
                />
          </div>
          <div className='pt-4'>
            <Checkbox onChange={onChange} className='font-sans text-base'>
              Nhớ mật khẩu
            </Checkbox>
          </div>
          <div className='py-3'>
            <Link className='font-sans text-xl'>Bạn quên mật khẩu</Link>
          </div>
          <Button
            htmlType='submit'
            className='bg-red-600 text-white w-44 h-12 font-sans'
            onClick={onLogin}
          >
            Đăng nhập
          </Button>
          <div className='pb-3'>
            <p className='font-sans text-xl'>
              Bạn chưa có tài khoản? Hãy đăng ký <Link to='/dky'>tại đây</Link>
            </p>
          </div>
        {/* </form> */}
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
export default Login;
