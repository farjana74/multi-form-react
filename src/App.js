
import { Route, Routes } from 'react-router';
import './App.css';
import FirstSignUpForm from './Pages/FirstSignUpForm/FirstSignUpForm';
import Form from './Pages/Form';
import FourthSignUpForm from './Pages/FourthSignUpForm/FourthSignUpForm';
import LoginForm from './Pages/LoginFrom/LoginForm';
import SecondSignUpForm from './Pages/SecondSignUpForm/SecondSignUpForm';
import ThirdSignUpForm from './Pages/ThirdSignUpForm/ThirdSignUpForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="loginForm" element={<LoginForm />} />
        <Route path="form" element={<Form />} />
        <Route path="form" element={<Form />} />
        <Route path="firstSignUpForm" element={<FirstSignUpForm />} />
        {/* <Route path="login-page" element={<SecondLandingPage />} /> */}
      </Routes>
      {/* <LoginForm></LoginForm> */}
      {/* <FirstSignUpForm></FirstSignUpForm> */}
      {/* <SecondSignUpForm></SecondSignUpForm> */}
      {/* <ThirdSignUpForm></ThirdSignUpForm> */}
      {/* <FourthSignUpForm></FourthSignUpForm> */}

    </div>
  );
}

export default App;
