import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import Container from '../container';
import Modal from '../modal';
import { Login } from '@/pages';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from '@/redux/action/modal.action';
import { Link, NavLink } from 'react-router-dom';

interface IProps {
  setloginData: React.Dispatch<React.SetStateAction<{}>>;
  loginData: { user: { email: string } | null }; // user could be null initially
}

const navbarData = [
  {
    id: 0,
    title: 'Home',
    link: '/',
  },
  {
    id: 1,
    title: 'Bike',
    link: '/vehicle',
    isBike: true,
  },
  {
    id: 2,
    title: 'Car',
    link: '/vehicle',
  },
  {
    id: 3,
    title: 'About us',
    link: '/about-us',
  },
  {
    id: 4,
    title: 'Contact Us',
    link: '/contact-us',
  },
];

const Navbar: React.FC<IProps> = ({setloginData,loginData}) => {
  const modalData = useSelector((state: any) => state?.modalData);
  const dispatch: any = useDispatch();
  const handleModalOpen = () => {
    dispatch(modalAction(true));
  };
  const handleModalClose = () => {
    
    dispatch(modalAction(false));
  };
  console.log(loginData,"Login")

  return (
    <div className="bg-white py-2 px-4 sm:px-4 md:px-0 border-b border-light-grey">
      <Container notPadding>
        <div className="flex items-center justify-between text-primary">
          <Link to='/'>
          <img src="/logo.png" alt="logo" className="w-52 object-cover h-12" />
          </Link>
          <div className="flex items-center gap-10">
            {navbarData?.map((item) => (
              <NavLink
                to={item?.link}
                key={item?.id}
                className="text-sm"
                state={item?.isBike}
              >
                {item?.title}
              </NavLink>
            ))}
            <button
              className="flex items-center gap-2.5"
              onClick={handleModalOpen}
            >
              <FaUserAlt />
              <p className="font-medium"> 
              {
                loginData.user ? loginData.user.email : "Login / Signup"
              }
              </p>
            </button>
          </div>
        </div>
      </Container>
      {modalData?.isOpen && (
        <Modal modalClose={handleModalClose}>
          <Login
          setloginData={setloginData}
          handleModelClose={handleModalClose}

          />
        </Modal>
      )}
    </div>
  );
};

export default React.memo(Navbar);
