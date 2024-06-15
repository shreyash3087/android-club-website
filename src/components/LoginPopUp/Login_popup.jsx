import React, { useState } from "react";
import * as Components from "./login_style";

const Login_popup = ({ closePopup }) => {
  const [signIn, toggle] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

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
            <Components.CloseButton onClick={handleClose}>X</Components.CloseButton>
            
            <Components.SignUpContainer $signinIn={signIn}>
              <Components.Form>
                <Components.Title1>Create Account</Components.Title1>
                <Components.Input type="text" placeholder="Name" />
                <Components.Input type="email" placeholder="Email" />
                <Components.Input type="password" placeholder="Password" />
                <Components.Anchor2 onClick={() => toggle(true)}>
                  Already Have An Account?
                </Components.Anchor2>
                <Components.Button>Sign Up</Components.Button>
              </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer $signinIn={signIn}>
              <Components.Form>
                <Components.Title1>Log in</Components.Title1>
                <Components.Input type="email" placeholder="Email" />
                <Components.Input type="password" placeholder="Password" />
                <Components.Anchor href="#">
                  Forgot your password?
                </Components.Anchor>
                <Components.Anchor2 onClick={() => toggle(false)}>
                  Dont Have An Account?
                </Components.Anchor2>
                <Components.Button>Log In</Components.Button>
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
