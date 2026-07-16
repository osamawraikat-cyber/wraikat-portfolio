"use client";

import React, { useState, useEffect } from "react";

const translations = {
  en: {
    navAbout: "About",
    navProjects: "DermOSCE",
    navBlog: "Blog",
    navContact: "Contact",
    btnBook: "Book Consultation",
    badge: "Expertise in Modern Dermatology",
    heroTitle1: "Dr. Osama Alwreikat",
    heroTitle2: "Dermatology Specialist",
    heroDesc: "Pioneering clinical excellence and advanced diagnostics in dermatology. Specializing in dermoscopy, surgical interventions, and complex skin disorders.",
    interests: ["Clinical Dermatology", "Dermoscopy", "Hair Disorders", "Vitiligo"],
    aboutTitle: "A Dedication to",
    aboutTitleAccent: "Clinical Excellence",
    aboutDesc: "With years of dedicated practice in Amman, Dr. Osama Alwreikat combines academic rigor with a patient-centric approach. His work focus is not just on treatment, but on the profound understanding of dermatological pathology through advanced diagnostic tools.",
    cardDermoscopyTitle: "Dermoscopy",
    cardDermoscopyDesc: "Advanced skin cancer screening, moles, and nevus monitoring.",
    cardSurgicalTitle: "Surgical Dermatology",
    cardSurgicalDesc: "Precision procedures for skin lesions, biopsy assessments, and aesthetic interventions.",
    cardVitiligoTitle: "Vitiligo Management",
    cardVitiligoDesc: "Comprehensive clinical evaluation and advanced repigmentation protocols.",
    cardTrichologyTitle: "Trichology",
    cardTrichologyDesc: "Specialized clinical care for complex hair and scalp disorders.",
    projectsSubtitle: "Innovative Tools",
    projectsTitle: "DermOSCE Platform",
    projectsDesc: "DermOSCE (dermosce.wraikat.com) is an interactive, clinical image-based learning platform. Designed specifically for dermatology students and practitioners to refine diagnostic skills through curated case studies and real-time feedback.",
    btnExplore: "Explore Platform",
    freeTag: "Free for practitioners",
    blogSubtitle: "Latest Publications",
    blogTitle: "Insights in Dermatology",
    btnViewAll: "View All Articles",
    blog1Category: "Trichology",
    blog1Read: "5 min read",
    blog1Title: "Causes of Hair Loss in Young Adults",
    blog1Desc: "Exploring the multifactorial nature of early-onset alopecia, from genetic predispositions to environmental triggers and stress factors.",
    blog2Category: "Dermoscopy",
    blog2Read: "8 min read",
    blog2Title: "When to Worry About a Changing Mole",
    blog2Desc: "A clinical guide to the ABCDE rule and why professional dermoscopy screening is essential for early melanoma detection.",
    contactTitle: "Experience",
    contactTitleAccent: "Premium Care",
    contactDesc: "Visit our state-of-the-art clinic in Abu Nusair, Amman for a comprehensive dermatological evaluation. Your journey to skin health begins here.",
    clinicLocation: "Clinic Location",
    clinicAddress: "Abu Nusair, Amman, Jordan",
    workingHours: "Working Hours",
    workingHoursVal: "Sat – Thu: 10:00 AM – 6:00 PM",
    btnWhatsApp: "Book via WhatsApp",
    footerDesc: "Specialist Dermatologist dedicated to clinical precision and advanced patient care through education and diagnostic innovation.",
    footerNav: "Navigation",
    footerLegal: "Legal",
    footerNews: "Newsletter",
    footerCopyright: "© 2026 OSara Clinics. All rights reserved.",
  },
  ar: {
    navAbout: "حول الدكتور",
    navProjects: "منصة DermOSCE",
    navBlog: "المدونة الطبية",
    navContact: "اتصل بنا",
    btnBook: "حجز استشارة",
    badge: "تميز سريري في طب الجلدية الحديث",
    heroTitle1: "د. أسامة الوريكات",
    heroTitle2: "أخصائي أمراض جلدية وتجميل",
    heroDesc: "ريادة في التميز السريري والتشخيص المتقدم في طب الجلدية. متخصص في فحص الجلد الدقيق (الديرموسكوبي)، الإجراءات الجراحية الجلدية، وعلاج الحالات الجلدية المعقدة.",
    interests: ["الأمراض الجلدية السريرية", "فحص الجلد (الديرموسكوب)", "تساقط الشعر وأمراضه", "علاج البهاق"],
    aboutTitle: "التزام راسخ بـ",
    aboutTitleAccent: "التميز السريري",
    aboutDesc: "خلال سنوات من العمل الطبي الدؤوب في عمان، يجمع الدكتور أسامة الوريكات بين البحث الأكاديمي والرعاية المرتكزة على المريض. يتركز اهتمامنا على التشخيص الدقيق والعلاجات القائمة على الأدلة العلمية.",
    cardDermoscopyTitle: "فحص الشامات والجلد",
    cardDermoscopyDesc: "فحص متقدم للكشف المبكر عن الأورام الجلدية ومراقبة الشامات بالديرموسكوب.",
    cardSurgicalTitle: "جراحة الجلد الصغرى",
    cardSurgicalDesc: "إزالة الآفات الجلدية الحميدة والمشتبه بها بدقة متناهية وفحص عينات الجلد.",
    cardVitiligoTitle: "علاج البهاق المتقدم",
    cardVitiligoDesc: "بروتوكولات علاجية حديثة مصممة لتحفيز خلايا الجلد الصبغية واستعادة لونها.",
    cardTrichologyTitle: "طب أمراض الشعر",
    cardTrichologyDesc: "عناية متخصصة بحالات تساقط الشعر المختلفة وثعلبة الرأس للذكور والإناث.",
    projectsSubtitle: "أدوات تعليمية مبتكرة",
    projectsTitle: "منصة DermOSCE",
    projectsDesc: "منصة DermOSCE (dermosce.wraikat.com) هي أداة تعليمية تفاعلية مصممة خصيصاً لأطباء الامتياز والإقامة لتدريب مهارات التشخيص من خلال دراسة الحالات السريرية الحقيقية.",
    btnExplore: "استكشف المنصة",
    freeTag: "متاحة مجاناً للكوادر الطبية",
    blogSubtitle: "آخر المنشورات",
    blogTitle: "رؤى في طب الجلدية",
    btnViewAll: "عرض جميع المقالات",
    blog1Category: "طب أمراض الشعر",
    blog1Read: "قراءة 5 دقائق",
    blog1Title: "أسباب تساقط الشعر عند الشباب",
    blog1Desc: "استكشاف العوامل المتعددة المسببة لتساقط الشعر المبكر، من الجينات الوراثية إلى العوامل البيئية والتوتر.",
    blog2Category: "فحص الجلد بالديرموسكوب",
    blog2Read: "قراءة 8 دقائق",
    blog2Title: "متى يجب القلق بشأن تغير الشامة؟",
    blog2Desc: "دليل طبي مبسط لقاعدة ABCDE وأهمية الفحص الدوري بالديرموسكوب للكشف المبكر عن سرطان الجلد.",
    contactTitle: "رعاية طبية",
    contactTitleAccent: "بمعايير ممتازة",
    contactDesc: "تفضل بزيارتنا في عيادة أوسارا (OSara Clinics) بأبو نصير، عمان لإجراء تقييم شامل وصحي لبشرتك وشعرك.",
    clinicLocation: "موقع العيادة",
    clinicAddress: "عمان، أبو نصير، حي الأمانة",
    workingHours: "ساعات العمل",
    workingHoursVal: "السبت – الخميس: 10:00 صباحاً – 6:00 مساءً",
    btnWhatsApp: "📲 احجز موعدك عبر واتساب",
    footerDesc: "أخصائي أمراض جلدية وتجميل مكرس للتشخيص السريري الدقيق ورعاية المرضى عبر التعليم والابتكار الطبي.",
    footerNav: "أقسام الموقع",
    footerLegal: "شروط الاستخدام",
    footerNews: "النشرة البريدية",
    footerCopyright: "© 2026 عيادات أوسارا. جميع الحقوق محفوظة.",
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
              <img src="/favicon.ico" alt="Wraikat Logo" className="w-full h-full object-cover" />
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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(13,92,96,0.15),transparent_50%)]"></div>
          <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full py-16">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-8">
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
                  {t.badge}
                </span>
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                  {t.heroTitle1} <br/>
                  <span className="text-secondary italic font-normal text-4xl md:text-5xl">{t.heroTitle2}</span>
                </h1>
                <p className="text-lg text-on-surface-variant max-w-xl mb-8 leading-relaxed">
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

        {/* About Section */}
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
              <p className="text-md text-on-surface-variant mb-8 leading-relaxed">
                {t.aboutDesc}
              </p>
              
              {/* Specialized Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-primary text-xl font-bold mb-2">✦ {t.cardDermoscopyTitle}</div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{t.cardDermoscopyDesc}</p>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-primary text-xl font-bold mb-2">✦ {t.cardSurgicalTitle}</div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{t.cardSurgicalDesc}</p>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-primary text-xl font-bold mb-2">✦ {t.cardVitiligoTitle}</div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{t.cardVitiligoDesc}</p>
                </div>
                <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300">
                  <div className="text-primary text-xl font-bold mb-2">✦ {t.cardTrichologyTitle}</div>
                  <p className="text-on-surface-variant text-xs leading-relaxed">{t.cardTrichologyDesc}</p>
                </div>
              </div>
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
                <h3 className="font-serif text-2xl text-white mb-4 leading-snug">{t.projectsTitle} — Interactive Learning</h3>
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
                  alt="Trichology Blog Graphic"
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
                  alt="Dermoscopy Blog Graphic"
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
                  alt="OSara Clinics Visual" 
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
