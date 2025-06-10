import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="mb-4">
                Push Button Inc. ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how your personal information is collected, used, and disclosed by Push Button Inc., a Florida
                Corporation located in Indian River County.
              </p>
              <p className="mb-4">
                This Privacy Policy applies to our website, PushButtonBuild, and its associated services (collectively,
                our "Service"), as well as any other websites, applications, or services that link to this Privacy
                Policy.
              </p>
              <p>
                By accessing or using our Service, you signify that you have read, understood, and agree to our
                collection, storage, use, and disclosure of your personal information as described in this Privacy
                Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              <p className="mb-4">
                We collect several types of information from and about users of our Service, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Personal Information:</strong> Personal information that can be used to identify you such as
                  your name, email address, postal address, phone number, and billing information.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our Service, including your browser type,
                  IP address, pages visited, time spent on pages, links clicked, and the page you visited before
                  navigating to our Service.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use to access our Service,
                  including hardware model, operating system, and unique device identifiers.
                </li>
                <li>
                  <strong>Content Information:</strong> Information about the platforms and applications you build using
                  our Service, including design choices, functionality, and user interactions.
                </li>
              </ul>
              <p>
                We collect this information when you register on our Service, place an order, subscribe to a newsletter,
                respond to a survey, fill out a form, use live chat, open a support ticket, or otherwise communicate
                with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect about you for various purposes, including to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Provide, maintain, and improve our Service</li>
                <li>Process transactions and send related information, including confirmations and invoices</li>
                <li>Send you technical notices, updates, security alerts, and support and administrative messages</li>
                <li>Respond to your comments, questions, and requests, and provide customer service</li>
                <li>
                  Communicate with you about products, services, offers, promotions, and events, and provide other news
                  or information about us and our partners
                </li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Service</li>
                <li>
                  Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the
                  rights and property of Push Button Inc. and others
                </li>
                <li>
                  Personalize and improve the Service and provide content or features that match user profiles or
                  interests
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Sharing Your Information</h2>
              <p className="mb-4">We may share the information we collect in various ways, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>With Vendors and Service Providers:</strong> We may share information with third-party
                  vendors, consultants, and other service providers who need access to such information to carry out
                  work on our behalf.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose information if we believe that disclosure is
                  necessary to comply with any applicable law, regulation, legal process, or governmental request.
                </li>
                <li>
                  <strong>In Connection with a Merger, Sale, or Change of Control:</strong> We may transfer or assign
                  this Privacy Policy and any personal information to a third party entity in connection with a merger,
                  acquisition, sale, or other change of control.
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with third parties when you give us
                  permission to do so.
                </li>
              </ul>
              <p>
                We may also share aggregated or de-identified information, which cannot reasonably be used to identify
                you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Retention</h2>
              <p>
                We will retain your personal information only for as long as is necessary for the purposes set out in
                this Privacy Policy. We will retain and use your information to the extent necessary to comply with our
                legal obligations, resolve disputes, and enforce our policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Security</h2>
              <p>
                We use appropriate technical and organizational measures to protect the personal information that we
                collect and process about you. The measures we use are designed to provide a level of security
                appropriate to the risk of processing your personal information. However, please note that no method of
                transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request that we correct any inaccurate personal information we hold about you</li>
                <li>The right to request that we delete your personal information</li>
                <li>The right to restrict or object to our processing of your personal information</li>
                <li>The right to data portability</li>
              </ul>
              <p>To exercise any of these rights, please contact us at privacy@pushbuttonbuild.com.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Children's Privacy</h2>
              <p>
                Our Service is not directed to children under the age of 13, and we do not knowingly collect personal
                information from children under the age of 13. If we learn that we have collected personal information
                from a child under the age of 13, we will promptly delete that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@pushbuttonbuild.com.
              </p>
            </section>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-gray-400">Last updated: May 27, 2025</p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/" className="text-blue-400 hover:text-blue-300">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
