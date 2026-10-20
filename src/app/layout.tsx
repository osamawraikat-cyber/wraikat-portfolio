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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
