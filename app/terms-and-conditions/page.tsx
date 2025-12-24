export default function TermsPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-gray-800">

      {/* ✅ Same Heading Style Used as Privacy Page */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font_family_jakarta">
        Terms & Conditions
      </h1>

      <p className="mb-6 text-lg">
        Welcome to <strong>GHRIG Digital Services</strong>. By accessing this section of our platform,
        you agree to comply with the policies, usage guidelines, and operational frameworks described below.
        These terms apply to all visitors, partners, and registered users engaging with our services.
      </p>

      {/* Section 1 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">1. Acceptance of Usage</h2>
        <p>
          By accessing our platform, you acknowledge that all activities performed are at your own responsibility.
          Any misuse, unauthorized actions, automated access, or data extraction from our services without permission
          is strictly prohibited.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">2. Account & Content Responsibility</h2>
        <p>
          Users are responsible for the content they upload, share, or communicate through the platform.
          Any offensive, misleading, harmful, or proprietary content shared without ownership consent may lead
          to account suspension or legal action.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">3. Data Protection & Usage</h2>
        <p>
          We prioritize user data safety. All personal data collected is used only for communication, service improvement,
          and system enhancement. We do not sell user data to third-party entities without legal obligation or consent.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">4. Service Modification</h2>
        <p>
          GHRIG reserves the right to modify, upgrade, or discontinue services temporarily or permanently without prior notice.
          We continuously evolve our system to ensure better performance and user security.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">5. External Linking Policy</h2>
        <p>
          Any third-party links shared on our platform are provided for reference only. We are not liable for external website
          content, privacy policies, or data practices.
        </p>
      </div>

      {/* Section 6 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">6. Rights Restriction</h2>
        <p>
          Platform content, UI structure, brand assets, codes, or system flow cannot be copied, reproduced, distributed,
          or commercially reused without written permission from GHRIG.
        </p>
      </div>

      {/* Section 7 */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">7. Policy Updates</h2>
        <p>
          These terms may be updated periodically. Continued use of our platform indicates acceptance of the revised terms
          unless explicitly declined through formal communication.
        </p>
      </div>

      {/* Footer Note */}
      <div className="mt-8 p-4 bg-gray-100 border-l-4 border-gray-400 rounded">
        <p>
          If you have any questions regarding these terms, contact us at:
          <br />
          📩 <strong>support@ghrig.com</strong>
        </p>
      </div>
    </section>
  );
}
