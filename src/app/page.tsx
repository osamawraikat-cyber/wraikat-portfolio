"use client";

import React, { useState, useEffect } from "react";

const translations = {
  en: {
    navAbout: "Biography",
    navProjects: "DermOSCE",
    navBlog: "Blog",
    navContact: "Contact",
    btnBook: "Contact WhatsApp",
    badge: "Royal Medical Services of Jordan",
    heroTitle1: "Dr. Osama Alwreikat",
    heroTitle2: "Dermatologist & Venereologist",
    heroDesc: "Dermatology and venereology doctor serving in the Royal Medical Services. Graduated from Gülhane Military Medical Academy (GATA / SBU) in Ankara, Turkey. Fluent in Arabic, English, and Turkish.",
    interests: ["Dermatology", "Venereology", "Laser", "Vitiligo Surgery"],
    aboutTitle: "Academic & Clinical",
    aboutTitleAccent: "Background",
    aboutDesc: "Dr. Osama Alwreikat (Osama Wraikat) was recruited as a military medical officer in 2010 at age 18, starting his medical training in the same year. He completed his medical education at the historic Gülhane Military Medical Academy (GATA, now SBU) in Ankara, Turkey. Today, he is a practicing dermatologist within the Royal Jordanian Medical Services. Fluent in Arabic, English, and Turkish, his professional interest centers on advanced clinical diagnostics, medical education, and specialized dermatologic surgery.",
    
    // Core Procedures & Skills
    skillsHeader: "Clinical Expertise & Advanced Procedures",
    cardDermoscopyTitle: "Vitiligo Surgery (NCEMT)",
    cardDermoscopyDesc: "Extensive experience with advanced Non-Cultured Melanocyte-Keratinocyte Transplant (NCEMT) and mini-grafting techniques for stable vitiligo.",
    cardSurgicalTitle: "Acne Scar Revision & Subcision",
    cardSurgicalDesc: "Specialized in subcision techniques, scar revisions, microneedling, and chemical peels to treat deep acne scarring.",
    cardVitiligoTitle: "Aesthetic Injectables",
    cardVitiligoDesc: "Professional application of botulinum toxin (Botox) for facial wrinkles, aesthetic modification, and hyperhidrosis.",
    cardTrichologyTitle: "Clinical Dermatology & Laser",
    cardTrichologyDesc: "Comprehensive diagnosis of hair loss, venereology conditions, and precise laser dermatology treatments.",
    
    // DermOSCE
    projectsSubtitle: "Educational Contributions",
    projectsTitle: "DermOSCE Platform",
    projectsDesc: "DermOSCE (dermosce.wraikat.com) is an interactive, clinical image-based learning platform. Developed for medical students and residency candidates preparing for dermatology board exams to refine diagnostic skills through case studies.",
    btnExplore: "Explore Platform",
    freeTag: "Free for practitioners",
    
    // Blog
    blogSubtitle: "Latest Insights",
    blogTitle: "Dermatology Education",
    btnViewAll: "View All Articles",
    blog1Category: "Vitiligo Surgery",
    blog1Read: "6 min read",
    blog1Title: "Understanding Melanocyte Transplantation",
    blog1Desc: "An overview of non-cultured melanocyte transplant (NCEMT) as an advanced surgical option for stable vitiligo patches.",
    blog2Category: "Acne Scars",
    blog2Read: "5 min read",
    blog2Title: "Subcision & Scar Revision Protocols",
    blog2Desc: "How combining subcision, chemical peels, and micrografting achieves optimal results for deep dermatological scars.",
    
    // Contact
    contactTitle: "Professional",
    contactTitleAccent: "Inquiries",
    contactDesc: "This portfolio is a public professional hub for verification, academic networking, and clinical information. For consultations, inquiries, or patient scheduling in Abu Nusair, Amman, feel free to reach out directly.",
    clinicLocation: "Practice Location",
    clinicAddress: "Abu Nusair, Amman, Jordan",
    workingHours: "Working Hours",
    workingHoursVal: "Sat – Thu: 10:00 AM – 6:00 PM",
    btnWhatsApp: "Send Message via WhatsApp",
    footerDesc: "Dermatologist and medical officer dedicated to clinical precision, medical education, and specialized surgical dermatology.",
    footerNav: "Navigation",
    footerLegal: "Verification",
    footerNews: "Stay Updated",
    footerCopyright: "© 2026 Dr. Osama Alwreikat. All rights reserved.",
  },
  ar: {
    navAbout: "السيرة المهنية",
    navProjects: "منصة DermOSCE",
    navBlog: "المدونة الطبية",
    navContact: "التواصل",
    btnBook: "تواصل واتساب",
    badge: "منتسب للخدمات الطبية الملكية الأردنية",
    heroTitle1: "د. أسامة الوريكات",
    heroTitle2: "طبيب جلدية وتناسلية وليزر",
    heroDesc: "طبيب ممارس للأمراض الجلدية والتناسلية والليزر في الخدمات الطبية الملكية. خريج أكاديمية غولهان العسكرية (GATA) في أنقرة، تركيا. يتحدث العربية، الإنجليزية، والتركية.",
    interests: ["أمراض جلدية", "أمراض تناسلية", "علاج بالليزر", "جراحة البهاق"],
    aboutTitle: "الخلفية الأكاديمية",
    aboutTitleAccent: "والسريرية",
    aboutDesc: "تم تجنيد الدكتور أسامة الوريكات (أسامة وريكات) كضابط طبيب مجند في الخدمات الطبية الملكية في عام 2010 في سن 18 عاماً، وبدأ دراسته الطبية في نفس العام. حصل على درجة الطب من أكاديمية غولهان الطبية العسكرية العريقة (GATA - وحالياً جامعة العلوم الصحية SBU) في أنقرة، تركيا. وهو طبيب ممارس حالي للأمراض الجلدية في الخدمات الطبية الملكية الأردنية. يتحدث العربية والإنجليزية والتركية بطلاقة، ويتركز اهتمامه المهني على التشخيص السريري المتقدم، التعليم الطبي، وجراحة الجلد المتخصصة.",
    
    // Core Procedures & Skills
    skillsHeader: "الخبرات السريرية والإجراءات الجراحية المتخصصة",
    cardDermoscopyTitle: "جراحة البهاق (زراعة الخلايا الصبغية)",
    cardDermoscopyDesc: "خبرة واسعة في عمليات زراعة الخلايا الصبغية غير المستزرعة (NCEMT) وزراعة الطعوم المصغرة (Mini-grafting) للبهاق المستقر.",
    cardSurgicalTitle: "علاج ندبات حب الشباب وتقطيع الألياف",
    cardSurgicalDesc: "متخصص في تقنيات تقطيع الألياف تحت الجلد (Subcision)، وتعديل الندبات الجراحية، والتقشير الكيميائي لتحسين مظهر الندبات العميقة.",
    cardVitiligoTitle: "الإجراءات التجميلية والعلاجية (البوتوكس)",
    cardVitiligoDesc: "حقن البوتوكس (Botox) الطبي لعلاج التجاعيد التعبيرية، الابتسامة اللثوية، وفرط التعرق الموضعي للإبطين واليدين.",
    cardTrichologyTitle: "طب الجلدية العام والليزر",
    cardTrichologyDesc: "تشخيص وعلاج تساقط الشعر، الثعلبة، الأمراض التناسلية، واستخدام تقنيات الليزر الطبي في علاج المشاكل الجلدية المختلفة.",
    
    // DermOSCE
    projectsSubtitle: "التعليم الطبي والتدريب",
    projectsTitle: "منصة DermOSCE",
    projectsDesc: "منصة DermOSCE (dermosce.wraikat.com) هي أداة تعليمية تفاعلية مصممة لطلاب الكليات الطبية وأطباء الامتياز والإقامة لتدريب وتطوير مهارات التشخيص الصوري للامتحانات السريرية والبورد.",
    btnExplore: "استكشف المنصة",
    freeTag: "متاحة مجاناً للكوادر الطبية",
    
    // Blog
    blogSubtitle: "منشورات تعليمية",
    blogTitle: "ثقافة طب الجلدية",
    btnViewAll: "عرض كافة المقالات",
    blog1Category: "جراحة البهاق",
    blog1Read: "قراءة 6 دقائق",
    blog1Title: "دليل زراعة الخلايا الصبغية (NCEMT)",
    blog1Desc: "نبذة علمية مبسطة حول عملية زراعة الخلايا الصبغية كحل جراحي فعال لعلاج بقع البهاق الثابتة والمستقرة.",
    blog2Category: "ندبات حب الشباب",
    blog2Read: "قراءة 5 دقائق",
    blog2Title: "تقطيع الألياف (Subcision) والتقشير",
    blog2Desc: "كيف يساعد دمج تقطيع الألياف مع التقشير الكيميائي في إعادة بناء الجلد واستعادة نضارته وعلاج الندبات العميقة.",
    
    // Contact
    contactTitle: "التواصل",
    contactTitleAccent: "المهني",
    contactDesc: "يعتبر هذا الموقع بمثابة معرض سيرة ذاتية مهني وأكاديمي عام للتواصل الطبي والتحقق من المؤهلات. للاستفسارات العلمية أو لحجز موعد استشارة طبية في أبو نصير، عمان، يرجى التواصل مباشرة.",
    clinicLocation: "عيادة المعاينة",
    clinicAddress: "عمان، أبو نصير، حي الأمانة",
    workingHours: "ساعات العمل",
    workingHoursVal: "السبت – الخميس: 10:00 صباحاً – 6:00 مساءً",
    btnWhatsApp: "📲 تواصل أو احجز عبر واتساب",
    footerDesc: "طبيب جلدية وضابط طبيب مكرس للتشخيص السريري الدقيق ورعاية المرضى عبر التعليم والابتكار الطبي والجراحي.",
    footerNav: "أقسام الموقع",
    footerLegal: "التحقق المهني",
    footerNews: "النشرة الطبية",
    footerCopyright: "© 2026 الدكتور أسامة الوريكات. جميع الحقوق محفوظة.",
  }
};

