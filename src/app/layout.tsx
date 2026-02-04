import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bac-Hub | مصادر الباكالوريا",
  description: "أفضل الروابط والمصادر التعليمية لطلاب البكالوريا في مكان واحد",
  //Manifest for iOS
  appleWebApp: {
    title: 'Bac-Hub',
    statusBarStyle: 'default',
    startupImage: ['/icon-512.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Vercel Analytics */}
        <Analytics />

      {/* Footer */}
        <footer className="mt-20 p-10 border-t border-white/5 bg-[#0a0a0a] text-center">
          <h3 className="text-xl font-medium mb-8 text-white/90 flex items-center justify-center gap-2">
            ثبت التطبيق على هاتفك <span className="text-lg">📲</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Android Card */}
            <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-white/30 transition-colors group">
              <p className="text-gray-300 font-medium opacity-80 group-hover:opacity-100">Android / Chrome</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                اضغط على النقاط الثلاث <span className="text-white text-lg">⋮</span> ثم اختر <br/>
                <span className="text-white font-semibold">"الاضافة الى الشاشة الرئيسية"</span>
              </p>
            </div>
          {/* iPhone Card */}
            <div className="p-4 bg-white/[0.03] rounded-2xl border border-white/10 hover:border-white/30 transition-colors group">
              <p className="text-gray-300 font-medium opacity-80 group-hover:opacity-100">iPhone / Safari</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                اضغط على أيقونة المشاركة <span className="text-white text-lg">⎋</span> ثم اختر <br/>
                <span className="text-white font-semibold">"اضافة الى الصفحة الرئيسية"</span>
              </p>
            </div>
          </div>

          {/* instagram */}
          <div className="mt-8 max-w-3xl mx-auto">
            <a 
              href="https://instagram.com/ziroopam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl border border-white/5 hover:border-pink-500/30 transition-all duration-300"
            >
              <h4 className="text-white font-semibold text-lg mb-1">عندك شي مصدر يستحق يتزاد؟</h4>              
              <span className="text-pink-400 font-medium text-sm group-hover:underline">
                @ziroopam ↗
              </span>
            </a>
          </div>

          <p className="mt-10 text-[10px] tracking-widest uppercase text-gray-600">
            © 2026 Bac-Hub • Focus on your success
          </p>
        </footer>
      </body>
    </html>
  );
}
