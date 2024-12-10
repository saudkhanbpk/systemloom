import React from "react";
import CommonButton from "../common/Button";

const AppointmentSection = () => {

  const handleButtonClick = () => {
    window.open("https://calendly.com/contact-techcreator/30min", "_blank");
  };

  return (
    <div className="appointment-section">
      {/* Button for Appointment */}
      <CommonButton
        className="bg-[#9A00FF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm"
        title="Appointment"
        handleClick={handleButtonClick} 
      />
    </div>
  );
};

export default AppointmentSection;

































// import React from "react";
// import CommonButton from "../common/Button";

// const AppointmentSection = () => {

//   // Handle button click to open Calendly in a new tab
//   const handleButtonClick = () => {
//     window.open("https://calendly.com/contact-techcreator/30min", "_blank"); // Open in new tab
//   };

//   return (
//     <div className="appointment-section">
//       {/* Button for Appointment */}
//       <CommonButton
//         className="bg-[#9A00FF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm"
//         title="Appointment"
//         handleClick={handleButtonClick} // Open Calendly link in new tab
//       />

//       {/* Calendly Inline Widget */}
//       <div
//         className="calendly-inline-widget mt-6"
//         data-url="https://calendly.com/contact-techcreator/30min"
//         style={{ minWidth: "320px", height: "700px" }}
//       ></div>
      
//       <script
//         type="text/javascript"
//         src="https://assets.calendly.com/assets/external/widget.js"
//         async
//       ></script>

//       {/* Generic link for sharing with clients */}
//        <a href="https://calendly.com/contact-techcreator/30min" target="_blank" rel="noopener noreferrer">https://calendly.com/contact-techcreator/30min</a>
//     </div>
//   );
// };

// export default AppointmentSection;
