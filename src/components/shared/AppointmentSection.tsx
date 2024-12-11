// import React from "react";
// import CommonButton from "../common/Button";

// const AppointmentSection = () => {

//   const handleButtonClick = () => {
//     window.open("https://calendly.com/contact-techcreator/30min", "_blank");
//   };

//   return (
//     <div className="appointment-section">
//       {/* Button for Appointment */}
//       <CommonButton
//         className="bg-[#7A4AFF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm"
//         title="Appointment"
//         handleClick={handleButtonClick}
//       />
//     </div>
//   );
// };

// export default AppointmentSection;

// first

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
//         className="bg-[#7A4AFF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm"
//         title="Book Appointment"
//         handleClick={handleButtonClick}
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

//     </div>
//   );
// };

// export default AppointmentSection;

// second
import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
    };
  }
}

// Define the CommonButton component
interface CommonButtonProps {
  className: string;
  title: React.ReactNode;
  handleClick: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  className,
  title,
  handleClick,
}) => (
  <button className={className} onClick={handleClick}>
    {title}
  </button>
);

const AppointmentSection: React.FC = () => {
  const handleButtonClick = () => {
    window.open("https://calendly.com/contact-techcreator/30min", "_blank");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/contact-techcreator/30min",
          text: "Schedule Free Strategy Call",
          color: "#0069ff",
          textColor: "#ffffff",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="appointment-section">
      <CommonButton
        className="bg-[#7A4AFF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm flex items-center gap-2"
        title={
          <>
            <FaCalendarAlt /> Book Appointment
          </>
        }
        handleClick={handleButtonClick}
      />

      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default AppointmentSection;
