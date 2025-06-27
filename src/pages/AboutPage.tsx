import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-8 py-24">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="serif text-4xl font-semibold text-stone-800 mb-6">About Quiet Finds</h1>
          <p className="text-xl text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            In a world overwhelmed by choice, we believe in the power of trusted voices and authentic discovery.
          </p>
        </div>

        {/* Philosophy */}
        <div className="mb-20">
          <Card className="border-stone-200 bg-stone-50">
            <CardContent className="p-12 text-center">
              <h2 className="serif text-2xl font-semibold text-stone-800 mb-6">Our Philosophy</h2>
              <p className="text-stone-700 leading-relaxed font-light text-lg max-w-3xl mx-auto">
                We curate stays the way a thoughtful friend would recommend them — with care, 
                consideration, and genuine experience. Every recommendation comes from established 
                travel writers who have actually stayed, explored, and fallen in love with these places.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Process */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="serif text-xl font-semibold text-stone-800 mb-6">How we work</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Source</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  We monitor respected publications for authentic travel content, 
                  focusing on writers known for their discerning taste and honest reporting.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Curate</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  Each stay is manually reviewed and selected based on the quality 
                  of the writing, the authenticity of the experience, and the uniqueness of the place.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-stone-800 mb-2">Present</h4>
                <p className="text-stone-600 font-light leading-relaxed">
                  We present each stay with the original writer's perspective intact, 
                  maintaining the voice and insight that made us notice it in the first place.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="serif text-xl font-semibold text-stone-800 mb-6">Our sources</h3>
            <div className="space-y-3 text-stone-600 font-light">
              <p>The Guardian Travel</p>
              <p>Financial Times Weekend</p>
              <p>Condé Nast Traveler</p>
              <p>Monocle</p>
              <p>The Independent</p>
              <p>Travel + Leisure</p>
              <p>Wallpaper*</p>
            </div>
            
            <div className="mt-8 p-6 bg-stone-50 rounded-lg">
              <h4 className="font-medium text-stone-800 mb-3">Transparency note</h4>
              <p className="text-sm text-stone-600 font-light leading-relaxed">
                When you book through our links, we may earn a small commission. 
                This helps support our curation work but never influences our selections. 
                Every stay is chosen purely on editorial merit.
              </p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center">
          <Card className="border-stone-200">
            <CardContent className="p-12">
              <h3 className="serif text-2xl font-semibold text-stone-800 mb-6">Why quiet finds?</h3>
              <p className="text-stone-700 leading-relaxed font-light text-lg max-w-3xl mx-auto">
                Because the best places often whisper rather than shout. They're discovered 
                through careful exploration, not algorithmic optimization. They're recommended 
                by people who understand that travel is about connection — to place, to culture, 
                to the quiet moments that stay with you long after you've returned home.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
