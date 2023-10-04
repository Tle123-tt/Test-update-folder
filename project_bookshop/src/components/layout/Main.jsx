import "../../css/main.css";
import { Routes, Route } from "react-router-dom";
import Trangchu from "../screens/Trangchu";
import Sanpham from "../screens/Sach/Sanpham";
import Blog from "../screens/Blog/Blog";
import Login from "../screens/Chucnang/Dangnhap";
import Cartshop from "../screens/Chucnang/Giohang";
import Dky from "../screens/Chucnang/Dangky";
import Admin from "../../admin/components/Admin";
import Quanlysp from "../../admin/components/screens/Qlsp";

const Main = () => {
  return (
    <div>
      <div className=''>
        <Routes>
          <Route path='/sach/:id' element={<Sanpham />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dky' element={<Dky/>}/>
          <Route path='/giohang' element={<Cartshop/>}/>
          <Route path='/' element={<Trangchu />} />

          <Route path='/admin' element={<Admin/>}/> 
          <Route path='/qlsp' element={<Quanlysp/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
