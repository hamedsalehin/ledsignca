import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getPostData } from "@/lib/blog";

export const metadata = {
  title: "Support & Software Downloads | Nano Signs",
  description: "Download software and user manuals for Nano Signs electronic LED signs.",
};

const DOWNLOAD_LINKS = [
  { text: "Download Fkshow2020 windows [Gen 8]", href: "https://led-sign.ca/FkShow2022.zip" },
  { text: "Download HDPlayer Software full color electronic signs", href: "https://huidu-cn.oss-ap-southeast-1.aliyuncs.com/HDPlayer.7.6.40.0.exe" },
  { text: "Download HD2018 Software Single color electronic signs", href: "https://huidu-cn.oss-ap-southeast-1.aliyuncs.com/HD2018%20V1.0.23.exe" },
  { text: "Download User Manual Of FKShow LED Picture & Text Edit Software", href: "https://led-sign.ca/User%20Manual%20Of%20FK%20Show%20LED%20Picture%20&%20Text%20Edit%20Software.doc" },
  { text: "Download HDPlayer User manual Single color electronic signs", href: "https://www.huidu.cn/uploads/20210911/e04de67adba59ff456ab13edb562d467.pdf" },
  { text: "Download HD2020 User manual Single color electronic signs", href: "https://www.huidu.cn/uploads/20210911/1aa0986e873ace1081ab87d839260879.pdf" },
  { text: "Download HD2018 User manual Single color electronic signs", href: "https://www.huidu.cn/uploads/20210911/e04de67adba59ff456ab13edb562d467.pdf" },
  { text: "Download LedArt app User manual", href: "https://www.huidu.cn/uploads/20210911/7195e7f8b2bbdad9bbc0e20d7e889f05.pdf" },
  { text: "Download LedArt app for Android HD sign", href: "https://play.google.com/store/apps/details?id=cn.huidu.huiduapp&hl=en_CA&gl=US" },
  { text: "Download LedArt app for IPhone HD sign", href: "https://apps.apple.com/us/app/ledart/id1144062386" },
  { text: "Download FKshow app for IPhone FK sign", href: "https://apps.apple.com/us/app/fkshow/id1135752741" },
];

export default async function SupportPage() {
  const postData = await getPostData("support");

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 font-poppins text-center">Support & Downloads</h1>
        
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-poppins border-b pb-4">Software & App Downloads</h2>
          <div className="flex flex-col gap-3 items-start">
            {DOWNLOAD_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4d2626] text-white hover:bg-[#3c1d1d] transition-colors py-3 px-6 rounded text-sm md:text-base font-medium shadow-sm inline-block"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div 
            className="prose prose-lg md:prose-xl max-w-none prose-headings:font-poppins prose-headings:font-bold prose-h2:text-3xl prose-h2:text-gray-900 prose-p:text-gray-600 prose-a:text-pink-500 hover:prose-a:text-pink-600 prose-img:rounded-xl prose-img:shadow-sm prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} 
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
