// Server Component (NO "use client")
// Static Generation with ISR - equivalent to getStaticProps with revalidate: 60
export const revalidate = 60;

import { Shield, Package, Eye, Lock, Database, Globe } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import { Navigation } from '../components/Navigation';
import { VideoBackground } from '../components/client/VideoBackground';

// Dynamic imports for heavy components
const NewsletterForm = dynamicImport(() => import('../components/NewsletterForm'));
const Footer = dynamicImport(() => import('../components/Footer'));

// Equivalent to getStaticProps - fetch data here
export default async function SolutionsPage() {
  // Example: Fetch solutions data from API if available
  // const solutionsData = await fetch('https://api.example.com/solutions', {
  //   next: { revalidate: 60 } // ISR: revalidate every 60 seconds
  // }).then(res => res.json());

  return (
    <div className="min-h-screen w-full relative">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative flex flex-col items-start sm:items-center justify-center min-h-[90vh] md:min-h-[100vh] text-left sm:text-center px-4 sm:px-6 md:px-8 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden">
        <VideoBackground
          videoSrc="/videos/footer.mp4"
          fallbackImage="/hero-background/fallbackbg.webp"
          fallbackAlt="Hero background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          overlayClassName="absolute inset-0 bg-black/60 z-10"
          videoClassName="absolute inset-0 w-full h-full object-cover z-0"
        />
         
        <div className="relative z-20 max-w-5xl w-full mx-0 sm:mx-auto">
           
           
           {/* Hero Headings */}
           <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 text-white">
             Comprehensive Digital Asset Solutions
           </h1>
           
           {/* Hero Subheading */}
           <h2 className="hero-subheading text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-white/90">
             Empowering institutions with cutting-edge tokenization infrastructure
           </h2>
           
           {/* Description Section */}
           <div className="max-w-3xl w-full mx-0 sm:mx-auto mb-8 mt-6 sm:mt-8 md:mt-10 text-left sm:text-center">
             <p className="hero-description text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-4 text-left sm:text-center">
               From regulatory compliance to seamless integration, our solutions provide everything needed for successful digital asset implementation.
             </p>
           </div>
           
           {/* Call-to-Action */}
           <div className="flex flex-col items-start sm:items-center space-y-6 mb-10 sm:mb-16">
             <a
               href="https://app.totofinance.co/"
               target="_blank"
               rel="noopener noreferrer"
               className="cta-primary px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-base sm:text-lg font-medium"
             >
               Explore Solutions
             </a>
           </div>
         </div>
       </main>

       {/* Solutions Section */}
       <section className="solutions-section px-6 md:px-8 lg:px-12 py-20 md:py-40">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
               Enterprise-Grade Solutions
             </h2>
             <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
               Comprehensive digital asset infrastructure designed for institutional success.
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
             {/* Compliance & Security */}
             <div className="bg-white rounded-xl p-8 shadow-lg">
               <div className="mb-4">
                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Shield className="w-6 h-6 text-blue-600" />
                 </div>
                 <h3 className="text-xl font-light text-gray-900">Compliance & Security</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 Built-in regulatory compliance with multi-jurisdictional support and institutional-grade security protocols.
               </p>
             </div>

             {/* Asset Tokenization */}
             <div className="bg-white rounded-xl p-8 shadow-lg">
               <div className="mb-4">
                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Package className="w-6 h-6 text-green-600" />
                 </div>
                 <h3 className="text-xl font-light text-gray-900">Asset Tokenization</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 Seamless tokenization of real-world assets with full audit trails and proof-of-reserve capabilities.
               </p>
             </div>

             {/* Trading Infrastructure */}
             <div className="bg-white rounded-xl p-8 shadow-lg">
               <div className="mb-4">
                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Eye className="w-6 h-6 text-purple-600" />
                 </div>
                 <h3 className="text-xl font-light text-gray-900">Trading Infrastructure</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 Advanced trading infrastructure with real-time analytics and automated settlement capabilities.
               </p>
             </div>

             {/* Custody Solutions */}
             <div className="bg-white rounded-xl p-8 shadow-lg">
               <div className="mb-4">
                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Lock className="w-6 h-6 text-pink-600" />
                 </div>
                 <h3 className="text-xl font-light text-gray-900">Custody Solutions</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 Multi-signature custody with institutional-grade security and insurance coverage for digital assets.
               </p>
             </div>

             {/* Data Management */}
             <div className="bg-white rounded-xl p-8 shadow-lg">
               <div className="mb-4">
                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Database className="w-6 h-6 text-orange-600" />
                 </div>
                 <h3 className="text-xl font-light text-gray-900">Data Management</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 Comprehensive data management with real-time reporting and analytics for informed decision-making.
               </p>
             </div>

             {/* Global Access */}
             <div className="bg-white rounded-xl p-8 shadow-lg">
               <div className="mb-4">
                 <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                   <Globe className="w-6 h-6 text-blue-600" />
                 </div>
                 <h3 className="text-xl font-light text-gray-900">Global Access</h3>
               </div>
               <p className="text-gray-600 leading-relaxed">
                 24/7 global marketplace access with cross-border trading capabilities and multi-currency support.
               </p>
             </div>
           </div>
           
           <div className="text-center">
             <a
               href="https://app.totofinance.co/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-300 hover:scale-105"
             >
               Get Started
             </a>
           </div>
         </div>
       </section>

       {/* Newsletter Section */}
       <section className="newsletter-section pt-12 pb-0 md:pt-24 md:pb-0">
         <div className="newsletter-bg">
           <VideoBackground
             videoSrc="/videos/footer.mp4"
             fallbackImage="/hero-background/footer-backup.webp"
             fallbackAlt="Newsletter background fallback"
             className="newsletter-video-container"
             overlayClassName="newsletter-overlay"
             videoClassName="newsletter-video"
           />
           <NewsletterForm />
         </div>
       </section>

       <Footer />
     </div>
   );
}
