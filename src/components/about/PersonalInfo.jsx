import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Benjamin" },
  { meta: "last name", metaInfo: "Savage" },
  { meta: "Age", metaInfo: "37 Years" },
  { meta: "Nationality", metaInfo: "American" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Olympia,WA" },
  { meta: "phone", metaInfo: "+3608010709" },
  { meta: "Email", metaInfo: "bensavage100@gmail.com" },
  { meta: "Twitch", metaInfo: " Savagescoles" },
  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
