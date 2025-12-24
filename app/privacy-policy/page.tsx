export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">

      {/* ✅ Updated Heading Style Here */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font_family_jakarta">
        Privacy Policy
      </h1>

      <p className="mb-6 text-lg">
        At <strong>GHRIG Digital Services</strong>, we are committed to protecting your privacy.
        This document explains how we collect, use, and safeguard your personal data when you interact with our services.
      </p>

      {/* Section 1 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
        <p>
          We may collect personal details such as name, email, phone number, device type, browser details,
          IP address, and usage analytics to enhance user experience and platform security.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Data</h2>
        <p>
          The collected data helps us personalize services, maintain platform security, improve functionality,
          analyze trends, and send relevant updates only when permitted by the user.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. Data Protection & Storage</h2>
        <p>
          We implement secure encryption, restricted access, and regular system audits to prevent unauthorized
          access, manipulation, or disclosure of personal information.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Cookies & Tracking</h2>
        <p>
          Our platform may use cookies to enhance browsing experience, remember user preferences, and analyze site performance.
          Users can modify browser settings to decline cookies if preferred.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Third-Party Sharing</h2>
        <p>
          We do not sell personal data. However, limited information may be shared with trusted partners solely
          to improve service quality (e.g., analytics, support tools, hosting services).
        </p>
      </div>

      {/* Section 6 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. User Rights & Control</h2>
        <p>
          Users have the right to request data access, update information, or ask for deletion unless required by law to retain it.
        </p>
      </div>

      {/* Section 7 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. External Links</h2>
        <p>
          Our website may include links to third-party platforms. We are not responsible for the privacy practices
          or content of these external websites.
        </p>
      </div>

      {/* Section 8 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Policy Updates</h2>
        <p>
          This privacy policy may be updated to reflect legal, operational, or service improvements. Continued usage of our platform
          indicates acceptance of modified terms.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-8 p-4 bg-gray-100 border-l-4 border-gray-400 rounded">
        <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
        <p>
          If you have any questions regarding this policy, feel free to reach out:
        </p>
        <p className="mt-2 font-medium">
          ✉️ <a href="mailto:support@ghrig.com" className="text-blue-600">support@ghrig.com</a>
        </p>
      </div>

    </section>
  );
}
