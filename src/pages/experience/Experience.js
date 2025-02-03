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
          title="A-Level Mathematics, Physics, Art and Design"
          jobTitle="The Judd School"
          startDate="May 2020"
        />
        <ResumeSection
          title="IGCSE Mathematics, Physics, Chemistry, Biology, English, French"
          jobTitle="Sadhbhavana World School"
          startDate="Jul 2017"
        />
      </Subsection>
    </Section>
  );
};

export default Experience;
