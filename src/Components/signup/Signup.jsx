import React, { useState } from "react";
import "./signup.scss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { GoogleLogin } from "@react-oauth/google";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorpage, setErrorpage] = useState("");
  const navigate = useNavigate("");

  const handleRegistration = async (e) => {
    if (!username) {
      setErrorpage(" username is required");
      return;
    } else if (!password) {
      setErrorpage("password is required");
      return;
    }
    // Send a POST request to your backend API to handle user registration
    const data = { username, password };
    const response = await axios
      .post("http://localhost:7900/api/data", data)
      .then((response) => {
        if (response.status === 200) {
          console.log("Registration successful");
          alert("Registration successful");
          navigate("/login");
        } else {
          console.error("Registration failed");
        }
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        setError(error);
      });
  };
  return (
    <>
      <section class="create-account mt-56  flex items-center justify-center">
        <div class="main-account flex items-center justify-center flex-col">
          <div class="creat">Create your account</div>
          <div class="input-section pt-10 flex flex-col items-center justify-center">
            <div>
              <div class="span">Email</div>
              <div class="input-field">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            <div class="mt-2">
              <div class="span">Password</div>
              <div class="input-field">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  minlength="8"
                  placeholder="Create Your Password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="error-message text-[red]">
                {/* {error.response.data.message} */}
              </div>
            )}

            {errorpage ? (
              <div className="error-message text-[red]">{errorpage}</div>
            ) : (
              ""
            )}

            <div class="create-button pt-8 ">
              <button onClick={handleRegistration}>Create Account</button>
              <p class="alraeady mt-4 flex justify-center">
                Already have an account?
                <Link to={"/login"}>
                  <span>Login</span>
                </Link>
              </p>
            </div>

            <div class="flex py-7 horizontal">
              {/* <!-- <img src="./assets/Frame 1000002212.svg"
                        alt=""> --> */}
            </div>
          </div>

          <div class="google-button  flex items-center justify-center flex-col ">
            {/* <button class="google flex items-center justify-start">
              <div class="google-bg">
              </div>
              <span class="ml">Continue with Google</span>
            </button> */}

            {/* <GoogleLogin
              class="google-button flex items-center justify-center flex-col"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                const user = {
                  id: credentialResponse.getBasicProfile().getId(),
                  name: credentialResponse.getBasicProfile().getName(),
                  email: credentialResponse.getBasicProfile().getEmail(),
                  // Add more properties as needed
                };

                // sendUserDataToServer(user);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            /> */}
            {/* <button class="google flex items-center justify-start mt-3">
              <div class="apple-bg">
            
              </div>
              <span class="ml">Continue with Apple</span>
            </button> */}

            <div className="w-[330px] max-sm:w-full h-[51px] pl-[20.25px] pr-[14.75px] py-[9.75px] bg-white rounded-md border border-black border-opacity-50 justify-start items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-[19.50px] inline-flex">
                <div class="google-bg">
                  {/* <!-- <img src="./assets/google.svg"alt=""> --> */}
                </div>
                <div className="text-zinc-600 text-base font-normal font-['poppins'] leading-normal">
                  Continue with Google
                </div>
              </div>
            </div>
            {/* Continue with Google */}
            {/* </span>
            </button> */}
            {/* <button class="google flex items-center justify-start mt-3">
              <div class="apple-bg">
                
              </div>
              <span class="ml-">Sign in with Apple</span>
            </button> */}

            <div className="w-[330px] max-sm:w-full h-[51px] mt-5 pl-[20.25px] pr-[10.75px] py-[9.75px] bg-white rounded-md border border-black border-opacity-50 justify-start items-center inline-flex">
              <div className="self-stretch justify-start items-center gap-[19.50px] inline-flex">
                <div class="apple-bg">
                  {/* <!-- <img src="./assets/google.svg"alt=""> --> */}
                </div>
                <div className="text-zinc-600 text-base font-normal font-['poppins'] leading-normal">
                  Continue with Apple
                </div>
              </div>
            </div>
          </div>

          <div class=" eclips pt-16">
            <img src="./assets/Ellipse 2471.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
