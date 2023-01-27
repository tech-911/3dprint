import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="flex flex-col justify-between h-full about_wrapper">
      <div className="border-b-2 border-b-[#002956] flex flex-col items-center py-4">
        <p className="text-[22px] font-bold text-[white] text-center px-10">
          A Remote Control and Monitoring System for Fused Deposition 3D
          Printers
        </p>
        {/* <p className="text-[20px] font-semibold text-[white]">(IS4RM)</p> */}
      </div>
      <div className="bg-[white] rounded-[8px] py-6 px-8 shadow-lg w-[90%] self-center about_resContent overflow-y-hidden h-[600px]">
        <h1 className="border-b-2 border-b-[black] w-fit text-[15px] font-bold mb-4 mt-4 text-[black]">
          Abstract:
        </h1>
        <div className="h-[80%] about_restext mb-12">
          <p className="text-[15px] text-justify px-2">
            3D printing, also known as additive manufacturing, is a process of
            creating three-dimensional solid objects from a digital file. It
            allows for the production of customized products quickly and
            efficiently and is used in a variety of industries, including
            aerospace, medical, and industrial manufacturing. However, the
            process requires initial settings and constant monitoring, which can
            be time-consuming. The aim of this project is to design and develop
            a smart monitoring and control system for Fused Deposition Modeling
            (FDM) 3D printers. The system will include a monitoring device and a
            web-based platform for real-time monitoring and control. The project
            will also involve the testing and evaluation of the system's
            performance. The successful design of the system will improve the
            efficiency and ease of use of the 3D printing process, particularly
            in industrial environments where models are printed in mass and in
            larger sizes. The scope of the project includes the design,
            construction, and programming of a prototype monitoring system for
            FDM 3D printers. It will also include a user-access cloud server or
            web page for remote control and monitoring.
          </p>
        </div>
      </div>
      <div className="text-center w-full bg-[#01336A] pt-6 pb-6 flex flex-row items-center justify-center border-2 border-[#034890] text-[#b1b1b1]">
        © Designed by Knimi Bakna Musa
      </div>
    </div>
  );
};

export default About;
