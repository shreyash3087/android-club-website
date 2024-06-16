import React, { useState, useEffect, useContext } from "react";
import * as Components from "./login_style";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const Login_popup = ({ closePopup, initialSignIn }) => {
  const [signIn, toggle] = useState(initialSignIn);
  const [isClosing, setIsClosing] = useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const { url, setToken } = useContext(StoreContext);

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;

    newUrl += "/api/user/login";

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log("Successfully Loged In");
      handleClose();
    } else {
      alert(response.data.message);
    }
  };

  const onSignup = async (event) => {
    event.preventDefault();

    let newUrl = url;
    newUrl += "/api/user/register";

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log("Successfully Signed Up");
      handleClose();
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    toggle(initialSignIn);
  }, [initialSignIn]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closePopup();
    }, 200);
  };

  return (
    <div className="fixed top-16 left-0 w-full h-full flex justify-center items-center max-xl:w-full">
      <div className="bg-none w-full h-full rounded-lg">
        <Components.PageWrapper>
          <Components.Container $isClosing={isClosing}>
            <Components.CloseButton onClick={handleClose} signIn={signIn}>
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
                  Dont Have An Account?
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
