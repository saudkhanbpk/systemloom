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
//         className="bg-[#9A00FF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm"
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
//         className="bg-[#9A00FF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm"
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
import CommonButton from "../common/Button";

// Extend the Window interface to include Calendly
declare global {
  interface Window {
    Calendly: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
      }) => void;
    };
  }
}

const AppointmentSection = () => {
  // Handle button click to open Calendly in a new tab
  const handleButtonClick = () => {
    window.open("https://calendly.com/contact-techcreator/30min", "_blank"); // Open in new tab
  };

  useEffect(() => {
    // Add Calendly badge widget script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly badge widget once the script is loaded
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/contact-techcreator/30min",
          text: "Schedule time with me",
          color: "#0069ff",
          textColor: "#ffffff",
        });
      }
    };

    return () => {
      // Clean up script
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="appointment-section">
      {/* Button for Appointment */}
      <CommonButton
        className="bg-[#9A00FF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm"
        title="Book Appointment"
        handleClick={handleButtonClick}
      />

      {/* Calendly Inline Widget */}
      {/* <div
        className="calendly-inline-widget mt-6"
        data-url="https://calendly.com/contact-techcreator/30min"
        style={{ minWidth: "320px", height: "700px" }}
      ></div> */}

      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default AppointmentSection;



// Third

// import React, { useEffect } from "react";
// import { BiCalendar } from "react-icons/bi";

// // Extend the Window interface to include Calendly
// declare global {
//   interface Window {
//     Calendly: {
//       initBadgeWidget: (options: {
//         url: string;
//         text: string;
//         color: string;
//         textColor: string;
//       }) => void;
//       initPopupWidget: (options: { url: string }) => void;
//     };
//   }
// }

// // Button component that accepts ReactNode for title (if you modify it)
// interface CommonButtonProps {
//   className: string;
//   title: React.ReactNode; // Change this to accept JSX elements
//   handleClick: () => void;
// }

// const CommonButton = ({ className, title, handleClick }: CommonButtonProps) => (
//   <button className={className} onClick={handleClick}>
//     {title}
//   </button>
// );

// const AppointmentSection = () => {
//   // Handle button click to open Calendly in a new tab and prevent body scroll
//   const handleButtonClick = () => {
//     // Disable body scrolling
//     document.body.style.overflow = "hidden"; // Hide scrollbars
    
//     // Open Calendly popup widget
//     if (window.Calendly) {
//       window.Calendly.initPopupWidget({
//         url: "https://calendly.com/contact-techcreator/30min",
//       });
//     }

//     // After popup opens, restore scrolling after a short delay
//     setTimeout(() => {
//       document.body.style.overflow = ""; // Restore scrollbars after the popup
//     }, 500); // You can adjust the delay time if needed
//   };

//   useEffect(() => {
//     // Add Calendly badge widget script dynamically
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Initialize Calendly badge widget once the script is loaded
//     script.onload = () => {
//       if (window.Calendly) {
//         window.Calendly.initBadgeWidget({
//           url: "https://calendly.com/contact-techcreator/30min",
//           text: "Schedule time with me",
//           color: "#0069ff",
//           textColor: "#ffffff",
//         });
//       }
//     };

//     return () => {
//       // Clean up script
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="appointment-section">
//       {/* Button for Appointment */}
//       <CommonButton
//         className="bg-[#9A00FF] text-white px-3 py-1.5 h-fit md:px-4 md:py-2 rounded-full text-xs md:text-sm flex items-center gap-2"
//         title={
//           <>
//             <BiCalendar size={20} />
//             <span>Book Appointment</span>
//           </>
//         }
//         handleClick={handleButtonClick}
//       />

//       {/* Calendly Inline Widget */}
//       <div
//         className="calendly-inline-widget mt-6"
//         data-url="https://calendly.com/contact-techcreator/30min"
//         style={{ minWidth: "320px", height: "700px" }}
//       ></div>

//       <link
//         href="https://assets.calendly.com/assets/external/widget.css"
//         rel="stylesheet"
//       />
//     </div>
//   );
// };

// export default AppointmentSection;



