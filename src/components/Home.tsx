import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900 border-0">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-white text-center mb-3 font-bold">
                <small>Welcome to my personal website!</small>
              </div>
              <div className="text-white text-center mb-3">
                <small>Here you can find more about me, my work and how to contact me.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;