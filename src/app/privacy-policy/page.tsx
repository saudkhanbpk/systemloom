import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Background Image Section */}
      <div className="w-full h-72 md:h-96 flex flex-col items-center bg-gradient-to-r from-black to-purple-600 justify-center overflow-hidden text-center">
        <h1 className="text-white md:text-7xl text-4xl font-extrabold">Privacy Policy</h1>
      </div>

      {/* Last Updated Section */}
      <div className="w-full text-center py-6 bg-gray-100">
        <h2 className="text-xl md:text-2xl font-semibold">Last Updated: January 1, 2024</h2>
      </div>

      {/* Privacy Policy Content Section */}
      <div className="max-w-7xl px-5 py-10 my-10">
        <p className="text-lg mb-6">
          <strong className="text-xl font-semibold">Welcome to Our Privacy Policy</strong><br />
          We value your privacy and are committed to protecting the personal information you share with us. This privacy policy outlines the types of information we collect, how we use it, and your rights related to your personal data.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">1. Information We Collect</h3>
        <p className="text-lg mb-6">
          We collect both personal and non-personal information when you use our services. This includes, but is not limited to:
          <ul className="list-inside list-disc text-lg ml-4">
            <li><strong>Personal Data:</strong> Name, email address, phone number, etc.</li>
            <li><strong>Usage Data:</strong> IP address, browser type, device information, and activity on our website.</li>
          </ul>
          This information helps us improve your user experience and provide personalized content.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">2. How We Use Your Information</h3>
        <p className="text-lg mb-6">
          The information we collect is used for the following purposes:
          <ul className="list-inside list-disc text-lg ml-4">
            <li>To provide and improve our services</li>
            <li>To personalize your user experience</li>
            <li>To send marketing emails and offers that might interest you</li>
            <li>To respond to inquiries and customer support requests</li>
          </ul>
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">3. Cookies and Tracking Technologies</h3>
        <p className="text-lg mb-6">
          We use cookies and similar tracking technologies to enhance your browsing experience. Cookies allow us to:
          <ul className="list-inside list-disc text-lg ml-4">
            <li>Remember your preferences</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Deliver targeted advertising</li>
          </ul>
          You can control cookies through your browser settings, but disabling them may affect your experience on our site.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">4. Third-Party Services</h3>
        <p className="text-lg mb-6">
          We may share your personal information with trusted third-party service providers for the following purposes:
          <ul className="list-inside list-disc text-lg ml-4">
            <li>To assist us in operating the website</li>
            <li>To analyze website traffic and improve our services</li>
            <li>To conduct marketing and advertising campaigns</li>
          </ul>
          These third parties are obligated to protect your data and are not permitted to use it for any other purposes.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">5. Data Security</h3>
        <p className="text-lg mb-6">
          We employ a range of security measures to safeguard your personal data, including encryption and secure servers. However, no method of data transmission is entirely secure, and we cannot guarantee the absolute safety of your information.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">6. Your Rights</h3>
        <p className="text-lg mb-6">
          You have the right to:
          <ul className="list-inside list-disc text-lg ml-4">
            <li>Access and update your personal information</li>
            <li>Request the deletion of your personal information</li>
            <li>Opt-out of receiving marketing communications from us</li>
          </ul>
          To exercise any of these rights, please contact us at the details provided below.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">7. Changes to this Privacy Policy</h3>
        <p className="text-lg mb-6">
          We reserve the right to update or modify this privacy policy at any time. All changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
        </p>

        <h3 className="text-2xl font-semibold text-purple-600 mb-4">8. Contact Us</h3>
        <p className="text-lg mb-6">
          If you have any questions or concerns regarding this privacy policy, or if you wish to exercise any of your rights, please contact us at:
        </p>
        <div className="text-lg mb-6">
          <strong>Email:</strong> contact@techcreator.co<br />
          <strong>Phone:</strong> +1 (321) 407-3272<br />
          <strong>Address:</strong> TechCreator Software Company, located in
          Orlando, Florida USA
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicyPage;
