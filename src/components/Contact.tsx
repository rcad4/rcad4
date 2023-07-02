import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800">
      <div className="flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl">Contact Me</h1>
        <p className="mt-3 text-lg">You can reach me via email: your-email@example.com</p>
      </div>
    </div>
  );
};

export default Contact;