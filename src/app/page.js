'use client';

export default function Home() {
  const steps = [
    {
      stage: "BEFORE ANYTHING GOES WRONG",
      items: [
        { num: 1, title: "Keep the invoice.", desc: "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date." },
        { num: 2, title: "Register the product.", desc: "Many brands ask you to register on their website or app; some add extra warranty when you do." },
        { num: 3, title: "Read the warranty card once.", desc: "Note how long it lasts, what it covers, and what it excludes." },
        { num: 4, title: "Record the condition.", desc: "Take a few dated photos of the product once it is installed or unboxed." }
      ]
    },
    {
      stage: "WHEN THE FAULT APPEARS",
      items: [
        { num: 5, title: "Record the fault.", desc: "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can." },
        { num: 6, title: "Raise the complaint in writing.", desc: "Use email, the brand's website or its app, not only a phone call, so there is a record." },
        { num: 7, note: "Note every reference number.", desc: "Write down the complaint or ticket number, the date and the name of anyone you speak to." }
      ]
    },
    {
      stage: "WHEN A TECHNICIAN VISITS",
      items: [
        { num: 8, title: "Ask for the job sheet.", desc: "Ask the technician for a copy of the visit report or job sheet before they leave." },
        { num: 9, title: "Ask what was tested.", desc: "Ask which test or instrument was used to reach the diagnosis." },
        { num: 10, title: "Take your own photos.", desc: "Photograph the product and anything the technician points to, during the visit." }
      ]
    },
    {
      stage: "IF THE CLAIM IS REFUSED",
      items: [
        { num: 11, title: "Ask for the reason in writing.", desc: "Request a written explanation that names the exact cause and the evidence for it." },
        { num: 12, title: "Ask for the technical report.", desc: "If the refusal rests on an inspection, ask for that inspection report." },
        { num: 13, title: "Escalate inside the company.", desc: "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number." },
        { num: 14, title: "Keep it factual.", desc: "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at." },
        { num: 15, title: "Know your consumer helpline.", desc: "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step." }
      ]
    }
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/content.txt';
    link.download = 'content.txt';
    link.click();
  };

  return (
    <div className="min-h-screen bg-white text-[#363C47]">
      {/* Top Ticker */}
      <div className="bg-[#EEFAF5] border-b border-[#B9E6D6] py-2 px-4 overflow-hidden whitespace-nowrap text-center">
        <span className="font-mono text-[10px] tracking-widest text-[#065F43] uppercase font-semibold">
          A WARRANTY CLAIM IS DECIDED ON RECORDS • KEEP YOURS, AND ASK FOR THEIRS IN WRITING • 15 STEPS IN THE CHECKLIST
        </span>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#E7EAEF] h-[72px]">
        <div className="max-w-[1180px] mx-auto h-full px-5 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#087A58] flex items-center justify-center text-white font-bold text-xs">
              CR
            </div>
            <div className="font-extrabold tracking-tight text-[#0D1117] text-lg sm:text-xl">
              CLAIM READY
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Hidden on small screens as requested in prompt #4 */}
            <nav className="hidden md:flex items-center gap-6 text-[15px] font-semibold text-[#5B6472]">
              <a href="#steps" className="hover:text-[#087A58] transition-colors">The 15 steps</a>
              <a href="#numbers" className="hover:text-[#087A58] transition-colors">Key numbers</a>
            </nav>

            <button 
              onClick={handleDownload}
              className="bg-[#0D1117] hover:bg-[#087A58] text-white text-[13.5px] font-medium px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
            >
              <span>Download</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 max-w-[1180px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#EEFAF5] border border-[#B9E6D6] px-3.5 py-1.5 rounded-full text-[#065F43] font-mono text-[10px] tracking-widest font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]"></span>
              OFFICIAL CHECKLIST • 15 STEPS
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0D1117] tracking-tight leading-[1.06]">
              CLAIM READY
            </h1>
            
            <p className="text-xl sm:text-2xl font-normal text-[#5B6472] leading-relaxed">
              A free checklist for anyone about to file a warranty claim.
            </p>

            <p className="text-[17px] text-[#363C47] leading-relaxed">
              Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a 
                href="#steps" 
                className="bg-[#087A58] hover:bg-[#066748] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Explore The Checklist</span>
                <span>→</span>
              </a>
              <button 
                onClick={handleDownload}
                className="bg-white border border-[#E7EAEF] hover:bg-[#F7F8FA] text-[#0D1117] font-semibold text-[15px] px-6 py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <span>Download (.txt)</span>
              </button>
            </div>
          </div>

          {/* Right Document Card */}
          <div className="lg:col-span-5 bg-[#EEFAF5] border border-[#B9E6D6] rounded-[18px] p-7 sm:p-8 space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-widest text-[#065F43] font-bold uppercase">
                THE IDEA IN ONE LINE
              </span>
              <span className="bg-white/80 border border-[#B9E6D6] text-[#087A58] font-mono text-[10px] px-2.5 py-0.5 rounded-full">
                CORE PRINCIPLE
              </span>
            </div>
            <blockquote className="text-xl font-bold text-[#065F43] leading-snug">
              “A warranty claim is decided on records. Keep yours, and ask for theirs in writing.”
            </blockquote>
            <div className="pt-4 border-t border-[#B9E6D6]/60 text-xs text-[#065F43]/80 space-y-1">
              <div>Rule #1: If it is not in writing, it did not happen.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Numbers Section */}
      <section id="numbers" className="py-14 bg-[#F7F8FA] border-y border-[#E7EAEF] px-5 sm:px-8">
        <div className="max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E7EAEF] p-8 rounded-[18px] shadow-sm">
              <div className="text-5xl font-extrabold text-[#087A58] tracking-tight">15</div>
              <div className="mt-3 text-[17px] font-medium text-[#0D1117]">steps in the checklist.</div>
            </div>

            <div className="bg-white border border-[#E7EAEF] p-8 rounded-[18px] shadow-sm">
              <div className="text-5xl font-extrabold text-[#0D1117] tracking-tight">4</div>
              <div className="mt-3 text-[17px] font-medium text-[#0D1117]">records to keep before anything goes wrong.</div>
            </div>

            <div className="bg-white border border-[#E7EAEF] p-8 rounded-[18px] shadow-sm">
              <div className="text-5xl font-extrabold text-[#087A58] tracking-tight">1</div>
              <div className="mt-3 text-[17px] font-medium text-[#0D1117]">rule: if it is not in writing, it did not happen.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 15 Steps Section */}
      <section id="steps" className="py-20 px-5 sm:px-8 max-w-[880px] mx-auto">
        <div className="text-center mb-16 space-y-3">
          <div className="inline-block bg-[#EEFAF5] border border-[#B9E6D6] px-3 py-1 rounded-full text-[#065F43] font-mono text-[10px] tracking-widest font-semibold uppercase">
            COMPLETE GUIDE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1117] tracking-tight">
            The 15 Steps
          </h2>
        </div>

        <div className="space-y-12">
          {steps.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold tracking-widest text-[#087A58] uppercase">
                  {group.stage}
                </span>
                <div className="flex-1 h-px bg-[#E7EAEF]"></div>
              </div>

              <div className="space-y-3">
                {group.items.map((item) => (
                  <div 
                    key={item.num}
                    className="bg-white border border-[#E7EAEF] hover:border-[#B9E6D6] transition-colors rounded-[14px] p-5 sm:p-6 flex items-start gap-4 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0D1117] text-lg">
                        {item.title || item.note}
                      </h3>
                      <p className="text-[#5B6472] mt-1 text-[16px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action & Footer */}
      <section className="bg-[#0D1117] text-white py-16 px-5 sm:px-8">
        <div className="max-w-[880px] mx-auto text-center space-y-6">
          <div className="inline-block bg-white/10 px-3.5 py-1.5 rounded-full text-[#34D399] font-mono text-[10px] tracking-widest font-semibold uppercase">
            NEXT STEPS
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            Download the checklist and keep it with your invoices.
          </div>
          <p className="text-[#34D399] text-lg font-medium">
            Share it with a friend who just bought something expensive.
          </p>
          <div className="pt-4">
            <button
              onClick={handleDownload}
              className="bg-[#087A58] hover:bg-[#066748] text-white font-semibold text-[15px] px-8 py-4 rounded-full transition-all inline-flex items-center gap-2"
            >
              <span>Download Full Checklist</span>
              <span>↓</span>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-12 px-5 sm:px-8 text-center text-sm text-[#5B6472]">
        <div className="max-w-[880px] mx-auto space-y-3">
          <p className="leading-relaxed">
            Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.
          </p>
          <div className="text-xs text-[#697382] pt-4 font-mono">
            CLAIM READY • EMERALD EDITORIAL SPEC
          </div>
        </div>
      </footer>
    </div>
  );
}
