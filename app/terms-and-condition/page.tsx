// Server Component (NO "use client")
export const dynamic = 'force-dynamic';

import dynamicImport from 'next/dynamic';
import { BreadcrumbStructuredData } from '../components/BreadcrumbStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';

const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const Footer = dynamicImport(() => import('../components/Footer'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen w-full relative bg-white">
      <PageStructuredData
        title="Sales Terms & Conditions — Toto Token & Assets | Toto Finance"
        description="Terms and conditions governing the sale, purchase, and use of the TOTO token and Toto Finance platform services. Toto Finance Inc. is the main operator; TotoHolding AG provides Liechtenstein physical custody of stones and assets."
        url="https://totofinance.co/terms-and-condition"
        pageType="WebPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Terms & Conditions', item: 'https://totofinance.co/terms-and-condition' },
        ]}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'Terms & Conditions', item: 'https://totofinance.co/terms-and-condition' },
        ]}
      />
      <GradualBlur
        preset="page-footer"
        strength={2}
        height="4rem"
        animated="scroll"
        duration="0.5s"
      />
      <Navigation pastHero={true} />

      <section className="px-6 md:px-8 lg:px-12 pt-20 md:pt-32 pb-20 md:pb-32 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mb-2">
            Sales Terms &amp; Conditions
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-600 mb-4">Toto Token &amp; Assets</p>
          <p className="text-gray-500 text-sm mb-10">Effective Date: March 2025</p>

          <div className="prose prose-gray max-w-none space-y-10">

            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms &amp; Conditions (the &quot;Terms&quot;) govern the sale, purchase, and use of the TOTO token (the &quot;Token&quot;) and your use of the Toto Finance platform and services.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold mb-4">
                By participating in the Token Sale, accessing our platform, or purchasing Tokens, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not participate in the Token Sale or use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These Terms constitute a legally binding agreement between you (&quot;you,&quot; &quot;your,&quot; or &quot;Purchaser&quot;) and the entities described below.
              </p>
            </section>

            {/* 2. Parties and Roles */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">2. Parties and Roles</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Toto Finance Inc.</strong> (United States) is the principal operating entity for the Toto Finance – Total Tokenization platform. Toto Finance Inc. operates the website, digital platform, and related services described in these Terms, and is your primary counterparty for platform access, user agreements, and non-custodial digital services except where another entity is expressly identified.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>TotoHolding AG</strong> (Herrengasse 6, 9490 Vaduz, Liechtenstein) holds physical custody in Liechtenstein of vaulted stones, gemstones, precious metals, commodities, and other tangible assets that back or relate to tokenized products offered through the ecosystem, in accordance with applicable custody arrangements, insurance, and verification standards. TotoHolding AG does not operate as &quot;Toto Finance AG&quot;; no entity by that name exists. All references in prior materials to licensing or custody attributed to &quot;Toto Finance AG&quot; at this address are superseded by the roles of Toto Finance Inc. (operations) and TotoHolding AG (Liechtenstein physical custody).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>LCX AG</strong> (Herrengasse 6, 9490 Vaduz, Liechtenstein) is a regulated Virtual Asset Service Provider under the Liechtenstein Token and TT Service Provider Act (TVTG) since 2020, registered with the Financial Market Authority of Liechtenstein (FMA) under registration No. 288159. LCX AG serves as:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
                <li>The official issuer of the TOTO Token</li>
                <li>A registered Physical Validator under the Liechtenstein Blockchain Act</li>
                <li>The trusted technology service provider for the Toto Finance platform</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">LCX AG is registered to provide the following services under TVTG:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
                <li>TT Exchange Service Provider</li>
                <li>TT Token Depositary</li>
                <li>Token Generator</li>
                <li>TT Key Depositary</li>
                <li>TT Price Service Provider</li>
                <li>TT Identity Service Provider</li>
                <li>TT Token Issuer (for its own account and for third parties)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                References to &quot;Toto Finance,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; in these Terms refer collectively to <strong>Toto Finance Inc.</strong> (as main operator), <strong>TotoHolding AG</strong> (as to Liechtenstein physical custody of stones and assets), <strong>LCX AG</strong>, and their affiliates, as applicable to the relevant service or obligation.
              </p>
            </section>

            {/* 3. No Public Offering */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">3. No Public Offering</h2>
              <p className="text-gray-600 leading-relaxed font-semibold mb-4">
                IMPORTANT: The TOTO Token is NOT offered through a public token sale.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The TOTO Token was originally issued as the TIA Token on June 5, 2023 under Liechtenstein&apos;s TVTG Blockchain Laws. The TOTO Token is an upgrade of the TIA Token, with migration occurring at a 1:1 ratio.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                TOTO Tokens are not distributed through an initial coin offering (ICO), initial exchange offering (IEO), or any form of public sale conducted by Toto Finance Inc. or LCX AG. Tokens may only be acquired through:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-4">
                <li><strong>LCX Exchange</strong> (<a href="https://LCX.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">LCX.com</a>) — A regulated exchange operated by LCX AG under Liechtenstein&apos;s TVTG framework</li>
                <li><strong>Decentralized exchanges</strong> (e.g., Uniswap) — Third-party platforms not operated or controlled by Toto Finance</li>
                <li><strong>Secondary market trading</strong> — Other exchanges where the token may be listed from time to time</li>
                <li><strong>Token migration</strong> — Existing TIA Token holders may migrate their tokens to TOTO at a 1:1 ratio. <a href="https://www.toto.xyz/upgrade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">https://www.toto.xyz/upgrade</a> (Note: Upgrade available until March 4, 2026)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                <strong>Disclaimer regarding decentralized exchanges:</strong> Decentralized exchanges such as Uniswap are not operated, controlled, or endorsed by Toto Finance Inc., LCX AG, or any affiliated entity. Trading on decentralized platforms is conducted entirely at your own risk. We make no representations regarding liquidity, pricing, or security on such platforms.
              </p>
            </section>

            {/* 4. Token Overview */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">4. Token Overview</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm text-left text-gray-600 border border-gray-200 rounded-lg">
                  <tbody>
                    <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Token Name</td><td className="px-4 py-3">TOTO</td></tr>
                    <tr className="border-b border-gray-200"><td className="px-4 py-3 font-medium text-gray-900">Token Type</td><td className="px-4 py-3">Utility Token</td></tr>
                    <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Token Standard</td><td className="px-4 py-3">ERC-20</td></tr>
                    <tr className="border-b border-gray-200"><td className="px-4 py-3 font-medium text-gray-900">Blockchain</td><td className="px-4 py-3">Ethereum (with multi-chain integration planned)</td></tr>
                    <tr className="border-b border-gray-200 bg-gray-50"><td className="px-4 py-3 font-medium text-gray-900">Total Supply</td><td className="px-4 py-3">1,000,000,000 (one billion) TOTO Tokens</td></tr>
                    <tr><td className="px-4 py-3 font-medium text-gray-900">Smart Contract</td><td className="px-4 py-3 break-all">0xC214A0B73Ce4c30594B4173219e885691254801b</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Smart Contract Audit:</strong> The TOTO Token smart contract has been audited by independent security auditor: Hacken. Audit reports are available here: <a href="https://hacken.io/audits/toto-finance/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">https://hacken.io/audits/toto-finance/</a>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Token Utility:</strong> The TOTO Token is classified as a utility token and functions as a digital value voucher within the Toto Finance ecosystem. It provides:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-4">
                <li>Discounts on platform service fees</li>
                <li>Rewards for participation in competitions and promotions</li>
                <li>Access to platform features and services</li>
                <li>Smart contract-enabled automated fee reductions and reward distributions</li>
              </ul>
              <p className="text-gray-600 leading-relaxed font-semibold">
                The TOTO Token does not represent equity, debt, ownership, profit-sharing rights, voting rights, or any claim to dividends or distributions from Toto Finance Inc., LCX AG, TotoHolding AG, or any affiliated entity.
              </p>
            </section>

            {/* 5. Eligibility and Restricted Jurisdictions */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">5. Eligibility and Restricted Jurisdictions</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Eligibility Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">To participate in the Token Sale, you must:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Be at least 18 years of age (or the age of legal majority in your jurisdiction)</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be a resident or citizen of a Restricted Jurisdiction (defined below)</li>
                <li>Successfully complete all required KYC/AML verification procedures</li>
                <li>Not be listed on any sanctions list maintained by the U.S. (OFAC), EU, UN, or other applicable authorities</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Restricted Jurisdictions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">The Token Sale is NOT available to residents, citizens, or persons located in the following restricted jurisdictions:</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Sanctioned and High-Risk Jurisdictions:</strong> Afghanistan, Angola, Bahamas, Barbados, Bangladesh, Bosnia and Herzegovina, Botswana, Burkina Faso, BVI, Cambodia, Cayman Islands, China, Colombia, Cook Islands, Crimea Region, Cuba, Ecuador, Eritrea, Ethiopia, Ghana, Guyana, Iran, Iraq, Jamaica, Kenya, Kosovo, Laos, Lebanon, Libya, Mauritius, Montserrat, Morocco, Myanmar (Burma), Nauru, Nicaragua, North Korea, Pakistan, Palestinian Territory and Gaza Strip, Panama, Papua New Guinea, Samoa, Sao Tome and Principe, Senegal, Somalia, South Sudan, Sri Lanka, Sudan, Syria, Tonga, Trinidad and Tobago, Tunisia, Uganda, United States of America and its territories, Vanuatu, Venezuela, Yemen, Zimbabwe.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">This list may be updated from time to time to reflect changes in applicable sanctions, regulations, or risk assessments. It is your responsibility to ensure you are not located in or a resident of a restricted jurisdiction.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Your Representations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">By participating, you represent and warrant that:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>You meet all eligibility requirements</li>
                <li>You are not purchasing Tokens on behalf of any person in a Restricted Jurisdiction</li>
                <li>You will not resell or transfer Tokens to any person in a Restricted Jurisdiction</li>
                <li>All information you provide is accurate, complete, and not misleading</li>
              </ul>
            </section>

            {/* 6. Token Acquisition */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">6. Token Acquisition</h2>
              <p className="text-gray-600 leading-relaxed mb-6">Since there is no public token sale, this section describes how TOTO Tokens may be acquired.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 LCX Exchange</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                TOTO Tokens may be purchased on LCX Exchange (<a href="https://LCX.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">LCX.com</a>), a regulated centralized exchange operated by LCX AG under Liechtenstein&apos;s TVTG framework. To purchase on LCX Exchange:
              </p>
              <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Create an account at LCX.com</li>
                <li>Complete KYC/AML verification</li>
                <li>Deposit funds or cryptocurrency</li>
                <li>Purchase TOTO Tokens through available trading pairs</li>
              </ol>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Decentralized Exchanges</h3>
              <p className="text-gray-600 leading-relaxed mb-4">TOTO Tokens may be available on decentralized exchanges such as Uniswap.</p>
              <p className="text-gray-600 leading-relaxed mb-4"><strong>Important:</strong> Decentralized exchanges are NOT operated, controlled, or endorsed by Toto Finance Inc. or LCX AG. When using decentralized exchanges:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>You are solely responsible for verifying the correct token contract address</li>
                <li>There is no customer support or recourse for errors</li>
                <li>Liquidity and pricing are determined by market participants</li>
                <li>Smart contract risks and impermanent loss may apply</li>
                <li>You assume all risks associated with decentralized trading</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Token Migration (TIA to TOTO)</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Existing TIA Token holders may migrate their tokens to TOTO Tokens at a 1:1 ratio through the official migration portal at <a href="https://www.toto.xyz/upgrade" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">www.toto.xyz/upgrade</a>
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.4 Secondary Markets</h3>
              <p className="text-gray-600 leading-relaxed mb-6">TOTO Tokens may be listed on additional exchanges from time to time. Announcements regarding new listings will be made through official Toto Finance channels. Always verify that you are using official and legitimate platforms.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.5 Transaction Finality</h3>
              <p className="text-gray-600 leading-relaxed mb-4">All token acquisitions are final. Blockchain transactions are irreversible. You are solely responsible for:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Verifying the correct token contract address</li>
                <li>Providing the correct wallet address</li>
                <li>Securing your private keys and wallet access</li>
              </ul>
            </section>

            {/* 7. KYC/AML Compliance */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">7. KYC/AML Compliance</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Verification Requirements</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Participation in the Token Sale is subject to anti-money laundering (AML) and know-your-customer (KYC) verification. You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Provide accurate identification documents as requested</li>
                <li>Submit to identity verification procedures</li>
                <li>Provide proof of address and source of funds if requested</li>
                <li>Cooperate with ongoing due diligence requirements</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Right to Refuse</h3>
              <p className="text-gray-600 leading-relaxed mb-4">We reserve the right to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Refuse or cancel any Token purchase at our sole discretion</li>
                <li>Delay or withhold Token delivery pending verification completion</li>
                <li>Report suspicious activity to relevant authorities as required by law</li>
                <li>Terminate your account if verification cannot be completed satisfactorily</li>
              </ul>
            </section>

            {/* 8. Physical Asset Validation and Redemption */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">8. Physical Asset Validation and Redemption</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Physical Validator Role</h3>
              <p className="text-gray-600 leading-relaxed mb-4">LCX AG, as the first registered Physical Validator under the Liechtenstein Blockchain Act, ensures:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Authentication and verification of underlying physical assets</li>
                <li>Compliance with certification standards (GIA, LBMA, and other applicable standards)</li>
                <li>Regulatory compliance for tokenized assets</li>
                <li>Independent verification reports and auditability</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Asset Custody</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Physical stones, gemstones, precious metals, and other vaulted tangible assets underlying applicable tokenized products in Liechtenstein are held under the custody arrangements of <strong>TotoHolding AG</strong> (Herrengasse 6, 9490 Vaduz, Liechtenstein), subject to product-specific documentation. Such physical assets are:
              </p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Securely held in insured custody facilities</li>
                <li>Certified by recognized authorities (e.g., GIA for diamonds)</li>
                <li>Insured by reputable insurers (e.g., Lloyd&apos;s)</li>
                <li>Subject to regular audits and verification</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.3 Redemption Process</h3>
              <p className="text-gray-600 leading-relaxed mb-4">For tokenized assets that offer physical redemption:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Redemption requests must be submitted through the official Toto Finance platform</li>
                <li>Minimum redemption thresholds may apply depending on the asset</li>
                <li>Redemption is subject to verification of token ownership and identity</li>
                <li>Delivery timelines, fees, and logistics will be communicated at the time of redemption</li>
                <li>Geographic restrictions may apply for physical delivery</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.4 Redemption Fees</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Redemption may be subject to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Processing and administrative fees</li>
                <li>Shipping, insurance, and handling costs</li>
                <li>Customs duties and import taxes (your responsibility)</li>
                <li>Any other fees as disclosed at the time of redemption</li>
              </ul>
            </section>

            {/* 9. Risk Disclosures */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">9. Risk Disclosures</h2>
              <p className="text-gray-600 leading-relaxed font-semibold mb-6">
                IMPORTANT: Acquiring and holding TOTO Tokens involves significant risks. You should carefully consider the following risks:
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Tokens are Non-Refundable</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Toto Finance Inc. and LCX AG are not obliged to provide token holders with a refund for any reason. Token holders cannot request an exchange or redemption of monetary value vis-à-vis Toto Finance Inc. or LCX AG except as specifically provided for tokenized assets with redemption rights.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Tokens are Provided on an &quot;As Is&quot; Basis</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Tokens are provided on an &quot;as is&quot; basis. Toto Finance Inc., LCX AG, TotoHolding AG, and their respective directors, officers, employees, and affiliates make no representations or warranties of any kind, whether express, implied, or statutory. Digital assets are part of a new and rapidly evolving industry, and the value of TOTO Tokens depends on the development and acceptance of this industry.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.3 Market and Volatility Risks</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Token values can fluctuate dramatically and may lose all value</li>
                <li>Extreme volatility could have a material adverse effect on token value</li>
                <li>Past performance is not indicative of future results</li>
                <li>Liquidity may be limited, and you may not be able to sell tokens when desired</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.4 Risks Relating to Digital Asset Networks</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Digital asset networks are dependent upon the internet</li>
                <li>A disruption of the internet, the Ethereum network, or any other blockchain network on which the token may operate in the future, would affect the ability to transfer tokens</li>
                <li>Many digital asset networks face significant scaling challenges</li>
                <li>Banks may not provide banking services to digital asset businesses, which could dampen liquidity</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.5 Smart Contract Risks</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>The Ethereum blockchain rests on open source software</li>
                <li>Token smart contracts may contain intentional or unintentional bugs or weaknesses</li>
                <li>Such issues may negatively affect tokens or result in loss or theft</li>
                <li>In the event of a software bug, there may be no remedy, refund, or compensation</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.6 Loss of Private Keys</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>If a private key is lost, destroyed, or compromised and no backup is accessible, you will not be able to access your tokens</li>
                <li>Neither Toto Finance Inc. nor LCX AG can restore lost private keys</li>
                <li>Loss of private keys results in permanent, irreversible loss of tokens</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.7 Irreversible Nature of Blockchain Transactions</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Transactions recorded on the blockchain generally cannot be undone</li>
                <li>Even erroneous or fraudulent transactions are not reversible</li>
                <li>Neither Toto Finance Inc. nor LCX AG can replace missing tokens or seek reimbursement for erroneous transfers or theft</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.8 Risk of Wallet Loss, Hack, or Data Theft</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Tokens are held in wallets with coded access</li>
                <li>If you lose wallet access, tokens will be permanently lost</li>
                <li>If unauthorized third parties gain access to your wallet, tokens may be stolen</li>
                <li>Neither Toto Finance Inc. nor LCX AG can issue replacement tokens</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.9 Regulatory Risks</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Cryptocurrency regulations vary by jurisdiction and are evolving</li>
                <li>Future regulatory changes may adversely affect token value or utility</li>
                <li>Tokens may be classified differently in different jurisdictions</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.10 Tax Risks</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>You must seek your own tax advice in relevant jurisdictions</li>
                <li>Token acquisition, holding, and disposal may result in adverse tax consequences</li>
                <li>Tax treatment varies by jurisdiction and is subject to change</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.11 Operational Risks</h3>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>The Toto Finance platform may experience downtime or discontinuation</li>
                <li>Third-party service providers may fail or become unavailable</li>
                <li>The project may not achieve its stated objectives</li>
              </ul>

              <p className="text-gray-600 leading-relaxed font-semibold">
                BY ACQUIRING TOKENS, YOU ACKNOWLEDGE THAT YOU UNDERSTAND AND ACCEPT THESE RISKS.
              </p>
            </section>

            {/* 10. User Responsibilities */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">10. User Responsibilities</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 General Obligations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Use the platform and Tokens only for lawful purposes</li>
                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                <li>Maintain the security of your account credentials and wallet</li>
                <li>Provide accurate and up-to-date information</li>
                <li>Promptly notify us of any unauthorized account access</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Prohibited Activities</h3>
              <p className="text-gray-600 leading-relaxed mb-4">You shall not:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Use the platform for money laundering, terrorist financing, or other illegal activities</li>
                <li>Circumvent geographic restrictions or verification requirements</li>
                <li>Manipulate Token prices or engage in market manipulation</li>
                <li>Interfere with platform operations or security</li>
                <li>Use bots, scripts, or automated tools without authorization</li>
                <li>Infringe on intellectual property rights</li>
                <li>Misrepresent your identity or eligibility</li>
              </ul>
            </section>

            {/* 11. No Investment Advice */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">11. No Investment Advice</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.1 Not Financial Advice</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Nothing in these Terms, or any Toto Finance communications constitutes:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Financial, investment, legal, or tax advice</li>
                <li>A recommendation to purchase Tokens</li>
                <li>An offer of securities or investment products</li>
                <li>A solicitation of investment</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">11.2 Independent Evaluation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">You should:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Conduct your own research and due diligence</li>
                <li>Consult with qualified financial, legal, and tax advisors</li>
                <li>Only invest what you can afford to lose</li>
                <li>Make independent decisions based on your own circumstances</li>
              </ul>
            </section>

            {/* 12. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">12. Intellectual Property</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.1 Ownership</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Toto Finance Inc., LCX AG, and their licensors retain all rights, title, and interest in:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>The Toto Finance platform, software, and technology</li>
                <li>All trademarks, logos, and branding (including &quot;Toto Finance,&quot; &quot;TOTO,&quot; and &quot;Total Tokenization&quot;)</li>
                <li>Documentation, content, and materials</li>
                <li>Smart contract code and related technology</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.2 Limited License</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Access and use the platform for its intended purposes</li>
                <li>Hold and transfer Tokens in accordance with these Terms</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">12.3 Restrictions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">You may not:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Copy, modify, or create derivative works of the platform</li>
                <li>Reverse engineer or decompile any software</li>
                <li>Use our trademarks without written permission</li>
                <li>Remove or alter any proprietary notices</li>
              </ul>
            </section>

            {/* 13. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">13. Limitation of Liability</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.1 Disclaimer of Warranties</h3>
              <p className="text-gray-600 leading-relaxed mb-6 uppercase font-semibold text-sm">
                The platform, tokens, and services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.2 Limitation of Liability</h3>
              <p className="text-gray-600 leading-relaxed mb-4 uppercase font-semibold text-sm">To the maximum extent permitted by applicable law:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2 mb-6 uppercase font-semibold text-sm">
                <li>In no event shall Toto Finance Inc., LCX AG, TotoHolding AG, or their affiliates, directors, officers, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability shall not exceed the amount you paid for tokens in the 12 months preceding the claim</li>
                <li>We are not liable for losses arising from third-party actions, blockchain network issues, or events outside our reasonable control</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">13.3 Specific Exclusions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">We are not liable for:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Loss or theft of Tokens due to your failure to secure your wallet</li>
                <li>Losses from incorrect wallet addresses you provide</li>
                <li>Losses from third-party hacks or security breaches not caused by our negligence</li>
                <li>Market losses or price fluctuations</li>
                <li>Regulatory actions affecting Token value or utility</li>
              </ul>
            </section>

            {/* 14. Indemnification */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">14. Indemnification</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You agree to indemnify, defend, and hold harmless Toto Finance Inc., LCX AG, TotoHolding AG, their affiliates, and their respective directors, officers, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including legal fees) arising from:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Your breach of these Terms</li>
                <li>Your violation of applicable laws</li>
                <li>Your use of the platform or Tokens</li>
                <li>Your negligence or misconduct</li>
                <li>Any claims by third parties related to your activities</li>
              </ul>
            </section>

            {/* 15. Refunds and Cancellations */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">15. Refunds and Cancellations</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.1 General Policy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Token purchases are final and non-refundable. Due to the nature of blockchain transactions, completed purchases cannot be reversed.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.2 Exceptions</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Refunds may be provided only:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Where required by applicable mandatory consumer protection laws</li>
                <li>If Tokens cannot be delivered due to our failure</li>
                <li>At our sole discretion in exceptional circumstances</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">15.3 Refund Process</h3>
              <p className="text-gray-600 leading-relaxed mb-4">If a refund is approved:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Refunds will be made in the original payment currency where possible</li>
                <li>Processing may take up to 30 business days</li>
                <li>Network fees and transaction costs may be deducted</li>
              </ul>
            </section>

            {/* 16. Privacy and Data Protection */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">16. Privacy and Data Protection</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Your personal data is processed in accordance with our <a href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</a>.</p>
              <p className="text-gray-600 leading-relaxed">By participating in the Token Sale, you consent to the collection, use, and processing of your personal data as described in the Privacy Policy, including for KYC/AML compliance purposes.</p>
            </section>

            {/* 17. Tax Obligations */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">17. Tax Obligations</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.1 Your Responsibility</h3>
              <p className="text-gray-600 leading-relaxed mb-4">You are solely responsible for:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1 mb-6">
                <li>Determining your tax obligations related to Token purchases, sales, and holdings</li>
                <li>Reporting and paying all applicable taxes in your jurisdiction</li>
                <li>Maintaining records for tax purposes</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.2 No Tax Advice</h3>
              <p className="text-gray-600 leading-relaxed mb-6">We do not provide tax advice. Tax treatment of digital tokens varies by jurisdiction and is subject to change. Consult a qualified tax advisor.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">17.3 Withholding</h3>
              <p className="text-gray-600 leading-relaxed">We may be required to withhold taxes or report transactions to tax authorities in certain jurisdictions. You agree to cooperate with any such requirements.</p>
            </section>

            {/* 18. Force Majeure */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">18. Force Majeure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to:</p>
              <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-1">
                <li>Natural disasters, war, terrorism, or civil unrest</li>
                <li>Government actions, regulations, or sanctions</li>
                <li>Blockchain network failures or attacks</li>
                <li>Internet or infrastructure outages</li>
                <li>Pandemics or public health emergencies</li>
              </ul>
            </section>

            {/* 19. Amendments */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">19. Amendments</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We reserve the right to amend these Terms at any time to comply with evolving laws, regulations, or operational requirements.</p>
              <p className="text-gray-600 leading-relaxed mb-4">Changes will be communicated via the Toto Finance website. Your continued use of the platform or holding of Tokens after changes are posted constitutes acceptance of the modified Terms.</p>
              <p className="text-gray-600 leading-relaxed">For material changes that significantly affect your rights, we will endeavor to provide advance notice where practicable.</p>
            </section>

            {/* 20. Severability */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">20. Severability</h2>
              <p className="text-gray-600 leading-relaxed">If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, severed from these Terms. The remaining provisions shall continue in full force and effect.</p>
            </section>

            {/* 21. Waiver */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">21. Waiver</h2>
              <p className="text-gray-600 leading-relaxed">No failure or delay by us in exercising any right under these Terms shall constitute a waiver of that right. Any waiver must be in writing and signed by an authorized representative.</p>
            </section>

            {/* 22. Assignment */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">22. Assignment</h2>
              <p className="text-gray-600 leading-relaxed">You may not assign or transfer your rights or obligations under these Terms without our prior written consent. We may assign our rights and obligations to any affiliate or in connection with a merger, acquisition, or sale of assets.</p>
            </section>

            {/* 23. Entire Agreement */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">23. Entire Agreement</h2>
              <p className="text-gray-600 leading-relaxed">These Terms, together with the Privacy Policy and any other documents expressly incorporated by reference, constitute the entire agreement between you and Toto Finance Inc. (and, as applicable, the other entities identified in Section 2) regarding the Token Sale and supersede all prior agreements and understandings.</p>
            </section>

            {/* 24. Governing Law and Jurisdiction */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">24. Governing Law and Jurisdiction</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-3">24.1 Governing Law</h3>
              <p className="text-gray-600 leading-relaxed mb-6">These Terms shall be governed by and construed in accordance with the laws of the Principality of Liechtenstein, without regard to conflict of law principles.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">24.2 Dispute Resolution</h3>
              <p className="text-gray-600 leading-relaxed mb-6">Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Liechtenstein.</p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">24.3 Arbitration Option</h3>
              <p className="text-gray-600 leading-relaxed">At our sole discretion, we may elect to resolve disputes through binding arbitration in Vaduz, Liechtenstein, under the rules of the Liechtenstein Chamber of Commerce and Industry.</p>
            </section>

            {/* 25. Contact Information */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">25. Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">For questions regarding the Token Sale, the platform, or these Terms:</p>
              <p className="text-gray-600 leading-relaxed mb-2"><strong>Toto Finance Inc.</strong> (main operator)</p>
              <p className="text-gray-600 leading-relaxed mb-1">Email: <a href="mailto:hello@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">hello@totofinance.co</a></p>
              <p className="text-gray-600 leading-relaxed mb-6">Website: <a href="https://totofinance.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">totofinance.co</a></p>
              <p className="text-gray-600 leading-relaxed mb-2"><strong>TotoHolding AG</strong> (Liechtenstein physical custody of stones and assets)</p>
              <p className="text-gray-600 leading-relaxed mb-1">Herrengasse 6, 9490 Vaduz, Liechtenstein</p>
              <p className="text-gray-600 leading-relaxed mb-6">For custody-related inquiries, contact through the channels listed on the website or <a href="mailto:legal@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">legal@totofinance.co</a>.</p>
              <p className="text-gray-600 leading-relaxed mb-1">For legal inquiries:</p>
              <p className="text-gray-600 leading-relaxed">Email: <a href="mailto:legal@totofinance.co" className="text-blue-600 hover:text-blue-700 underline">legal@totofinance.co</a></p>
            </section>

            {/* 26. Acknowledgment */}
            <section>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">26. Acknowledgment</h2>
              <p className="text-gray-600 leading-relaxed font-semibold mb-4">BY ACQUIRING TOTO TOKENS, YOU ACKNOWLEDGE THAT:</p>
              <ol className="list-decimal pl-6 text-gray-600 leading-relaxed space-y-2">
                <li>You have read, understood, and agree to these Terms in their entirety</li>
                <li>You have read and understood the risk disclosures</li>
                <li>You meet all eligibility requirements</li>
                <li>You are not relying on any representations not contained in these Terms</li>
                <li>You have had the opportunity to seek independent legal and financial advice</li>
              </ol>
            </section>

            {/* Footer Note */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <p className="text-gray-500 text-sm text-center">
                Terms &amp; Conditions — Updated: February 2026 — &copy; 2026 Toto Finance Inc. All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
