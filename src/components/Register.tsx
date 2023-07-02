import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../services/authService';

const Register: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(email, password);
      history.push('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 text-white p-10 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-10 text-center">Register</h2>
        {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-6 rounded-md bg-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-6 rounded-md bg-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;