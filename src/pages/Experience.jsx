import React from "react";
import styled from "styled-components";
import {
  Section,
  SectionTitle,
  PrimaryTextStyle,
  SecondaryTextStyle,
} from "../components/Components";

const Experience = () => {
  return (
    <Section style={{ gap: "3%", flexDirection: "column" }}>
      <SectionTitle>EXPERIENCE</SectionTitle>
      <ExperienceWrapper>
        <ResumeSection
          title="Vypr Validation Ltd"
          jobTitle="Android Developer"
          startDate="Jan 2024"
          endDate="Present"
          description={[
            <>
              Developed and maintained the <Highlight>Android</Highlight>{" "}
              application.
            </>,
            <>
              Assisted in maintaining the <Highlight>iOS</Highlight>{" "}
              application.
            </>,
            <>
              Contributed to the development of a{" "}
              <Highlight>TypeScript</Highlight> based web application.
            </>,
            <>
              Assisted in maintaining and debugging the company's{" "}
              <Highlight>Ruby on Rails</Highlight> application.
            </>,
          ]}
        />
        <ResumeSection
          title="Cub Magazine"
          jobTitle="Head of Design"
          startDate="Oct 2021"
          endDate="Mar 2022"
          alignRight={true}
          description={[
            <>
              Spearheaded design process and guided team to align with required
              specifications, resulting in a cohesive final design.
            </>,
            <>
              Managed and inspired team, pushing quality of design work and
              helping drive impact through teams.
            </>,
            <>
              Engaged with the team to brainstorm and create a visually striking
              end result.
            </>,
          ]}
        />
      </ExperienceWrapper>
      <div style={{ height: "150px" }} />
      <SectionTitle>EDUCATION</SectionTitle>
      <ExperienceWrapper>
        <ResumeSection
          title="Queen Mary University of London"
          jobTitle="BSc Computer Science"
          startDate="May 2024"
          description={[
            <>
              Learnt about the project development lifecycle and different
              methodologies
            </>,
            <>Acquired skills in Java, Python, JavaScript, C#, PHP, and SQL</>,
            <>
              Developed web applications, cross-platform mobile applications,
              video games
            </>,
          ]}
        />
        <ResumeSection
          title="A-Levels"
          jobTitle="The Judd School"
          startDate="May 2020"
          alignRight={true}
          description={[
            <>A - Mathematics</>,
            <>A - Economics</>,
            <>A - Art and Design</>,
          ]}
        />
      </ExperienceWrapper>
      <div style={{ height: "150px" }} />
    </Section>
  );
};

export default Experience;

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Highlight = styled.span`
  font-weight: 500;
  background-image: linear-gradient(
    to bottom right,
    rgb(189, 40, 199),
    rgb(216, 89, 255)
  );
  color: transparent;
  background-clip: text;
`;

const ResumeSection = ({
  title,
  jobTitle,
  startDate,
  endDate,
  description, // Can be array of strings for bullets or JSX elements for inline text
  isBulleted = false, // Toggle for bullet points
  alignRight,
}) => {
  return (
    <ResumeContent
      style={{ alignSelf: alignRight ? "flex-end" : "flex-start" }}
    >
      <ResumeSectionHeader>
        <div>
          <CompanyName>{title}</CompanyName>
          <JobTitle>{jobTitle}</JobTitle>
        </div>
        <DatesContainer>
          {startDate}
          <br />
          {endDate}
        </DatesContainer>
      </ResumeSectionHeader>
      <ResumePoints>
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ResumePoints>
    </ResumeContent>
  );
};

const ResumeContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 60vw;
  background-image: var(--background-gradient);
  border-radius: 15px;
  color: white;
  &:hover {
    transform: translateY(-3px);
    transition: transform ease-in-out 0.2s;
  }
  box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 30px;
  @media (max-width: 768px) {
    width: auto;
    max-width: 95vw;
  }
`;

const ResumeSectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const CompanyName = styled(PrimaryTextStyle)`
  color: var(--color-foreground);
  margin: 0;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 1;
`;

const JobTitle = styled(SecondaryTextStyle)`
  font-size: 1rem;
  line-height: 1;
  margin-top: 5px;
  color: var(--grey-dark-theme);
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const DatesContainer = styled.div`
  font-size: 0.8rem;
  color: var(--grey-dark-theme);
  font-family: "Space Mono", monospace;
  text-align: right;
  min-width: 75px;
`;

const ResumePoints = styled.ul`
  margin: 0;
  padding: 10px 50px;
  font-family: "Space Mono", monospace;
  font-size: 0.9rem;
  color: var(--grey-dark-theme);
  line-height: 2;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
