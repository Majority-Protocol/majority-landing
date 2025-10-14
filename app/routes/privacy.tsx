export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last Updated: October 14, 2025
      </p>

      <p className="mb-6">
        This Privacy Policy explains how <strong>Question Labs</strong> ("we," "our," or "us") collects, uses, and protects
        your information when you use our mobile application (the “App”).
      </p>

      {/* Section 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Information We Collect</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">a. Information You Provide</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>
          <strong>Wallet Creation and Authentication:</strong> When you log in
          or create an account using the <strong>Thirdweb SDK</strong>, we
          generate or connect your embedded wallet. This may involve storing
          your public wallet address and associated blockchain transaction
          history.
        </li>
        <li>
          <strong>Support Requests or Feedback:</strong> If you contact us, we
          may collect your name, email address, and any message content you
          provide.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">b. Information Collected Automatically</h3>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Device information: device model, operating system, and app version.</li>
        <li>App interactions: screens viewed, button clicks, and general usage statistics.</li>
        <li>Error and performance data: crash reports and error logs via PostHog.</li>
      </ul>
      <p className="mb-4">
        This information helps us maintain and improve the App’s functionality.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">c. Blockchain Data</h3>
      <p className="mb-6">
        Because this App interacts with public blockchains, certain data (such
        as wallet addresses, transactions, and balances) may be publicly
        accessible and recorded on-chain. We do <strong>not</strong> control or
        delete data stored on public blockchains.
      </p>

      {/* Section 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Provide and operate the App and its blockchain-related features.</li>
        <li>Authenticate users and manage embedded wallets.</li>
        <li>Monitor performance, detect errors, and improve user experience.</li>
        <li>Communicate with you about updates, security, or customer support.</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Analytics and Tracking</h2>
      <p className="mb-4">
        We use <strong>PostHog</strong> for analytics and error tracking. PostHog
        may collect anonymized or pseudonymized data such as:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Device type and OS</li>
        <li>App usage events</li>
        <li>Error logs and crash reports</li>
      </ul>
      <p className="mb-6">
        We use these analytics only to understand how users interact with the
        App and to improve stability and performance. PostHog data is processed
        under their{" "}
        <a
          href="https://posthog.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>

      {/* Section 4 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        4. Thirdweb SDK and Wallet Data
      </h2>
      <p className="mb-4">
        Our App integrates <strong>Thirdweb SDK</strong> for blockchain
        functionality and wallet management. When you use an embedded wallet:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Your private keys are securely managed (we do not have access to your keys).</li>
        <li>Your public wallet address and transactions are recorded on-chain.</li>
        <li>We may use your wallet address for authentication and feature access.</li>
      </ul>
      <p className="mb-6">
        For more details, see{" "}
        <a
          href="https://thirdweb.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Thirdweb’s Privacy Policy
        </a>
        .
      </p>

      {/* Section 5 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Data Sharing</h2>
      <p className="mb-6">
        We do <strong>not</strong> sell your personal data. We may share limited
        information only with:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Service providers that help us operate the App (e.g., analytics, hosting).</li>
        <li>Law enforcement or regulators, if required by law or to protect our rights.</li>
      </ul>

      {/* Section 6 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Data Retention</h2>
      <p className="mb-6">
        We retain your data only as long as necessary to provide the App, comply
        with legal obligations, or resolve disputes. Blockchain records are
        permanent and cannot be altered or deleted by us.
      </p>

      {/* Section 7 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Your Rights</h2>
      <p className="mb-4">
        Depending on your location, you may have rights to:
      </p>
      <ul className="list-disc pl-6 mb-6 space-y-1">
        <li>Access or request deletion of your data.</li>
        <li>Object to or restrict processing.</li>
        <li>Withdraw consent (where applicable).</li>
      </ul>
      <p className="mb-6">
        To exercise these rights, contact us at{" "}
        <strong>support@majority.fun</strong>.
      </p>

      {/* Section 8 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Security</h2>
      <p className="mb-6">
        We implement reasonable administrative, technical, and physical
        safeguards to protect your information. However, no system is completely
        secure. You are responsible for maintaining the security of your wallet
        and device.
      </p>

      {/* Section 9 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Children’s Privacy</h2>
      <p className="mb-6">
        Our App is not directed to children under 13 (or the relevant age of
        digital consent in your country). We do not knowingly collect personal
        information from children.
      </p>

      {/* Section 10 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Changes to This Policy</h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. The updated version
        will be posted within the App and will indicate the “Last Updated” date.
      </p>

      {/* Section 11 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">11. Contact Us</h2>
      <p className="mb-2">
        If you have any questions or concerns about this Privacy Policy or your
        data, please contact us at:
      </p>
      <p className="mb-1">📧 <strong>support@majority.fun</strong></p>
    </div>
  );
}
