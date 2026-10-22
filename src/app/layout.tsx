import type { Metadata } from "next";
import { Cairo, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wraikat.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "https://www.wraikat.com/",
    siteName: "Dr. Osama Alwreikat | د. أسامة الوريكات",
    title: "د. أسامة الوريكات | اختصاصي الأمراض الجلدية والتناسلية - البورد الأردني",
    description: "الموقع المهني للدكتور أسامة الوريكات، اختصاصي الأمراض الجلدية والتناسلية والحاصل على البورد الأردني.",
    locale: "ar_JO",
  },
  robots: { index: true, follow: true },
  title: "د. أسامة الوريكات | اختصاصي جلدية وتناسلية وبورد أردني | Dr. Osama Alwreikat",
  description: "د. أسامة الوريكات اختصاصي الأمراض الجلدية والتناسلية، حاصل على شهادة البورد الأردني من المجلس الطبي الأردني، خريج أكاديمية غولهانة العسكرية (GATA) في أنقرة. متخصص في زراعة الخلايا الصبغية للبهاق وعلاج ندب حب الشباب.",
  keywords: [
    "اسامة الوريكات", "البورد الأردني جلدية", "اختصاصي جلدية وتناسلية", "طبيب جلدية عمان", "دكتور جلدية ابو نصير", "زراعة الخلايا الصبغية للبهاق",
    "علاج البهاق الاردن", "علاج ندب حب الشباب عمان", "تقطيع الندبات عمان", "حقن البوتوكس عمان",
    "الخدمات الطبية الملكية", "أكاديمية غولهانة العسكرية", "Dr Osama Alwreikat", "Dr Osama Wraikat",
    "Jordanian Board certified dermatologist", "dermatologist amman", "vitiligo surgery jordan", "melanocyte transplant jordan", "GATA medical graduate"
  ],
  other: {
    "profile:username": "Dr. Osama Alwreikat",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.wraikat.com/#person",
      "name": "Dr. Osama Alwreikat",
      "alternateName": [
        "د. أسامة الوريكات",
        "Osama Wraikat"
      ],
      "url": "https://www.wraikat.com/",
      "jobTitle": "Jordanian Board-Certified Dermatology and Venereology Specialist",
      "knowsAbout": [
        "Dermatology",
        "Venereology",
        "Vitiligo surgery",
        "Medical education"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Jordan Royal Medical Services"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Gülhane Military Medical Academy"
      },
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "name": "Jordanian Board in Dermatology and Venereology",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Jordan Medical Council"
        }
      },
      "sameAs": [
        "https://osaraclinics.com/doctors/dr-osama-alwreikat"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.wraikat.com/#website",
      "url": "https://www.wraikat.com/",
      "name": "Dr. Osama Alwreikat — Professional Portfolio",
      "inLanguage": [
        "ar",
        "en",
        "tr"
      ],
      "about": {
        "@id": "https://www.wraikat.com/#person"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      className={`${cairo.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body>
    </html>
  );
}
