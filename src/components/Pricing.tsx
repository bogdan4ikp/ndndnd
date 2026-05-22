import React, { useState } from 'react';
import { Check, Flame, Sparkles, Star } from 'lucide-react';
import { Language, translations } from '../translations';

interface PricingProps {
  lang: Language;
  onSelectPlan: (planName: string) => void;
}

export default function Pricing({ lang, onSelectPlan }: PricingProps) {
  const t = translations[lang];
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: t.price_starter_name,
      desc: t.price_starter_desc,
      price: billingCycle === 'monthly' ? '$39' : '$29',
      features: t.price_starter_features,
      popular: false,
      accent: "border-slate-800 bg-[#0b0f19]/60 hover:border-slate-700",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200"
    },
    {
      name: t.price_pro_name,
      desc: t.price_pro_desc,
      price: billingCycle === 'monthly' ? '$99' : '$79',
      features: t.price_pro_features,
      popular: true,
      accent: "border-indigo-500/80 bg-indigo-950/20 hover:border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.15)]",
      buttonStyle: "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white shadow-lg hover:shadow-indigo-500/30 hover:opacity-95"
    },
    {
      name: t.price_corp_name,
      desc: t.price_corp_desc,
      price: billingCycle === 'monthly' ? '$299' : '$239',
      features: t.price_corp_features,
      popular: false,
      accent: "border-slate-800 bg-[#0b0f19]/60 hover:border-slate-700",
      buttonStyle: "bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#030712] via-[#080d19] to-[#030712]">
      
      {/* Soft backlighting colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headers block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-purple-950/80 border border-purple-500/30 text-xs font-bold tracking-widest text-purple-300 font-display mb-4">
            {t.pricing_subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            {t.pricing_title}
          </h2>
          
          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.pricing_billing_monthly}
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.pricing_billing_yearly}
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 z-10 ${plan.accent}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-indigo-500 text-slate-950 px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-widest flex items-center space-x-1 shadow-lg shadow-indigo-500/25">
                  <Flame className="w-3 h-3 fill-slate-950" />
                  <span>{t.pricing_popular}</span>
                </div>
              )}

              <div>
                {/* Plan Header details */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white font-display tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-1.5">
                    {plan.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-baseline">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400 ml-2 font-light">
                    /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                  </span>
                </div>

                {/* Divider Line */}
                <div className="h-px bg-slate-800/80 mb-8"></div>

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-3 text-sm text-slate-300">
                      <div className="bg-indigo-500/15 p-0.5 rounded-full border border-indigo-500/30 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="font-light leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 hover:-translate-y-0.5 font-display ${plan.buttonStyle}`}
              >
                {t.pricing_btn}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
