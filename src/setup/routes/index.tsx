import { AboutUs, ContactUs, Home, SingleVehicle, Vehicle } from '@/pages';

const routesData = [
  {
    id: 0,
    path: '/',
    element: <Home />,
  },
  {
    id: 1,
    path: '/vehicle/:id',
    element: <SingleVehicle />,
  },
  {
    id: 2,
    path: '/vehicle',
    element: <Vehicle />,
  },
  {
    id: 3,
    path: '/about-us',
    element: <AboutUs systemName={''} company={''} description={''} />,
  },
  {
    id: 2,
    path: '/contact-us',
    element: <ContactUs />,
  },
];

export default routesData;
