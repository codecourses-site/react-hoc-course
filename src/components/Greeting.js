import React from "react";

const Greeting = ({ toggleModal }) => {
  return (
    <div className="greeting">
      <div className="greeting__content">
        <div className="greeting__container">
          <div className="greeting__title">Code Courses</div>
          <div className="greeting__close">
            <img
              alt="close"
              onClick={() => toggleModal(false)}
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
            />
          </div>
        </div>
        <div className="greeting__subtitle"></div>
        <div className="greeting__body">
          <a href="https://codecourses.site">Code Courses</a> is a website where
          people learn about coding and different technologies. To help people
          learn, all of the courses are <b>FREE</b> and <b>DETAIL</b>.
          Hopefully, after following the content on Code Courses, you will find
          your dream jobs, and build any applications that you want.
        </div>
      </div>
    </div>
  );
};

export default Greeting;
