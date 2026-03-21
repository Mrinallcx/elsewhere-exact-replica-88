/** FAQ copy aligned with FAQ.docx.md (68 items; platinum #52 merges invest + why-choose per doc). */

export type FaqItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
  subcategory?: string;
};

export const faqItems: FaqItem[] = [
  {
    id: 1,
    category: 'general-overview',
    question: 'What is Toto Finance?',
    answer:
      'Toto Finance is the globe\'s number one digital commodity infrastructure, a global platform that facilitates the tokenization and trading of metals, energy commodities, in-ground reserves, and other real-world assets using blockchain technology. Founded in 2023 as Tiamonds with global reach in the United States of America, North and South America, Europe, and the MENA region, Toto Finance brings the best of traditional finance and the speed and efficiency of Web3 technology.\n\nWith its Total Tokenization approach, Toto Finance closes the gap between the physical and digital worlds, revolutionizing the way real-world assets are authenticated, stored, and traded. The company\'s vision is to digitize global trade fueled by crypto and blockchain technology, providing commodities and real-world assets with institutional-grade security, transparency, and liquidity, opening markets that were previously inaccessible, inefficient, or illiquid 24/7.',
  },
  {
    id: 2,
    category: 'general-overview',
    question: 'How is Toto Finance different from Tiamonds?',
    answer:
      'Although the initial Tiamonds platform was centered on diamonds, the current Toto Finance platform encompasses a wide range of assets like gemstones, commodities, and energy assets. This makes Toto Finance a pioneer in establishing new standards for the tokenization of real-world assets.',
  },
  {
    id: 3,
    category: 'general-overview',
    question: 'What is tokenization?',
    answer:
      'Tokenization is the process of turning real-world assets into digital tokens that represent ownership. These tokens are tradable, secure, and allow for fractional ownership.',
  },
  {
    id: 4,
    category: 'general-overview',
    question: 'Why is Toto Finance rebranding the $TIA token to $Toto?',
    answer:
      'We are changing from $TIA to $Toto to improve the utility, attractiveness, and overall value of our token. This rebranding is in line with our mission of "Freedom of Ownership" and brings new tokenomics and features to our community.\n\nTOTO is an acronym for "Total Tokenization," symbolizing our vision to go beyond diamonds and encompass a variety of asset classes like gemstones, commodities, collectibles, and real estate. Moreover, Toto will be a multichain token, allowing for effortless interoperability between different blockchain platforms, making it more accessible and liquid for real-world asset tokenization.',
  },
  {
    id: 5,
    category: 'general-overview',
    question: 'How will this upgrade benefit the Toto Finance community?',
    answer:
      'The upgrade to $Toto brings more utility, adoption, and long-term value to the community through:\n\n• Expanding from diamonds to gemstones, commodities, collectibles, and real estate.\n• Becoming multichain for better accessibility and liquidity.\n• Offering new tokenomics with improved rewards and incentives.\n• Further establishing Toto Finance as a leader in real-world asset tokenization.\n\nThis upgrade offers more opportunities, flexibility, and value to the community.',
  },
  {
    id: 6,
    category: 'general-overview',
    question: 'Can I still redeem my physical diamonds after the rebranding?',
    answer:
      'Yes, you can still redeem your physical diamonds after the rebranding. Nothing changes, and you will still be able to access your diamond assets as before.',
  },
  {
    id: 7,
    category: 'general-overview',
    question: 'Where can I find official updates about the $TIA to $Toto transition?',
    answer: 'All official updates will be posted on [totofinance.co](https://www.totofinance.co)',
  },
  {
    id: 8,
    category: 'general-overview',
    question: 'Where can I find more information?',
    answer:
      'You can visit [our website](https://www.totofinance.co) or [email the team](mailto:hello@totofinance.co)',
  },
  {
    id: 9,
    category: 'platform-process',
    question: 'What types of assets can I tokenize or invest in?',
    answer:
      'Access tokenized gemstones, gold, silver, platinum, and energy assets all secured, verified, and tradable on-chain.',
  },
  {
    id: 10,
    category: 'platform-process',
    question: 'How does Total Tokenization ensure asset authenticity?',
    answer:
      'We work with LCX, the first Physical Validator worldwide under the Liechtenstein Blockchain Act, which authenticates, verifies, and certifies assets. Furthermore, assets are held in insured and compliant vaults in Liechtenstein.',
  },
  {
    id: 11,
    category: 'platform-process',
    question: 'Can I redeem physical assets?',
    answer:
      'The owners of tokenized assets on Toto Finance, such as diamonds, gemstones, and precious metals, can redeem their tokens in order to receive the physical asset.\n\nIn order to redeem your physical asset, you must follow these steps:\n\n• Verification: You must have a fully verified account on LCX.\n• Contact Support: [Email us to start redemption](mailto:hello@totofinance.co).\n• Redemption Details: You will receive an email with the shipping details, service fee, and all the information necessary to initiate the redemption process, including the wallet address where you need to send your asset NFT.\n• Delivery or Pickup: After receiving your payment and NFT, we will deliver the physical asset from our secured vault and ship it to you insured, or you can pick it up in person in Liechtenstein.',
  },
  {
    id: 12,
    category: 'platform-process',
    question: 'How are tokenized assets physically stored?',
    answer:
      'The tokenized assets are stored in insured third-party vaults that are compliant with global standards in Liechtenstein.',
  },
  {
    id: 13,
    category: 'platform-process',
    question: 'Are there any charges for exchanging my $TIA tokens to $Toto?',
    answer:
      'There are no charges or fees for exchanging $TIA to $Toto.\n\nYou only need to pay the standard gas fee necessary for the blockchain transaction.',
  },
  {
    id: 14,
    category: 'platform-process',
    question: 'What will happen to my existing $TIA tokens?',
    answer:
      'Your existing $TIA will be automatically exchanged for $Toto at a 1:1 ratio on the LCX Exchange. You can also exchange your $TIA on [our website](https://www.totofinance.co). Just make sure to do so before March 1, 2026.',
  },
  {
    id: 15,
    category: 'platform-process',
    question: 'Will the value of my token change after the exchange?',
    answer:
      'The value of your token will not change during the exchange. However, the new tokenomics of $Toto are built to increase value with new utilities and features.',
  },
  {
    id: 16,
    category: 'platform-process',
    question: 'When does the exchange of TIA to Toto start and end?',
    answer:
      'The exchange period begins on March 3, 2026, and will be available for 12 months, ending on March 4, 2026.',
  },
  {
    id: 17,
    category: 'platform-process',
    question: 'Will the swap affect trading or exchanges?',
    answer:
      'On the launch day, $Toto will replace $TIA, and trading on $TIA will cease. Trading on $Toto will commence immediately on the LCX exchange and [Uniswap](https://uniswap.org), with further listings on other exchanges to follow. The swapping period will remain open until March 4, 2026.',
  },
  {
    id: 18,
    category: 'platform-process',
    question: 'What blockchain networks does the platform support?',
    answer:
      'We are currently supporting Ethereum and Cardano. However, we will support Solana and other blockchain networks to ensure multichain functionality.',
  },
  {
    id: 19,
    category: 'toto-token',
    question: 'What is the $Toto token?',
    answer:
      '$Toto is the utility token of the Toto Finance ecosystem and is intended to facilitate operations on the platform, rewards, and staking. It goes beyond diamonds to support multiple asset classes and facilitates multichain functionality, improving accessibility across various blockchain networks.',
  },
  {
    id: 20,
    category: 'toto-token',
    question: 'What are the major advantages of having $Toto?',
    answer:
      '• Own-to-Earn Rewards: Earn $Toto by holding tokenized assets.\n• Refuelling Mechanism: Increase secondary market value by distributing $Toto to reward pools.\n• Staking Rewards: Stake tokens to earn rewards.\n• Platform Discounts: Get reduced fees for platform transactions.',
  },
  {
    id: 21,
    category: 'toto-token',
    question: 'How do I get $Toto tokens?',
    answer:
      'You can buy $Toto tokens during the Token launch, from partner exchanges (LCX for now, and other CEX listings are soon to be announced), or from [Uniswap](https://uniswap.org).',
  },
  {
    id: 22,
    category: 'toto-token',
    question: 'What is the total supply of $Toto?',
    answer:
      'The total supply is fixed at 1 billion tokens, allocated for community rewards, growth initiatives, and platform operations.',
  },
  {
    id: 23,
    category: 'toto-token',
    question: 'What is the Tokenomics of $Toto?',
    answer:
      'Total Supply: 1 billion Toto tokens.\n\nAllocation:\n\n• Circulating Supply: 16%\n• Community Rewards: 4%\n• Contributors: 12.5%\n• Growth Initiatives: 32.5%\n• Reserve and Ecosystem Development: 35%',
  },
  {
    id: 24,
    category: 'toto-token',
    question: 'Will there be an updated whitepaper for $Toto?',
    answer:
      'We have published two official whitepapers as part of the Tiamonds 2.0 series:\n\nTiamonds 2.0 International White Paper: A global version that presents Toto Finance\'s overall vision, tokenization strategy, and the future of real-world asset tokenization. [Explore the International White Paper](https://toto-finance.s3.us-east-1.amazonaws.com/Toto+Finance+-+TOTO+White+Paper+-+International+Edition.pdf)\n\nTiamonds 2.0 MiCAR White Paper: A MiCA-regulated document that describes Toto Finance\'s approach to secure, transparent, and regulated asset tokenization in the EU/EEA. [Explore the MiCAR White Paper](https://toto-finance.s3.us-east-1.amazonaws.com/Toto+Finance+-+TOTO+MiCAR+White+Paper+-+EU_EEA+Edition.pdf)',
  },
  {
    id: 25,
    category: 'roadmap-launch',
    question: 'What are the key milestones in the roadmap?',
    answer: 'Please refer to [our Vision 2030 roadmap](https://totofinance.co/vision-2030).',
  },
  {
    id: 26,
    category: 'roadmap-launch',
    question: 'When will the $Toto Token Generation Event (TGE) occur?',
    answer:
      'The TGE will occur on January 18, 2025, on LCX and [Uniswap](https://uniswap.org) first. Other CEX listings will be announced soon.',
  },
  {
    id: 27,
    category: 'roadmap-launch',
    question: 'How will Total Tokenization ensure sustainability?',
    answer:
      'The platform operates on energy-efficient proof-of-stake networks and promotes responsible sourcing and recycling.',
  },
  {
    id: 28,
    category: 'user-experience',
    question: 'What is the Investor Dashboard?',
    answer:
      'The Investor Dashboard is an intuitive platform that allows investors to monitor and manage their portfolios, performance, and $Toto token staking. It also provides functionality for tax reporting and liquidity provision.',
  },
  {
    id: 29,
    category: 'user-experience',
    question: 'Can I trade tokenized assets 24/7?',
    answer:
      'Yes, tokenized assets can be traded at any time and from any location, without any geographical or time constraints, ensuring global accessibility and liquidity.',
  },
  {
    id: 30,
    category: 'user-experience',
    question: 'What do I do if I encounter any problems during the transition process?',
    answer:
      'If you encounter any problems or have any questions, our customer support team is there to assist you.\n\n[Contact us by email](mailto:hello@totofinance.co) or through our community platforms.\n\nYou can also reach us on [totofinance.co](https://totofinance.co/).',
  },
  {
    id: 31,
    category: 'user-experience',
    question: 'How do I protect my tokenized assets?',
    answer:
      'Toto Finance uses highly secure smart contracts audited by Hacken, secure vault storage in the Swiss Alps, insured by Lloyd\'s London with state-of-the-art blockchain security solutions. Hardware wallet support is also available.',
  },
  {
    id: 32,
    category: 'compliance-regulation',
    question: 'Is Toto Finance regulatory compliant?',
    answer:
      'Yes, the platform is strictly regulatory compliant, follows AML/KYC processes, and is LCX-certified for physical validation.',
  },
  {
    id: 33,
    category: 'compliance-regulation',
    question: 'What is the role of LCX in the ecosystem?',
    answer:
      'LCX is a Physical Validator, validating the authenticity, ownership, and regulatory compliance of tokenized assets.',
  },
  {
    id: 34,
    category: 'compliance-regulation',
    question: 'Are there any environmental factors?',
    answer:
      'Yes, Toto Finance is committed to environmental sustainability by utilizing energy-efficient proof-of-stake networks, practicing responsible sourcing and recycling.',
  },
  {
    id: 35,
    category: 'getting-started',
    question: 'How do I begin with Total Tokenization?',
    answer: 'Connect with the platform on [app.totofinance.co](https://app.totofinance.co/).',
  },
  {
    id: 36,
    category: 'getting-started',
    question: 'What payment options are accepted?',
    answer:
      'You can pay using cryptocurrencies (USDT, WETH, LCX, ADA). We are currently developing the integration of other crypto asset payments and fiat payments using integrated payment solutions.',
  },
  {
    id: 37,
    category: 'getting-started',
    question: 'Can I still use my $TIA tokens before the swap?',
    answer:
      'Yes, $TIA tokens will remain fully functional until the end date of the swap (March 1, 2026).\n\nAfter the transition, $TIA will no longer be in use, and $Toto will replace it completely.',
  },
  {
    id: 38,
    category: 'getting-started',
    question: 'How can I ensure I don\'t miss out on the swap?',
    answer:
      'The process will be automatic for holders on the LCX Exchange.\n\nFor those holding $TIA in their wallets, they must complete the swap before March 1, 2026.',
  },
  {
    id: 39,
    category: 'asset',
    subcategory: 'diamonds',
    question: 'What are the 4Cs of Diamonds?',
    answer:
      'The 4Cs (Cut, Clarity, Color, and Carat) are the benchmark for diamond grading, establishing value. A fifth, vital C, Conflict-free, guarantees responsible sourcing, increasing the value of a diamond and providing reassurance.',
  },
  {
    id: 40,
    category: 'asset',
    subcategory: 'diamonds',
    question: 'What are the different types of Diamonds?',
    answer:
      'There are many different types of diamonds, but they can be divided into two main types: natural diamonds and synthetic diamonds. Natural diamonds take millions of years to form in the Earth\'s mantle. Synthetic diamonds are lab-created.',
  },
  {
    id: 41,
    category: 'asset',
    subcategory: 'diamonds',
    question: 'How to store diamonds and protect them from damage?',
    answer:
      'Diamonds are quite hard, but they can still be scratched or damaged. To keep your diamonds in the best condition, it is essential to clean and store them properly. Diamonds should be stored individually in a cloth-lined jewelry box to protect them from scratches.',
  },
  {
    id: 42,
    category: 'asset',
    subcategory: 'diamonds',
    question: 'How are diamonds graded and certified?',
    answer:
      'Diamond grading is the evaluation of a diamond\'s 4Cs (cut, color, clarity, carat). Diamond certification by independent organizations such as GIA guarantees the diamond\'s characteristics, promoting transparency and establishing trust among buyers of a diamond\'s value.',
  },
  {
    id: 43,
    category: 'asset',
    subcategory: 'diamonds',
    question: 'How to determine if a diamond is authentic?',
    answer:
      'An authentic diamond possesses distinct properties, such as its hardness and ability to refract light. The most popular methods for testing a diamond\'s authenticity include the fog test (diamonds do not retain fog), the water test (diamonds sink because of their density), and expert analysis using specialized equipment such as a diamond tester.',
  },
  {
    id: 44,
    category: 'asset',
    subcategory: 'diamonds',
    question: 'Why are diamonds a good investment option?',
    answer:
      'Diamonds are a valuable investment option because of their rarity, hardness, and universal demand. Although market trends may change, a high-quality diamond with excellent certification is likely to increase in value over time, making it a sound investment option for storing value.',
  },
  {
    id: 45,
    category: 'asset',
    subcategory: 'gold',
    question: 'What is Tokenized Gold on Toto Finance?',
    answer:
      'Tokenized Gold on Toto Finance is physical gold stored in vaults, represented as blockchain-based digital gold. Every token is collateralized by a certain amount of gold, ensuring authenticity and transparency. With Toto Finance, you can easily own, buy, sell, and transfer gold, enjoying the safety of blockchain technology and the stability of one of the most reliable assets in the world. Our tokenized gold provides you with the ultimate Freedom of Ownership, allowing you to freely access and manage your gold assets without the hassle of physical storage and banking limitations.',
  },
  {
    id: 46,
    category: 'asset',
    subcategory: 'gold',
    question: 'How to Invest in Tokenized Gold on Toto Finance?',
    answer:
      'Investing in tokenized gold on Toto Finance is a straightforward and safe process:\n\n• Sign Up & Verify: Register an account on [totofinance.co](https://totofinance.co).\n• Purchase: Buy tokenized gold directly from the marketplace.\n• Manage & Trade: View ownership or trade instantly on-chain.',
  },
  {
    id: 47,
    category: 'asset',
    subcategory: 'gold',
    question: 'What are the Advantages of Tokenized Gold over Physical Gold?',
    answer:
      'The following are the advantages of tokenized gold on Toto Finance over physical gold:\n\n• Ownership & Security: Each token is equivalent to actual gold that is stored in secure vaults, free from the risk of theft or loss.\n• Liquidity: Physical gold cannot be easily traded, whereas tokenized gold can be easily traded on blockchain-based platforms.\n• Transparency: Blockchain technology provides irrevocable proof of ownership and a permanent record of transactions.\n• Accessibility: There are no geographical constraints. You can access your gold from anywhere in the world.\n• Storage: There are no storage hassles, and you can still enjoy complete ownership of the gold.',
  },
  {
    id: 48,
    category: 'asset',
    subcategory: 'gold',
    question: 'Is Tokenized Gold Regulated?',
    answer:
      'Yes, the tokenized gold on Toto Finance is regulated. Toto Finance is a completely regulated platform, and it adheres to all the necessary legal and financial norms. Every token is collateralized with real, audited gold that is stored in secure vaults. This ensures that the asset is fully backed.\n\nMoreover, our regulatory compliance is in line with AML (Anti-Money Laundering) and KYC (Know Your Customer) policies. This ensures a safe and trustworthy environment for investments. With the use of blockchain technology and financial norms, Toto Finance ensures a secure and completely regulated platform for investment in tokenized gold, providing stability and Freedom of Ownership.',
  },
  {
    id: 49,
    category: 'asset',
    subcategory: 'gold',
    question: 'Can I Sell My Tokenized Gold?',
    answer:
      'Yes, you can sell your tokenized gold on Toto Finance. Here\'s how:\n\n• Marketplace Trading: You can list your tokenized gold for sale on the Toto Finance marketplace and sell to buyers worldwide.\n• Peer-to-Peer Transfers: You can transfer your tokenized gold directly to another buyer without using any third-party services.\n• Redeem for Physical Gold: You can redeem your tokens for the physical gold asset itself.',
  },
  {
    id: 50,
    category: 'asset',
    subcategory: 'gold',
    question: 'Is Toto Finance a Safe Platform to Use for Trading Tokenized Gold Assets?',
    answer:
      'Yes, Toto Finance is a safe and compliant platform to use for trading tokenized gold assets. Here\'s why:\n\n• Compliance: Toto Finance is a compliant platform, fully adhering to AML (Anti-Money Laundering) and KYC (Know Your Customer) guidelines.\n• Blockchain Security: All transactions are stored on the blockchain, ensuring transparency, immutability, and the prevention of fraud.\n• Asset-Backed Tokens: All tokenized gold assets are backed by real, audited gold reserves stored in insured vaults, ensuring 100% asset backing.\n• Secure Transactions: Your tokenized gold is held in a non-custodial blockchain wallet, ensuring that you always retain full control and ownership.\n• Secure Infrastructure: Toto Finance uses institutional-grade security infrastructure to safeguard user data and assets.\n\nFreedom of Ownership is at the heart of Toto Finance, and it provides a safe, transparent, and efficient platform to invest, trade, and own tokenized gold.',
  },
  {
    id: 51,
    category: 'asset',
    subcategory: 'platinum',
    question: 'What is Tokenized Platinum on Toto Finance?',
    answer:
      'Tokenized Platinum on Toto Finance is physical, tangible platinum held in vaults, tokenized on the blockchain. Each token is 1:1 backed by actual physical platinum, providing you with the security of a tangible asset and the convenience of digital ownership.',
  },
  {
    id: 52,
    category: 'asset',
    subcategory: 'platinum',
    question: 'How to Invest in Tokenized Platinum on Toto Finance?',
    answer:
      'Sign Up & Verify: Register an account at [totofinance.co](https://totofinance.co).\n\nWhy Choose Tokenized Platinum Over Physical?\n\n• No Storage Hassles: Your platinum is stored safely, no need to handle it.\n• High Liquidity: Sell it instantly online.\n• Global Accessibility: Access your assets anywhere.\n• Immutable Proof of Ownership: Secured by blockchain.',
  },
  {
    id: 53,
    category: 'asset',
    subcategory: 'platinum',
    question: 'Is Toto Finance Platinum Offer Regulated?',
    answer:
      'Yes. Toto Finance has a fully compliant system in place. Assets are backed, insured, audited, and KYC/AML compliant. You get the security of regulated storage and the power of blockchain.',
  },
  {
    id: 54,
    category: 'asset',
    subcategory: 'platinum',
    question: 'Can I Redeem or Sell My Tokenized Platinum?',
    answer:
      'Yes.\n\n• Marketplace Sales: List your token for sale to anyone globally.\n• Peer-to-Peer Transfers: Transfer your tokens directly.\n• Redeem for Physical Platinum: Request delivery when you\'re ready.',
  },
  {
    id: 55,
    category: 'asset',
    subcategory: 'platinum',
    question: 'Is Toto Finance a Secure Platform for Platinum Investments?',
    answer:
      'Yes. With regulated partners, insured vaults, and blockchain transparency, Toto Finance provides institutional-grade security. You retain complete control over your investments, secured by physical platinum and robust infrastructure.',
  },
  {
    id: 56,
    category: 'asset',
    subcategory: 'sapphire',
    question: 'What is Tokenized Sapphire on Toto Finance?',
    answer:
      'Tokenized Sapphire on Toto Finance symbolizes a genuine, physical sapphire stored in a vault and represented on the blockchain. Each token is collateralized by a particular investment-grade sapphire, which is verified, insured, and traceable. With Toto Finance, you can buy, sell, and transfer high-quality sapphires online, reaping the benefits of blockchain technology while investing in one of the most precious and enduring gemstones in the world. Tokenization provides complete transparency, worldwide accessibility, and easy ownership of such rare and valuable assets.',
  },
  {
    id: 57,
    category: 'asset',
    subcategory: 'sapphire',
    question: 'How to Invest in Tokenized Sapphires on Toto Finance?',
    answer:
      'Investing in tokenized sapphires on Toto Finance is an extremely easy process:\n\nSign Up & Verify: Register an account on [totofinance.co](https://totofinance.co).',
  },
  {
    id: 58,
    category: 'asset',
    subcategory: 'sapphire',
    question: 'What are the Advantages of Tokenized Sapphires over Conventional Gemstone Investment?',
    answer:
      'There are several benefits of tokenized sapphires over conventional gemstone investments:\n\n• Ownership: Every NFT is linked to a particular sapphire that is stored in a secure and insured environment.\n• Liquidity: The assets can be traded at any time on the platforms that support trading.\n• Accessibility: The investment can be made from anywhere in the world, and there are no banking restrictions.\n• Security: The blockchain technology provides authenticity and immutability of records.',
  },
  {
    id: 59,
    category: 'asset',
    subcategory: 'sapphire',
    question: 'Who Sources and Certifies the Sapphires?',
    answer:
      'Toto Finance sources all sapphires in partnership with Berr & Partners, a renowned expert in investment-quality gemstones. Each gemstone is carefully certified by expert Gem Laboratories (GRS & CGL), which verifies its origin, natural (unheated) status, and gemological quality. All assets are also verified by LCX, which provides on-chain proof of ownership and manages safe physical storage.',
  },
  {
    id: 60,
    category: 'asset',
    subcategory: 'sapphire',
    question: 'Can I Sell or Redeem My Tokenized Sapphire?',
    answer:
      'Yes, tokenized sapphires on Toto Finance are fully tradable and redeemable:\n\n• Trade on Marketplace: Sell your sapphire NFT on Toto Finance or other NFT marketplaces.\n• Peer-to-Peer Transfers: Simply transfer the NFT to another wallet.\n• Physical Redemption: Redeem the physical sapphire at any time, with storage and shipping costs.',
  },
  {
    id: 61,
    category: 'asset',
    subcategory: 'sapphire',
    question: 'Is Toto Finance a Safe Platform for Investing in Sapphire Tokens?',
    answer:
      'Yes, Toto Finance is built with complete compliance and safety for users in mind:\n\n• Regulated Framework: We operate under AML/KYC guidelines and use the services of licensed third-party service providers.\n• Blockchain Security: All transactions are recorded on the blockchain for complete transparency and protection against fraud.\n• Third-Party Validation: LCX is the physical validator, providing complete safety for custody, insurance, and auditability.\n• Non-Custodial Ownership: Your sapphire NFTs are safely stored in your own wallet, providing you with complete control.\n\nToto Finance is a safe, transparent, and efficient platform for accessing the world of luxury sapphires using the power of Web3.',
  },
  {
    id: 62,
    category: 'asset',
    subcategory: 'silver',
    question: 'What is Tokenized Silver on Toto Finance?',
    answer:
      'Tokenized Silver on Toto Finance is actual, physical silver held in secure vaults and tokenized on the blockchain. Each token is collateralized in a certain amount of silver, offering complete transparency and security. It enables users to own, buy, and sell silver instantly with complete Freedom of Ownership without the troubles of physically handling silver bars.',
  },
  {
    id: 63,
    category: 'asset',
    subcategory: 'silver',
    question: 'How to Invest in Tokenized Silver on Toto Finance?',
    answer:
      'Investing in tokenized silver on Toto Finance is a simple and secure process, just like buying tokenized diamonds:\n\nSign Up & Verify: Register on [totofinance.co](https://totofinance.co) and verify your account.',
  },
  {
    id: 64,
    category: 'asset',
    subcategory: 'silver',
    question: 'What Are the Advantages of Tokenized Silver over Physical Silver?',
    answer:
      '• Complete ownership of actual silver without any of the storage problems.\n• Transparent and verified through blockchain.\n• Easily tradable and accessible worldwide.\n• Secure vault storage with insurance.\n• Removes middlemen and import/export restrictions.',
  },
  {
    id: 65,
    category: 'asset',
    subcategory: 'silver',
    question: 'Is Tokenized Silver Regulated?',
    answer:
      'Yes. Toto Finance operates with a tight KYC/AML policy, and all assets are checked for authenticity within a regulated environment. LCX acts as the physical validator, ensuring that each tokenized silver is 1:1 backed, stored, and verified.',
  },
  {
    id: 66,
    category: 'asset',
    subcategory: 'silver',
    question: 'Can I Sell My Tokenized Silver?',
    answer:
      'Yes, you can sell your tokenized silver on Toto Finance with ease and security. Here\'s how:\n\n• Marketplace: Sell your asset to global buyers.\n• Direct Transfer: P2P transfer at any time.\n• Redemption: Redeem physical delivery at any time, anywhere in the world.',
  },
  {
    id: 67,
    category: 'asset',
    subcategory: 'silver',
    question: 'Is Toto Finance Safe for Tokenized Silver Trading?',
    answer:
      'Yes. With a regulated system in place, LCX validation, and blockchain-secured asset protection, Toto Finance provides:\n\n• Asset backing with authenticity verification.\n• Blockchain transparency and tracking.\n• Vault-insured, third-party asset storage.\n• User control with decentralized wallets.',
  },
  {
    id: 68,
    category: 'asset',
    subcategory: 'silver',
    question: 'Can I Redeem My Physical Silver?',
    answer:
      'Yes, Toto Finance Silver holders can redeem their silver bars and receive physical delivery.\n\nTo redeem, follow these steps:\n\nMake sure you have a fully verified LCX account.\n\n[Contact our support team](mailto:hello@totofinance.co) to initiate redemption.',
  },
];
