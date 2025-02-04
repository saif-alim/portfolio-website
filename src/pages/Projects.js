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
          imgSrc={"/assets/placeholders/thumbnail.png"}
          columnSpan={2}
        >
          Project 1
        </GridItem>
        <GridItem
          projectTitle={"Spendi"}
          projectHeadline={"Expense Tracker"}
          subtitle={"Kotlin, Android"}
          imgSrc={"/assets/placeholders/thumbnail.png"}
        >
          Project 2
        </GridItem>
        <GridItem
          projectTitle={"Project Name"}
          projectHeadline={"Project Header"}
          subtitle={"Technology"}
          imgSrc={"/assets/placeholders/thumbnail.png"}
        >
          Project 3
        </GridItem>
        <GridItem
          projectTitle={"Ocean Odyssey"}
          projectHeadline={"Platformer Game"}
          subtitle={"Unity, C#"}
          imgSrc={"/assets/placeholders/thumbnail.png"}
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const GridItemContainer = styled.div`
  border: 1px solid #fff;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #9a19e0;
  }
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
`;

const GridItemTitle = styled.p`
  margin-top: 5px;
  margin-bottom: 2px;
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
  max-width: 95%;
  padding-bottom: 10px;
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
      <div style={{ textAlign: "left", width: "95%" }}>
        <GridItemTitle>
          <b>{projectTitle}</b>: {projectHeadline}
        </GridItemTitle>
        <GridItemSubtitle>{subtitle}</GridItemSubtitle>
      </div>
      <GridItemImage src={imgSrc} alt="Project" />
    </GridItemContainer>
  );
};
