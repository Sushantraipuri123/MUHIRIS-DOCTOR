import localFont from "next/font/local";
import "./globals.css";
import  "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/utils/header/Header";
import Footer from "@/utils/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Expert Medical Advice & Consultation | Trusted Doctors Online",
  description: "Connect with our experienced doctors for personalized medical advice and consultations. Get expert health care guidance and discuss your concerns with our dedicated team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
