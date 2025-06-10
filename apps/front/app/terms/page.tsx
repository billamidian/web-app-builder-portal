import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>

          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Push Button Inc. ("Company", "we", "our", "us")! As you have clicked "I agree" to these Terms
                of Service, you have entered into a binding contract with Push Button Inc., a Florida Corporation
                located in Indian River County. These Terms of Service, together with our Privacy Policy, govern your
                access to and use of the PushButtonBuild platform and services.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part
                of the terms, you may not access the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Communications</h2>
              <p className="mb-4">
                By creating an account on our service, you agree to subscribe to newsletters, marketing or promotional
                materials and other information we may send. However, you may opt out of receiving any, or all, of these
                communications from us by following the unsubscribe link or instructions provided in any email we send.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Purchases</h2>
              <p className="mb-4">
                If you wish to purchase any product or service made available through the Service ("Purchase"), you may
                be asked to supply certain information relevant to your Purchase including, without limitation, your
                credit card number, the expiration date of your credit card, your billing address, and your shipping
                information.
              </p>
              <p className="mb-4">
                You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment
                method(s) in connection with any Purchase; and that (ii) the information you supply to us is true,
                correct and complete.
              </p>
              <p>
                The service may employ the use of third-party services for the purpose of facilitating payment and the
                completion of Purchases. By submitting your information, you grant us the right to provide the
                information to these third parties subject to our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Intellectual Property</h2>
              <p className="mb-4">
                The Service and its original content (excluding Content provided by users), features and functionality
                are and will remain the exclusive property of Push Button Inc. and its licensors. The Service is
                protected by copyright, trademark, and other laws of both the United States and foreign countries. Our
                trademarks and trade dress may not be used in connection with any product or service without the prior
                written consent of Push Button Inc.
              </p>
              <p className="mb-4">
                When you build a platform using our services, you retain all rights to your content and the resulting
                platform. However, we may use anonymized data and insights to improve our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice
                or liability, under our sole discretion, for any reason whatsoever and without limitation, including but
                not limited to a breach of the Terms.
              </p>
              <p className="mb-4">
                If you wish to terminate your account, you may simply discontinue using the Service, or notify us that
                you wish to delete your account.
              </p>
              <p>
                All provisions of the Terms which by their nature should survive termination shall survive termination,
                including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of
                liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall Push Button Inc., nor its directors, employees, partners, agents, suppliers, or
                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct
                or content of any third party on the Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use or alteration of your transmissions or content, whether based on warranty,
                contract, tort (including negligence) or any other legal theory, whether or not we have been informed of
                the possibility of such damage, and even if a remedy set forth herein is found to have failed of its
                essential purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Disclaimer</h2>
              <p className="mb-4">
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE"
                basis. The Service is provided without warranties of any kind, whether express or implied, including,
                but not limited to, implied warranties of merchantability, fitness for a particular purpose,
                non-infringement or course of performance.
              </p>
              <p>
                Push Button Inc., its subsidiaries, affiliates, and its licensors do not warrant that a) the Service
                will function uninterrupted, secure or available at any particular time or location; b) any errors or
                defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the
                results of using the Service will meet your requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed and construed in accordance with the laws of Florida, United States,
                without regard to its conflict of law provisions.
              </p>
              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
                provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us
                regarding our Service, and supersede and replace any prior agreements we might have had between us
                regarding the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Changes</h2>
              <p className="mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Service after any revisions become effective, you agree to be bound
                by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the
                Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at contact@pushbuttonbuild.com.</p>
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
