import { useParams } from "react-router-dom";
import dtblog from "../../../data_blog";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";

function Blog() {
  const param = useParams();
  const blog = dtblog.listblog.find((blog) => blog.id === Number(param.id));

  return (
    <div>
      <div className='container w-7/12'>
        <div className='mt-16'>
          <h1 className='text-5xl'>{blog.blogname}</h1>
        </div>
        <div className='flex justify-center'>
          <img src={blog.img} alt='' className='w-7/12 mt-10 mb-12' />
        </div>
        <div className='flex'>
          <h3 className='pr-40 pl-10 text-2xl'>
            {<UserOutlined />}
            {blog.nviet}
          </h3>
          <h3 className='text-2xl'>
            {<CalendarOutlined />}
            {blog.date}
          </h3>
        </div>
        <div className='my-6'>
          <p>{blog.slug}</p>
        </div>
      </div>
    </div>
  );
}
export default Blog;
