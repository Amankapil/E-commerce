import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";
// import Otp from "../../authComponent/Otp/Otp";

const Login = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorpage, setErrorpage] = useState("");
  const [email, setEmail] = useState("");
  const [errorpageemail, setErrorpageemail] = useState(false);
  const [inputerroremail, setInputerroremail] = useState(false);

  const onEmailClick = (e) => {
    if (email) {
      setErrorpageemail(true);
      setInputerroremail(false);
      return;
    }
    if (!email) {
      setInputerroremail(true);
      setErrorpageemail(false);
    }
    e.preventDefault();
  };

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (!username) {
      setErrorpage(" username is required");
      return;
    } else if (!password) {
      setErrorpage("password is required");
      return;
    }
    const data = { username, password };
    const response = await axios
      .post("http://localhost:7900/api/login", data)
      .then((response) => {
        if (response) {
          console.log("Login successful");
          alert("Login successful");
          console.log(response.data.token);
          console.log(response);
          localStorage.setItem("token", response.token);
          navigate("/");
          window.location.reload();
          // Store the token in local storage or a secure cookie
        } else {
          console.error("Login failed");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  // function sendUserDataToServer(user) {
  //   axios
  //     .post("http://localhost:5000/store_email")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.message);
  //     })
  //     .catch((error) => {
  //       console.error("Error storing user data:", error);
  //     });
  // }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      {currentStep === 1 && (
        <>
          <section class="create-account mt-40  flex items-center justify-center">
            <div class="main-account flex items-center justify-center flex-col">
              <div class="creat">Welcome back</div>

              <div class="input-section pt-10 flex flex-col items-center justify-center">
                <div>
                  <div class="span">Email</div>
                  <div class="input-field">
                    <input
                      type="email"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div class="mt-">
                  <div class="span">Password</div>
                  <div class="input-field">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      minlength="8"
                      required
                      placeholder="Create Your Password"
                    />
                  </div>
                </div>

                {errorpage ? (
                  <div className="error-message text-[red]">{errorpage}</div>
                ) : (
                  ""
                )}
                <div className="forgett-password flex justify-between items-center w-full pt-8">
                  <div className="left-box-tick flex items-center justify-center gap-2">
                    {/* <div className="bxo"></div>
                <span>Remember Me</span> */}
                    <input
                      type="checkbox"
                      id="vehicle1"
                      name="vehicle1"
                      value="Bike"
                    />
                    <label for="vehicle1">
                      <span className="remenber">Remember Me</span>
                    </label>
                  </div>
                  <div className="rightbox-tick cursor-pointer">
                    <span onClick={handleNextStep}>Forgot Password?</span>
                  </div>
                </div>
                <div class="create-button pt-2 ">
                  <button onClick={handleLogin}>Log In</button>

                  <p class="alraeady mt-4 flex justify-center">
                    Don’t have an account?
                    <Link to={"/signup"}>
                      <span>Sign up</span>
                    </Link>
                  </p>
                </div>
                <div class="flex py-7 horizontal">
                  {/* <!-- <img src="./assets/Frame 1000002212.svg"
                        alt=""> --> */}
                </div>
              </div>

              <div class="google-button flex items-center justify-center flex-col">
                {/* <button class="google flex items-center justify-start">
            
              <span class="ml-"> */}

                <button className="w-[330px] h-[51px] pl-[20.25px] pr-[14.75px] py-[9.75px] bg-white rounded-md border border-black border-opacity-50 justify-start items-center inline-flex max-sm:w-full">
                  <div className="self-stretch justify-start items-center gap-[19.50px] inline-flex">
                    <div class="google-bg">
                      {/* <!-- <img src="./assets/google.svg"alt=""> --> */}
                    </div>
                    <div className="text-zinc-600 text-base font-normal font-['poppins'] leading-normal">
                      Continue with Google
                    </div>
                  </div>
                </button>
                {/* Continue with Google */}
                {/* </span>
            </button> */}
                {/* <button class="google flex items-center justify-start mt-3">
              <div class="apple-bg">
                
              </div>
              <span class="ml-">Sign in with Apple</span>
            </button> */}

                <button className="w-[330px] max-sm:w-full h-[51px] mt-5 pl-[20.25px] pr-[10.75px] py-[9.75px] bg-white rounded-md border border-black border-opacity-50 justify-start items-center inline-flex">
                  <div className="self-stretch justify-start items-center gap-[19.50px] inline-flex">
                    <div class="apple-bg">
                      {/* <!-- <img src="./assets/google.svg"alt=""> --> */}
                    </div>
                    <div className="text-zinc-600 text-base font-normal font-['poppins'] leading-normal">
                      Continue with Apple
                    </div>
                  </div>
                </button>
              </div>
              <div class=" eclips pt-16">
                <img src="./assets/Ellipse 2471.svg" alt="" />
              </div>
            </div>
          </section>
        </>
      )}

      {currentStep === 2 && (
        <div className="save-sucess flex gap-20 items-center justify-center mt-28">
          <div className="username-profile flex flex-col gap-4 justify-start w-[309px]">
            {/* <label htmlFor="email">Email</label> */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              placeholder="enter email to send otp"
              className={inputerroremail ? "activeError" : ""}
            />
            <button
              onClick={onEmailClick}
              className="forgot-pass-email bg-[#3040D0]"
            >
              <span className="text-white">Request OTP</span>
            </button>
          </div>

          {errorpageemail ? (
            <>
              <div className="frame h-[44px] -mt-4">
                <div className="div">
                  {/* <img
                    className="material-symbols"
                    alt="Material symbols"
                    // src={rigth}
                  /> */}
                  <div className="div-wrapper">
                    <p className="text-wrapper">Your otp sent successfully</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}

          {inputerroremail ? (
            <>
              <div className="w-[214px] h-11 p-2.5 bg-orange-100 rounded-xl flex-col justify-start items-start gap-2 inline-flex -mt-4">
                <div className="justify-center items-center gap-[19px] inline-flex">
                  {/* <img
                    className="material-symbols"
                    alt="Material symbols"
                    // src={esc}
                  /> */}
                  <div className="text-orange-900 text-xs font-normal font-['poppins'] leading-[18px]">
                    please enter your Email
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
};

export default Login;
