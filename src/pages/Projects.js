import styled from "styled-components";
import { Section, SectionTitle } from "../components/Components";

const Projects = () => {
  return (
    <Section style={{ flexDirection: "column" }}>
      <SectionTitle>PROJECTS</SectionTitle>
      <GridContainer>
        <GridItem
          projectTitle={"Hijra"}
          projectHeadline={"Prayer Room Locator"}
          subtitle={"Flutter, Firebase"}
          imgSrc={"/assets/projects/hijra-mockup.png"}
          columnSpan={2}
        >
          Project 1
        </GridItem>
        <GridItem
          projectTitle={"Spendi"}
          projectHeadline={"Expense Tracker"}
          subtitle={"Kotlin, Android"}
          imgSrc={"/assets/projects/spendi-mockup.png"}
        >
          Project 2
        </GridItem>
        <GridItem
          projectTitle={"Alim's Portfolio"}
          projectHeadline={"Portfolio Website"}
          subtitle={"React"}
          imgSrc={"/assets/projects/portfolio-website-mockup.jpeg"}
        >
          Project 3
        </GridItem>
        <GridItem
          projectTitle={"Ocean Odyssey"}
          projectHeadline={"Platformer Game"}
          subtitle={"Unity, C#"}
          imgSrc={"/assets/projects/oceanody-gameplay-mockup-cropped.jpeg"}
          columnSpan={2}
        >
          Project 4
        </GridItem>
      </GridContainer>
    </Section>
  );
};

export default Projects;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

const GridItemContainer = styled.div`
  border: 1px solid #fff;
  padding: 10px;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #9a19e0;
    cursor: pointer;
  }
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;

const GridItemTitle = styled.p`
  margin: 0;
  letter-spacing: 2px;
  font-family: "Quicksand", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;
  font-family: "Quicksand", sans-serif;
`;

const GridItemSubtitle = styled.p`
  margin-top: 0px;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Space Mono", serif;
  letter-spacing: 4px;
`;

const GridItemImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const GridItem = ({
  projectTitle,
  projectHeadline,
  columnSpan,
  rowSpan,
  subtitle,
  imgSrc,
}) => {
  return (
    <GridItemContainer
      style={{ gridColumn: `span ${columnSpan}`, gridRow: `span ${rowSpan}` }}
    >
      <div style={{ textAlign: "left", width: "100%" }}>
        <GridItemTitle>
          <b>{projectTitle}</b>: {projectHeadline}
        </GridItemTitle>
        <GridItemSubtitle>{subtitle}</GridItemSubtitle>
      </div>
      <GridItemImage src={imgSrc} alt="Project" />
    </GridItemContainer>
  );
};
