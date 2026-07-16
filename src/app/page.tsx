"use client";

import React, { useState, useEffect } from "react";

const translations = {
  en: {
    navAbout: "Biography",
    navProjects: "DermOSCE",
    navBlog: "Blog",
    navContact: "Contact",
    btnBook: "Academic Inquiry",
    badge: "Jordan Royal Medical Services",
    heroTitle1: "Dr. Osama Alwreikat",
    heroTitle2: "Dermatologist & Venereologist",
    heroDesc: "Dermatology, venereology, and laser doctor serving in the Jordan Royal Medical Services. Graduated from Ankara Gülhane Military Medical Academy (GATA / SBU). Fluent in Arabic, English, and Turkish.",
    interests: ["Clinical Dermatology", "Venereology", "Laser Therapy", "Vitiligo Surgery"],
    aboutTitle: "Academic & Clinical",
    aboutTitleAccent: "Background",
    aboutDesc: "Dr. Osama Alwreikat (Osama Wraikat) was recruited as a military medical officer in 2010 at age 18, starting his medical training in the same year. He completed his medical education at the historic Gülhane Military Medical Academy (GATA, now SBU) in Ankara, Turkey. Today, he is a practicing dermatologist within the Jordan Royal Medical Services. Fluent in Arabic, English, and Turkish, his professional interest centers on advanced clinical diagnostics, medical education, and specialized dermatologic surgery.",
    
    // Core Procedures & Skills
    skillsHeader: "Clinical Expertise & Advanced Procedures",
    cardDermoscopyTitle: "Vitiligo Surgery (NCMT)",
    cardDermoscopyDesc: "Extensive experience with advanced Non-Cultured Melanocyte-Keratinocyte Transplant (NCMT) and mini-grafting techniques for stable vitiligo.",
    cardSurgicalTitle: "Acne Scar Revision & Subcision",
    cardSurgicalDesc: "Specialized in subcision techniques, scar revisions, microneedling, and chemical peels to treat deep acne scarring.",
    cardVitiligoTitle: "Aesthetic Injections",
    cardVitiligoDesc: "Professional application of botulinum toxin (Botox) for facial wrinkles, aesthetic modifications, and hyperhidrosis.",
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
    blog1Desc: "An overview of non-cultured melanocyte transplant (NCMT) as an advanced surgical option for stable vitiligo patches.",
    blog2Category: "Acne Scars",
    blog2Read: "5 min read",
    blog2Title: "Subcision & Scar Revision Protocols",
    blog2Desc: "How combining subcision, chemical peels, and micrografting achieves optimal results for deep dermatological scars.",
    
    // Contact
    contactTitle: "Academic & Professional",
    contactTitleAccent: "Inquiries",
    contactDesc: "This portfolio is a public professional hub for verification, academic networking, and clinical information. For academic inquiries, collaborations, or professional contact, feel free to reach out via email.",
    clinicLocation: "Primary Affiliation",
    clinicAddress: "Jordan Royal Medical Services, Amman, Jordan",
    workingHours: "Working Hours",
    workingHoursVal: "Sun – Thu: 8:00 AM – 4:00 PM",
    btnWhatsApp: "Send Email Inquiry",
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
    btnBook: "استفسار أكاديمي",
    badge: "الخدمات الطبية الملكية الاردنية",
    heroTitle1: "د. أسامة الوريكات",
    heroTitle2: "طبيب جلدية وتناسلية وليزر",
    heroDesc: "طبيب ممارس للأمراض الجلدية والتناسلية والليزر في الخدمات الطبية الملكية الاردنية. خريج أكاديمية غولهان العسكرية (GATA) في أنقرة، تركيا. يتحدث العربية، الإنجليزية، والتركية.",
    interests: ["أمراض جلدية", "أمراض تناسلية", "علاج بالليزر", "جراحة البهاق"],
    aboutTitle: "الخلفية الأكاديمية",
    aboutTitleAccent: "والسريرية",
    aboutDesc: "تم تجنيد الدكتور أسامة الوريكات (أسامة وريكات) كضابط طبيب في الخدمات الطبية الملكية الاردنية في عام 2010 في سن 18 عاماً، وبدأ دراسته الطبية في نفس العام. حصل على درجة الطب من أكاديمية غولهان الطبية العسكرية العريقة (GATA - وحالياً جامعة العلوم الصحية SBU) في أنقرة، تركيا. وهو طبيب ممارس للأمراض الجلدية في الخدمات الطبية الملكية الاردنية. يتحدث العربية والإنجليزية والتركية بطلاقة، ويتركز اهتمامه المهني على التشخيص السريري المتقدم، التعليم الطبي، وجراحة الجلد المتخصصة.",
    
    // Core Procedures & Skills
    skillsHeader: "الخبرات السريرية والإجراءات الجراحية المتخصصة",
    cardDermoscopyTitle: "جراحة البهاق (زراعة الخلايا الصبغية)",
    cardDermoscopyDesc: "خبرة واسعة في عمليات زراعة الخلايا الصبغية غير المستزرعة (NCMT) وزراعة الطعوم المصغرة (Mini-grafting) للبهاق المستقر.",
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
    blog1Title: "دليل زراعة الخلايا الصبغية (NCMT)",
    blog1Desc: "نبذة علمية مبسطة حول عملية زراعة الخلايا الصبغية كحل جراحي فعال لعلاج بقع البهاق الثابتة والمستقرة.",
    blog2Category: "ندبات حب الشباب",
    blog2Read: "قراءة 5 دقائق",
    blog2Title: "تقطيع الألياف (Subcision) والتقشير",
    blog2Desc: "كيف يساعد دمج تقطيع الألياف مع التقشير الكيميائي في إعادة بناء الجلد واستعادة نضارته وعلاج الندبات العميقة.",
    
    // Contact
    contactTitle: "التواصل الأكاديمي",
    contactTitleAccent: "والمهني",
    contactDesc: "يعتبر هذا الموقع بمثابة معرض سيرة ذاتية مهني وأكاديمي عام للتواصل الطبي والتحقق من المؤهلات. للاستفسارات العلمية أو التواصل المهني الأكاديمي، يرجى التواصل عبر البريد الإلكتروني.",
    clinicLocation: "الانتساب الرسمي",
    clinicAddress: "الخدمات الطبية الملكية الاردنية، عمان، الأردن",
    workingHours: "أوقات الدوام الرسمي",
    workingHoursVal: "الأحد – الخميس: 8:00 صباحاً – 4:00 مساءً",
    btnWhatsApp: "إرسال استفسار عبر البريد",
    footerDesc: "طبيب جلدية وضابط طبيب مكرس للتشخيص السريري الدقيق ورعاية المرضى عبر التعليم والابتكار الطبي والجراحي.",
    footerNav: "أقسام الموقع",
    footerLegal: "التحقق المهني",
    footerNews: "النشرة الطبية",
    footerCopyright: "© 2026 الدكتور أسامة الوريكات. جميع الحقوق محفوظة.",
  },
  tr: {
    navAbout: "Biyografi",
    navProjects: "DermOSCE",
    navBlog: "Makaleler",
    navContact: "İletişim",
    btnBook: "Akademik İletişim",
    badge: "Ürdün Kraliyet Tıbbi Hizmetleri",
    heroTitle1: "Dr. Osama Alwreikat",
    heroTitle2: "Dermatolog & Venerolog",
    heroDesc: "Ürdün Kraliyet Tıbbi Hizmetleri bünyesinde görev yapan dermatoloji, veneroloji ve tıbbi lazer hekimi. Ankara Gülhane Askeri Tıp Akademisi (GATA / SBÜ) mezunu. Arapça, İngilizce ve Türkçe bilmektedir.",
    interests: ["Klinik Dermatoloji", "Veneroloji", "Lazer Tedavisi", "Vitiligo Cerrahisi"],
    aboutTitle: "Akademik ve Klinik",
    aboutTitleAccent: "Özgeçmiş",
    aboutDesc: "Dr. Osama Alwreikat (Osama Wraikat), 2010 yılında 18 yaşındayken askeri tıp subayı olarak göreve başladı ve aynı yıl tıp eğitimine başladı. Tıp eğitimini Ankara'daki tarihi Gülhane Askeri Tıp Akademisi'nde (GATA, şimdiki adıyla SBÜ) tamamladı. Şu anda Ürdün Kraliyet Tıbbi Hizmetleri bünyesinde dermatolog olarak görev yapmaktadır. Arapça, İngilizce ve Türkçe dillerine hakim olan Dr. Alwreikat, ileri düzey klinik teşhis, tıp eğitimi ve uzmanlaşmış dermatolojik cerrahiye odaklanmaktadır.",
    
    // Core Procedures & Skills
    skillsHeader: "Klinik Deneyim ve Gelişmiş Uygulamalar",
    cardDermoscopyTitle: "Vitiligo Cerrahisi (NCMT)",
    cardDermoscopyDesc: "Stabil vitiligo tedavisinde ileri düzey Hücre Kültürsüz Melanosit-Keratinosit Transplantasyonu (NCMT) ve mini greftleme tekniklerinde geniş deneyim.",
    cardSurgicalTitle: "Akne İzi Revizyonu ve Subsizyon",
    cardSurgicalDesc: "Derin akne izlerinin tedavisinde subsizyon (bağ dokusu kesilmesi), yara izi revizyonları, dermapen ve kimyasal peeling uygulamaları.",
    cardVitiligoTitle: "Estetik Enjeksiyonlar",
    cardVitiligoDesc: "Yüz kırışıklıkları, estetik modifikasyonlar ve lokal hiperhidroz (aşırı terleme) tedavisinde botulinum toksin (Botox) uygulamaları.",
    cardTrichologyTitle: "Klinik Dermatoloji ve Lazer",
    cardTrichologyDesc: "Saç dökülmesi teşhisi, cinsel yolla bulaşan hastalıklar (veneroloji) ve hassas tıbbi lazer uygulamaları.",
    
    // DermOSCE
    projectsSubtitle: "Eğitimsel Katkılar",
    projectsTitle: "DermOSCE Platformu",
    projectsDesc: "DermOSCE (dermosce.wraikat.com), vaka odaklı klinik görsel tabanlı etkileşimli bir öğrenme platformudur. Tıp öğrencileri ve uzmanlık sınavlarına hazırlanan hekimlerin teşhis becerilerini geliştirmeleri amacıyla tasarlanmıştır.",
    btnExplore: "Platformu Keşfet",
    freeTag: "Hekimler için ücretsizdir",
    
    // Blog
    blogSubtitle: "Son Yayınlar",
    blogTitle: "Dermatoloji Eğitim Makaleleri",
    btnViewAll: "Tüm Makaleleri Görüntüle",
    blog1Category: "Vitiligo Cerrahisi",
    blog1Read: "6 dk okuma",
    blog1Title: "Melanosit Transplantasyonu Nedir?",
    blog1Desc: "Stabil vitiligo yamalarında melanosit transplantasyonu (NCMT) cerrahi tedavi seçeneğine genel bakış.",
    blog2Category: "Akne İzleri",
    blog2Read: "5 dk okuma",
    blog2Title: "Subsizyon ve Yara İzi Protokolleri",
    blog2Desc: "Derin yara izlerinde subsizyon ve kimyasal peeling kombinasyonunun klinik sonuçları.",
    
    // Contact
    contactTitle: "Akademik ve Mesleki",
    contactTitleAccent: "İletişim",
    contactDesc: "Bu portföy, akademik ağ oluşturma ve klinik nitelik doğrulama amaçlı açık bir profesyonel merkezdir. Akademik iş birlikleri, seminer veya mesleki iletişim için e-posta yoluyla ulaşabilirsiniz.",
    clinicLocation: "Kurumsal Bağlantı",
    clinicAddress: "Kraliyet Tıbbi Hizmetleri, Amman, Ürdün",
    workingHours: "Çalışma Saatleri",
    workingHoursVal: "Paz – Per: 08:00 – 16:00",
    btnWhatsApp: "E-posta Gönder",
    footerDesc: "Klinik hassasiyet, tıp eğitimi ve cerrahi dermatolojiye odaklanmış dermatolog ve tıp subayı.",
    footerNav: "Navigasyon",
    footerLegal: "Yasal Bilgiler",
    footerNews: "Nüvel Bülten",
    footerCopyright: "© 2026 Dr. Osama Alwreikat. Tüm hakları saklıdır.",
  }
};

