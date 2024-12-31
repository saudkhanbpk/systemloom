import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">

      {/* Background Image Section */}
      <div className="w-full h-72 md:h-96 flex flex-col items-center bg-gradient-to-r from-black to-purple-600 justify-center overflow-hidden text-center">
        <h1 className="text-white md:text-6xl text-4xl font-extrabold leading-tight tracking-tight">Terms and Conditions</h1>
      </div>

      {/* Last Updated Section */}
      <div className="w-full text-center py-6 bg-gray-100">
        <h2 className="text-lg md:text-xl font-medium text-gray-700">Last Updated: January 1, 2024</h2>
      </div>

      {/* Terms and Conditions Content Section */}
      <div className="max-w-6xl px-5 py-10 my-10 text-lg">
        <p className="text-lg mb-6">
          <strong className="text-2xl font-semibold text-purple-600 mb-3">Welcome to TechCreator</strong><br />
          These Terms and Conditions lay down the rules and regulations for using TechCreator's services. If you access the services of this platform, you agree to abide by these terms. If you do not agree with any part of these terms, you should refrain from using our services.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> Acceptance of Terms</h3>
        <p className="text-lg mb-6">
        By accessing and using TechCreator, you confirm and agree to have read, understood, and accepted these Terms and Conditions. These terms apply to every visitor, user, and other persons who wish to access or use the Service.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> User Responsibilities</h3>
        <p className="text-lg mb-6">
        You are responsible for the confidentiality of your account and password. You agree to hold yourself fully responsible for any activities that occur under your account. You will also be required to comply with all applicable laws and regulations and respect third-party rights while using TechCreator.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> Prohibited Activities</h3>
        <p className="text-lg mb-6">
          Users are prohibited from engaging in any activity that:
          <ul className="list-inside list-disc text-lg ml-4">
            <li>This is not limited to violating any local, state, or national laws.</li>
            <li>This is also extending to infringing upon TechCreator's and other parties' intellectual property rights</li>
            <li>Interfering with the ability of TechCreator to function normally on the platform.</li>
            <li>Insulting harass or threaten other users.</li>
            <li>Introduce malware or other malicious programs.</li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> Privacy Policy</h3>
        <p className="text-lg mb-6">
        Your agreement to use TechCreator extends to our collection and protection of the information of which you are informed by our Privacy Policy. Please refer to <a href="/privacy-policy" className="text-blue-600">Privacy Policy</a> Policy for details. 
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> User Content</h3>
        <p className="text-lg mb-6">
        Users may submit content, such as job postings, blogs, or any other type of content, to TechCreator. Users shall retain their rights in the content but grant TechCreator a license to use, display, and distribute the content within its platform. Users are fully responsible for their content and agree that TechCreator may delete any content that it considers breaches those values. 
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Links to Third-Party Websites and Services</h3>
        <p className="text-lg mb-6">
        TechCreator provides links to third-party websites or services that are not operated by us. We take no responsibility for the content or conduct of these third-party sites; therefore, we encourage users to review their terms of service and privacy policies before interacting with them.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> Disclaimers and Limitation of Liability</h3>
        <p className="text-lg mb-6">
        TechCreator services are provided "as is" and without any warranties. We do not guarantee continuous error-free, secure, and uninterrupted operation of the platform. TechCreator does not assume any responsibility for any loss resulting from the proper or improper use of the platform.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> Termination</h3>
        <p className="text-lg mb-6">
        TechCreator shall have the right to suspend or terminate your account at any time, without notice to you, if you violate these Terms and Conditions. Upon termination, you shall discontinue all use of the platform and delete all content associated with your account.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> Governing Law</h3>
        <p className="text-lg mb-6">
        These terms and conditions are subject to the laws of the place where TechCreator is situated. Any disputes that arise shall be solved through the competent courts of such sito.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Changes to Terms and Conditions</h3>
        <p className="text-lg mb-6">       
TechCreator shall have the right to change or modify these Terms and Conditions at any time. Any changes will be posted on this page with the revision date also updated. Please review these terms from time to time for updates.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4"> Contact Us</h3>
        <p className="text-lg mb-6">
        If you have any questions regarding these terms and conditions, please send contact via: 
        </p>
        <div className="text-lg mb-6">
          <strong>Email:</strong> <a href="mailto:contact@techcreator.co" className="text-blue-600">contact@techcreator.co</a><br />
          <strong>Phone:</strong> +1 (321) 407-3272<br />
          <strong>Address:</strong> TechCreator Software Company, 123 Tech Lane, Orlando, FL, USA
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;




export const metadata = {
  title: "TechCreator Terms and Conditions | Rules for Using Our Platform",
  description:
    "Understand the rules, responsibilities, and limitations for using TechCreator's services. Explore user obligations, prohibited activities, content policies, and governing laws.",
  alternates: {
    canonical: "https://www.techcreator.co/terms-conditions",
  },
};