import { Section } from "../../components/Components";
import {
  Subsection,
  SubsectionContent,
  SubsectionTitle,
  ResumeSection,
} from "./ExperienceComponents";

const Experience = () => {
  return (
    <Section>
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
    </Section>
  );
};

export default Experience;