export default function PortfolioPage() {
  const [lang, setLang] = useState<"en" | "ar">("ar");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <div className={`min-h-screen text-glow selection:bg-primary-container selection:text-on-primary-container clinical-bg ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
        <nav className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10">
              <img src="/favicon.ico" alt="Dr. Osama Wraikat Logo" className="w-full h-full object-cover" />
            </div>
            <div className="font-serif text-xl font-bold tracking-tight text-white">
              {lang === "ar" ? (
                <>د. أسامة <span className="text-secondary">الوريكات</span></>
              ) : (
                <>Dr. Osama <span className="text-secondary">Alwreikat</span></>
              )}
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#about">{t.navAbout}</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#projects">{t.navProjects}</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#blog">{t.navBlog}</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#contact">{t.navContact}</a>
            
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-xs border border-white/20 hover:border-secondary px-3 py-1.5 rounded-lg text-white hover:text-secondary transition-all font-semibold uppercase tracking-wider"
            >
              {lang === "en" ? "العربية" : "English"}
            </button>

            <a 
              href="https://wa.me/962778423361" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-primary-container text-on-primary-container hover:bg-primary px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider transition-all duration-300 shadow-[0_4px_16px_rgba(13,92,96,0.3)] border border-white/5"
            >
              {t.btnBook}
            </a>
          </div>

          {/* Mobile view controls */}
          <div className="flex md:hidden items-center gap-3">
            <button 
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="text-xs border border-white/20 px-2.5 py-1.5 rounded-lg text-white font-semibold"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a 
              href="https://wa.me/962778423361"
              className="bg-primary-container text-on-primary-container p-2 rounded-lg text-xs"
            >
              📲
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(13,92,96,0.15),transparent_50%)]"></div>
          <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full py-16">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-8">
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
                  {t.badge}
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  {t.heroTitle1} <br/>
                  <span className="text-secondary italic font-normal text-3xl md:text-4xl">{t.heroTitle2}</span>
                </h1>
                <p className="text-md md:text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
                  {t.heroDesc}
                </p>
                <div className="flex flex-wrap gap-4 md:gap-6 text-secondary text-xs font-semibold tracking-wider uppercase">
                  {t.interests.map((interest, idx) => (
                    <React.Fragment key={idx}>
                      <span>{interest}</span>
                      {idx < t.interests.length - 1 && <span className="text-outline-variant opacity-30">•</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* Biography Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="about">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Abstract Graphic representing dermatology */}
            <div className="col-span-12 md:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 group shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <img 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" 
                  src="/skin_abstract.png" 
                  alt="Abstract Dermatology Art"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/10 rounded-full blur-3xl"></div>
            </div>

            <div className="col-span-12 md:col-span-7">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
                {t.aboutTitle} <br/>
                <span className="text-secondary">{t.aboutTitleAccent}</span>
              </h2>
              <p className="text-md text-on-surface-variant mb-6 leading-relaxed">
                {t.aboutDesc}
              </p>
              
              {/* Language Tags & Education Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                  🇹🇷 {lang === "ar" ? "خريج أكاديمية غولهان العسكرية (أنقرة)" : "Gülhane Military Academy Graduate (Ankara)"}
                </span>
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                  🇸🇦 {lang === "ar" ? "يتحدث العربية" : "Speaks Arabic"}
                </span>
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                  🇬🇧 {lang === "ar" ? "يتحدث الإنجليزية" : "Speaks English"}
                </span>
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold">
                  🇹🇷 {lang === "ar" ? "يتحدث التركية" : "Speaks Turkish"}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Specialized Skills Grid Section */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-outline-variant/10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-white tracking-tight">{t.skillsHeader}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-2xl">🧬</span>
                <h3 className="text-white text-lg font-bold font-serif">{t.cardDermoscopyTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t.cardDermoscopyDesc}</p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-2xl">🩹</span>
                <h3 className="text-white text-lg font-bold font-serif">{t.cardSurgicalTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t.cardSurgicalDesc}</p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-2xl">💉</span>
                <h3 className="text-white text-lg font-bold font-serif">{t.cardVitiligoTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t.cardVitiligoDesc}</p>
            </div>

            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-2xl">⚡</span>
                <h3 className="text-white text-lg font-bold font-serif">{t.cardTrichologyTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed">{t.cardTrichologyDesc}</p>
            </div>

          </div>
        </section>

        {/* Projects Section: DermOSCE */}
        <section className="py-24 bg-surface-container-lowest" id="projects">
          <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">{t.projectsSubtitle}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 font-bold">{t.projectsTitle}</h2>
            </div>
            
            <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <span className="text-primary text-xl">🎓</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-4 leading-snug">{t.projectsTitle} — Exam Prep</h3>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                  {t.projectsDesc}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  <a 
                    className="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all flex items-center gap-2" 
                    href="https://dermosce.wraikat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.btnExplore} ↗
                  </a>
                  <span className="text-on-surface-variant/70 text-xs font-medium uppercase tracking-widest">{t.freeTag}</span>
                </div>
              </div>
              <div className="relative h-64 md:h-auto min-h-[350px]">
                <img 
                  className="w-full h-full object-cover" 
                  src="/dermosce_showcase.png" 
                  alt="DermOSCE Platform Preview"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="blog">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">{t.blogSubtitle}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2">{t.blogTitle}</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Article 1 */}
            <article className="group cursor-pointer bg-surface-container/50 border border-outline-variant/10 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden bg-surface-container relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="/skin_abstract.png" 
                  alt="Vitiligo Melanocyte Transplantation Visual"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-4 mb-3 text-xs font-semibold tracking-widest uppercase">
                  <span className="text-primary">{t.blog1Category}</span>
                  <span className="text-on-surface-variant/40">•</span>
                  <span className="text-on-surface-variant">{t.blog1Read}</span>
                </div>
                <h3 className="font-serif text-xl text-white group-hover:text-secondary transition-colors mb-3">
                  {t.blog1Title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {t.blog1Desc}
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group cursor-pointer bg-surface-container/50 border border-outline-variant/10 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-300">
              <div className="aspect-video w-full overflow-hidden bg-surface-container relative">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="/mole_closeup.png" 
                  alt="Dermoscopy Mole Checking Visual"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-4 mb-3 text-xs font-semibold tracking-widest uppercase">
                  <span className="text-primary">{t.blog2Category}</span>
                  <span className="text-on-surface-variant/40">•</span>
                  <span className="text-on-surface-variant">{t.blog2Read}</span>
                </div>
                <h3 className="font-serif text-xl text-white group-hover:text-secondary transition-colors mb-3">
                  {t.blog2Title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {t.blog2Desc}
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="contact">
          <div className="bg-surface-container border border-outline-variant/10 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
              
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                  {t.contactTitle} <br/>
                  <span className="text-secondary">{t.contactTitleAccent}</span>
                </h2>
                <p className="text-md text-on-surface-variant mb-8 leading-relaxed">
                  {t.contactDesc}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-lg">📍</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{t.clinicLocation}</p>
                      <p className="text-sm text-white">{t.clinicAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-lg">⏰</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{t.workingHours}</p>
                      <p className="text-sm text-white">{t.workingHoursVal}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/962778423361"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full md:w-auto justify-center bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 items-center gap-3 text-md"
                >
                  {t.btnWhatsApp}
                </a>
              </div>

              {/* Map/Contact Graphic */}
              <div className="col-span-12 md:col-span-6 aspect-square rounded-2xl overflow-hidden opacity-60 border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none"></div>
                <img 
                  src="/skin_abstract.png" 
                  alt="Dr. Osama Alwreikat Clinical Visual" 
                  className="w-full h-full object-cover" 
                />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <div className="font-serif text-xl text-secondary mb-4 font-bold">
              {lang === "ar" ? "د. أسامة الوريكات" : "Dr. Osama Alwreikat"}
            </div>
            <p className="text-on-surface-variant text-sm max-w-sm leading-relaxed">
              {t.footerDesc}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-between gap-4">
            <div className="flex gap-6 text-xs font-semibold tracking-widest uppercase">
              <a href="#about" className="hover:text-primary transition-colors">{t.navAbout}</a>
              <a href="#projects" className="hover:text-primary transition-colors">{t.navProjects}</a>
              <a href="#blog" className="hover:text-primary transition-colors">{t.navBlog}</a>
              <a href="#contact" className="hover:text-primary transition-colors">{t.navContact}</a>
            </div>
            <p className="text-on-surface-variant/60 text-xs">
              {t.footerCopyright}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
