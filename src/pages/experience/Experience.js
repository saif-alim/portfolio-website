import { Section, SectionTitle } from "../../components/Components";
import {
  Subsection,
  SubsectionContent,
  ResumeSection,
} from "./ExperienceComponents";

const Experience = () => {
  return (
    <Section>
      <Subsection>
        <SectionTitle>EXPERIENCE</SectionTitle>
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
        <SectionTitle>EDUCATION</SectionTitle>
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
    </Section>
  );
};

export default Experience;