export default function PortfolioPage() {
  const [lang, setLang] = useState<"en" | "ar" | "tr">("ar");

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = translations[lang];

  return (
    <div className={`min-h-screen text-glow selection:bg-primary-container selection:text-on-primary-container clinical-bg break-words overflow-x-hidden ${lang === 'ar' ? 'font-cairo' : 'font-sans'}`}>
      
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant/10">
        <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shrink-0">
              <img src="/favicon.ico" alt="Dr. Osama Wraikat Logo" className="w-full h-full object-cover" />
            </div>
            <div className="font-serif text-lg md:text-xl font-bold tracking-tight text-white truncate">
              {lang === "ar" ? (
                <>د. أسامة <span className="text-secondary font-normal">الوريكات</span></>
              ) : (
                <>Dr. Osama <span className="text-secondary font-normal">Alwreikat</span></>
              )}
            </div>
          </div>
          
          <div className="hidden lg:flex gap-6 items-center shrink-0">
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#about">{t.navAbout}</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#projects">{t.navProjects}</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#blog">{t.navBlog}</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 text-sm font-medium" href="#contact">{t.navContact}</a>
            
            {/* Language Switcher */}
            <div className="flex gap-1.5 border border-white/10 p-1 rounded-xl bg-surface-container/50">
              <button 
                onClick={() => setLang("ar")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${lang === "ar" ? "bg-primary-container text-white" : "text-on-surface-variant hover:text-white"}`}
              >
                العربية
              </button>
              <button 
                onClick={() => setLang("en")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${lang === "en" ? "bg-primary-container text-white" : "text-on-surface-variant hover:text-white"}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang("tr")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${lang === "tr" ? "bg-primary-container text-white" : "text-on-surface-variant hover:text-white"}`}
              >
                TR
              </button>
            </div>

            <a 
              href="mailto:contact@wraikat.com" 
              className="bg-primary-container text-on-primary-container hover:bg-primary px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider transition-all duration-300 shadow-[0_4px_16px_rgba(13,92,96,0.3)] border border-white/5"
            >
              {t.btnBook}
            </a>
          </div>

          {/* Mobile view controls */}
          <div className="flex lg:hidden items-center gap-2">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as "en" | "ar" | "tr")}
              className="bg-surface-container border border-white/10 text-white rounded-lg text-xs p-1.5 focus:outline-none"
            >
              <option value="ar">العربية</option>
              <option value="en">English</option>
              <option value="tr">Türkçe</option>
            </select>
            <a 
              href="mailto:contact@wraikat.com"
              className="bg-primary-container text-on-primary-container p-2 rounded-lg text-xs"
            >
              ✉️
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(13,92,96,0.15),transparent_50%)]"></div>
          <div className="relative z-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full py-16">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 md:col-span-10 lg:col-span-8">
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest">
                  {t.badge}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
                  {t.heroTitle1} <br/>
                  <span className="text-secondary italic font-normal text-2xl sm:text-3xl md:text-4xl">{t.heroTitle2}</span>
                </h1>
                <p className="text-sm sm:text-md md:text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
                  {t.heroDesc}
                </p>
                <div className="flex flex-wrap gap-3 md:gap-5 text-secondary text-xs font-semibold tracking-wider uppercase">
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
        <section className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" id="about">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Abstract Graphic representing dermatology */}
            <div className="col-span-12 md:col-span-5 relative">
              <div className="aspect-[4/5] max-w-md mx-auto w-full rounded-3xl overflow-hidden glass-card p-2 group shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <img 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" 
                  src="/skin_abstract.png" 
                  alt="Abstract Dermatology Art"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            <div className="col-span-12 md:col-span-7">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-6 leading-tight">
                {t.aboutTitle} <br/>
                <span className="text-secondary">{t.aboutTitleAccent}</span>
              </h2>
              <p className="text-sm sm:text-md text-on-surface-variant mb-6 leading-relaxed">
                {t.aboutDesc}
              </p>
              
              {/* Language Tags & Education Badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  🇹🇷 {lang === "ar" ? "خريج أكاديمية غولهان العسكرية (أنقرة)" : lang === "tr" ? "Gülhane Askeri Tıp Akademisi Mezunu" : "Gülhane Military Academy Graduate (Ankara)"}
                </span>
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  🇸🇦 {lang === "ar" ? "العربية" : lang === "tr" ? "Arapça" : "Arabic"}
                </span>
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  🇬🇧 {lang === "ar" ? "الإنجليزية" : lang === "tr" ? "İngilizce" : "English"}
                </span>
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  🇹🇷 {lang === "ar" ? "التركية" : lang === "tr" ? "Türkçe" : "Turkish"}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Specialized Skills Grid Section */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-outline-variant/10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.skillsHeader}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* SVG Icon 1: Vitiligo surgery */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3.5 mb-4">
                <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.242c0 .289.139.56.375.725l1.62 1.13a.75.75 0 00.86 0l1.62-1.13a.75.75 0 01.375-.725V3.104m-4.85 0A9 9 0 0112 3c1.776 0 3.441.517 4.85 1.408m-4.85-1.304a9 9 0 00-4.85 1.304m0 0l.497.662a.75.75 0 001.071.077l1.107-.954a.75.75 0 01.97-.008l1.196.997a.75.75 0 001.026-.048l.492-.511m0 0a9 9 0 014.85 1.304m-4.85-1.304a9 9 0 00-1.61 3.518m-5.46.223a9.003 9.003 0 013.782-4.587m0 0l.732.975a.75.75 0 001.036.147l1.32-.88a.75.75 0 01.884.032l1.096.914a.75.75 0 001.002-.036l.462-.464m0 0a9 9 0 013.782 4.587m-13.682 0a9 9 0 002.162 5.093m11.52-5.093a9 9 0 012.162 5.093M4.978 9.864a9.003 9.003 0 00-1.688 3.563m17.42 0a9.003 9.003 0 01-1.688-3.563M3.29 13.427a9 9 0 003.547 4.79m10.326-4.79a9 9 0 013.547 4.79m-13.873 0a9 9 0 005.066 2.275m3.742-2.275a9 9 0 015.066 2.275M6.837 18.217a9.003 9.003 0 006.913 2.679m3.413-2.679a9.003 9.003 0 01-6.913 2.679"></path>
                </svg>
                <h3 className="text-white text-md sm:text-lg font-bold font-serif">{t.cardDermoscopyTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardDermoscopyDesc}</p>
            </div>

            {/* SVG Icon 2: Acne subcision */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3.5 mb-4">
                <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0V3m7.5 0v13.5M6 7.5h12M6 12h12"></path>
                </svg>
                <h3 className="text-white text-md sm:text-lg font-bold font-serif">{t.cardSurgicalTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardSurgicalDesc}</p>
            </div>

            {/* SVG Icon 3: Botox injections */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3.5 mb-4">
                <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-white text-md sm:text-lg font-bold font-serif">{t.cardVitiligoTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardVitiligoDesc}</p>
            </div>

            {/* SVG Icon 4: Laser / Clinical derm */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md">
              <div className="flex items-center gap-3.5 mb-4">
                <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
                </svg>
                <h3 className="text-white text-md sm:text-lg font-bold font-serif">{t.cardTrichologyTitle}</h3>
              </div>
              <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardTrichologyDesc}</p>
            </div>

          </div>
        </section>

        {/* Projects Section: DermOSCE */}
        <section className="py-24 bg-surface-container-lowest animate-fade-in" id="projects">
          <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">{t.projectsSubtitle}</span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mt-2 font-bold">{t.projectsTitle}</h2>
            </div>
            
            <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 019.918 5.842 50.45 50.45 0 00-2.658.814m-15.482 0a50.697 50.697 0 0115.482 0M8.25 12.187v-2.38c0-.11.089-.2.2-.2h7.1c.11 0 .2.09.2.2v2.38m-7.5 0h7.5"></path>
                  </svg>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-4 leading-snug">{t.projectsTitle} — Exam Prep</h3>
                <p className="text-on-surface-variant text-xs sm:text-sm mb-8 leading-relaxed">
                  {t.projectsDesc}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    className="bg-secondary text-on-secondary px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase hover:brightness-110 transition-all flex items-center gap-2" 
                    href="https://dermosce.wraikat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.btnExplore} ↗
                  </a>
                  <span className="text-on-surface-variant/70 text-xs font-semibold uppercase tracking-widest">{t.freeTag}</span>
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
        <section className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" id="blog">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">{t.blogSubtitle}</span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mt-2">{t.blogTitle}</h2>
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
                <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-secondary transition-colors mb-3">
                  {t.blog1Title}
                </h3>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
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
                <h3 className="font-serif text-lg sm:text-xl text-white group-hover:text-secondary transition-colors mb-3">
                  {t.blog2Title}
                </h3>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                  {t.blog2Desc}
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" id="contact">
          <div className="bg-surface-container border border-outline-variant/10 rounded-3xl p-6 sm:p-8 md:p-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
            <div className="relative z-10 grid grid-cols-12 gap-8 items-center">
              
              <div className="col-span-12 md:col-span-6">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white mb-6">
                  {t.contactTitle} <br/>
                  <span className="text-secondary">{t.contactTitleAccent}</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-md text-on-surface-variant mb-8 leading-relaxed">
                  {t.contactDesc}
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-sm shrink-0">🏛️</div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{t.clinicLocation}</p>
                      <p className="text-xs sm:text-sm text-white truncate">{t.clinicAddress}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary text-sm shrink-0">🕒</div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">{t.workingHours}</p>
                      <p className="text-xs sm:text-sm text-white">{t.workingHoursVal}</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="mailto:contact@wraikat.com"
                  className="inline-flex w-full md:w-auto justify-center bg-primary-container hover:bg-primary text-white px-8 py-3.5 rounded-xl font-bold transition-all duration-300 items-center gap-2 text-sm border border-white/5 shadow-lg"
                >
                  ✉️ {t.btnWhatsApp}
                </a>
              </div>

              {/* Map/Contact Graphic */}
              <div className="col-span-12 md:col-span-6 aspect-square rounded-2xl overflow-hidden opacity-40 border border-white/5 relative">
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
      <footer className="bg-surface-container-lowest border-t border-outline-variant/10 py-16 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <div className="font-serif text-xl text-secondary mb-4 font-bold">
              {lang === "ar" ? "د. أسامة الوريكات" : "Dr. Osama Alwreikat"}
            </div>
            <p className="text-on-surface-variant text-xs sm:text-sm max-w-sm leading-relaxed">
              {t.footerDesc}
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col md:items-end justify-between gap-4">
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs font-semibold tracking-widest uppercase">
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
