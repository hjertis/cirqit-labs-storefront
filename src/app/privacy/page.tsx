import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy // CIRQIT LABS",
  description:
    "GDPR Privacy Policy for Cirqit Labs (https://shop.cirqit-labs.com). Details on our self-hosted infrastructure, collected order data, EU GDPR rights, and contact information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Top Header Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>GDPR DATA PROTECTION & PRIVACY STATEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            This Privacy Policy governs the processing of personal data on{" "}
            <a
              href="https://shop.cirqit-labs.com"
              className="text-amber-400 underline font-mono hover:text-amber-300"
            >
              https://shop.cirqit-labs.com
            </a>{" "}
            in full compliance with the European Union General Data Protection Regulation (EU GDPR 2016/679).
          </p>
        </div>

        {/* Metadata info card */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 mb-10 text-xs font-mono text-slate-400 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <span className="text-slate-500 block uppercase mb-1">// Domain</span>
            <span className="text-amber-400 font-semibold">https://shop.cirqit-labs.com</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase mb-1">// Effective Date</span>
            <span className="text-slate-200">July 29, 2026</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase mb-1">// Legal Jurisdiction</span>
            <span className="text-slate-200">European Union / Denmark</span>
          </div>
        </div>

        {/* Highlight Callout Box: Self-Hosted Infrastructure */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-900/90 border border-emerald-500/30 rounded-xl p-6 mb-12 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-emerald-400 mb-1">
                // Local & Self-Hosted Infrastructure Guarantee
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Cirqit Labs operates on a strictly self-hosted architecture. All user account credentials, order transactions, shipping records, and uploaded CAD design files are processed and stored locally on dedicated, self-hosted infrastructure rather than third-party public cloud platforms or external tracking networks.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 mb-12">
          <h2 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            // Table of Contents
          </h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <a href="#data-controller" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">01.</span> Data Controller & Infrastructure
            </a>
            <a href="#collected-data" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">02.</span> Essential Data Collected
            </a>
            <a href="#legal-basis" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">03.</span> Purpose & Legal Basis
            </a>
            <a href="#user-rights" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">04.</span> EU GDPR User Rights
            </a>
            <a href="#data-retention" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">05.</span> Retention & CAD Storage
            </a>
            <a href="#contact" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">06.</span> Privacy Contact & Support
            </a>
          </nav>
        </div>

        {/* Main Content Articles */}
        <div className="space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section id="data-controller" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 01</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1. Data Controller & Self-Hosted Infrastructure
            </h2>
            <p className="mb-4">
              The data controller responsible for processing your personal data on{" "}
              <strong className="text-slate-100">https://shop.cirqit-labs.com</strong> is Cirqit Labs.
            </p>
            <p className="mb-4">
              Unlike standard e-commerce setups that relay customer records to global multi-tenant public cloud services and third-party data analytics vendors, Cirqit Labs hosts its primary web storefront, backend databases, and production servers on local, self-hosted infrastructure.
            </p>
            <p>
              This local deployment model guarantees that your sensitive transactional records, customer account profile, and proprietary 3D print assets remain within our controlled local environment, fortified by TLS encryption and strict server-level authorization controls.
            </p>
          </section>

          {/* Section 2 */}
          <section id="collected-data" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 02</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2. Categories of Personal Data Collected
            </h2>
            <p className="mb-4">
              We collect and process only the minimal personal data necessary to execute purchase orders, process payments, deliver physical goods, and provide custom additive manufacturing quotes:
            </p>
            <ul className="list-none space-y-3 pl-0 mb-6">
              <li className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 flex items-start gap-3">
                <span className="font-mono text-amber-400 font-bold shrink-0">[01]</span>
                <div>
                  <strong className="text-white">Essential Order & Identification Details:</strong> Full customer name, contact email address, phone number, billing address, and physical shipping address.
                </div>
              </li>
              <li className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 flex items-start gap-3">
                <span className="font-mono text-amber-400 font-bold shrink-0">[02]</span>
                <div>
                  <strong className="text-white">Transaction & Payment Logs:</strong> Payment provider authorization tokens, invoice IDs, order histories, and transaction status logs. (Raw credit card numbers are handled directly by payment gateways and are never stored on our servers).
                </div>
              </li>
              <li className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 flex items-start gap-3">
                <span className="font-mono text-amber-400 font-bold shrink-0">[03]</span>
                <div>
                  <strong className="text-white">Custom Manufacturing & CAD Data:</strong> User-uploaded 3D model files (.STL, .STEP, .3MF), engineering dimensions, material requirements, and custom fabrication notes submitted via quote request forms.
                </div>
              </li>
              <li className="bg-slate-900/60 border border-slate-800 rounded-lg p-4 flex items-start gap-3">
                <span className="font-mono text-amber-400 font-bold shrink-0">[04]</span>
                <div>
                  <strong className="text-white">Technical Infrastructure Logs:</strong> IP addresses, browser agent headers, and server access timestamp logs collected strictly for security, intrusion detection, and system debugging.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="legal-basis" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 03</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. Purpose & Legal Basis for Processing (GDPR Art. 6)
            </h2>
            <p className="mb-4">
              We process your personal data under the following legal bases recognized under EU GDPR Art. 6:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-amber-400 block mb-1">ART. 6(1)(b) GDPR // CONTRACT</span>
                <strong className="text-white block mb-2">Performance of Contract</strong>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Processing is necessary to fulfill sales agreements, print custom CAD parts, process order payments, send shipping status updates, and deliver physical shipments.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-amber-400 block mb-1">ART. 6(1)(c) GDPR // COMPLIANCE</span>
                <strong className="text-white block mb-2">Legal Statutory Compliance</strong>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Processing required for mandatory bookkeeping, invoice archiving, and tax compliance (VAT/moms) under Danish commercial law.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-amber-400 block mb-1">ART. 6(1)(f) GDPR // INTEREST</span>
                <strong className="text-white block mb-2">Legitimate Business Interest</strong>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Maintaining infrastructure integrity, preventing fraudulent transactions, and ensuring server firewall security on shop.cirqit-labs.com.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-amber-400 block mb-1">ART. 6(1)(a) GDPR // CONSENT</span>
                <strong className="text-white block mb-2">User Explicit Consent</strong>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Where applicable, such as optional subscription communications or direct engineering consultations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="user-rights" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 04</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              4. Full EU GDPR User Rights
            </h2>
            <p className="mb-4">
              As a resident of the European Union, you possess extensive statutory rights regarding your personal information under Regulation (EU) 2016/679:
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg">
                <h4 className="font-mono text-sm font-bold text-white mb-1 flex items-center justify-between">
                  <span>Right to Access (Article 15 GDPR)</span>
                  <span className="text-amber-400 text-xs font-normal">ART 15</span>
                </h4>
                <p className="text-xs text-slate-400">
                  You have the right to obtain confirmation as to whether your personal data is being processed and receive a complete copy of stored records.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg">
                <h4 className="font-mono text-sm font-bold text-white mb-1 flex items-center justify-between">
                  <span>Right to Rectification (Article 16 GDPR)</span>
                  <span className="text-amber-400 text-xs font-normal">ART 16</span>
                </h4>
                <p className="text-xs text-slate-400">
                  You may request immediate correction of inaccurate or incomplete personal profile and shipping data.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg">
                <h4 className="font-mono text-sm font-bold text-white mb-1 flex items-center justify-between">
                  <span>Right to Data Portability (Article 20 GDPR)</span>
                  <span className="text-amber-400 text-xs font-normal">ART 20</span>
                </h4>
                <p className="text-xs text-slate-400">
                  You are entitled to receive your personal data in a structured, commonly used, machine-readable JSON/CSV format.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg">
                <h4 className="font-mono text-sm font-bold text-white mb-1 flex items-center justify-between">
                  <span>Right to Erasure / &quot;Right to be Forgotten&quot; (Article 17 GDPR)</span>
                  <span className="text-amber-400 text-xs font-normal">ART 17</span>
                </h4>
                <p className="text-xs text-slate-400">
                  You may request the deletion of your personal data from our local databases. (Note: Statutory tax laws requiring 5-year invoice retention under Danish law take precedence for financial transaction records).
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg">
                <h4 className="font-mono text-sm font-bold text-white mb-1 flex items-center justify-between">
                  <span>Right to Restrict & Object (Articles 18 & 21 GDPR)</span>
                  <span className="text-amber-400 text-xs font-normal">ART 18/21</span>
                </h4>
                <p className="text-xs text-slate-400">
                  You have the right to restrict or object to specific processing operations based on legitimate interests.
                </p>
              </div>

              <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-lg">
                <h4 className="font-mono text-sm font-bold text-white mb-1 flex items-center justify-between">
                  <span>Right to Lodge a Complaint</span>
                  <span className="text-amber-400 text-xs font-normal">SUPERVISORY AUTHORITY</span>
                </h4>
                <p className="text-xs text-slate-400">
                  You have the right to file a complaint with the Danish Data Protection Agency (<em>Datatilsynet</em>, Carl Jacobsens Vej 35, 2500 Valby, Denmark, website: <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">www.datatilsynet.dk</a>).
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="data-retention" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 05</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              5. Retention Period & CAD File Storage Policy
            </h2>
            <p className="mb-4">
              We retain personal data strictly for as long as necessary to fulfill the purposes for which it was gathered:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li>
                <strong className="text-white">Commercial Order & Invoice Data:</strong> Retained for 5 full accounting years in accordance with the Danish Bookkeeping Act (<em>Bogføringsloven</em>).
              </li>
              <li>
                <strong className="text-white">Uploaded Proprietary CAD Files (.STL, .STEP):</strong> Retained on local storage for 30 calendar days following order completion to enable reprint requests or quality verification, after which CAD files are permanently erased unless the user requests earlier deletion.
              </li>
              <li>
                <strong className="text-white">User Accounts:</strong> Retained until the user requests profile closure or erasure under GDPR Article 17.
              </li>
            </ul>
          </section>

          {/* Section 6: Contact */}
          <section id="contact" className="scroll-mt-20">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 06</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              6. Data Protection Contact & Support Placeholders
            </h2>
            <p className="mb-6">
              To exercise your GDPR user rights, request data export, or submit inquiries regarding our self-hosted privacy infrastructure, please contact our data protection team:
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-400 uppercase block mb-1">
                    // Privacy & Data Requests
                  </span>
                  <a
                    href="mailto:privacy@cirqit-labs.com"
                    className="text-white font-mono font-bold hover:text-amber-400 transition-colors text-sm sm:text-base block"
                  >
                    privacy@cirqit-labs.com
                  </a>
                  <span className="text-xs text-slate-500 mt-1 block">
                    GDPR Requests, Data Export & Erasure
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-xs text-slate-400 uppercase block mb-1">
                    // Customer Service Support
                  </span>
                  <a
                    href="mailto:support@cirqit-labs.com"
                    className="text-white font-mono font-bold hover:text-amber-400 transition-colors text-sm sm:text-base block"
                  >
                    support@cirqit-labs.com
                  </a>
                  <span className="text-xs text-slate-500 mt-1 block">
                    General Orders, Logistics & Manufacturing Enquiries
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
