import React from 'react';

interface IProps {}

const ContactUs: React.FC<IProps> = ({}) => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover relative h-[40vh] bg-fixed"
        style={{
          backgroundImage: `url(${'https://cdn.pixabay.com/photo/2016/11/19/11/37/automobile-1838782_1280.jpg'})`,
        }}
      >
        <div className="absolute center">
          <h1 className="text-5xl text-white font-bold text-center">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ContactUs);
