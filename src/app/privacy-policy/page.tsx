import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <div className="w-full h-72 md:h-96 flex flex-col items-center bg-gradient-to-r from-black to-purple-600 justify-center overflow-hidden text-center">
        <h1 className="text-white md:text-6xl text-4xl font-extrabold leading-tight tracking-tight">Privacy Policy</h1>
      </div>

      {/* Last Updated Section */}
      <div className="w-full text-center py-4 bg-gray-200">
        <h2 className="text-lg md:text-xl font-medium text-gray-700">Last Updated: January 1, 2024</h2>
      </div>

      {/* Privacy Policy Content Section */}
      <div className="max-w-6xl px-5 py-10 my-10  mx-4 md:mx-auto">
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <strong className="text-2xl font-semibold text-purple-600">Welcome to the TechCreator Privacy Policy</strong><br />
          At TechCreator, your privacy is a big deal to us. Thus, anything shared with us will be well protected to enable you to confidently interact with our services. This Privacy Policy explains what information we collect, how we do so, and the ways by which we deal with the data related to your interactions with us on our platform.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Information Collected</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We collect some specific types of information that would facilitate full user interaction on TechCreator:
        </p>
        <ul className="list-inside list-disc text-lg text-gray-700 ml-6">
          <li><strong>Personal Data:</strong> Your name, email address, and phone number. Information you provide when you apply for jobs posted on the platform.</li>
          <li><strong>Job Posting Data:</strong> All the details relating to job posts like job title, job description, and job requirements.</li>
          <li><strong>Blog Interaction Data:</strong> Comments, posts, and any kind of interaction on blog content.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">How Your Information Is Used</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Your data is used to help in improving and customizing your TechCreator interactions:
        </p>
        <ul className="list-inside list-disc text-lg text-gray-700 ml-6">
          <li>To provide services: Explore job postings, apply for jobs, and take part in our blogs.</li>
          <li>To improve user experience: Providing related services and content based on your preferences.</li>
          <li>To engage: Reply to your inquiries and provide you with updates related to your interactions with TechCreator.</li>
          <li>To optimize the platform: Improve its functionality and protect it against misuse and fraudulent activities.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Cookies and Tracking Technologies</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          TechCreator uses cookies and similar technologies to enhance your browsing experience. These tools help us:
        </p>
        <ul className="list-inside list-disc text-lg text-gray-700 ml-6">
          <li>Remember preferences so that navigation is easy.</li>
          <li>Track performance statistics and user navigation.</li>
          <li>Deliver tailored content and recommendations.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          You control cookie preferences through specific settings on your browser; disabling cookies may also limit some features of our platform.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Third-party Service Providers</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We may share your data with trusted and reputable third-party service providers for the development and maintenance of the platform. These include:
        </p>
        <ul className="list-inside list-disc text-lg text-gray-700 ml-6">
          <li>Handling job applications submitted through our platform.</li>
          <li>Providing analytics to improve the website's performance and user experience.</li>
          <li>Supporting blog management and content delivery.</li>
        </ul>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          All third parties involved are required to sign confidential agreements ensuring that the information is used solely for its intended purposes.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Data Security</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We take great security measures to protect your personal information. Although we strive to achieve the highest possible standard in protection, you must understand that no Internet system is completely safe.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Changes to This Privacy Policy</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The Privacy Policy will be updated from time to time to reflect our practice changes or legal compliance. Updated changes will be reflected on this page under an updated "Last Revised" heading. You are encouraged to review this policy periodically so that you may be up to date on how we are managing your data.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">Contact Us</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          If you have any questions about this Privacy Policy or need assistance with your personal data, please contact us at:
        </p>
        <div className="text-lg text-gray-700 mb-6 leading-relaxed">
          <strong>Email:</strong> <a href="mailto:contact@techcreator.co" className="text-blue-600 hover:underline">contact@techcreator.co</a><br />
          <strong>Phone:</strong> +1 (321) 407-3272<br />
          <strong>Address:</strong> TechCreator Software Company, 123 Tech Lane, Orlando, FL, USA
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;




export const metadata = {
  title: "TechCreator Privacy Policy | Your Data, Protected",
  description:
    "Learn how TechCreator collects, uses, and protects your data to ensure a safe and personalized experience. Explore our privacy practices, data security measures, and cookie usage.",
  alternates: {
    canonical: "https://www.techcreator.co/privacy-policy",
  },
};