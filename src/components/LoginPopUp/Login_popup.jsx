import React, { useState, useContext, useRef } from "react";
import * as Components from "./login_style";
import { useFirestore } from "../../context/firestoreContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login_popup = ({ closePopup, initialSignIn }) => {
  const [signIn, toggle] = useState(initialSignIn);
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",   
    regNo: "",    
    isVITStudent: false, 
  });

  const { registerUser, loginUser } = useFirestore();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onCheckboxChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      isVITStudent: event.target.checked, 
      regNo: event.target.checked ? prevData.regNo : "",
    }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      await loginUser(data.email, data.password);
      toast.success("Successfully Logged In");
      handleClose();
    } catch (error) {
      console.error("Error logging in", error);
      toast.error("Failed to log in. Please check your credentials.");
    }
  };

  const onSignup = async (event) => {
    event.preventDefault();
    try {
      console.log('Data:', data);
      const additionalData = {
        name: data.name,
        phone: data.phone,
        regNo: data.isVITStudent ? data.regNo : "",
        isVITStudent: data.isVITStudent,
      };

      await registerUser(data.email, data.password, additionalData);
      toast.success("Successfully Signed Up");
      handleClose();
    } catch (error) {
      console.error("Error signing up", error);
      // Check if user already exists
      if (error.code === "auth/email-already-in-use") {
        toast.error("User already exists. Please log in.");
      } else {
        toast.error("Failed to sign up. Please try again.");
      }
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closePopup();
    }, 200);
  };

  return (
    <div className="fixed top-16 left-0 w-full h-full flex justify-center items-center max-xl:w-full z-[100]">
      <div className="bg-none w-full h-full rounded-lg">
        <ToastContainer />
        <Components.PageWrapper>
          <Components.Container ref={containerRef} $isClosing={isClosing}>
            <Components.CloseButton onClick={handleClose} $signinIn={signIn}>
              X
            </Components.CloseButton>

            <Components.SignUpContainer $signinIn={signIn}>
              <Components.Form>
                <Components.Title1>Create Account</Components.Title1>
                <Components.Input
                  name="name"
                  onChange={onChangeHandler}
                  value={data.name}
                  type="text"
                  placeholder="Name"
                />
                <Components.Input
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  type="email"
                  placeholder="Email"
                />
                <Components.Input
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                  type="password"
                  placeholder="Password"
                />
                <Components.Input
                  name="phone"
                  onChange={onChangeHandler}
                  value={data.phone}
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
                <div>
                  <input
                    type="checkbox"
                    checked={data.isVITStudent}
                    onChange={onCheckboxChange}
                  />
                  <label className="text-black">Are you a VIT student?</label>
                </div>
                {data.isVITStudent && (
                  <Components.Input
                    name="regNo"
                    onChange={onChangeHandler}
                    value={data.regNo}
                    type="text"
                    placeholder="Registration Number"
                    required={data.isVITStudent}
                  />
                )}
                
                <Components.Anchor2 onClick={() => toggle(true)}>
                  Already Have An Account?
                </Components.Anchor2>
                <Components.Button type="submit" onClick={onSignup}>
                  Sign Up
                </Components.Button>
              </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer $signinIn={signIn}>
              <Components.Form>
                <Components.Title1>Log in</Components.Title1>
                <Components.Input
                  name="email"
                  onChange={onChangeHandler}
                  value={data.email}
                  type="email"
                  placeholder="Email"
                />
                <Components.Input
                  name="password"
                  onChange={onChangeHandler}
                  value={data.password}
                  type="password"
                  placeholder="Password"
                />
                <Components.Anchor href="#">
                  Forgot your password?
                </Components.Anchor>
                <Components.Anchor2 onClick={() => toggle(false)}>
                  Don't Have An Account?
                </Components.Anchor2>
                <Components.Button onClick={onLogin}>Log In</Components.Button>
              </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer $signinIn={signIn}>
              <Components.Overlay $signinIn={signIn}>
                <Components.LeftOverlayPanel $signinIn={signIn}>
                  <Components.Title2>Welcome Back!</Components.Title2>
                  <Components.Paragraph>
                    Already have an account?
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(true)}>
                    Log in
                  </Components.GhostButton>
                </Components.LeftOverlayPanel>

                <Components.RightOverlayPanel $signinIn={signIn}>
                  <Components.Title2>Hello There!</Components.Title2>
                  <Components.Paragraph>
                    Begin your journey with Android Club
                  </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                    Sign Up
                  </Components.GhostButton>
                </Components.RightOverlayPanel>
              </Components.Overlay>
            </Components.OverlayContainer>
          </Components.Container>
        </Components.PageWrapper>
      </div>
    </div>
  );
};

export default Login_popup;
