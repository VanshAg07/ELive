"use client";

import FooterLegal from "./FooterLegal";
import FooterPixelDrift from "./FooterPixelDrift";
import FooterTop from "./FooterTop";
import IndustryBanner from "./IndustryBanner";
import OfficeInfo from "./OfficeInfo";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-white text-[#0f172a]"
    >
      <div className="px-5 pt-16 pb-4 sm:px-8 lg:px-12 lg:pt-20 xl:px-16">
        <FooterTop />

        <div className="mt-16 border-t border-slate-200 pt-8 lg:mt-20 lg:pt-10">
          <IndustryBanner />
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 lg:mt-10 lg:pt-10">
          <OfficeInfo />
        </div>

        <div className="mt-12 lg:mt-16">
          <FooterLegal />
        </div>
      </div>

      <FooterPixelDrift />
    </footer>
  );
}
