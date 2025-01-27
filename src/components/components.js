import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  background: #0d0d0d;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

export const Logo = styled.h1`
  color: #ffffff;
  font-family: "Outfit", sans-serif;
  letter-spacing: 7px;
  font-size: 2.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const NavItem = styled.span`
  cursor: pointer;
  color: #fff;
  font-family: "Space Mono", serif;
  &:hover {
    color: #a244d5;
  }
`;

export const Hero = styled.div`
  display: flex;
  margin: 100px;
`;

export const Title = styled.div`
  width: 50%;
  flex: 1;
`;

export const HeroImage = styled.div`
  width: 50%;
  flex-shrink: 0; /* Prevents HeroImage from shrinking */
  img {
    max-width: 600px; /* Adjust the image size */
    border-radius: 10px; /* Optional: Add rounded corners */
  }
`;

export const Name = styled.h1`
  font-size: 5rem;
  margin-bottom: 5px;
  letter-spacing: 2px;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  margin-top: 0px;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const FeaturedIn = styled.div`
  margin-top: 20px;
  text-align: center;
  p {
    margin-bottom: 10px;
    font-size: 1rem;
  }
`;

export const Logos = styled.div`
  display: flex;
  gap: 20px;
  img {
    height: 30px;
    opacity: 0.7;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #3a3a3a, #0d0d0d);
  clip-path: circle(60% at center);
  z-index: 1;
`;
