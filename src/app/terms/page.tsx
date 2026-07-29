import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service // CIRQIT LABS",
  description:
    "Customer Terms and Conditions of Sale for Cirqit Labs (https://shop.cirqit-labs.com). E-commerce standards under Danish Consumer Law, mandatory 14-day right of withdrawal (angreret), 24-month legal warranty (reklamationsret), pricing, delivery, and business details.",
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Top Header Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>E-COMMERCE TERMS & CUSTOMER PROTECTION POLICY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            These Terms of Service govern all orders, digital interactions, and custom additive manufacturing contracts conducted via{" "}
            <a
              href="https://shop.cirqit-labs.com"
              className="text-amber-400 underline font-mono hover:text-amber-300"
            >
              https://shop.cirqit-labs.com
            </a>{" "}
            in full compliance with EU Consumer Protection Directives and Danish Consumer Law.
          </p>
        </div>

        {/* Legal Company Information Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-slate-400">
          <div>
            <span className="text-slate-500 block uppercase mb-1">// Legal Entity</span>
            <span className="text-white font-bold text-sm block">Cirqit Labs ApS</span>
            <span className="text-slate-500">t/a Cirqit-Labs 3D</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase mb-1">// CVR / VAT No.</span>
            <span className="text-amber-400 font-bold text-sm block">DK12345678</span>
            <span className="text-slate-500">Danish Business Reg.</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase mb-1">// Registered Address</span>
            <span className="text-slate-200 block">Tech Avenue 42</span>
            <span className="text-slate-400">DK-8000 Aarhus C, Denmark</span>
          </div>
          <div>
            <span className="text-slate-500 block uppercase mb-1">// Legal Contact</span>
            <a href="mailto:legal@cirqit-labs.com" className="text-amber-400 hover:underline block font-bold">
              legal@cirqit-labs.com
            </a>
            <a href="mailto:support@cirqit-labs.com" className="text-slate-400 hover:underline block">
              support@cirqit-labs.com
            </a>
          </div>
        </div>

        {/* Statutory Consumer Guarantee Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900/90 border border-amber-500/30 rounded-xl p-6 mb-12 shadow-lg relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="font-mono text-sm font-bold uppercase tracking-wider text-amber-400 mb-1">
                // EU E-Commerce & Danish Consumer Rights Protection
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                All consumer transactions on shop.cirqit-labs.com are fully protected under European Union e-commerce standards and Danish legislation, including a statutory <strong className="text-white">14-day Right of Withdrawal (<em>Angreret</em>)</strong> and a mandatory <strong className="text-white">24-month Legal Warranty (<em>Reklamationsret</em>)</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 mb-12">
          <h2 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
            // Section Navigation
          </h2>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <a href="#general-scope" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">01.</span> General Scope & Company Details
            </a>
            <a href="#pricing-vat" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">02.</span> Pricing, Currency & VAT (Moms)
            </a>
            <a href="#payment-order" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">03.</span> Payment & Order Processing
            </a>
            <a href="#delivery-shipping" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">04.</span> Delivery & Order Fulfillment
            </a>
            <a href="#withdrawal-angreret" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">05.</span> 14-Day Right of Withdrawal (Angreret)
            </a>
            <a href="#warranty-reklamation" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">06.</span> 24-Month Legal Warranty (Reklamationsret)
            </a>
            <a href="#liability-limits" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">07.</span> Liability Limits & Disclaimers
            </a>
            <a href="#dispute-law" className="text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-2">
              <span className="text-slate-600 font-mono">08.</span> Applicable Law & Dispute Resolution
            </a>
          </nav>
        </div>

        {/* Main Content Articles */}
        <div className="space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Section 1 */}
          <section id="general-scope" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 01</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              1. General Scope & Company Identification
            </h2>
            <p className="mb-4">
              These Terms of Service apply to all sales contracts, orders, catalog purchases, and custom 3D additive manufacturing services executed on{" "}
              <strong className="text-white">https://shop.cirqit-labs.com</strong> between Cirqit Labs ApS (&quot;Cirqit Labs&quot;, &quot;we&quot;, &quot;us&quot;) and the customer (&quot;you&quot;).
            </p>
            <p>
              By placing an order on our platform, you accept these terms without reservation. Any conflicting terms proposed by the customer shall not apply unless explicitly agreed upon in writing by Cirqit Labs.
            </p>
          </section>

          {/* Section 2 */}
          <section id="pricing-vat" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 02</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              2. Pricing, Currency & Value Added Tax (VAT / Moms)
            </h2>
            <div className="space-y-4">
              <p>
                All retail product prices displayed on <strong className="text-white">https://shop.cirqit-labs.com</strong> are stated inclusive of Danish Value Added Tax (<em>moms</em> at 25%) for consumer orders within the European Union, unless explicitly stated otherwise.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-300">
                <li>
                  <strong className="text-white">Currency:</strong> Prices are displayed in DKK or EUR depending on your regional locale settings.
                </li>
                <li>
                  <strong className="text-white">Shipping Fees:</strong> Shipping charges are calculated dynamically based on package weight, volume, destination country, and selected carrier (e.g. PostNord, DHL Express, GLS) and are clearly broken down at checkout before final order confirmation.
                </li>
                <li>
                  <strong className="text-white">Price Modifications:</strong> Cirqit Labs reserves the right to modify catalog prices at any time. Prices applicable to an order are those published at the exact time the order was placed.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="payment-order" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 03</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              3. Payment Authorization & Order Processing
            </h2>
            <div className="space-y-4">
              <p>
                We support secure electronic payment methods including major Credit/Debit Cards (Visa, Mastercard, Dankort), MobilePay, Apple Pay, Google Pay, and Klarna.
              </p>
              <div className="bg-slate-900/70 border border-slate-800 rounded-lg p-5">
                <h4 className="font-mono text-xs font-bold text-amber-400 uppercase mb-2">
                  // Payment Processing Rules
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold">•</span>
                    <span><strong>Card Authorization:</strong> Upon submitting your order, an authorization hold is placed on your payment card.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold">•</span>
                    <span><strong>Standard Goods Debit:</strong> For standard catalog inventory, funds are debited only when the order is physically dispatched from our facility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold">•</span>
                    <span><strong>Custom 3D Fabrication Debit:</strong> For custom CAD print jobs (.STL/.STEP), funds are debited when physical production (slicing and print queuing) commences.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="delivery-shipping" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 04</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              4. Delivery, Fulfillment & Lead Times
            </h2>
            <p className="mb-4">
              Orders are dispatched from our Aarhus facility to the shipping address designated during checkout.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-amber-400 block mb-1">// IN-STOCK CATALOG GOODS</span>
                <strong className="text-white block mb-1">1 - 3 Business Days Dispatch</strong>
                <p className="text-xs text-slate-400">
                  Standard items in stock are packed and handed over to shipping carriers within 24 to 72 hours.
                </p>
              </div>
              <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-amber-400 block mb-1">// CUSTOM ADDITIVE FABRICATION</span>
                <strong className="text-white block mb-1">Production Lead Time</strong>
                <p className="text-xs text-slate-400">
                  Custom print runs (PETG, ASA, TPU, PETG-CF) are queued immediately. Estimated build times are provided in order confirmations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Mandatory Right of Withdrawal (Angreret) */}
          <section id="withdrawal-angreret" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 05</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              5. Mandatory 14-Day Right of Withdrawal (<em>Angreret</em>)
            </h2>
            <p className="mb-4">
              Under the Danish Consumer Contracts Act (<em>Forbrugeraftaleloven</em> § 18) and the EU Consumer Rights Directive (2011/83/EU), consumers have the right to withdraw from a purchase contract within <strong className="text-white">14 calendar days</strong> without providing any reason.
            </p>

            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4 mb-6">
              <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                // Right of Withdrawal Terms & Conditions
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-amber-400 font-bold">1.</span>
                  <span><strong>Cooling-off Period:</strong> The 14-day withdrawal period begins on the calendar day on which you (or a designated third party other than the carrier) take physical possession of the goods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-amber-400 font-bold">2.</span>
                  <span><strong>Exercise Procedure:</strong> To exercise your right of withdrawal, notify us via an unambiguous statement sent by email to <a href="mailto:support@cirqit-labs.com" className="text-amber-400 underline">support@cirqit-labs.com</a> prior to the expiration of the 14-day deadline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-amber-400 font-bold">3.</span>
                  <span><strong>Return Obligations:</strong> Returned items must be shipped back within 14 days of notifying us. Customers bear the direct costs of return postage unless the item delivered was incorrect or defective.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-amber-400 font-bold">4.</span>
                  <span><strong>Full Refund:</strong> Upon receiving and inspecting the returned goods, we will refund all payments received from you, including initial standard delivery costs, using the original payment method within 14 days.</span>
                </li>
              </ul>
            </div>

            {/* Custom Print Exclusion Note */}
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
              <strong className="font-mono uppercase text-amber-400 block mb-1">// Custom Additive Manufacturing Statutory Exception:</strong>
              Pursuant to <em>Forbrugeraftaleloven</em> § 18, stk. 2, nr. 3, goods manufactured to unique consumer specifications or personalized requirements (such as bespoke 3D CAD prints produced from user-supplied STEP/STL models) are exempt from the standard 14-day right of withdrawal once physical fabrication has commenced.
            </div>
          </section>

          {/* Section 6: Mandatory Legal Warranty (Reklamationsret) */}
          <section id="warranty-reklamation" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 06</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              6. Mandatory 24-Month Legal Warranty (<em>Reklamationsret</em>)
            </h2>
            <p className="mb-4">
              All consumer purchases on shop.cirqit-labs.com are covered by a statutory <strong className="text-white">24-month legal warranty</strong> (<em>reklamationsret</em>) in accordance with the Danish Sale of Goods Act (<em>Købeloven</em> § 83).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-emerald-400 block mb-1">// STATUTORY DURATION</span>
                <strong className="text-white block mb-1">24 Months Guarantee</strong>
                <p className="text-xs text-slate-400">
                  Covers material defects, structural infill weakness, or manufacturing flaws present at delivery.
                </p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-emerald-400 block mb-1">// STATUTORY REMEDIES</span>
                <strong className="text-white block mb-1">Repair, Replace or Refund</strong>
                <p className="text-xs text-slate-400">
                  Depending on the scenario, defects will be remedied via free reprint, component repair, or price reduction.
                </p>
              </div>
              <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-lg">
                <span className="font-mono text-xs text-emerald-400 block mb-1">// NOTICE TIMELINE</span>
                <strong className="text-white block mb-1">Timely Complaint Notice</strong>
                <p className="text-xs text-slate-400">
                  Complaints filed within 2 months of discovering a defect are always deemed timely under Danish law.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              Note: The warranty does not cover defects caused by normal wear and tear, improper handling, heat distortion above material specifications (e.g., exposing standard PLA to temperatures exceeding 55°C), or unauthorized mechanical alterations.
            </p>
          </section>

          {/* Section 7 */}
          <section id="liability-limits" className="scroll-mt-20 border-b border-slate-800/80 pb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 07</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              7. Limitation of Liability & Engineering Use
            </h2>
            <p className="mb-4">
              Cirqit Labs guarantees that all physical parts conform to published tolerances (±0.1mm standard) and material data sheets.
            </p>
            <p className="mb-4">
              To the maximum extent permitted by applicable Danish law, Cirqit Labs shall not be liable for indirect, incidental, or consequential damages resulting from part misuse in critical structural or high-risk applications unless specifically certified in writing. Our maximum aggregate liability for any claim is capped at the total purchase price paid for the specific order.
            </p>
          </section>

          {/* Section 8 */}
          <section id="dispute-law" className="scroll-mt-20">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 mb-2">
              <span>// SECTION 08</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              8. Applicable Law & Consumer Dispute Resolution
            </h2>
            <p className="mb-4">
              These Terms of Service are governed by and construed in accordance with the laws of Denmark (<em>Dansk ret</em>), excluding its conflict of law provisions.
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4">
              <h4 className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider">
                // Official Dispute Bodies & Contact Points
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
                  <strong className="text-white block mb-1">Danish Consumer Complaints Board</strong>
                  <p className="text-slate-400 mb-2">
                    Nævnenes Hus - Center for Klageløsning, Toldboden 2, 8800 Viborg, Denmark.
                  </p>
                  <a
                    href="https://www.forbrug.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-mono hover:underline"
                  >
                    www.forbrug.dk &rarr;
                  </a>
                </div>
                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-lg">
                  <strong className="text-white block mb-1">EU Online Dispute Resolution (ODR)</strong>
                  <p className="text-slate-400 mb-2">
                    Official European Commission ODR platform for cross-border e-commerce disputes.
                  </p>
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 font-mono hover:underline"
                  >
                    ec.europa.eu/consumers/odr &rarr;
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div>
                  Questions? Contact legal department:{" "}
                  <a href="mailto:legal@cirqit-labs.com" className="text-amber-400 hover:underline">
                    legal@cirqit-labs.com
                  </a>
                </div>
                <div>CVR: DK12345678</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
