import { Hero, Title } from "./components";

const ProfileCard = () => {
  return (
    <Hero>
      <div className="text-content">
        <Title>
          SAIF UL ALIM
          <br />
          AHMED
        </Title>
        <p>
          Software Engineer,
          <br />
          App Developer
        </p>
      </div>
      <div className="image-content">
        <img src="profile-illustration.png" alt="Profile Illustration" />
      </div>
    </Hero>
  );
};

export default ProfileCard;
