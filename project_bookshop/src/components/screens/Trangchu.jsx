import Sider from "./Slider";
import Sach from "./Sach/Sach";
import dtblog from "../../data_blog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";

import Slider from "react-slick";

function Trangchu({ handleClick }) {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='main-srceen'>
      <div className=''>
        <Sider />
      </div>
      <div className='bg-gray-200'>
        <div className='text-center font-medium text-5xl p-11 font-sans'>
          Sách mới xuất bản
        </div>
        <div className='sachs flex flex-wrap justify-center container py-8 w-5/6'>
          <Sach />
        </div>
      </div>

      <div className='bg-cyan-100'>
        <div className='text-center text-5xl font-medium p-11 font-sans'>
          Blog
        </div>
        <div className='App container w-10/12'>
          <Slider {...settings} className='py-10 container'>
            {dtblog.listblog.map((blog) => (
              <div
                className='card bg-slate-50 overflow-hidden rounded-2xl'
                key={blog.id}
              >
                <div className='card-top'>
                  <img src={blog.img} alt='' />
                </div>
                <div className='card-body p-5'>
                  <h1>{blog.blogname}</h1>
                  <div className='flex'>
                    <h3 className='mr-12'>
                      {<UserOutlined />}
                      {blog.nviet}
                    </h3>
                    <h3>
                      {<CalendarOutlined />}
                      {blog.date}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default Trangchu;
