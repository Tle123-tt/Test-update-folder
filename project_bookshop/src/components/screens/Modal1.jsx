import { Button, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

function Modal1({ setModal }) {
  return (
    <>
      <div className='backshadow flex justify-center fixed'>
        <div className='modal-search bg-slate-100 mt-24'>
          <div className='flex justify-end'>
            <Button
              className='btn-close text-white bg-red-600 absolute '
              onClick={() => setModal(false)}
              shape='cricle'
              icon={<CloseOutlined />}
            />
          </div>
          <p className='text-search order-last text-3xl font-semibold font-sans'>
            Tìm kiếm
          </p>
          <form action='' className='flex justify-center items-center m-10'>
            <Input className='w-5/6 mx-1' placeholder='Tìm kiếm' />
            <Button
              className='bg-blue-700 text-white'
              icon={<SearchOutlined />}
            />
          </form>
        </div>
      </div>
    </>
  );
}
export default Modal1;
