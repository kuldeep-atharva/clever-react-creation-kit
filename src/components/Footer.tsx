import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200 mt-32">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="serif text-xl font-semibold text-stone-800 mb-6">
                Quiet Finds
              </h3>
              <p className="text-stone-600 leading-relaxed text-sm font-light">
                Curating intimate, thoughtful accommodations discovered through
                trusted travel writing. Each stay is selected for its
                authenticity and quiet beauty.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-medium text-stone-800 mb-4 tracking-wide uppercase">
                Sources
              </h4>
              <div className="space-y-2 text-sm text-stone-600 font-light">
                <p>The Guardian</p>
                <p>Financial Times</p>
                <p>Condé Nast Traveler</p>
                <p>Monocle</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium text-stone-800 mb-4 tracking-wide uppercase">
                Philosophy
              </h4>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                In a world of noise, we seek the quiet places. The stays that
                whisper rather than shout.
              </p>
            </div>
          </div>

          <div className="border-t border-stone-200 mt-12 pt-8 text-center">
            <p className="text-xs text-stone-500 font-light tracking-wide">
              © 2024 Quiet Finds — Thoughtfully curated travel
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
