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
  title: "د. أسامة الوريكات | طبيب جلدية وتناسلية وليزر في عمان الأردن | Dr. Osama Alwreikat",
  description: "د. أسامة الوريكات طبيب جلدية وتناسلية وليزر في الأردن، خريج أكاديمية غولهان العسكرية (GATA) في أنقرة. متخصص في زراعة الخلايا الصبغية للبهاق وعلاج ندب حب الشباب.",
  keywords: [
    "اسامة الوريكات", "طبيب جلدية عمان", "دكتور جلدية ابو نصير", "زراعة الخلايا الصبغية للبهاق",
    "علاج البهاق الاردن", "علاج ندب حب الشباب عمان", "تقطيع الندبات عمان", "حقن البوتوكس عمان",
    "الخدمات الطبية الملكية", "أكاديمية غولهان العسكرية", "Dr Osama Alwreikat", "Dr Osama Wraikat",
    "dermatologist amman", "vitiligo surgery jordan", "melanocyte transplant jordan", "GATA medical graduate"
  ],
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
