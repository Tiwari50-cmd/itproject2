import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Card, Container } from '@/components';
import { useLocation } from 'react-router-dom';

interface IProps {}

const Vehicle: React.FC<IProps> = ({}) => {
  const { state } = useLocation();
  return (
    <section className="bg-light-grey min-h-screen bg-opacity-30">
      <Container>
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-semibold text-secondary">
            {state ? 'Bikes' : 'Cars'}
          </h4>
          <div className="bg-white px-3 flex items-center gap-4 rounded-md py-3">
            <BiSearch color="#0c2f54" size={20} />
            <input
              type="text"
              name=""
              id=""
              placeholder={`search ${state ? 'bikes' : 'cars'} here...`}
              className="appearance-none focus-within:outline-none focus:outline-none text-xs"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 my-10">
          {Array(10)
            .fill('')
            .map((_, idx) => (
              <Card key={idx} isSmall={false} />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default React.memo(Vehicle);
