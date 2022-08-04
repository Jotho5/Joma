import React from 'react';
import LoginForm from '../components/LoginForm';
import Logo from '../assets/Logo.svg';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1280px] mx-auto z-0 my-32  md:my-5 px-4 md:px-2 md:py-5 md:mt-20">
        <div className="grid place-content-center">
          <div
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-once="true"
            className="grid justify-center place-items-center place-self-center"
          >
            <img src={Logo} className="w-[100px]" alt="Company Logo" />
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="500"
            className="text-[#FFF] text-center mb-8 mt-8"
          >
            <h1 className="text-5xl font-black pb-2">Welcome Back!</h1>
            <p className="text-sm leading-loose md:text-base ">
              Enter your details below to access our dashboard
            </p>
          </div>

          <div
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-once="true"
            data-aos-delay="1200"
            className=""
          >
            <LoginForm />
            <p className="text-white mt-4 font-light">
              Dont have an account?{' '}
              <a href="#">
                <span className="text-[#ffffff] font-medium">Get Started</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
