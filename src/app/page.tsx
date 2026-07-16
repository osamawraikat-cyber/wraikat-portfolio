"use client";

import React, { useState, useEffect } from "react";

const translations = {
  en: {
    navAbout: "Biography",
    navProjects: "Innovations",
    navBlog: "Blog",
    navContact: "Contact",
    btnBook: "Academic Inquiry",
    badge: "Jordan Royal Medical Services",
    heroTitle1: "Dr. Osama Alwreikat",
    heroTitle2: "Dermatologist & Venereologist",
    heroDesc: "Dermatology, venereology, and laser doctor serving in the Jordan Royal Medical Services. Graduated from Ankara Gülhane Military Medical Academy (GATA / SBU). Fluent in Arabic, English, and Turkish.",
    interests: ["Clinical Dermatology", "Dermato-Oncology", "Vitiligo Surgery", "Digital Health"],
    aboutTitle: "Academic & Clinical",
    aboutTitleAccent: "Background",
    aboutDesc: "Dr. Osama Alwreikat (Osama Wraikat) was recruited as a military medical officer in 2010 at age 18, starting his medical training in the same year. He completed his medical education at the historic Gülhane Military Medical Academy (GATA, now SBU) in Ankara, Turkey. Today, he is a practicing dermatologist within the Jordan Royal Medical Services. Fluent in Arabic, English, and Turkish, his professional interest centers on advanced clinical diagnostics, medical education, and specialized dermatologic surgery.",
    
    // Core Procedures & Skills
    skillsHeader: "Clinical Expertise & Advanced Procedures",
    
    cardVitiligoTitle: "Vitiligo & Surgical Dermatology (NCMT)",
    cardVitiligoDesc: "Advanced Non-Cultured Melanocyte Transplant (NCMT) and mini-grafting techniques to restore pigmentation in stable vitiligo patches.",
    
    cardOncologyTitle: "Dermato-Oncology & Biopsies",
    cardOncologyDesc: "Diagnosis and management of skin cancers including BCC, SCC, and Melanoma. Performing biopsies and minor cosmetic surgery (mole removals).",
    
    cardPediatricTitle: "Pediatric Dermatology",
    cardPediatricDesc: "Specialized care for infants, children, and adolescents dealing with eczema, hemangiomas, birthmarks, and pediatric rashes.",
    
    cardInflammatoryTitle: "Psoriasis, Acne & Melasma",
    cardInflammatoryDesc: "Advanced therapeutic protocols for chronic inflammatory disorders like Psoriasis, severe Acne vulgaris, and difficult-to-treat Melasma.",
    
    cardAestheticTitle: "Aesthetic Medicine & Injectables",
    cardAestheticDesc: "Precise application of botulinum toxin (Botox) and dermal fillers for facial rejuvenation, scar revisions, and hyperhidrosis.",
    
    cardLaserTitle: "Laser Therapy & Tattoo Removal",
    cardLaserDesc: "Clinical application of lasers for vascular lesions, hyperpigmentation, skin resurfacing, and advanced tattoo removal.",

    // Innovations
    projectsSubtitle: "Digital Innovations",
    projectsTitle: "Medical Technology & Applications",
    
    dermosceTitle: "DermOSCE Platform",
    dermosceSubtitle: "Educational board prep",
    dermosceDesc: "DermOSCE (dermosce.wraikat.com) is an interactive, clinical image-based learning platform. Developed for medical students and residency candidates preparing for dermatology board exams to refine diagnostic skills.",
    btnExplore: "Explore DermOSCE",
    freeTag: "Free educational tool",

    relumTitle: "Relum App",
    relumSubtitle: "Vitiligo patient assistant",
    relumDesc: "Relum is a custom digital health application developed by Dr. Osama to support vitiligo patients. It assists users in monitoring patch changes, tracking phototherapy/UV exposure times, and managing compliance.",
    btnExploreRelum: "Vitiligo Patient Tool",
    relumTag: "Patient-centric app",
    
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
    navProjects: "الابتكارات الرقمية",
    navBlog: "المدونة الطبية",
    navContact: "التواصل",
    btnBook: "استفسار أكاديمي",
    badge: "الخدمات الطبية الملكية الاردنية",
    heroTitle1: "د. أسامة الوريكات",
    heroTitle2: "طبيب جلدية وتناسلية وليزر",
    heroDesc: "طبيب ممارس للأمراض الجلدية والتناسلية والليزر في الخدمات الطبية الملكية الاردنية. خريج أكاديمية غولهان العسكرية (GATA) في أنقرة، تركيا. يتحدث العربية، الإنجليزية، والتركية.",
    interests: ["أمراض جلدية", "أورام الجلد", "جراحة البهاق", "الابتكار الرقمي"],
    aboutTitle: "الخلفية الأكاديمية",
    aboutTitleAccent: "والسريرية",
    aboutDesc: "تم تجنيد الدكتور أسامة الوريكات (أسامة وريكات) كضابط طبيب في الخدمات الطبية الملكية الاردنية في عام 2010 في سن 18 عاماً، وبدأ دراسته الطبية في نفس العام. حصل على درجة الطب من أكاديمية غولهان الطبية العسكرية العريقة (GATA - وحالياً جامعة العلوم الصحية SBU) في أنقرة، تركيا. وهو طبيب ممارس للأمراض الجلدية في الخدمات الطبية الملكية الاردنية. يتحدث العربية والإنجليزية والتركية بطلاقة، ويتركز اهتمامه المهني على التشخيص السريري المتقدم، التعليم الطبي، وجراحة الجلد المتخصصة.",
    
    // Core Procedures & Skills
    skillsHeader: "الخبرات السريرية والإجراءات الجراحية المتخصصة",
    
    cardVitiligoTitle: "جراحة الجلد والبهاق (NCMT)",
    cardVitiligoDesc: "عمليات زراعة الخلايا الصبغية غير المستزرعة (NCMT) وزراعة الطعوم المصغرة للبهاق المستقر.",
    
    cardOncologyTitle: "أورام الجلد والخزعات الطبية",
    cardOncologyDesc: "تشخيص وعلاج سرطانات الجلد (BCC, SCC, Melanoma)، وإجراء خزعات الجلد الجراحية وإزالة الشامات التجميلية.",
    
    cardPediatricTitle: "طب جلدية الأطفال",
    cardPediatricDesc: "رعاية متخصصة للأطفال والرضع لعلاج الأكزيما البنيوية، الوحمات الدموية، والتهابات الجلد الطفولية.",
    
    cardInflammatoryTitle: "حب الشباب، الصدفية والكلف",
    cardInflammatoryDesc: "بروتوكولات علاجية شاملة للأمراض الجلدية الالتهابية المزمنة مثل الصدفية، حب الشباب الشديد، والتصبغات والكلف.",
    
    cardAestheticTitle: "الإجراءات التجميلية (البوتوكس والفيلر)",
    cardAestheticDesc: "حقن البوتوكس، الفيلر، وتعديل الندبات الجراحية لاستعادة المظهر الطبيعي المتناسق للوجه.",
    
    cardLaserTitle: "العلاج بالليزر وإزالة الوشم",
    cardLaserDesc: "استخدام أحدث أجهزة الليزر الطبي لعلاج التصبغات، الأوعية الدموية، وإزالة الوشم بأمان.",

    // Innovations
    projectsSubtitle: "الابتكارات الرقمية",
    projectsTitle: "التكنولوجيا الطبية والتطبيقات",
    
    dermosceTitle: "منصة DermOSCE",
    dermosceSubtitle: "منصة تدريب بورد جلدية",
    dermosceDesc: "منصة DermOSCE (dermosce.wraikat.com) هي أداة تعليمية تفاعلية مصممة لطلاب الكليات الطبية وأطباء الامتياز والإقامة لتطوير مهارات التشخيص الصوري للبورد والامتحانات السريرية.",
    btnExplore: "استكشف DermOSCE",
    freeTag: "متاحة مجاناً للكوادر الطبية",

    relumTitle: "تطبيق Relum",
    relumSubtitle: "مساعد مرضى البهاق",
    relumDesc: "تطبيق ذكي صمم خصيصاً لمساعدة مرضى البهاق على تتبع بقع البهاق، وحساب أوقات التعرض للأشعة فوق البنفسجية والعلاج الضوئي، ومتابعة الاستجابة العلاجية.",
    btnExploreRelum: "مساعد البهاق الذكي",
    relumTag: "تطبيق مخصص للمرضى",
    
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
    navProjects: "Dijital İnovasyonlar",
    navBlog: "Makaleler",
    navContact: "İletişim",
    btnBook: "Akademik İletişim",
    badge: "Ürdün Kraliyet Tıbbi Hizmetleri",
    heroTitle1: "Dr. Osama Alwreikat",
    heroTitle2: "Dermatolog & Venerolog",
    heroDesc: "Ürdün Kraliyet Tıbbi Hizmetleri bünyesinde görev yapan dermatoloji, veneroloji ve tıbbi lazer hekimi. Ankara Gülhane Askeri Tıp Akademisi (GATA / SBÜ) mezunu. Arapça, İngilizce ve Türkçe bilmektedir.",
    interests: ["Klinik Dermatoloji", "Dermato-Onkoloji", "Vitiligo Cerrahisi", "Dijital Sağlık"],
    aboutTitle: "Akademik ve Klinik",
    aboutTitleAccent: "Özgeçmiş",
    aboutDesc: "Dr. Osama Alwreikat (Osama Wraikat), 2010 yılında 18 yaşındayken askeri tıp subayı olarak göreve başladı ve aynı yıl tıp eğitimine başladı. Tıp eğitimini Ankara'daki tarihi Gülhane Askeri Tıp Akademisi'nde (GATA, şimdiki adıyla SBÜ) tamamladı. Şu anda Ürdün Kraliyet Tıbbi Hizmetleri bünyesinde dermatolog olarak görev yapmaktadır. Arapça, İngilizce ve Türkçe dillerine hakim olan Dr. Alwreikat, ileri düzey klinik teşhis, tıp eğitimi ve uzmanlaşmış dermatolojik cerrahiye odaklanmaktadır.",
    
    // Core Procedures & Skills
    skillsHeader: "Klinik Deneyim ve Gelişmiş Uygulamalar",
    
    cardVitiligoTitle: "Vitiligo ve Cerrahi Dermatoloji (NCMT)",
    cardVitiligoDesc: "Stabil vitiligo hastalarında ileri düzey Hücre Kültürsüz Melanosit Transplantasyonu (NCMT) ve mini greftleme uygulamaları.",
    
    cardOncologyTitle: "Dermato-Onkoloji ve Biyopsiler",
    cardOncologyDesc: "BCC, SCC ve Melanom dahil cilt kanserlerinin teşhis ve tedavisi. Cilt biyopsileri ve kozmetik ben (nevüs) alımı.",
    
    cardPediatricTitle: "Pediatrik Dermatoloji",
    cardPediatricDesc: "Bebek ve çocuklarda egzama, doğum lekeleri (hemanjiyom) ve inflamatuar çocukluk çağı cilt hastalıklarının takibi.",
    
    cardInflammatoryTitle: "Akne, Sedef ve Melazma",
    cardInflammatoryDesc: "Sedef hastalığı (psoriasis), şiddetli akne vulgaris ve inatçı melazma (leke) tedavisinde kapsamlı klinik protokoller.",
    
    cardAestheticTitle: "Kozmetik Uygulamalar, Botox & Dolgu",
    cardAestheticDesc: "Yüz gençleştirme, botulinum toksin (Botox) ve dermal dolgu enjeksiyonları ile skar revizyonu işlemleri.",
    
    cardLaserTitle: "Lazer Tedavileri ve Dövme Silme",
    cardLaserDesc: "Gelişmiş lazer sistemleri ile cilt yenileme, damarsal lezyon tedavisi ve lazerle dövme silme.",

    // Innovations
    projectsSubtitle: "Dijital İnovasyonlar",
    projectsTitle: "Medikal Teknoloji ve Uygulamalar",
    
    dermosceTitle: "DermOSCE Platformu",
    dermosceSubtitle: "Eğitim ve Board Hazırlığı",
    dermosceDesc: "DermOSCE (dermosce.wraikat.com), vaka odaklı klinik görsel tabanlı etkileşimli bir öğrenme platformudur. Tıp öğrencileri ve board sınavlarına hazırlanan hekimlerin teşhis becerilerini geliştirmeleri amacıyla tasarlanmıştır.",
    btnExplore: "DermOSCE Keşfet",
    freeTag: "Hekimler için ücretsizdir",

    relumTitle: "Relum Uygulaması",
    relumSubtitle: "Vitiligo Hasta Asistanı",
    relumDesc: "Vitiligo hastalarının hayatını kolaylaştırmak için Dr. Osama tarafından geliştirilen mobil uygulama. Vitiligo lekelerinin takibini, fototerapi/UV süre hesaplamasını ve tedavi seyrini izlemeyi sağlar.",
    btnExploreRelum: "Vitiligo Hasta Uygulaması",
    relumTag: "Hasta odaklı uygulama",
    
    // Blog
    blogSubtitle: "Son Yayınlar",
    blogTitle: "Dermatoloji Makaleleri",
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
    footerNews: "Bülten",
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
                <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest font-mono">
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
                  🇬🇧 {lang === "ar" ? "الإنكليزية" : lang === "tr" ? "İngilizce" : "English"}
                </span>
                <span className="bg-surface-container border border-outline-variant/10 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                  🇹🇷 {lang === "ar" ? "التركية" : lang === "tr" ? "Türkçe" : "Turkish"}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Specialized Skills Grid Section - 6 Premium Cards */}
        <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto border-t border-outline-variant/10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">{t.skillsHeader}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* SVG Icon 1: Vitiligo surgery & NCMT */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.242c0 .289.139.56.375.725l1.62 1.13a.75.75 0 00.86 0l1.62-1.13a.75.75 0 01.375-.725V3.104m-4.85 0A9 9 0 0112 3c1.776 0 3.441.517 4.85 1.408m-4.85-1.304a9 9 0 00-4.85 1.304m0 0l.497.662a.75.75 0 001.071.077l1.107-.954a.75.75 0 01.97-.008l1.196.997a.75.75 0 001.026-.048l.492-.511m0 0a9 9 0 014.85 1.304m-4.85-1.304a9 9 0 00-1.61 3.518m-5.46.223a9.003 9.003 0 013.782-4.587m0 0l.732.975a.75.75 0 001.036.147l1.32-.88a.75.75 0 01.884.032l1.096.914a.75.75 0 001.002-.036l.462-.464m0 0a9 9 0 013.782 4.587m-13.682 0a9 9 0 002.162 5.093m11.52-5.093a9 9 0 012.162 5.093M4.978 9.864a9.003 9.003 0 00-1.688 3.563m17.42 0a9.003 9.003 0 01-1.688-3.563M3.29 13.427a9 9 0 003.547 4.79m10.326-4.79a9 9 0 013.547 4.79m-13.873 0a9 9 0 005.066 2.275m3.742-2.275a9 9 0 015.066 2.275M6.837 18.217a9.003 9.003 0 006.913 2.679m3.413-2.679a9.003 9.003 0 01-6.913 2.679"></path>
                  </svg>
                  <h3 className="text-white text-sm sm:text-md font-bold font-serif">{t.cardVitiligoTitle}</h3>
                </div>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardVitiligoDesc}</p>
              </div>
            </div>

            {/* SVG Icon 2: Dermato-Oncology & Biopsies */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.068-.593 3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"></path>
                  </svg>
                  <h3 className="text-white text-sm sm:text-md font-bold font-serif">{t.cardOncologyTitle}</h3>
                </div>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardOncologyDesc}</p>
              </div>
            </div>

            {/* SVG Icon 3: Pediatric Dermatology */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
                  </svg>
                  <h3 className="text-white text-sm sm:text-md font-bold font-serif">{t.cardPediatricTitle}</h3>
                </div>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardPediatricDesc}</p>
              </div>
            </div>

            {/* SVG Icon 4: Psoriasis, Acne & Melasma */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12.5A3.25 3.25 0 0015.25 18.75h2.25M6 7.5h12M6 12h12"></path>
                  </svg>
                  <h3 className="text-white text-sm sm:text-md font-bold font-serif">{t.cardInflammatoryTitle}</h3>
                </div>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardInflammatoryDesc}</p>
              </div>
            </div>

            {/* SVG Icon 5: Aesthetic Medicine & Injectables */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-white text-sm sm:text-md font-bold font-serif">{t.cardAestheticTitle}</h3>
                </div>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardAestheticDesc}</p>
              </div>
            </div>

            {/* SVG Icon 6: Laser & Tattoo Removal */}
            <div className="p-6 rounded-3xl bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-all duration-300 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <svg className="w-7 h-7 text-primary shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
                  </svg>
                  <h3 className="text-white text-sm sm:text-md font-bold font-serif">{t.cardLaserTitle}</h3>
                </div>
                <p className="text-on-surface-variant text-xs sm:text-sm leading-relaxed">{t.cardLaserDesc}</p>
              </div>
            </div>

          </div>
        </section>

        {/* Digital Innovations Section: DermOSCE & Relum App Side-by-Side */}
        <section className="py-24 bg-surface-container-lowest" id="projects">
          <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-semibold uppercase tracking-widest font-mono">{t.projectsSubtitle}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-2 font-bold">{t.projectsTitle}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* DermOSCE Card */}
              <div className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="relative h-64 w-full">
                  <img 
                    className="w-full h-full object-cover" 
                    src="/dermosce_showcase.png" 
                    alt="DermOSCE Platform Preview"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-primary-container/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 font-mono">
                    {t.freeTag}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-secondary text-[11px] font-bold tracking-widest uppercase block mb-1 font-mono">{t.dermosceSubtitle}</span>
                    <h3 className="font-serif text-2xl text-white mb-4 leading-snug">{t.dermosceTitle}</h3>
                    <p className="text-on-surface-variant text-xs sm:text-sm mb-8 leading-relaxed">
                      {t.dermosceDesc}
                    </p>
                  </div>
                  <div>
                    <a 
                      className="inline-block bg-primary-container hover:bg-primary text-white px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all border border-white/5 text-center w-full sm:w-auto" 
                      href="https://dermosce.wraikat.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.btnExplore} ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Relum App Card */}
              <div className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/5 hover:border-primary/20 transition-all duration-300">
                <div className="relative h-64 w-full">
                  {/* Reuse skin_abstract visual to keep consistent branding */}
                  <img 
                    className="w-full h-full object-cover" 
                    src="/skin_abstract.png" 
                    alt="Relum App Concept Visual"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-secondary/80 backdrop-blur-sm text-on-secondary text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 font-mono">
                    {t.relumTag}
                  </span>
                </div>
                <div className="p-8 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-secondary text-[11px] font-bold tracking-widest uppercase block mb-1 font-mono">{t.relumSubtitle}</span>
                    <h3 className="font-serif text-2xl text-white mb-4 leading-snug">{t.relumTitle}</h3>
                    <p className="text-on-surface-variant text-xs sm:text-sm mb-8 leading-relaxed">
                      {t.relumDesc}
                    </p>
                  </div>
                  <div>
                    <span className="inline-block bg-surface-container-highest text-on-surface-variant px-6 py-3 rounded-xl font-semibold text-xs tracking-wider uppercase border border-white/5 text-center w-full sm:w-auto">
                      {t.btnExploreRelum}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto" id="blog">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-primary text-xs font-semibold uppercase tracking-widest font-mono">{t.blogSubtitle}</span>
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
                <div className="flex gap-4 mb-3 text-xs font-semibold tracking-widest uppercase font-mono">
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
                <div className="flex gap-4 mb-3 text-xs font-semibold tracking-widest uppercase font-mono">
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
