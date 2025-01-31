import styled from "styled-components";
import {
  Subsection,
  SubsectionContent,
  SubsectionTitle,
  ResumeSection,
} from "./experience/ExperienceComponents";

const ContactSection = styled.div`
  flex-grow: 1;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
`;

const Experience = () => {
  return (
    <ContactSection>
      <Subsection>
        <SubsectionTitle>EXPERIENCE</SubsectionTitle>
        <SubsectionContent>
          <ResumeSection
            title="Company Name"
            jobTitle="Job Title"
            startDate="Jan 2024"
            endDate="Present"
          />
          <ResumeSection
            title="Company Name"
            jobTitle="Job Title"
            startDate="Jan 2024"
            endDate="Present"
          />
          <ResumeSection
            title="Company Name"
            jobTitle="Job Title"
            startDate="Jan 2024"
            endDate="Present"
          />
        </SubsectionContent>
      </Subsection>
      <Subsection>
        <SubsectionTitle>EDUCATION</SubsectionTitle>
        <ResumeSection
          title="Company Name"
          jobTitle="Job Title"
          startDate="Jan 2024"
          endDate="Present"
        />
        <ResumeSection
          title="Company Name"
          jobTitle="Job Title"
          startDate="Jan 2024"
          endDate="Present"
        />
        <ResumeSection
          title="Company Name"
          jobTitle="Job Title"
          startDate="Jan 2024"
          endDate="Present"
        />
      </Subsection>
    </ContactSection>
  );
};

export default Experience;
