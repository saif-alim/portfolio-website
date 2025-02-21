import styled from "styled-components";
import {
  PrimaryTextStyle,
  Section,
  SectionTitle,
} from "../components/Components";

const Projects = () => {
  return (
    <Section style={{ flexDirection: "column" }}>
      <SectionTitle>PROJECTS</SectionTitle>
      <GridContainer>
        <GridItem
          projectTitle={"Hijra"}
          projectHeadline={"Prayer Room Locator"}
          subtitle={"Flutter, Firebase"}
          description={
            "A community based mobile app to help users find prayer rooms and ratings/details."
          }
          imgSrc={"/assets/projects/hijra-mockup-16x9.png"}
        >
          Project 1
        </GridItem>
        <GridItem
          projectTitle={"Spendi"}
          projectHeadline={"Expense Tracker"}
          subtitle={"Kotlin, Android"}
          description={
            "A simple expense tracker app to help users track daily expenses and manage budgets."
          }
          imgSrc={"/assets/projects/spendi-mockup-16x9.png"}
        >
          Project 2
        </GridItem>
        <GridItem
          projectTitle={"Alim's Portfolio"}
          projectHeadline={"Portfolio Website"}
          subtitle={"React, JavaScript"}
          description={
            "A personal portfolio website to showcase projects, skills and experience."
          }
          imgSrc={"/assets/projects/portfolio-website-mockup-16x9.jpeg"}
        >
          Project 3
        </GridItem>
        <GridItem
          projectTitle={"Ocean Odyssey"}
          projectHeadline={"Platformer Game"}
          subtitle={"Unity, C#"}
          description={
            "A 3D underwater platformer game with ocean based theming and multiple levels."
          }
          imgSrc={"/assets/projects/oceanody-gameplay-mockup-16x9.jpeg"}
        >
          Project 4
        </GridItem>
      </GridContainer>
      <div style={{ height: "150px" }} />
    </Section>
  );
};

export default Projects;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 50px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  @media (max-width: 1000px) {
    display: grid;
    gap: 30px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const GridItem = ({
  projectTitle,
  projectHeadline,
  subtitle,
  description,
  imgSrc,
}) => {
  return (
    <GridItemContainer>
      <GridItemTextContainer>
        <GridItemTitle>
          <b>{projectTitle}</b>: {projectHeadline}
        </GridItemTitle>
        <GridItemSubtitle>{subtitle}</GridItemSubtitle>
        <GridItemDescription>{description}</GridItemDescription>
      </GridItemTextContainer>
      <GridItemImage src={imgSrc} alt="Project" />
    </GridItemContainer>
  );
};

const GridItemContainer = styled.div`
  box-sizing: border-box;
  overflow: hidden;
  max-height: 620px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-image: var(--background-gradient);
  border-radius: 15px;
  color: white;
  &:hover {
    transform: translateY(-3px);
    transition: transform ease-in-out 0.2s;
    cursor: pointer;
  }
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 30px;
  @media (max-width: 768px) {
    width: auto;
    max-width: 95vw;
  }
`;

const GridItemTextContainer = styled.div`
  align-self: flex-start;
  padding: 15px;
`;

const GridItemTitle = styled(PrimaryTextStyle)`
  margin: 0;
  color: var(--color-foreground);
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;
`;

const GridItemSubtitle = styled.p`
  margin-top: 0px;
  font-size: 1rem;
  font-weight: 300;
  color: var(--grey-dark-theme);
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

const GridItemDescription = styled.p`
  font-size: 1rem;
  font-weight: 100;
  color: var(--grey-dark-theme);
  font-family: "Space Mono", serif;
  letter-spacing: 3px;
  padding: 0px 30px;
  @media (max-width: 768px) {
    padding: 0px 10px;
    font-size: 0.6rem;
  }
`;

const GridItemImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
