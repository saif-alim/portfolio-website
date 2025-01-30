import { Section, Subtitle, Heading } from "../../components/Components";
import styled from "styled-components";

export const Subsection = styled(Section)`
  display: flex;
  flex-direction: column;
  max-width: 50vw;
  min-width: 575px;
  padding: 2.5vw;
`;

export const SubsectionTitle = styled(Subtitle)`
  color: #949494;
  height: 50px;
`;

export const SubsectionContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResumeContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5%;
  height: 50px;
  border: 1px solid #fff;
  justify-content: space-between;
`;

export const Spacer = styled.div`
  height: 30px;
`;

const CompanyName = styled(Heading)`
  margin-top: 0;
  font-size: 1rem;
  text-transform: uppercase;
`;

const JobTitle = styled(Subtitle)`
  font-size: 0.8rem;
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

export const ResumeSection = ({ title, jobTitle, startDate, endDate }) => {
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
