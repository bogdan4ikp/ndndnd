import React from 'react';
import { Star, Quote, ShieldAlert, Sparkles, Orbit } from 'lucide-react';
import { Language, translations } from '../translations';

interface ReviewsProps {
  lang: Language;
}

export default function Reviews({ lang }: ReviewsProps) {
  const t = translations[lang];

  const reviewers = [
    {
      name: t.review_1_author,
      role: t.review_1_role,
      text: t.review_1_text,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      rate: 5
    },
    {
      name: t.review_2_author,
      role: t.review_2_role,
      text: t.review_2_text,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      rate: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title sections */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-1 bg-cyan-950/80 border border-cyan-500/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-cyan-400 uppercase font-display mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>{t.reviews_subtitle}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            {t.reviews_title}
          </h2>
        </div>

        {/* Double layout visual reviewers cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviewers.map((rev, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-[#0b0f19]/80 border border-slate-800/80 p-8 hover:border-slate-700/80 transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Highlight decor */} 
              <div className="absolute -right-12 -bottom-12 w-24 h-24 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                
                <div>
                  {/* Rating stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(rev.rate)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Text statement */}
                  <p className="text-slate-300 text-sm leading-relaxed font-light italic mb-8">
                    "{rev.text}"
                  </p>
                </div>

                {/* User block details */}
                <div className="flex items-center space-x-4 border-t border-slate-900 pt-6">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-12 h-12 rounded-full border border-indigo-500/40 object-cover shadow-md"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-display tracking-wide">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {rev.role}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
