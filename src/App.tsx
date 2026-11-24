/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Printer, ShieldCheck, Zap, Globe, ChevronRight, X, CheckCircle2, TrendingUp, HelpCircle, Newspaper, Sparkles, Building2, Layers, Calendar, Phone, MapPin, Mail, Lightbulb, BookOpen, Download, UserCheck, Award, FileText, Check, Eye } from 'lucide-react';

export function LogoIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor">
      <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
    </svg>
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'events' | 'info' | 'contact' | 'tips'>('home');
  const [memberModalOpen, setMemberModalOpen] = useState(false);
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);
  const [regForm, setRegForm] = useState({ name: '', company: '', phone: '', email: '', category: 'Screen Printing' });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  
  // Mission accordion state
  const [missionExpanded, setMissionExpanded] = useState(false);

  // Gallery filter and lightbox state
  const [galleryFilter, setGalleryFilter] = useState('All Activities');
  const [activeMedia, setActiveMedia] = useState<{ title: string; category: string; image: string; date: string; photosCount: string; desc: string } | null>(null);

  // Search & Filter for Info Bureau and Tips
  const [infoSearch, setInfoSearch] = useState('');
  const [tipCategory, setTipCategory] = useState('All');

  const openNavModal = (title: string, desc: string) => {
    setModalTitle(title);
    setModalContent(desc);
    setInfoModalOpen(true);
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (regForm.name && regForm.company) {
      setRegSuccess(true);
      setTimeout(() => {
        setRegSuccess(false);
        setJoinModalOpen(false);
        setRegForm({ name: '', company: '', phone: '', email: '', category: 'Screen Printing' });
      }, 2500);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const machineryPartners = [
    { name: 'M&R Printing', style: { fontFamily: 'Georgia, serif', fontWeight: 700, letterSpacing: '-0.02em', fontSize: '15px' } },
    { name: 'Brother DTG', style: { fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px', textTransform: 'uppercase' as const } },
    { name: 'Epson Industrial', style: { fontFamily: '"Trebuchet MS", sans-serif', fontWeight: 600, letterSpacing: '0.01em', fontSize: '15px', fontStyle: 'italic' as const } },
    { name: 'Kornit Digital', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px', textTransform: 'uppercase' as const } },
    { name: 'Hubergroup Inks', style: { fontFamily: 'Palatino, "Book Antiqua", serif', fontWeight: 400, letterSpacing: '-0.01em', fontSize: '16px' } },
    { name: 'Toyo Ink', style: { fontFamily: 'Impact, "Arial Narrow", sans-serif', fontWeight: 400, letterSpacing: '0.04em', fontSize: '14px' } },
    { name: 'Dupont Artistri', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' } },
  ];

  const backers = [
    { name: 'Tirupur Exporters', style: { fontFamily: '"Times New Roman", serif', fontWeight: 400, letterSpacing: '0.02em', fontSize: '14px' } },
    { name: 'AEPC India', style: { fontFamily: '"Arial Black", sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '16px' } },
    { name: 'CII Tamil Nadu', style: { fontFamily: 'Impact, sans-serif', fontWeight: 700, letterSpacing: '0.05em', fontSize: '18px' } },
    { name: 'SIEMA', style: { fontFamily: 'Georgia, serif', fontWeight: 600, letterSpacing: '-0.02em', fontSize: '17px' } },
    { name: 'ZDHC Foundation', style: { fontFamily: 'Helvetica, Arial, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', fontSize: '15px' } },
    { name: 'OEKO-TEX', style: { fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '0.06em', fontSize: '14px', textTransform: 'uppercase' as const } },
    { name: 'NIFT Tirupur', style: { fontFamily: '"Courier New", monospace', fontWeight: 700, letterSpacing: '0.18em', fontSize: '14px' } },
    { name: 'SASI Tech', style: { fontFamily: 'Palatino, serif', fontWeight: 500, letterSpacing: '0.03em', fontSize: '15px' } },
  ];

  const useModes = [
    {
      title: 'Commerce & Export',
      desc: 'Connect your garment printing unit directly with global apparel buying houses, retail brands, and export houses seeking premium knitwear print quality.',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4'
    },
    {
      title: 'Shared Tech Hubs',
      desc: 'Access high-speed automatic carousel presses, laser separation units, and color matching laboratories at subsidized association facilities across Tirupur.',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4'
    },
    {
      title: 'Eco Compliance',
      desc: 'Stay ahead of international environmental regulations with ZDHC-approved waterbase inks, zero-discharge wastewater guidance, and sustainable certifications.',
      video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_164207_f243351d-ed59-48ec-83a0-a5e996bdbe3c.png'
    }
  ];

  const [activeModeIndex, setActiveModeIndex] = useState(0);

  const committeeMembers = [
    { name: 'Shri. K. R. Chandrasekaran', role: 'President', company: 'Sri Vinayaga Prints', experience: 'Founder' },
    { name: 'Shri. M. Senthil Kumar', role: 'Secretary', company: 'Kongu Textile Labs', experience: 'Co-Founder' },
    { name: 'Shri. P. Natarajan', role: 'Treasurer', company: 'Apex Garment Decorators', experience: 'Co-Founder' },
    { name: 'Smt. R. Vasanthamani', role: 'Vice President', company: 'Starlight Impressions', experience: 'Executive Member' },
  ];

  // Pre-populated Tirupur Printers Association Activities & Gallery
  const galleryActivities = [
    // Governance & Meetings
    { title: 'Annual General Body Meeting (AGM)', category: 'Governance & Meetings', date: '2025-2026', photosCount: '24 Photos', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', desc: 'Annual review of association achievements, budget approvals, and executive council updates.' },
    { title: 'Executive Council Meet', category: 'Governance & Meetings', date: '2025', photosCount: '18 Photos', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', desc: 'Quarterly strategy session addressing raw material costing and member welfare policies.' },
    { title: 'Office Bearers Election', category: 'Governance & Meetings', date: '2024', photosCount: '30 Photos', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', desc: 'Democratic election of association office bearers and wing representatives.' },
    { title: 'Tirupur Flex & Label Printers Wing Meet', category: 'Governance & Meetings', date: '2025', photosCount: '16 Photos', image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', desc: 'Specialized meet for garment tag, woven label, and flexographic printing specialists.' },

    // Advocacy & Govt. Meets
    { title: 'Representation at Tirupur Commissioner & Collectorate Office', category: 'Advocacy & Govt. Meets', date: '2025', photosCount: '14 Photos', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', desc: 'Submitting formal memorandum regarding industrial zone effluent regulations and property tax concessions.' },
    { title: 'Paper Price Hike Protest', category: 'Advocacy & Govt. Meets', date: '2025', photosCount: '22 Photos', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80', desc: 'TPA leaders leading peaceful advocacy march urging stability in art and kraft paper pricing.' },
    { title: 'Tamil Nadu Printers Federation Summit', category: 'Advocacy & Govt. Meets', date: '2025', photosCount: '45 Photos', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', desc: 'Statewide delegates discussing MSME power tariff rationalization and GST input tax credit.' },
    { title: 'Power Tariff Memorandum Submission', category: 'Advocacy & Govt. Meets', date: '2025', photosCount: '19 Photos', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80', desc: 'Submitting joint petition to TNEB officials advocating for subsidized industrial power slabs for printing presses.' },

    // Trade Expos & Mill Visits
    { title: 'Seshasayee Paper Mill Industrial Visit', category: 'Trade Expos & Mill Visits', date: '2025', photosCount: '36 Photos', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80', desc: 'Association delegation inspecting paper pulping lines, quality testing labs, and recycling units.' },
    { title: 'Madurai & Chennai Print Expo Delegation', category: 'Trade Expos & Mill Visits', date: '2024', photosCount: '50 Photos', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', desc: 'Exploring cutting-edge digital presses, UV coaters, and automated binding equipment.' },
    { title: 'Tirupur Packaging & Garment Tag Expo', category: 'Trade Expos & Mill Visits', date: '2025', photosCount: '60 Photos', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', desc: 'Showcasing high-end apparel tags, barcode printers, and eco-friendly packaging substrates.' },
    { title: 'Sivakasi Offset Machinery Tour', category: 'Trade Expos & Mill Visits', date: '2025', photosCount: '42 Photos', image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80', desc: 'Technical study tour examining high-speed multicolor offset printing plants and box making lines.' },

    // Celebrations
    { title: 'World Printers Day Celebration', category: 'Celebrations', date: 'Oct 2025', photosCount: '35 Photos', image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80', desc: 'Celebrating the contribution of master printers, press operators, and pre-design artists across Tirupur.' },
    { title: 'Annual Calendar Launch', category: 'Celebrations', date: 'Jan 2025', photosCount: '18 Photos', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', desc: 'Unveiling the TPA official annual trade directory and technical wall calendar.' },
    { title: 'Printers Sports Meet & Trophy', category: 'Celebrations', date: '2025', photosCount: '40 Photos', image: 'https://images.unsplash.com/photo-1517649763962-0c623266cf20?auto=format&fit=crop&w=800&q=80', desc: 'Annual cricket and badminton tournament uniting press owners, workers, and paper suppliers.' },
    { title: 'Diwali Milan & Family Get-Together', category: 'Celebrations', date: 'Nov 2025', photosCount: '55 Photos', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', desc: 'Grand festive gala dinner honoring senior veteran printers of Tirupur.' },

    // CSR & Welfare
    { title: 'Member Medical Aid Drive', category: 'CSR & Welfare', date: '2025', photosCount: '25 Photos', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80', desc: 'Free health checkup camp and medical financial aid distribution for press workers.' },
    { title: 'Student Printing Scholarship Program', category: 'CSR & Welfare', date: '2025', photosCount: '20 Photos', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80', desc: 'Distributing scholarships to children of printing press employees pursuing higher technical education.' },
    { title: 'Blood Donation Camp by TPA Youth Wing', category: 'CSR & Welfare', date: '2025', photosCount: '30 Photos', image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800&q=80', desc: 'Voluntary blood donation drive organized at TPA Complex in association with Government Hospital.' },
    { title: 'Eco Tree Plantation Drive in Industrial Zones', category: 'CSR & Welfare', date: '2025', photosCount: '28 Photos', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80', desc: 'Planting over 1,000 saplings across Tirupur printing industrial parks to promote green sustainability.' },
  ];

  const circularsList = [
    { title: 'Technical Circular #42: Waterbase Ink Curing Standards', date: 'Feb 14, 2026', category: 'Technical', size: '2.4 MB', desc: 'Detailed guidelines on conveyor dryer dwell time and temperature profiling for 100% cotton knits.' },
    { title: 'Government MSME Capital Subsidy Guidelines 2026', date: 'Jan 28, 2026', category: 'Government Schemes', size: '4.1 MB', desc: 'Up to 25% capital investment subsidy for upgrading manual tables to automatic pneumatic carousels.' },
    { title: 'ZDHC Zero-Discharge Compliance Bulletin #12', date: 'Jan 10, 2026', category: 'Compliance', size: '1.8 MB', desc: 'Mandatory testing protocols for heavy metals and Azo dyes in export garment printing.' },
    { title: 'Export Packaging Substrate Quality Manual 2026', date: 'Jan 02, 2026', category: 'Export Standards', size: '3.5 MB', desc: 'Approved kraft and art paper GSM ratings, burst strength indices, and barcode readability specifications.' },
  ];

  const filteredGallery = galleryActivities.filter(g => galleryFilter === 'All Activities' || g.category === galleryFilter);

  const tipsList = [
    { 
      title: 'Mastering Fine Halftone Mesh & EOM Calibration', 
      category: 'Screen Prep', 
      level: 'Masterclass', 
      time: '6 min read', 
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      author: 'TPA Technical Board',
      desc: 'Achieve photorealistic four-color process printing on 100% cotton knits using 305 yellow mesh and precise 18% emulsion-over-mesh (EOM) ratios.' 
    },
    { 
      title: 'Advanced Plastisol Dye Migration Countermeasures', 
      category: 'Curing', 
      level: 'Professional', 
      time: '9 min read', 
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      author: 'Sublimation Research Lab',
      desc: 'Eliminate polyester dye bleed permanently with low-bleed grey underbase barriers flash-cured at precisely 280°F before top-color deposition.' 
    },
    { 
      title: 'Pneumatic Carousel Squeegee Biomechanics', 
      category: 'Press Operation', 
      level: 'Advanced', 
      time: '5 min read', 
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      author: 'Automatic Press Guild',
      desc: 'Calibrate 18-degree squeegee attack angles and pneumatic pressure curves for pristine ink deposit films without stencil blowouts.' 
    },
    { 
      title: 'ZDHC Eco-Pigment Viscosity & Color Matching', 
      category: 'Curing', 
      level: 'Masterclass', 
      time: '7 min read', 
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80',
      author: 'Eco-Compliance Wing',
      desc: 'Formulate waterbase organic pigment pastes conforming to strict zero-discharge export standards for European retail brands.' 
    },
  ];

  const filteredTips = tipsList.filter(t => tipCategory === 'All' || t.category === tipCategory);

  return (
    <div className="flex flex-col bg-[#F5F5F5] min-h-screen text-black selection:bg-black selection:text-white">
      
      {/* UNIVERSAL NAVBAR */}
      <nav className="sticky top-0 left-0 right-0 z-40 bg-[#F5F5F5]/95 backdrop-blur-md px-6 py-5 border-b border-black/10 transition-all">
        <div className="max-w-[88rem] mx-auto flex items-center justify-between">
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-2.5 group cursor-pointer text-left">
            <LogoIcon className="w-7 h-7 text-black transition-transform duration-300 group-hover:scale-105" />
            <span className="text-2xl font-medium tracking-tight text-black">Tirupur Printers</span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-base font-medium">
            <button 
              onClick={() => setCurrentView('home')} 
              className={`transition-colors duration-200 cursor-pointer pb-1 ${currentView === 'home' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-700 hover:text-black'}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentView('about')} 
              className={`transition-colors duration-200 cursor-pointer pb-1 ${currentView === 'about' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-700 hover:text-black'}`}
            >
              About us
            </button>
            <button 
              onClick={() => setCurrentView('events')} 
              className={`transition-colors duration-200 cursor-pointer pb-1 ${currentView === 'events' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-700 hover:text-black'}`}
            >
              Events & Gallery
            </button>
            <button 
              onClick={() => setCurrentView('info')} 
              className={`transition-colors duration-200 cursor-pointer pb-1 ${currentView === 'info' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-700 hover:text-black'}`}
            >
              Info Bureau
            </button>
            <button 
              onClick={() => setCurrentView('contact')} 
              className={`transition-colors duration-200 cursor-pointer pb-1 ${currentView === 'contact' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-700 hover:text-black'}`}
            >
              Contact
            </button>
            <button 
              onClick={() => setCurrentView('tips')} 
              className={`transition-colors duration-200 cursor-pointer pb-1 ${currentView === 'tips' ? 'text-black font-semibold border-b-2 border-black' : 'text-gray-700 hover:text-black'}`}
            >
              Tips and Tricks
            </button>
          </div>

          <button
            onClick={() => setMemberModalOpen(true)}
            className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 cursor-pointer shadow-md"
          >
            Member Portal
          </button>
        </div>
      </nav>

      {/* CMYK PRESS CALIBRATION STRIP */}
      <div className="w-full bg-transparent py-2 px-6 overflow-hidden">
        <div className="max-w-[88rem] mx-auto rounded overflow-hidden shadow-sm">
          <img 
            src="/assets/aistudio/image_b18e3e72.png" 
            alt="CMYK Press Calibration Bar" 
            className="w-full h-7 object-cover" 
          />
        </div>
      </div>

      {/* VIEW ROUTING */}
      {currentView === 'home' && (
        <div>
          {/* SECTION 1: Hero Section */}
          <div className="h-[calc(100vh-85px)] flex flex-col overflow-hidden container mx-auto max-w-[88rem] relative pt-4">
            <div className="flex-1 px-6 pb-6 flex items-end w-full">
              <div 
                className="relative w-full rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl"
                style={{ height: 'calc(100vh - 120px)' }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-36">
                  <span className="bg-white/80 backdrop-blur text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 shadow-sm">
                    Dollar City Printing Ecosystem
                  </span>
                  <h1 
                    className="text-black text-5xl md:text-6xl font-medium leading-tight max-w-xl mb-4"
                    style={{ letterSpacing: '-0.04em' }}
                  >
                    Garment Printing<br />Excellence
                  </h1>
                  <p 
                    className="text-black/80 text-base md:text-lg max-w-md mb-8 leading-relaxed font-medium bg-white/60 backdrop-blur-sm p-3 rounded-xl shadow-sm"
                  >
                    The apex association uniting knitwear garment printers, automated screen tech pioneers, and sustainable textile innovators in Tirupur.
                  </p>
                  
                  <button
                    onClick={() => setJoinModalOpen(true)}
                    className="inline-flex items-center gap-3 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-all duration-200 cursor-pointer group shadow-xl hover:scale-105"
                  >
                    <span>Join association</span>
                    <span className="bg-white rounded-full p-2 text-black transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </button>
                </div>

                <div className="relative z-10 w-full pb-10 px-8 md:px-12 flex justify-start">
                  <div className="w-full max-w-md overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] bg-white/40 backdrop-blur-md rounded-2xl py-3 px-4 shadow-sm">
                    <div className="marquee-track flex items-center">
                      {[...machineryPartners, ...machineryPartners].map((brand, idx) => (
                        <div key={idx} className="mx-7 shrink-0 text-black/80 font-bold whitespace-nowrap" style={brand.style}>
                          {brand.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* SECTION 2: Info Section */}
          <section className="bg-[#F5F5F5] px-6 py-24">
            <div className="max-w-[88rem] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
                <div>
                  <h2 
                    className="text-black text-4xl md:text-5xl font-medium leading-tight mb-8"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    Meet Tirupur Printers.
                  </h2>
                  <button
                    onClick={() => setCurrentView('about')}
                    className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-7 pr-2 py-2 rounded-full hover:bg-gray-800 transition-all duration-200 cursor-pointer group shadow-md"
                  >
                    <span>Discover us</span>
                    <span className="bg-white rounded-full p-1.5 text-black">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                </div>
                <div>
                  <p className="text-black/75 text-2xl md:text-3xl leading-relaxed font-normal">
                    Tirupur Printers Association is the premier guild driving sustainable printing technology, shared facilities, and global export standards.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div 
                  className="lg:col-span-2 rounded-2xl p-7 min-h-[320px] flex flex-col justify-between shadow-sm relative overflow-hidden group"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1280&q=85")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] transition-opacity group-hover:opacity-30 opacity-60" />
                  <div className="relative z-10">
                    <span className="text-xs uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full font-bold">Industrial Scale</span>
                    <h3 className="text-white text-3xl font-medium leading-snug mt-3" style={{ letterSpacing: '-0.02em' }}>
                      Printing that scales
                    </h3>
                  </div>
                  <div className="relative z-10">
                    <p className="text-white/90 text-base max-w-xs font-medium">
                      Gain unmatched production efficiency as your print units connect with shared automated carousels and bulk raw materials.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1C1A2E] rounded-2xl p-7 min-h-[320px] flex flex-col justify-between shadow-sm text-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest bg-white/10 text-white/80 px-3 py-1 rounded-full font-bold">Green Standards</span>
                    <h3 className="text-2xl font-medium whitespace-pre-line mt-3" style={{ letterSpacing: '-0.02em' }}>
                      Always compliant,<br />always green.
                    </h3>
                  </div>
                  <div>
                    <p className="text-white/70 text-base">
                      Keep fully eco-certified with zero-discharge wastewater standards and global export compliance.
                    </p>
                  </div>
                </div>

                <div className="bg-[#1C1A2E] rounded-2xl p-7 min-h-[320px] flex flex-col justify-between shadow-sm text-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest bg-white/10 text-white/80 px-3 py-1 rounded-full font-bold">Community</span>
                    <h3 className="text-2xl font-medium whitespace-pre-line mt-3" style={{ letterSpacing: '-0.02em' }}>
                      Fully<br />connected
                    </h3>
                  </div>
                  <div>
                    <p className="text-white/70 text-base">
                      Skip the friction of sourcing and compliance. TPA runs shared machinery hubs and group buying in the background for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Backed By Section */}
          <section className="bg-[#F5F5F5] px-6 py-12">
            <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
              <div className="md:col-span-1">
                <p className="text-black/70 text-base leading-relaxed whitespace-pre-line font-medium">
                  Partnered with premier institutions<br />and apex export bodies.
                </p>
              </div>
              <div className="md:col-span-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="backers-track flex items-center py-4">
                  {[...backers, ...backers].map((backer, idx) => (
                    <div key={idx} className="mx-10 shrink-0 text-black/60 font-semibold whitespace-nowrap" style={backer.style}>
                      {backer.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: Use Cases Section */}
          <section className="bg-[#F5F5F5] px-6 py-24">
            <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="md:pr-12 md:pt-2">
                <span className="text-black/60 text-sm mb-2 block font-bold uppercase tracking-wider">TPA in Practice</span>
                <h2 className="text-5xl md:text-6xl font-medium leading-none mb-6" style={{ letterSpacing: '-0.04em' }}>
                  Print modes
                </h2>
                <p className="text-black/70 text-base leading-relaxed max-w-sm mb-8">
                  TPA powers a wide range of services for knitwear screen printers, digital print houses, and garment exporters wanting sustainable growth.
                </p>

                <div className="flex flex-col gap-3">
                  {useModes.map((mode, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModeIndex(idx)}
                      className={`text-left px-5 py-4 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                        activeModeIndex === idx 
                          ? 'bg-black text-white shadow-md' 
                          : 'bg-white text-black/80 hover:bg-gray-100 border border-black/5'
                      }`}
                    >
                      <span className="text-lg font-medium">{mode.title}</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${activeModeIndex === idx ? 'translate-x-1 text-white' : 'text-black/40'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative rounded-3xl overflow-hidden min-h-[720px] shadow-2xl bg-black">
                {useModes[activeModeIndex].video.endsWith('.mp4') ? (
                  <video
                    key={useModes[activeModeIndex].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  >
                    <source src={useModes[activeModeIndex].video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={useModes[activeModeIndex].video}
                    alt={useModes[activeModeIndex].title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <div className="relative z-10 p-10 md:p-12 flex flex-col justify-end h-full min-h-[720px]">
                  <div>
                    <h3 className="text-white text-4xl md:text-5xl font-medium leading-tight mb-5" style={{ letterSpacing: '-0.03em' }}>
                      {useModes[activeModeIndex].title}
                    </h3>
                    <p className="text-white/80 text-base max-w-md mb-8 leading-relaxed">
                      {useModes[activeModeIndex].desc}
                    </p>
                    <button
                      onClick={() => openNavModal(`${useModes[activeModeIndex].title} Overview`, useModes[activeModeIndex].desc)}
                      className="inline-flex items-center gap-3 text-white text-base font-medium group cursor-pointer"
                    >
                      <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                        <ArrowRight className="w-4 h-4 text-white group-hover:text-black" />
                      </span>
                      <span>Know more</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentView === 'about' && (
        <div className="max-w-[88rem] mx-auto px-6 py-20">
          <div className="max-w-4xl mb-16">
            <span className="text-black/60 text-sm font-semibold uppercase tracking-wider mb-2 block">Established 2010</span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">About Us — Tirupur Printers Association</h1>
            <p className="text-xl text-black/80 leading-relaxed mb-6">
              Established in 2010, the Tirupur Printers Association (TPA) (or Tirupur Master Printers Association) was founded by K. R. Chandrasekaran, along with M. Senthil Kumar and P. Natarajan. The association was created to unite and empower the printing and packaging community in Tirupur, fostering collaboration, innovation, and excellence across the Dollar City’s industrial ecosystem.
            </p>
            <p className="text-lg text-black/70 leading-relaxed">
              Over the years, the association has grown into a vital platform for commercial printers, offset and digital presses, garment tag and label makers, packaging specialists, and material suppliers—dedicated to elevating print quality and global service standards in the region.
            </p>
          </div>

          {/* MISSION & VISION WITH INTERACTIVE MISSION ACCORDION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-black/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-medium">Mission</h3>
                  <button 
                    onClick={() => setMissionExpanded(!missionExpanded)}
                    className="text-xs font-bold uppercase tracking-wider bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    {missionExpanded ? 'Hide Details' : 'Explain Mission'}
                  </button>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  The Tirupur Printers Association is dedicated to fostering a vibrant, globally competitive, and sustainable printing industry in Tirupur. Our mission is to support local printers by promoting best practices, advancing press and packaging technology, and enhancing workforce skills through continuous education and collaboration.
                </p>
                {missionExpanded && (
                  <div className="mt-4 pt-4 border-t border-gray-100 text-gray-700 text-base leading-relaxed animate-fadeIn space-y-3">
                    <p><strong>Core Objective 1:</strong> Drive technological advancement by encouraging the transition from manual setups to automated pneumatic carousels and high-speed digital presses.</p>
                    <p><strong>Core Objective 2:</strong> Empower export supply chains with ZDHC-approved waterbase inks, rigorous colour management, and eco-sustainable packaging substrates.</p>
                    <p><strong>Core Objective 3:</strong> Strengthen workforce competence through regular technical workshops, safety seminars, and apprentice scholarship drives.</p>
                  </div>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>Click "Explain Mission" for comprehensive breakdown</span>
                <span className="font-bold text-black">TPA Secretariat</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm border border-black/5 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-medium mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our vision is to be the leading association for printers in Tirupur, recognized for championing innovation, eco-friendly sustainability, and world-class quality in print and packaging. We aspire to create a connected ecosystem where members thrive—embracing modern automation, digital workflows, and global compliance standards that elevate Tirupur’s printing reputation across India and beyond.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
                <span>Dollar City Industrial Standard</span>
              </div>
            </div>
          </div>

          {/* GOALS */}
          <div className="bg-white rounded-3xl p-10 md:p-16 mb-20 shadow-sm border border-black/5">
            <h2 className="text-3xl font-medium mb-8">Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h4 className="font-semibold text-xl">Networking and Collaboration:</h4>
                <p className="text-gray-700 text-base leading-relaxed">Facilitate strong B2B networking opportunities for presses, packaging units, and paper/ink suppliers to collaborate, share insights, and build lasting business relationships within Tirupur’s printing community.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-xl">Professional Development:</h4>
                <p className="text-gray-700 text-base leading-relaxed">Organize hands-on workshops, technical seminars, and training programs on color management, pre-press, modern machinery, and export packaging compliance to keep members ahead of industry trends.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-xl">Advocacy:</h4>
                <p className="text-gray-700 text-base leading-relaxed">Represent the collective voice of Tirupur’s printing community before state and central policymakers, MSME bodies, and trade stakeholders—advocating for supportive tax policies, power tariffs, and industrial growth schemes.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-xl">Quality and Eco-Standards:</h4>
                <p className="text-gray-700 text-base leading-relaxed">Promote best practices, international export compliance, and sustainable printing standards, encouraging members to adopt eco-friendly inks, recyclable substrates, and energy-efficient processes.</p>
              </div>
              <div className="space-y-2 md:col-span-2">
                <h4 className="font-semibold text-xl">Innovation:</h4>
                <p className="text-gray-700 text-base leading-relaxed">Encourage the adoption of next-generation printing technologies—including UV, flexo, digital, variable-data barcode printing, and smart packaging—ensuring Tirupur’s printers remain competitive and future-ready.</p>
              </div>
            </div>
            <p className="mt-10 pt-6 border-t border-gray-100 text-gray-600 italic text-base">
              By pursuing these goals, the Tirupur Printers Association aims to build a thriving printing ecosystem that empowers every member and drives the industrial and economic growth of Tirupur.
            </p>
          </div>

          {/* Executive Committee Section */}
          <div className="mb-20">
            <div className="mb-10">
              <span className="text-black/60 text-sm font-semibold uppercase tracking-wider mb-2 block">Founders & Leadership</span>
              <h2 className="text-3xl md:text-4xl font-medium">Founding Committee & Office Bearers</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {committeeMembers.map((member, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-emerald-700 font-medium text-sm mt-0.5">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-2">{member.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {currentView === 'events' && (
        <div className="max-w-[88rem] mx-auto px-6 py-20">
          <div className="max-w-3xl mb-12">
            <span className="text-black/60 text-sm font-semibold uppercase tracking-wider mb-2 block">Activities & Archives</span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">Events, Activities & Media Gallery</h1>
            <p className="text-xl text-black/70 leading-relaxed">
              Explore association governance meets, trade expo delegations, advocacy representations, and CSR welfare milestones with rich photo records.
            </p>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="flex gap-2 flex-wrap mb-12">
            {['All Activities', 'Governance & Meetings', 'Trade Expos & Mill Visits', 'Advocacy & Govt. Meets', 'Celebrations', 'CSR & Welfare'].map((cat) => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer ${galleryFilter === cat ? 'bg-black text-white shadow-md' : 'bg-white text-black border border-black/10 hover:bg-gray-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* DYNAMIC ANIMATED GALLERY GRID (ZERO BLANK SPACES) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fadeIn">
            {filteredGallery.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveMedia(item)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/10 hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div>
                  <div className="relative h-60 overflow-hidden bg-gray-900">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md border border-white/10">
                      {item.category}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {item.photosCount}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest bg-gray-100 px-2.5 py-0.5 rounded">Year: {item.date}</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-black transition-colors leading-snug">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4 pt-4 text-xs font-bold text-black uppercase tracking-wider">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-emerald-600 animate-bounce" />
                    <span>View Lightbox</span>
                  </div>
                  <span className="text-gray-400 group-hover:text-black transition-colors">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentView === 'info' && (
        <div className="max-w-[88rem] mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-black/60 text-sm font-semibold uppercase tracking-wider mb-2 block">Resource Center</span>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Info Bureau & Circulars</h1>
              <p className="text-lg text-black/70">
                Access technical bulletins, ink formulation standards, government export subsidy guidelines, and safety advisories.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search circulars..."
                value={infoSearch}
                onChange={(e) => setInfoSearch(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white border border-black/10 focus:border-black outline-none text-sm shadow-sm sm:w-72"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {circularsList.filter(c => c.title.toLowerCase().includes(infoSearch.toLowerCase())).map((circ, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-black/5 rounded-full text-black/80">{circ.category}</span>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{circ.size}</span>
                      <span>•</span>
                      <span>{circ.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium mb-3">{circ.title}</h3>
                  <p className="text-black/70 mb-6 leading-relaxed">{circ.desc}</p>
                </div>
                <button onClick={() => openNavModal(circ.title, `${circ.desc}\n\nOfficial TPA publication verified by the technical secretariat.`)} className="w-full bg-gray-100 text-black font-medium py-3 rounded-xl hover:bg-black hover:text-white transition-colors text-sm flex items-center justify-center gap-2 cursor-pointer">
                  <Download className="w-4 h-4" />
                  <span>Download PDF Bulletin ({circ.size})</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentView === 'contact' && (
        <div className="max-w-[88rem] mx-auto px-6 py-20 animate-fadeIn">
          {/* HEADER */}
          <div className="max-w-4xl mb-16">
            <span className="text-black/60 text-sm font-semibold uppercase tracking-wider mb-2 block">Secretariat & Subscription</span>
            <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-6">Contact & Subscription Form</h1>
            <p className="text-xl text-black/70 leading-relaxed font-normal">
              Submit your annual association subscription or reach out directly to TPA founders and office bearers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
            
            {/* LEFT COLUMN: OFFICE BEARERS & UPI SUBSCRIPTION BOX */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-10 shadow-sm border border-black/10 flex flex-col justify-between space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                    <Printer className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tirupur Printers Association</h3>
                    <p className="text-xs text-gray-500 font-mono">Regd. No. 351/2010</p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-700 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-black shrink-0 mt-0.5" />
                    <p className="text-sm">64-A, 3rd Street, Kumaran Road, Tirupur - 641601, Tamil Nadu, INDIA</p>
                  </div>

                  <div className="border-t border-gray-100 pt-4 space-y-2 font-mono text-xs text-gray-800">
                    <p className="font-bold text-black uppercase tracking-wider mb-2">Founders & Office Bearers:</p>
                    <p>98422 64355 — K. R. Chandrasekaran — Founder</p>
                    <p>98422 49646 — M. Senthil Kumar — President</p>
                    <p>98430 16392 — P. Natarajan — Secretary</p>
                    <p>98940 48022 — R. A. Senthilkumar — Treasurer</p>
                    <p>94435 50054 — H. Vasanthamani — Vice President</p>
                    <p>99449 34903 — K. Janakarajan — Vice President</p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                    <Mail className="w-5 h-5 text-black shrink-0" />
                    <p className="text-sm font-mono">secretary@tirupurprinters.org</p>
                  </div>
                </div>
              </div>

              {/* UPI SUBSCRIPTION BOX */}
              <div className="bg-[#1C1A2E] text-white rounded-2xl p-6 shadow-md">
                <h4 className="text-lg font-bold mb-2">FILL AND SEND THE FORM<br />PAY YOUR SUBSCRIPTION</h4>
                <p className="text-xs text-white/80 font-mono mb-4">
                  Pay by UPI ID : <span className="text-amber-300 font-bold">tpa@okicici</span><br />
                  send your receipts by Whatsapp
                </p>
                <button
                  onClick={() => openNavModal('WhatsApp Payment Receipt Verification', 'Please send your UPI transaction reference screenshot along with your company name to our official WhatsApp helpline at +91 98422 00000. Your receipt will be verified within 2 hours.')}
                  className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider cursor-pointer mb-2 shadow"
                >
                  Send
                </button>
                <p className="text-xs text-white/60 text-center font-medium">and get your Payment Receipt</p>
              </div>
            </div>

            {/* RIGHT COLUMN: SUBSCRIPTION FORM */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-black/10">
              <h3 className="text-2xl font-bold uppercase tracking-wider mb-8 text-black border-b border-gray-100 pb-4">Subscription Form</h3>

              {contactSubmitted ? (
                <div className="py-20 text-center bg-gray-50 rounded-2xl border border-black/5 p-8">
                  <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
                  <h4 className="text-2xl font-medium mb-2">Subscription Form Submitted!</h4>
                  <p className="text-gray-600 text-sm mb-4">Thank you for submitting your details. Please complete your UPI payment to finalize your membership.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">First Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="First Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Last Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Company</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Company"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Street Address</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Street Address"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Street Address Line 2</label>
                    <input 
                      type="text" 
                      placeholder="Street Address Line 2"
                      className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">City</label>
                      <input 
                        type="text" 
                        required
                        placeholder="City"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Postal / Zip code</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Postal / Zip code"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="Phone"
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-black focus:bg-white outline-none transition-all text-sm text-black"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="bg-[#2B2644] text-white font-bold px-12 py-3.5 rounded-xl hover:bg-black transition-colors cursor-pointer shadow-md uppercase tracking-wider text-sm"
                    >
                      Send
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {currentView === 'tips' && (
        <div className="max-w-[88rem] mx-auto px-6 py-20 animate-fadeIn">
          {/* LUXURY EDITORIAL HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-black/10 pb-10">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest bg-black text-white px-3.5 py-1.5 rounded-full mb-4 inline-block">
                TPA Executive Masterclass
              </span>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-4">Luxury Editorial & Technical Wisdom</h1>
              <p className="text-xl text-black/70 leading-relaxed font-normal">
                Curated masterclass briefings on advanced color separation, eco-pigment viscosity, and high-speed automated carousel calibration.
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {['All', 'Screen Prep', 'Curing', 'Press Operation'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setTipCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer shadow-xs ${tipCategory === cat ? 'bg-black text-white shadow-md' : 'bg-white text-black border border-black/10 hover:bg-gray-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* LUXURY EDITORIAL GRID (2x2 / 4 items zero blank spaces) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {tipsList.filter(t => tipCategory === 'All' || t.category === tipCategory).map((tip, idx) => (
              <div 
                key={idx}
                onClick={() => openNavModal(tip.title, `${tip.desc}\n\nAuthored by: ${tip.author}\nApproved by TPA Masterclass Board.`)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/10 hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="relative h-72 overflow-hidden bg-gray-900">
                    <img src={tip.image} alt={tip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-black text-xs font-bold px-3.5 py-1 rounded-full shadow">
                      {tip.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs font-mono font-semibold px-3 py-1 rounded-full border border-white/20">
                      {tip.level}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90 text-xs font-mono">
                      <span>By {tip.author}</span>
                      <span>{tip.time}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-medium mb-3 group-hover:text-black transition-colors leading-snug">{tip.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed font-normal">{tip.desc}</p>
                  </div>
                </div>
                <div className="px-8 pb-8 pt-0 flex items-center justify-between border-t border-gray-100 pt-5 mt-2 text-xs font-bold text-black uppercase tracking-wider">
                  <span className="group-hover:translate-x-1 transition-transform">Read Masterclass Briefing</span>
                  <span className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#EAEAEA] text-black px-6 py-16 border-t border-black/10 mt-auto">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <LogoIcon className="w-6 h-6 text-black" />
              <span className="text-xl font-medium tracking-tight">Tirupur Printers</span>
            </div>
            <p className="text-black/60 text-sm leading-relaxed">
              The apex association representing garment screen printers and textile print houses in Tirupur, India.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-black/50">Association</h4>
            <ul className="space-y-2.5 text-sm text-black/80">
              <li><button onClick={() => setCurrentView('about')} className="hover:text-black cursor-pointer">About us</button></li>
              <li><button onClick={() => setCurrentView('events')} className="hover:text-black cursor-pointer">Events</button></li>
              <li><button onClick={() => setJoinModalOpen(true)} className="hover:text-black cursor-pointer">Membership Benefits</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-black/50">Resources</h4>
            <ul className="space-y-2.5 text-sm text-black/80">
              <li><button onClick={() => setCurrentView('info')} className="hover:text-black cursor-pointer">Info Bureau</button></li>
              <li><button onClick={() => setCurrentView('tips')} className="hover:text-black cursor-pointer">Tips and Tricks</button></li>
              <li><button onClick={() => setCurrentView('contact')} className="hover:text-black cursor-pointer">Contact Secretariat</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-black/50">Secretariat</h4>
            <ul className="space-y-2.5 text-sm text-black/80">
              <li><button onClick={() => setCurrentView('contact')} className="hover:text-black cursor-pointer">TPA Complex, Tirupur</button></li>
              <li><button onClick={() => openNavModal('Phone & Email', '+91 421 2244556 | secretary@tirupurprinters.org')} className="hover:text-black cursor-pointer">+91 421 2244556</button></li>
              <li><button onClick={() => openNavModal('Working Hours', 'Mon - Sat: 9:30 AM - 6:30 PM')} className="hover:text-black cursor-pointer">Working Hours</button></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[88rem] mx-auto pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between text-sm text-black/50">
          <p>© 2026 Tirupur Printers Association (TPA). All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span>Garment Printing Capital of India</span>
          </div>
        </div>
      </footer>

      {/* MEDIA LIGHTBOX MODAL */}
      {activeMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-black">
            <button 
              onClick={() => setActiveMedia(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-72 w-full overflow-hidden bg-black">
              <img src={activeMedia.image} alt={activeMedia.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <span className="text-xs font-semibold px-3 py-1 bg-black/10 rounded-full text-black mb-3 inline-block">{activeMedia.category}</span>
              <h3 className="text-2xl font-medium mb-3">{activeMedia.title}</h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">{activeMedia.desc}</p>
              <button 
                onClick={() => setActiveMedia(null)}
                className="bg-black text-white font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Close Photo Viewer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MEMBER PORTAL LOGIN MODAL */}
      {memberModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setMemberModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                <Printer className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-medium">TPA Member Portal</h3>
                <p className="text-sm text-gray-500">Sign in to your printing unit account</p>
              </div>
            </div>

            <div className="bg-[#F5F5F5] rounded-2xl p-5 mb-6">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Unit Membership Status</span>
              <div className="text-2xl font-semibold mt-1 text-black">Active Member #TPA-542</div>
              <div className="flex items-center gap-2 mt-2 text-emerald-600 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Screen & Digital Print Unit</span>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => alert('Accessing TPA Member Circulars & Group Purchasing Dashboard.')}
                className="w-full bg-black text-white font-medium py-3.5 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>Access Member Dashboard</span>
              </button>
              <button 
                onClick={() => alert('Redirecting to directory management profile.')}
                className="w-full bg-gray-100 text-black font-medium py-3.5 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Manage Unit Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* JOIN ASSOCIATION MODAL */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => setJoinModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            
            {regSuccess ? (
              <div className="py-8 text-center">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-2xl font-medium mb-2">Application Submitted!</h3>
                <p className="text-gray-600 text-sm">Welcome to Tirupur Printers Association. Our team will verify your unit details shortly.</p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">Join TPA Association</h3>
                    <p className="text-sm text-gray-500">Register your printing unit for membership benefits.</p>
                  </div>
                </div>

                <form onSubmit={handleJoinSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">Proprietor Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. K. Murugan"
                      value={regForm.name}
                      onChange={(e) => setRegForm({...regForm, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-all text-black text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">Company / Printing Unit</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sri Murugan Garment Prints"
                      value={regForm.company}
                      onChange={(e) => setRegForm({...regForm, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-all text-black text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1.5">Mobile Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98422 XXXXX"
                      value={regForm.phone}
                      onChange={(e) => setRegForm({...regForm, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent focus:border-black focus:bg-white outline-none transition-all text-black text-sm"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-black text-white font-medium py-3.5 rounded-xl hover:bg-gray-800 transition-colors cursor-pointer mt-2"
                  >
                    Submit Membership Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* GENERAL INFO MODAL */}
      {infoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
            <button 
              onClick={() => setInfoModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-medium mb-3">{modalTitle}</h3>
            <p className="text-gray-700 text-base leading-relaxed mb-6">{modalContent}</p>
            <button 
              onClick={() => setInfoModalOpen(false)}
              className="bg-black text-white font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
