import React from "react";
import profilePicture from "../../../static/assets/images/bio/selfie.jpeg";

export default function () {
  return (
    <div className="content-page-wrapper ">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Introducing a skilled Full Stack Developer with a strong focus on the
        MERN stack, where proficiency in ReactJS stands as a hallmark of
        expertise. I possesses a deep understanding of both front-end and
        back-end technologies, with an emphasis on creating dynamic and
        responsive user interfaces using ReactJS. With a proven track record of
        building web applications that seamlessly blend aesthetics and
        functionality. I am poised to drive innovation and excellence in the
        ever-evolving world of web development. Whether it's crafting
        captivating user experiences or architecting robust server-side
        solutions. I consider myself to be a catalyst for turning ambitious
        digital visions into reality.
      </div>
    </div>
  );
}
