import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  background: #0d0d0d;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const NavItem = styled.span`
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  font-family: "Space Mono", serif;
  &:hover {
    color: #a244d5;
  }
`;

export const Section = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
`;

export const HomeSection = styled(Section)`
  padding-top: 125px;
  padding-left: 8vw;
  padding-right: 8vw;
`;

export const Title = styled.div`
  flex: 1;
`;

export const HeroImage = styled.div`
  img {
    max-width: 600px;
  }
`;

export const Heading = styled.h1`
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

const LogoContainer = styled.div`
  display: grid;
`;

export const LogoText = styled.h1`
  color: #ffffff;
  font-family: "Outfit", sans-serif;
  letter-spacing: 7px;
  font-size: 2.5rem;
  align-self: flex-start;
  padding: 0px 8px;
  margin: 0;
`;

const LogoHighlight = styled.div`
  grid-column: 1;
  grid-row: 1;
  background-color: #9a19e0;
  height: 35%;
  align-self: flex-end;
`;

const LogoTextContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  text-align: center;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoHighlight />
      <LogoTextContainer>
        <LogoText>saifalim_</LogoText>
      </LogoTextContainer>
    </LogoContainer>
  );
};
