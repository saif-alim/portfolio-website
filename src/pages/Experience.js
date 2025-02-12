import styled from "styled-components";
import {
  Section,
  SectionTitle,
  Subtitle,
  PrimaryTextStyle,
} from "./../components/Components";

const Experience = () => {
  return (
    <Section>
      <Subsection>
        <SectionTitle>EXPERIENCE</SectionTitle>
        <SubsectionContent>
          <ResumeSection
            title="Vypr Validation Ltd"
            jobTitle="Android Developer"
            startDate="Jul 2024"
            endDate="Present"
          />
          <ResumeSection
            title="IEUK by Bright Network"
            jobTitle="Virtual Internship"
            startDate="Jun 2023"
          />
          <ResumeSection
            title="Ryman's Stationery"
            jobTitle="Sales Assistant"
            startDate="Nov 2023"
            endDate="Apr 2024"
          />
          <ResumeSection
            title="Cub Magazine"
            jobTitle="Head of Design"
            startDate="Oct 2021"
            endDate="Mar 2022"
          />
        </SubsectionContent>
      </Subsection>
      <Subsection>
        <SectionTitle>EDUCATION</SectionTitle>
        <ResumeSection
          title="BSc Computer Science"
          jobTitle="Queen Mary University of London"
          startDate="Jun 2024"
        />
        <ResumeSection
          title="Android App Development Masterclass using Kotlin"
          jobTitle="Udemy Course"
          startDate="Aug 2024"
        />
        <ResumeSection
          title="A-Level Mathematics, Physics, Art and Design"
          jobTitle="The Judd School"
          startDate="May 2020"
        />
        {/* <ResumeSection
          title="IGCSE Mathematics, Physics, Chemistry, Biology, English, French"
          jobTitle="Sadhbhavana World School"
          startDate="Jul 2017"
        /> */}
      </Subsection>
    </Section>
  );
};

export default Experience;

const SubsectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subsection = styled(Section)`
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  padding: 2.5vw;
  padding-left: 0;
  min-height: auto;
  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;

export const ResumeContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5%;
  height: 50px;
  border: var(--border-style) var(--color-foreground);
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: var(--color-accent);
  }
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 2.5%;
  }
`;

export const Spacer = styled.div`
  height: 30px;
`;

const CompanyName = styled(PrimaryTextStyle)`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 0;
  }
`;

const JobTitle = styled(Subtitle)`
  font-size: 0.8rem;
  @media (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const DatesContainer = styled.div`
  font-size: 0.7rem;
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  font-family: "Space Mono", serif;
  text-transform: uppercase;
  text-align: right;
`;

const ResumeSection = ({ title, jobTitle, startDate, endDate }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ResumeContent>
        <div>
          <CompanyName>{title}</CompanyName>
          <JobTitle>{jobTitle}</JobTitle>
        </div>
        <div>
          <DatesContainer>
            {startDate}
            <br />
            {endDate}
          </DatesContainer>
        </div>
      </ResumeContent>
      <Spacer />
    </div>
  );
};
