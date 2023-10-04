import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className='flex justify-center '>
      <div className='bg-gray-300 w-10/12 my-24 rounded-3xl'>
        <div className='text-center font-medium text-5xl p-11 font-sans'>
          Admin System
        </div>
        <div className='flex flex-wrap justify-center container py-8 w-10/12'>
          <div className='w-3/12 p-12 mx-12 my-6 bg-red-600 rounded-xl'>
            <Link to='/qlsp' className='text-lg font-sans text-white'>Quản lý sản phẩm</Link>
          </div>
          <div className='w-3/12 p-12 mx-12 my-6 bg-amber-600 rounded-xl'>
            <Link className='text-lg font-sans text-white'>Quản lý hóa đơn</Link>
          </div>
          <div className='w-3/12 p-12 mx-12 my-6 bg-lime-600 rounded-xl'>
            <Link className='text-lg font-sans text-white'>Quản lý người dùng</Link>
          </div>
          <div className='w-3/12 p-12 mx-12 my-6 bg-blue-600 rounded-xl'>
            <Link className='text-lg font-sans text-white'>Quản lý thành viên</Link>
          </div>
          <div className='w-3/12 p-12 mx-12 my-6 bg-fuchsia-600 rounded-xl'>
            <Link className='text-lg font-sans text-white'>Quản lý danh mục</Link>
          </div>
          <div className='w-3/12 p-12 mx-12 my-6 bg-yellow-400 rounded-xl'>
            <Link className='text-lg font-sans text-white'>Quản lý blog</Link>
          </div>  
        </div>
      </div>
    </div>
  );
};
export default Main;