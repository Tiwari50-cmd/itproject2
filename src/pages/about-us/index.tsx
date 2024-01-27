// AboutUs.tsx

import React from 'react';

interface AboutUsProps {
  systemName: string;
  company: string;
  description: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ }) => {
  return (
    <div
        className="bg-no-repeat bg-cover relative h-screen bg-fixed"
        style={{
          backgroundImage: `url(${'https://cdn.pixabay.com/photo/2019/09/19/07/26/extreme-4488462_1280.jpg'})`,
        }}
      >
        <div className="absolute center">
          <h1 className="text-5xl text-white font-bold text-center">
            Automobile Management System
          </h1>
          <p className="text-white text-center mt-5">
            We provide the best vehicle buying and selling in Nepal
          </p>
        </div>
      </div>
  );
};

export default AboutUs;
