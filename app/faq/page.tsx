// Server Component (NO "use client")
// Static Generation with ISR - equivalent to getStaticProps with revalidate: 300 (5 minutes)
export const revalidate = 300;

import dynamicImport from 'next/dynamic';
import { FAQStructuredData } from '../components/FAQStructuredData';
import { PageStructuredData } from '../components/PageStructuredData';
import { Navigation } from '../components/Navigation';
import { FAQPageClient } from '../components/client/FAQPageClient';
import { HubSpotChat, ContactSupportButton } from '../components/client/HubSpotChat';

// Dynamic imports for heavy components
const GradualBlur = dynamicImport(() => import('../../src/components/GradualBlur'));
const NewsletterSection = dynamicImport(() => import('../components/NewsletterSection'));
const Footer = dynamicImport(() => import('../components/Footer'));

// Equivalent to getStaticProps - fetch data here
export default async function FAQPage() {
  // Example: Fetch FAQ data from API if available
  // const faqData = await fetch('https://api.example.com/faq', {
  //   next: { revalidate: 300 } // ISR: revalidate every 5 minutes
  // }).then(res => res.json());

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general-overview', name: 'General Overview' },
    { id: 'platform-process', name: 'Platform and Process' },
    { id: 'toto-token', name: 'Toto Token' },
    { id: 'roadmap-launch', name: 'Roadmap and Launch' },
    { id: 'user-experience', name: 'User Experience' },
    { id: 'compliance-regulation', name: 'Compliance and Regulation' },
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'asset', name: 'Asset' },
  ];

  const assetSubcategories = [
    { id: 'diamonds', name: 'Diamonds' },
    { id: 'gold', name: 'Gold' },
    { id: 'platinum', name: 'Platinum' },
    { id: 'sapphire', name: 'Sapphire' },
    { id: 'silver', name: 'Silver' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'general-overview',
      question: 'What is Toto Finance?',
      answer: 'Toto Finance is the world\'s leading digital commodity infrastructure — a global platform that enables the tokenization and trading of metals, energy resources, in-ground reserves, and other real-world assets through blockchain technology. Founded as Tiamonds in 2023 with international operations spanning the United States, North and South America, Europe, and the MENA region, Toto Finance combines the reliability of traditional finance with the efficiency and transparency of Web3 systems.\n\nThrough its Total Tokenization model, Toto Finance bridges the gap between physical and digital markets, transforming how real-world assets are verified, stored, and exchanged. The platform\'s mission is to digitize global trade powered by crypto and blockchain technology, bringing institutional-grade security, transparency, and liquidity to commodities and tangible assets — enabling 24/7 access to markets that were once closed, fragmented, or illiquid.'
    },
    {
      id: 2,
      category: 'general-overview',
      question: 'How is Toto Finance different from Tiamonds?',
      answer: 'While the original Tiamonds platform focused on diamonds, Toto Finance now includes diverse asset classes such as gemstones, commodities, and energy products — offering a broader investment ecosystem. With these expanded offerings, Toto Finance continues to set new benchmarks in real-world asset tokenization.'
    },
    {
      id: 3,
      category: 'general-overview',
      question: 'What is tokenization?',
      answer: 'Tokenization is the process of converting real-world assets into digital tokens that represent ownership. These tokens are tradable, secure, and enable fractional ownership.'
    },
    {
      id: 4,
      category: 'general-overview',
      question: 'Why is Toto Finance rebranding the $TIA token to $Toto?',
      answer: 'We are transitioning from $TIA to $Toto to enhance the utility, appeal, and overall value of the token. This rebranding aligns with our mission of "Freedom of Ownership" and introduces fresh tokenomics and new features to benefit our community.\n\nTOTO stands for "Total Tokenization," reflecting our vision to expand beyond diamonds and include multiple asset classes such as gemstones, commodities, collectibles, and real estate. Additionally, Toto will be a multichain token, enabling seamless interoperability across different blockchain networks, increasing accessibility, and enhancing liquidity for real-world asset tokenization.'
    },
    {
      id: 5,
      category: 'general-overview',
      question: 'How will this change benefit the Toto Finance community?',
      answer: 'The transition to $Toto enhances utility, adoption, and long-term value by:\n\n• Expanding beyond diamonds to include gemstones, commodities, collectibles, and real estate.\n• Going multichain for greater accessibility and liquidity.\n• Introducing new tokenomics with better rewards and incentives.\n• Strengthening Toto Finance\' position as a leader in real-world asset tokenization.\n\nThis evolution brings more opportunities, flexibility, and value to the community.'
    },
    {
      id: 6,
      category: 'general-overview',
      question: 'Can I still redeem my physical diamonds after the rebranding?',
      answer: 'Yes, you can still redeem your physical diamonds after the rebranding. The process remains unchanged, and you will continue to have access to your diamond assets as before.'
    },
    {
      id: 7,
      category: 'general-overview',
      question: 'Where can I find official updates about the $TIA to $Toto transition?',
      answer: 'All official updates will be shared on www.totofinance.co'
    },
    {
      id: 8,
      category: 'general-overview',
      question: 'Where can I find more information?',
      answer: 'Visit our website at www.totofinance.co or email us at hello@totofinance.co'
    },
    {
      id: 9,
      category: 'platform-process',
      question: 'What types of assets can I tokenize or invest in?',
      answer: 'Access tokenized gemstones, gold, silver, platinum, and energy assets — all secured, verified, and tradable on-chain.'
    },
    {
      id: 10,
      category: 'platform-process',
      question: 'How does Total Tokenization ensure asset authenticity?',
      answer: 'We partner with LCX, the first Physical Validator globally under the Liechtenstein Blockchain Act, which authenticates, verifies, and certifies assets. Moreover, assets are stored in insured and compliant vaults in Liechtenstein.'
    },
    {
      id: 11,
      category: 'platform-process',
      question: 'Can I redeem physical assets?',
      answer: 'Holders of tokenized assets on Toto Finance — including diamonds, gemstones, and precious metals — can redeem their tokens to receive the corresponding physical asset.\n\nTo complete a redemption, please follow the steps below:\n\n- Verification — Ensure you have a fully verified LCX account.\n\n- Contact Support — Email our team at hello@totofinance.co to request redemption.\n\n- Redemption Details — You will receive an email with the shipping costs, service fee, and detailed instructions on how to complete the process, including the wallet address to send your asset NFT.\n\n- Delivery or Pickup — Once your payment and NFT have been received, we will release the physical asset from our secured vault and arrange insured shipment to your address, or you may choose to collect it in person in Liechtenstein.'
    },
    {
      id: 12,
      category: 'platform-process',
      question: 'How are tokenized assets stored physically?',
      answer: 'Tokenized assets are securely stored in fully insured third-party vaults that meet global compliance standards in Liechtenstein.'
    },
    {
      id: 13,
      category: 'platform-process',
      question: 'Are there any fees associated with swapping my $TIA tokens for $Toto?',
      answer: 'No, there are no additional costs or platform fees for swapping $TIA to $Toto.\n\nYou\'ll only need to cover the standard gas fee required to process the blockchain transaction.'
    },
    {
      id: 14,
      category: 'platform-process',
      question: 'What will happen to my existing $TIA tokens?',
      answer: 'Your existing $TIA will be seamlessly swapped for $Toto at a 1:1 ratio on LCX Exchange. Alternatively, you can swap your $TIA directly on our website. Please ensure the swap is completed before March 1, 2026.'
    },
    {
      id: 15,
      category: 'platform-process',
      question: 'Will my token value change after the swap?',
      answer: 'Your token value will remain the same during the transition. However, the updated tokenomics of $Toto are designed to enhance long-term value through added utilities and features.'
    },
    {
      id: 16,
      category: 'platform-process',
      question: 'When does the TIA to Toto swap begin and end?',
      answer: 'The swap window opens on March 3, 2026, and will remain available for 12 months, ending on March 4, 2026.'
    },
    {
      id: 17,
      category: 'platform-process',
      question: 'Will the swap impact trading or exchanges?',
      answer: 'On the launch day, $Toto will replace $TIA, and $TIA trading will be discontinued. Trading for $Toto will begin immediately on LCX and Uniswap, with plans to expand to additional exchanges. The swapping period will remain open until March 4, 2026.'
    },
    {
      id: 18,
      category: 'platform-process',
      question: 'What blockchain networks does the platform support?',
      answer: 'Currently we are operating across Ethereum and Cardano. However, we will expand to Solana and other blockchains to ensure seamless multichain accessibility.'
    },
    {
      id: 19,
      category: 'toto-token',
      question: 'What is the $Toto token?',
      answer: '$Toto is the utility token of the Toto Finance ecosystem, designed to power platform functions, rewards, and staking. It expands beyond diamonds to support multiple asset classes and enables multichain operations, increasing accessibility and liquidity across different blockchain networks.'
    },
    {
      id: 20,
      category: 'toto-token',
      question: 'What are the key benefits of holding $Toto?',
      answer: '• Own-to-Earn Rewards: Earn $Toto by holding tokenized assets.\n\n• Refuelling Mechanism: Boost secondary market value by reallocating $Toto to reward pools.\n\n• Staking Rewards: Lock tokens to earn additional rewards.\n\n• Platform Discounts: Reduced fees for platform transactions.'
    },
    {
      id: 21,
      category: 'toto-token',
      question: 'How can I acquire $Toto tokens?',
      answer: 'You can purchase $Toto tokens during the Token launch, through partner exchanges (LCX for now, and other CEX listings are about to be announced), or on Uniswap.'
    },
    {
      id: 22,
      category: 'toto-token',
      question: 'What is the total supply of $Toto?',
      answer: 'The total supply is capped at 1 billion tokens, with allocations for community rewards, ecosystem growth, and platform operations.'
    },
    {
      id: 23,
      category: 'toto-token',
      question: 'What is the Tokenomics of $Toto?',
      answer: 'Total Supply: 1 billion Toto tokens.\n\nAllocation:\n\n• Circulating Supply: 16%\n\n• Community Rewards: 4%\n\n• Contributors: 12.5%\n\n• Growth Initiatives: 32.5%\n\n• Reserve and Ecosystem Development: 35%'
    },
    {
      id: 24,
      category: 'toto-token',
      question: 'Will there be an updated whitepaper for $Toto?',
      answer: 'We\'ve released two official whitepapers under the Tiamonds 2.0 series:\n\n- Tiamonds 2.0 International White Paper — A global edition outlining Toto Finance\'s broader vision, tokenization model, and the future of real-world asset tokenization.\n\n- Tiamonds 2.0 MiCAR White Paper — A MiCA-compliant publication detailing Toto Finance\'s framework for secure, transparent, and regulated asset tokenization within the EU/EEA.'
    },
    {
      id: 25,
      category: 'roadmap-launch',
      question: 'What are the major milestones in the roadmap?',
      answer: 'Check out this page https://totofinance.co/vision-2030'
    },
    {
      id: 26,
      category: 'roadmap-launch',
      question: 'When will the $Toto Token Generation Event (TGE) take place?',
      answer: 'The TGE is scheduled for January 18, 2025, on LCX and Uniswap first. Other CEX listings will be announced shortly.'
    },
    {
      id: 27,
      category: 'roadmap-launch',
      question: 'How does Total Tokenization plan to ensure sustainability?',
      answer: 'The platform is built on energy-efficient proof-of-stake networks and prioritizes responsible sourcing and recycling practices.'
    },
    {
      id: 28,
      category: 'user-experience',
      question: 'What is the Investor Dashboard?',
      answer: 'The Investor Dashboard is a user-friendly interface that lets investors manage portfolios, track performance, and stake $Toto tokens. It also includes tools for tax reporting and liquidity provision.'
    },
    {
      id: 29,
      category: 'user-experience',
      question: 'Can I trade tokenized assets 24/7?',
      answer: 'Yes, tokenized assets can be traded anytime without geographical or time restrictions, providing global accessibility and liquidity.'
    },
    {
      id: 30,
      category: 'user-experience',
      question: 'What should I do if I encounter any issues during the transition?',
      answer: 'If you face any challenges or have questions, our customer support team is here to help.\n\nReach out to us at hello@totofinance.co or through our community channels.\n\nYou can also chat with us directly on our website.'
    },
    {
      id: 31,
      category: 'user-experience',
      question: 'How do I ensure my tokenized assets are secure?',
      answer: 'Toto Finance employs robust smart contracts audited by Hacken, vault storage in the Swiss Alps, insured by Lloyd\'s London with advanced blockchain security protocols. Hardware wallet integration is also available for added security.'
    },
    {
      id: 32,
      category: 'compliance-regulation',
      question: 'Is Toto Finance compliant with regulations?',
      answer: 'Yes, the platform adheres to strict regulatory standards, AML/KYC procedures, and LCX-certified physical validation.'
    },
    {
      id: 33,
      category: 'compliance-regulation',
      question: 'What is LCX\'s role in the ecosystem?',
      answer: 'LCX serves as a Physical Validator, ensuring the authenticity, ownership, and compliance of tokenized assets.'
    },
    {
      id: 34,
      category: 'compliance-regulation',
      question: 'Are there any environmental considerations?',
      answer: 'Yes, Toto Finance promotes sustainability by leveraging energy efficient proof-of-stake networks, supporting responsible sourcing and recycling.'
    },
    {
      id: 35,
      category: 'getting-started',
      question: 'How can I get started with Total Tokenization?',
      answer: '• Create an account on the platform — https://app.totofinance.co/'
    },
    {
      id: 36,
      category: 'getting-started',
      question: 'What payment methods are accepted?',
      answer: 'You can pay with cryptocurrencies (USDT, WETH, LCX, ADA). We are working on integrating other crypto asset payments and fiat options through integrated payment solutions.'
    },
    {
      id: 37,
      category: 'getting-started',
      question: 'Can I still use my $TIA tokens before the swap?',
      answer: 'Yes, $TIA tokens will remain fully functional until the end date of the swap (March 1, 2026).\n\nAfter the transition, $TIA will no longer be in use, and $Toto will replace it completely.'
    },
    {
      id: 38,
      category: 'getting-started',
      question: 'How can I ensure I don\'t miss out on the swap?',
      answer: 'The process will be automatic for holders on the LCX Exchange.\n\nFor those holding $TIA in their wallets, they must complete the swap before March 1, 2026.'
    },
    {
      id: 39,
      category: 'asset',
      subcategory: 'diamonds',
      question: 'What are the 4Cs of Diamonds?',
      answer: 'The 4Cs (Cut, Clarity, Color, and Carat) are the standard for diamond grading, determining value. A crucial fifth C, Conflict-free, ensures ethical sourcing, adding to a diamond\'s worth and peace of mind.'
    },
    {
      id: 40,
      category: 'asset',
      subcategory: 'diamonds',
      question: 'What are the different types of Diamonds?',
      answer: 'There are many different types of diamonds, but they can be broadly classified into two categories: natural diamonds and synthetic diamonds. Natural diamonds are formed over millions of years in the Earth\'s mantle. Synthetic diamonds are created in a laboratory.'
    },
    {
      id: 41,
      category: 'asset',
      subcategory: 'diamonds',
      question: 'How should diamonds be stored & avoid damage?',
      answer: 'Diamonds are very durable, but they can still be scratched or damaged. To keep your diamonds looking their best, it is important to clean and store them properly. They should be stored separately in a fabric-lined jewelry case to prevent scratching.'
    },
    {
      id: 42,
      category: 'asset',
      subcategory: 'diamonds',
      question: 'How are diamonds graded & certified?',
      answer: 'Diamond grading assesses a diamond\'s 4Cs (cut, color, clarity, carat). Certification by independent labs like GIA verifies these qualities, ensuring transparency and building buyer confidence in a diamond\'s value.'
    },
    {
      id: 43,
      category: 'asset',
      subcategory: 'diamonds',
      question: 'How can you tell if a diamond is real?',
      answer: 'A real diamond has unique properties, such as exceptional hardness and light refraction. Common tests include the fog test (diamonds don\'t retain fog), the water test (diamonds sink due to density), and professional verification using specialized tools like a diamond tester.'
    },
    {
      id: 44,
      category: 'asset',
      subcategory: 'diamonds',
      question: 'Why do diamonds make a good investment?',
      answer: 'Diamonds hold long-term value due to their rarity, durability, and global demand. While market trends fluctuate, high-quality diamonds with strong certification can appreciate over time, making them a reliable store of wealth.'
    },
    {
      id: 45,
      category: 'asset',
      subcategory: 'gold',
      question: 'What is Tokenized Gold on Toto Finance?',
      answer: 'Tokenized Gold on Toto Finance represents real, physical gold secured in vaults, digitized into blockchain. Each token is backed by a specific amount of gold, ensuring authenticity and transparency. With Toto Finance, you can own, trade, and transfer gold effortlessly, benefiting from the security of blockchain technology while enjoying the stability of one of the world\'s most trusted assets. Our tokenized gold offers true Freedom of Ownership, allowing you to access and manage your gold holdings without the complexities of physical storage or traditional banking restrictions.'
    },
    {
      id: 46,
      category: 'asset',
      subcategory: 'gold',
      question: 'How to Invest in Tokenized Gold on Toto Finance?',
      answer: 'Investing in tokenized gold on Toto Finance is a simple and secure process:\n\n• Sign Up & Verify — Create an account on totofinance.co.\n\n• Purchase — Buy tokenized gold directly on the marketplace.\n\n• Manage & Trade — Track ownership or trade instantly on-chain.'
    },
    {
      id: 47,
      category: 'asset',
      subcategory: 'gold',
      question: 'What are the Benefits of Tokenized Gold Over Physical Gold?',
      answer: 'Tokenized gold on Toto Finance offers several advantages over traditional physical gold ownership:\n\n• True Ownership & Security - Each token is backed by real gold stored in secure, insured vaults, eliminating the risks of theft or loss.\n\n• High Liquidity - Unlike physical gold, tokenized gold can be easily bought, sold, or traded on blockchain-powered platforms without intermediaries.\n\n• Transparency & Verification - Blockchain technology ensures verifiable proof of ownership and an immutable record of transactions.\n\n• Global Accessibility - No geographical restrictions; access and manage your gold holdings from anywhere in the world.\n\n• No Storage Hassles - Avoid the costs and security concerns of storing physical gold while still maintaining full ownership.'
    },
    {
      id: 48,
      category: 'asset',
      subcategory: 'gold',
      question: 'Is Tokenized Gold Regulated?',
      answer: 'Yes, tokenized gold on Toto Finance operates within a compliant and regulated framework. As a fully compliant platform, Toto Finance follows strict legal and financial regulations to ensure transparency, security, and legitimacy. Each token is backed by real, audited gold stored in secure vaults, ensuring full asset backing.\n\nAdditionally, our regulatory compliance aligns with AML (Anti-Money Laundering) and KYC (Know Your Customer) policies, ensuring a safe and trustworthy investment environment. By leveraging blockchain technology and adhering to financial standards, Toto Finance provides a secure and legally compliant way to invest in tokenized gold, offering both stability and Freedom of Ownership.'
    },
    {
      id: 49,
      category: 'asset',
      subcategory: 'gold',
      question: 'Can I Sell My Tokenized Gold?',
      answer: 'Yes, you can sell your tokenized gold on Toto Finance easily and securely. Here\'s how:\n\n• Marketplace Trading — List your tokenized gold for sale on the Toto Finance marketplace and connect with buyers worldwide.\n\n• Peer-to-Peer Transfers — Transfer your tokenized gold directly to another buyer without intermediaries.\n\n• Redeem for Physical Gold — You may want to redeem your tokens for the physical gold asset itself.'
    },
    {
      id: 50,
      category: 'asset',
      subcategory: 'gold',
      question: 'Is Toto Finance Safe to Use for Trading Tokenized Gold Assets?',
      answer: 'Yes, Toto Finance is a secure and fully compliant platform for trading tokenized gold assets. Here\'s why:\n\n• Regulatory Compliance - Toto Finance operates within a regulated framework, ensuring full adherence to AML (Anti-Money Laundering) and KYC (Know Your Customer) policies.\n\n• Blockchain Security - Every transaction is recorded on the blockchain, providing transparency, immutability, and fraud prevention.\n\n• Asset-Backed Tokens - Each tokenized gold asset is backed by real, audited gold stored in insured vaults, ensuring 100% asset backing.\n\n• Secure Transactions - Your tokenized gold is stored in a non-custodial blockchain wallet, meaning you have full control and ownership at all times.\n\n• Trusted Infrastructure - Toto Finance leverages institutional-grade security measures to protect user data and assets.\n\nWith Freedom of Ownership at its core, Toto Finance offers a safe, transparent, and efficient way to invest, trade, and own tokenized gold.'
    },
    {
      id: 51,
      category: 'asset',
      subcategory: 'platinum',
      question: 'What is Tokenized Platinum on Toto Finance?',
      answer: 'Tokenized Platinum on Toto Finance represents real, physical platinum secured in vaults, digitized into blockchain-based tokens. Each token is backed 1:1 by actual platinum, giving you the security of a hard asset with the flexibility of digital ownership.'
    },
    {
      id: 52,
      category: 'asset',
      subcategory: 'platinum',
      question: 'How to Invest in Tokenized Platinum on Toto Finance?',
      answer: '• Sign Up & Verify — Create an account on totofinance.co.'
    },
    {
      id: 53,
      category: 'asset',
      subcategory: 'platinum',
      question: 'Why Choose Tokenized Platinum Over Physical?',
      answer: '• No Storage Hassles - Your platinum is stored securely, no need to manage it yourself.\n\n• High Liquidity - Trade it instantly online.\n\n• Global Accessibility - Access your holdings anywhere.\n\n• Immutable Proof of Ownership - Backed by blockchain.'
    },
    {
      id: 54,
      category: 'asset',
      subcategory: 'platinum',
      question: 'Is Toto Finance Platinum Offer Regulated?',
      answer: 'Yes. Toto Finance operates under a fully compliant framework. Assets are backed, insured, audited, and adhere to KYC/AML standards. You benefit from the security of regulated storage and the innovation of blockchain.'
    },
    {
      id: 55,
      category: 'asset',
      subcategory: 'platinum',
      question: 'Can I Redeem or Sell My Tokenized Platinum?',
      answer: 'Absolutely.\n\n• Marketplace Sales - List your token for buyers worldwide.\n\n• Peer-to-Peer Transfers - Send tokens directly.\n\n• Redeem for Physical Platinum - Request secure delivery when ready.'
    },
    {
      id: 56,
      category: 'asset',
      subcategory: 'platinum',
      question: 'Is Toto Finance a Secure Platform for Platinum Investments?',
      answer: 'Yes. With regulated partners, insured vaults, and blockchain transparency, Toto Finance offers institutional-grade security. You maintain full control over your assets, backed by real-world platinum and trusted infrastructure.'
    },
    {
      id: 57,
      category: 'asset',
      subcategory: 'sapphire',
      question: 'What is Tokenized Sapphire on Toto Finance?',
      answer: 'Tokenized Sapphire on Toto Finance represents a real, physical sapphire securely stored in a vault and digitized on the blockchain. Each token is backed by a specific, investment-grade sapphire—certified, insured, and traceable. With Toto Finance, you can own, trade, and transfer fine sapphires digitally, enjoying the benefits of blockchain technology while investing in one of the world\'s most prized and timeless gemstones. Tokenization offers full transparency, global access, and simplified ownership of these rare, high-value assets.'
    },
    {
      id: 58,
      category: 'asset',
      subcategory: 'sapphire',
      question: 'How to Invest in Tokenized Sapphires on Toto Finance?',
      answer: 'Investing in tokenized sapphires on Toto Finance is a seamless process:\n\n• Sign Up & Verify — Create an account on totofinance.co.'
    },
    {
      id: 59,
      category: 'asset',
      subcategory: 'sapphire',
      question: 'What are the Benefits of Tokenized Sapphires Over Traditional Gem Ownership?',
      answer: 'Tokenized sapphires offer unique advantages compared to traditional gemstone investments:\n\n• True Ownership - Each NFT represents a specific sapphire stored securely and fully insured.\n\n• Liquidity - Tokenized assets can be traded anytime on supported marketplaces.\n\n• Global Access - Invest from anywhere, without geographic or banking limitations.\n\n• Transparency & Security - Blockchain ensures authenticity, traceability, and immutable records.\n\n• No Custody Hassles - Enjoy ownership without the risks of personal storage or transportation.'
    },
    {
      id: 60,
      category: 'asset',
      subcategory: 'sapphire',
      question: 'Who Sources and Certifies the Sapphires?',
      answer: 'Toto Finance sources all sapphires in collaboration with Berr & Partners, a leading expert in investment-grade gemstones. Each stone is certified by professional Gem Laboratories (GRS, CGL,...), confirming its origin, natural (unheated) state, and gemological quality. All assets are validated by LCX, who issues on-chain certificates of ownership and oversees secure physical storage.'
    },
    {
      id: 61,
      category: 'asset',
      subcategory: 'sapphire',
      question: 'Can I Sell or Redeem My Tokenized Sapphire?',
      answer: 'Yes, tokenized sapphires on Toto Finance are fully tradeable and redeemable:\n\n• Trade on Marketplace - List your sapphire NFT for sale on Toto Finance or compatible NFT platforms.\n\n• Peer-to-Peer Transfers - Send or gift the NFT directly to another wallet.\n\n• Physical Redemption - Request delivery of the underlying sapphire at any time, subject to storage and shipping fees.'
    },
    {
      id: 62,
      category: 'asset',
      subcategory: 'sapphire',
      question: 'Is Toto Finance a Safe Platform for Tokenized Sapphire Investments?',
      answer: 'Yes, Toto Finance is designed with full compliance and user protection in mind:\n\n• Regulated Framework - We adhere to AML/KYC requirements and partner with licensed service providers.\n\n• Blockchain Security - All assets are recorded on-chain for full transparency and fraud protection.\n\n• Third-Party Validation - LCX serves as the physical validator, ensuring custody, insurance, and auditability.\n\n• Non-Custodial Ownership - Your sapphire NFTs are stored in your own wallet, giving you complete control.\n\nToto Finance offers a secure, transparent, and efficient way to access the world of high-value sapphires with the power of Web3.'
    },
    {
      id: 63,
      category: 'asset',
      subcategory: 'silver',
      question: 'What is Tokenized Silver on Toto Finance?',
      answer: 'Tokenized Silver on Toto Finance represents real, physical silver stored in secure vaults and digitized as blockchain tokens. Each token is backed by a specific amount of silver, providing full transparency and security. It allows users to own, trade, and transfer silver instantly with true Freedom of Ownership—without the hassle of handling physical bars.'
    },
    {
      id: 64,
      category: 'asset',
      subcategory: 'silver',
      question: 'How to Invest in Tokenized Silver on Toto Finance?',
      answer: 'Investing in tokenized silver on Toto Finance is a simple and secure process, similar to purchasing tokenized diamonds:\n\n• Sign Up & Verify — Create an account on totofinance.co and verify your account.'
    },
    {
      id: 65,
      category: 'asset',
      subcategory: 'silver',
      question: 'What Are the Benefits of Tokenized Silver Over Physical Silver?',
      answer: '• Full ownership of real silver with none of the storage hassle.\n\n• Transparent and verified via blockchain.\n\n• Easily tradable and accessible globally.\n\n• Secure vault storage with insured custody.\n\n• Eliminates intermediaries and import/export limits.'
    },
    {
      id: 66,
      category: 'asset',
      subcategory: 'silver',
      question: 'Is Tokenized Silver Regulated?',
      answer: 'Yes. Toto Finance follows strict KYC/AML compliance, and all assets are validated under a regulated framework. LCX serves as physical validator, ensuring every tokenized silver unit is 1:1 backed, stored, and certified.'
    },
    {
      id: 67,
      category: 'asset',
      subcategory: 'silver',
      question: 'Can I Sell My Tokenized Silver?',
      answer: 'Yes, you can sell your tokenized silver on Toto Finance easily and securely. Here\'s how:\n\n• Marketplace — List your asset for global buyers.\n\n• Direct Transfer — P2P transactions anytime.\n\n• Redemption — Claim physical delivery at any time, anywhere in the world.'
    },
    {
      id: 68,
      category: 'asset',
      subcategory: 'silver',
      question: 'Is Toto Finance Safe for Tokenized Silver Trading?',
      answer: 'Absolutely. With a regulated structure, LCX validation, and blockchain-backed asset security, Toto Finance ensures:\n\n• Real asset-backing with certification.\n\n• Blockchain transparency and traceability.\n\n• Vault-insured, third-party custody.\n\n• Full user control with decentralized wallets.'
    },
    {
      id: 69,
      category: 'asset',
      subcategory: 'silver',
      question: 'How Does Minting Work on Cardano and Ethereum?',
      answer: 'Minting is handled by the Toto Finance platform to ensure a seamless experience. Users simply purchase Toto Finance Silver using ADA (for Cardano) or USDT/USDC (for Ethereum). After purchase, we mint the NFT on your behalf, attaching the asset metadata according to the CIP-25 standard. Once minted, the Toto Finance NFT is delivered to your wallet, with ownership recorded directly on the blockchain.'
    },
    {
      id: 70,
      category: 'asset',
      subcategory: 'silver',
      question: 'Can I Redeem My Physical Silver?',
      answer: 'Yes, Toto Finance Silver owners can redeem their silver bars and receive physical delivery.\n\nTo redeem, follow these steps:\n\nEnsure you have a fully verified LCX account.\n\nContact our support team at hello@totofinance.co to request redemption.'
    },
  ];

  return (
    <div className="min-h-screen w-full relative bg-white">
      {/* Page Structured Data */}
      <PageStructuredData
        title="FAQ — Frequently Asked Questions | Toto Finance"
        description="Learn about Toto Finance, tokenized assets, redemption steps, platform features, and RWA tokenization FAQs."
        url="https://totofinance.co/faq"
        pageType="FAQPage"
        breadcrumbItems={[
          { name: 'Home', item: 'https://totofinance.co' },
          { name: 'FAQ', item: 'https://totofinance.co/faq' },
        ]}
      />
      
      {/* FAQ Structured Data */}
      <FAQStructuredData faqs={faqs} />
      
      {/* Gradual Blur Effect */}
      <GradualBlur 
        preset="page-footer" 
        strength={2} 
        height="4rem"
        animated="scroll"
        duration="0.5s"
      />
      
      {/* Navigation */}
      <Navigation pastHero={true} />

      {/* Main Content */}
      <main className="pt-32 md:pt-40 pb-20 md:pb-32 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about Toto Finance, our platform, and services.
            </p>
          </div>

          {/* FAQ Category Filter and List - Client Component */}
          <FAQPageClient
            faqs={faqs}
            categories={categories}
            assetSubcategories={assetSubcategories}
          />

          {/* Contact Section */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                If you can't find the answer you're looking for, our support team is here to help.
              </p>
              <ContactSupportButton />
            </div>
          </div>
        </div>
      </main>

      <NewsletterSection />
      <Footer />

      {/* Hubspot Chatbot */}
      <HubSpotChat />
    </div>
  );
}

