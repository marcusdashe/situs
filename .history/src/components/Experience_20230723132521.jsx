import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp; <a href={companyLink}>@{company}</a>
        </h3>
        <span>
          {time} | {address}
        </span>
        <p>{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-20">
      <h2 className="font-bold text-6xl mb-32 w-full text-center">
        {" "}
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <ul>
          <Details
            position="Software Engineer"
            companyLink="https://www.cstemp.org"
            company="C-STEMP LTD/Gtee"
            time="2020-Present"
            address="Elijah House, 3 Abbey Street, after NYSC Bus Stop, Along Kubwa Express Way. Bwari District, Abuja, Nigeria"
            work="
                      Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualizati
                      "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
