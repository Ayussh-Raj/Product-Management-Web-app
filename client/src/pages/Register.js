import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/register', { email, password });
      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
};

export default Register;
