import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [cardid, setCard] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', { cardid })
      .then(result => {
        navigate('/home');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="card">
              <strong>Card Id</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Card Id"
              autoComplete="off"
              name="cardid"
              className="form-control rounded-0"
              onChange={(e) => setCard(e.target.value)}
            />
          </div>
          <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
