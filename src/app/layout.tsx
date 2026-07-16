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
  title: "Dr. Osama Alwreikat | Dermatology Specialist | د. أسامة الوريكات",
  description: "Dermatology specialist in Amman, Jordan focusing on acne, hair disorders, vitiligo, psoriasis, and dermoscopy-based diagnosis. د. أسامة الوريكات - أخصائي أمراض جلدية وتجميل",
  keywords: [
    "اسامة الوريكات", "الدكتور اسامة الوريكات", "أسامة الوريكات",
    "dr osama alwreikat", "dr osama wraikat", "dermatologist amman",
    "dermatologist jordan", "dermoscopy jordan", "OSara Clinics"
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
