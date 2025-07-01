import React from 'react';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <h1>Welcome</h1>
      <RegisterForm />
      <hr />
      <LoginForm />
    </div>
  );
}

export default App;
