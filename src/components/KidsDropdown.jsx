import { useRoomContext } from '../context/RoomContext';
import { BsChevronDown } from 'react-icons/bs';
import { kidsList } from '../constants/data';
import { Menu } from '@headlessui/react';


const KidsDropdown = () => {

  const { kids, setKids } = useRoomContext();


  return (
    <Menu as='div' className='w-full h-full bg-white relative'>


      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {kids === '0 Kid' ? 'No Kid' : kids}
        <BsChevronDown className='text-base text-accent-hover' />
      </Menu.Button>


      <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
        {
          kidsList.map(({ name }, idx) =>
            <Menu.Item
              as='li'
              key={idx}
              onClick={() => setKids(name)}
              className='border-b last-of-type:border-b-0 h-10 hover:bg-accent hover:text-white w-full flex items-center justify-center cursor-pointer'
            >
              {name}
            </Menu.Item>
          )
        }
      </Menu.Items>


    </Menu>
  );
};

export default KidsDropdown;
