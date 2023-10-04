import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import {DeleteOutlined,EditOutlined} from '@ant-design/icons'

const Quanlysp = () => {
  const [dtabook, setDtaBook] = useState({});
  console.log("dtabook: ", dtabook);
  useEffect(() => {
    const getProduct = async () => {
      const productData = await axios.get("/api/book");
      console.log("Book data: ", productData);
      setDtaBook(productData.data);
    };
    getProduct();
  }, []);

  return (
    <div className='flex justify-center'>
      <div className='bg-gray-300 my-24 w-10/12'>
        <h1 className=' font-sans px-10 py-2 border-0 border-b border-black border-solid text-center'>
          Quản lý sản phẩm
        </h1>
        <div className='flex justify-center border-0 border-b border-black border-solid'>
          <Button className='m-8 w-96 h-16 bg-red-600 text-white text-xl font-sans font-semibold rounded-2xl'>
            Thêm sản phẩm
          </Button>
        </div>
        <div className='my-7'>
          <table className='qlsp-table container'>
            <thead className=''>
              <tr>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'>
                  Id
                </th>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'>
                  Tên sản phẩm
                </th>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'>
                  Giá
                </th>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'>
                  Số lượng
                </th>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'>
                  Số trang
                </th>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'>
                  Nhà xuất bản
                </th>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'>
                  Ngày thêm
                </th>
                <th className='border-0 border-b border-black border-solid py-8 font-sans text-xl'/>
              </tr>
            </thead>
            <tbody>
              {dtabook?.length > 0
                ? dtabook?.map((books) => (
                    <tr className="" key={books.id}>
                      <td className='text-center '>
                        <p className="font-sans">{books.id}</p>
                      </td>
                      <td className='flex items-center justify-center '>
                        <div>
                          <img src={books.image} alt='' className='w-20 ' />
                        </div>
                        <div>
                          <p className='ps-16 font-sans'>{books.name}</p>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div>
                          <p className="font-sans">{books.price} đ</p>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div>
                          <p className="font-sans">{books.soluong}</p>
                        </div>
                      </td>
                      <td className="text-center">
                        <div>
                          <p className="font-sans">{books.page}</p>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div>
                          <p className="font-sans">{books.NXB}</p>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div>
                          <p className="font-sans">NaN</p>
                        </div>
                      </td>
                      <td className="text-center ">
                        <div>
                          <Button className="me-4 bg-blue-600 text-white font-sans"><EditOutlined /></Button>
                          <Button className="bg-red-600 text-white font-sans"><DeleteOutlined /></Button>
                        </div>
                      </td>
                    </tr>
                  ))
                : null}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Quanlysp;
