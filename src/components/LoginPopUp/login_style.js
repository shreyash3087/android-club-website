import styled, { keyframes, css } from "styled-components";

const popIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const popOut = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: rgba(90, 90, 90, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 55%;
  max-width: 100%;
  min-height: 400px;
  animation: ${popIn} 0.2s ease-out;

  ${(props) =>
    props.$isClosing &&
    css`
      animation: ${popOut} 0.4s ease-out;
    `}
  @media (max-width: 720px) {
    width: 90%;
  }
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  cursor:pointer;
  ${(props) =>
    props.$signinIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null}
    @media (max-width: 1024px) {
    transform: translateX(100%);
    width: 100%;
    ${(props) =>
      props.$signinIn !== true
        ? `
      transform: translateX(0%);
      opacity: 1;
      z-index: 5;
    `
        : null}
  }
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  cursor:pointer;
  ${(props) =>
    props.$signinIn !== true ? `transform: translateX(100%);` : null}
  @media (max-width: 1024px) {
    width: 100%;
  }
  ${(props) =>
    props.$signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  max-height: 100%;
  height: 100%;
  text-align: center;
`;

export const Title1 = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #447962;
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const Title2 = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Input = styled.input`
  background-color: #eee;
  color: #447962;
  border: none;
  padding: 12px 15px;
  margin: 10px 0;
  width: 100%;
`;

export const Button = styled.button`
  border-radius: 20px;
  border: 1px solid #447962;
  background-color: #447962;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border-color: #ffffff;
  font-size: 1rem;
  color: ${({ signIn }) => (signIn ? 'white' : '#182b23')};
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 500;
  @media (max-width: 1024px) {
    color: #182b23;
  }
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  @media (max-width: 1024px) {
    margin:4px 0;
  }
`;
export const Anchor2 = styled.a`
  display:none;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  @media (max-width: 1024px) {
    margin:4px 0;
    display:block;
  }
`;

export const OverlayContainer = styled.div`
  position: absolute;
  margin-right: 10px;
  top: 0;
  left: 50%;
  width: 60%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.$signinIn !== true ? `transform: translateX(-100%);` : null}
  @media (max-width: 1024px) {
    display:none;
  }
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #182b23, #447962);
  background: linear-gradient(to right, #182b23, #447962);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) =>
    props.$signinIn !== true ? `transform: translateX(50%);` : null}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  text-align: center;
  margin-right: 50px;
  margin-left: 50px;
  top: 0;
  height: 100%;
  width: 44%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);

  ${(props) => (props.$signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;

  transform: translateX(0);
  ${(props) =>
    props.$signinIn !== true ? `transform: translateX(20%);` : null}
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

