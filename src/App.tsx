/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

export default function App() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-[10px] md:p-10.5">
      <MavroShell>
        <MavroHeader />
        <MavroHero />
        <MavroSupportGrid />
      </MavroShell>
    </div>
  );
}

const MavroShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="
      relative overflow-hidden w-[calc(100vw-20px)] mx-auto
      bg-shell-bg text-black
      rounded-[24px] px-[18px] py-[22px] pb-[32px] mt-[10px] mb-[10px]
      md:w-[calc(100vw-40px)] md:rounded-[30px] md:px-[34px] md:py-[36px] md:pb-[44px] md:my-[20px]
      lg:rounded-[34px] lg:px-[64px] lg:pt-[44px] lg:pb-[52px]
      lg:w-[min(92vw,1320px)] lg:min-h-[820px] lg:my-[42px]
      shadow-[0_28px_90px_rgba(0,0,0,0.10)]
    ">
      {children}
    </div>
  );
};

const MavroHeader = () => {
  return (
    <header className="flex items-center justify-between w-full h-[64px] relative z-20">
      <div className="flex items-center gap-[12px] lg:gap-[44px] min-w-[160px]">
        <BrandLockup />
        <MainNav />
      </div>
      <HeaderActions />
    </header>
  );
};

const BrandLockup = () => (
  <div className="flex items-center gap-[12px] min-w-[160px]">
    <div className="w-[38px] h-[38px] rounded-full bg-[#050505] flex items-center justify-center">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-[21px] font-[800] text-[#050505] tracking-tight">Mavro</span>
  </div>
);

const MainNav = () => (
  <nav className="hidden lg:flex items-center gap-[42px]">
    {['Events', 'Speakers', 'Partners', 'About Us'].map((item) => (
      <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item} className="text-[15px] font-[650] text-[#121212] opacity-90 hover:opacity-55 transition-opacity duration-180 tracking-[-0.015em]">
        {item}
      </a>
    ))}
  </nav>
);

const HeaderActions = () => (
  <div className="flex items-center gap-[28px]">
    <div className="hidden lg:flex items-center gap-[7px] cursor-pointer group">
      <span className="text-[15px] font-[700] text-[#111111] group-hover:opacity-75 transition-opacity">Help</span>
      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5L4.5 4.5L8 1.5" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <div className="hidden lg:flex">
      <button className="h-[52px] px-[30px] border-[1.6px] border-[#050505] rounded-full bg-transparent text-[15px] font-[800] text-[#050505] transition-all duration-220 hover:bg-[#050505] hover:text-white hover:-translate-y-[1px] cursor-pointer">
        Contact Us
      </button>
    </div>
    <button className="lg:hidden w-[48px] h-[42px] border-[1.5px] border-[#050505] rounded-full bg-transparent flex flex-col items-center justify-center gap-[5px] cursor-pointer hover:bg-[#050505] hover:text-white transition-colors group">
      <div className="w-[18px] h-[2px] bg-[#050505] rounded-full group-hover:bg-white transition-colors"></div>
      <div className="w-[18px] h-[2px] bg-[#050505] rounded-full group-hover:bg-white transition-colors"></div>
    </button>
  </div>
);

const MavroHero = () => {
  return (
    <section className="
      flex flex-col mt-[44px] gap-[42px] relative z-5
      md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-[34px] md:mt-[54px]
      lg:grid-cols-[0.92fr_1.08fr] lg:gap-[58px] lg:mt-[74px] lg:items-center
    ">
      <HeroCopyPanel />
      <HeroVisualSystem />
    </section>
  );
};

const HeroCopyPanel = () => {
  return (
    <div className="relative z-10 lg:pt-[20px]">
      <HeroHeadline />
      <HeroAccessRow />
    </div>
  );
};

const HeroHeadline = () => (
  <h1 className="m-0 text-black max-w-full lg:max-w-[570px] uppercase font-sans tracking-[-0.055em] flex flex-col gap-1 leading-[0.98] lg:leading-[0.96]">
    <span className="block font-[400] text-[clamp(43px,13vw,56px)] md:text-[clamp(54px,7vw,68px)] lg:text-[clamp(64px,5.6vw,82px)]">We make</span>
    <span className="block font-[850] text-[clamp(43px,13vw,56px)] md:text-[clamp(54px,7vw,68px)] lg:text-[clamp(64px,5.6vw,82px)]">progress on</span>
    <span className="block font-[850] text-[clamp(43px,13vw,56px)] md:text-[clamp(54px,7vw,68px)] lg:text-[clamp(64px,5.6vw,82px)]">crypto way</span>
  </h1>
);

const HeroAccessRow = () => (
  <div className="flex items-center gap-[20px] md:gap-[30px] lg:gap-[36px] flex-wrap mt-[32px] lg:mt-[42px]">
    <AccessButton />
    <MonthlyPriceTag />
  </div>
);

const AccessButton = () => (
  <button className="
    h-[62px] min-w-[194px] px-[42px] rounded-full
    bg-orange text-white border-[2px] border-[#AE3408]
    text-[15px] font-[850] tracking-[-0.01em]
    shadow-[inset_0_-2px_0_rgba(0,0,0,0.15),_0_10px_20px_rgba(255,90,20,0.18)]
    cursor-pointer transition-all duration-220
    hover:bg-orange-hover hover:-translate-y-[2px] hover:shadow-[inset_0_-2px_0_rgba(0,0,0,0.16),_0_14px_26px_rgba(255,90,20,0.25)]
  ">
    Get Access
  </button>
);

const MonthlyPriceTag = () => (
  <div className="flex items-center gap-[18px]">
    <div className="text-[34px] font-[850] tracking-[-0.04em] text-black">
      $16.80
    </div>
    <div className="w-[1px] h-[34px] bg-[rgba(5,5,5,0.18)]"></div>
    <div className="text-[13px] font-[650] leading-[1.05] text-[#4F4F4F] uppercase">
      Monthly<br/>Price
    </div>
  </div>
);

const HeroVisualSystem = () => {
  return (
    <div className="
      relative w-full h-[520px]
      md:h-[470px] md:min-w-[430px]
      lg:h-[500px] lg:min-w-[520px]
    ">
      <SignalPriceCard />
      <PerfectTimeLabel />
      <DottedSignalRail />
      <RailButterflyNode />
      <RailDotNode />
      <PersonFrameCard />
      <MarketRhythmCard />
      <TrustScorePill />
      <CatchLabelRibbon />
      <AnchorPulseNode />
      <RightControlRail />
      <FilterBarsMark />
    </div>
  );
};

const SignalPriceCard = () => (
  <div className="
    absolute bg-white border-[1.7px] border-black rounded-[19px] z-8
    shadow-[0_14px_28px_rgba(0,0,0,0.08)] flex flex-col items-center
    w-[86px] h-[98px] top-[8px] left-[6%]
    md:w-[94px] md:h-[106px] md:top-[12px] md:left-[50px]
    lg:w-[102px] lg:h-[114px] lg:top-[6px] lg:left-[88px]
  ">
    <div className="
      w-[28px] h-[28px] md:w-[32px] md:h-[32px] lg:w-[34px] lg:h-[34px]
      rounded-full bg-orange border-[1.5px] border-[rgba(5,5,5,0.35)]
      mt-[14px] lg:mt-[18px] flex items-center justify-center
    ">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L18 18H6L12 4Z" fill="white" />
      </svg>
    </div>
    <div className="
      font-[850] tracking-[0.03em] text-black text-center
      text-[12px] mt-[12px]
      md:text-[13px] md:mt-[14px]
      lg:text-[14px] lg:mt-[17px]
    ">
      $ 1,640+
    </div>
    <div className="
      absolute bottom-[-11px] left-1/2 -translate-x-1/2
      w-[18px] h-[12px] bg-black
    " style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}></div>
  </div>
);

const PerfectTimeLabel = () => (
  <div className="
    absolute z-6 text-black uppercase font-[900] tracking-[-0.035em] leading-[0.98]
    text-[18px] top-[88px] left-[32%]
    md:text-[20px] md:top-[44px] md:left-[170px]
    lg:text-[22px] lg:top-[34px] lg:left-[218px]
    max-w-[100px]
  ">
    IT'S<br/>PERFECT<br/>TIME
  </div>
);

const DottedSignalRail = () => (
  <div className="
    absolute z-2 rail-pattern w-[3px] rounded-full
    top-[106px] left-[14%] h-[245px] opacity-70
    md:top-[120px] md:left-[95px] md:h-[260px] md:opacity-100
    lg:top-[122px] lg:left-[138px] lg:h-[278px] lg:opacity-100
  "></div>
);

const RailButterflyNode = () => (
  <div className="
    absolute z-4 flex
    w-[24px] h-[16px]
    top-[250px] left-[calc(14%-11px)]
    md:top-[260px] md:left-[84px]
    lg:top-[265px] lg:left-[127px]
  ">
    <div className="w-1/2 h-full bg-black block" style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
    <div className="w-1/2 h-full bg-black block" style={{ clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}></div>
  </div>
);

const RailDotNode = () => (
  <div className="
    absolute z-5 rounded-full bg-black border-[3px] border-shell-bg
    w-[12px] h-[12px]
    top-[362px] left-[calc(14%-5px)]
    md:top-[380px] md:left-[90px]
    lg:top-[406px] lg:left-[133px]
  "></div>
);

const PersonFrameCard = () => (
  <div className="
    absolute z-5 border-[1.7px] border-black bg-[#E8E1D3] overflow-hidden shadow-card
    w-[min(82vw,350px)] h-[350px] top-[145px] left-1/2 -translate-x-1/2 rounded-[26px]
    md:w-[320px] md:h-[335px] md:top-[150px] md:left-[160px] md:translate-x-0 md:rounded-[28px]
    lg:w-[360px] lg:h-[348px] lg:top-[150px] lg:left-[260px] lg:translate-x-0 lg:rounded-[28px]
  ">
    <div className="absolute top-0 left-0 w-full h-[73%] bg-[#E8E1D3]"></div>
    <div className="absolute top-0 left-0 w-full h-full z-2">
      <img
        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
        alt="Professional portrait"
        className="w-full h-full object-contain object-bottom"
        style={{
           maskImage: 'linear-gradient(to bottom, white 73%, transparent 95%)',
           WebkitMaskImage: 'linear-gradient(to bottom, white 73%, transparent 95%)'
        }}
      />
    </div>
    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black"></div>
  </div>
);

const MarketRhythmCard = () => {
  const bars = [
    { height: 20, type: 'main' },
    { height: 34, type: 'second' },
    { height: 58, type: 'main' },
    { height: 72, type: 'main' },
    { height: 92, type: 'second' },
    { height: 68, type: 'main' },
    { height: 44, type: 'second' },
  ];

  return (
    <div className="
      absolute z-9 bg-black shadow-[0_18px_44px_rgba(0,0,0,0.18)]
      flex items-end justify-center pb-[16px]
      w-[112px] h-[106px] top-[30px] right-[5%] rounded-[23px] gap-[6px]
      md:w-[130px] md:h-[120px] md:top-[24px] md:right-[0px] md:rounded-[25px] md:gap-[7px] md:pb-[18px]
      lg:w-[140px] lg:h-[132px] lg:top-[24px] lg:right-[0px] lg:rounded-[25px] lg:gap-[9px] lg:pb-[20px]
    ">
      {bars.map((bar, i) => (
        <div key={i} className="w-[4px] lg:w-[5px] rounded-full"
          style={{
            height: `${bar.height * 0.8}px`,
            backgroundColor: bar.type === 'main' ? 'rgba(255,255,255,0.78)' : 'rgba(255,255,255,0.22)'
          }}
        ></div>
      ))}
    </div>
  );
};

const TrustScorePill = () => (
  <div className="
    absolute z-10 flex items-center bg-white border-[1.6px] border-black rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.08)]
    h-[40px] px-[12px] gap-[6px] top-[126px] right-[4%]
    md:h-[44px] md:px-[15px] md:gap-[8px] md:top-[144px] md:right-[20px]
    lg:h-[44px] lg:px-[15px] lg:gap-[8px] lg:top-[144px] lg:right-[28px]
    min-w-[70px] lg:min-w-[78px]
  ">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
    <span className="font-[900] text-[14px] text-black tracking-tight">5+</span>
  </div>
);

const CatchLabelRibbon = () => (
  <div className="
    absolute z-12 bg-[#F5F28A] border-[1.8px] border-black rounded-[18px] shadow-[0_13px_24px_rgba(0,0,0,0.12)]
    flex items-center justify-center font-[950] text-black uppercase tracking-[-0.025em]
    w-[min(76vw,310px)] h-[66px] top-[398px] left-1/2 -translate-x-1/2 rotate-[-6deg] text-[15px]
    md:w-[320px] md:h-[70px] md:top-[380px] md:left-[165px] md:translate-x-0 md:rotate-[-7deg] md:text-[17px]
    lg:w-[340px] lg:h-[74px] lg:top-[372px] lg:left-[266px] lg:translate-x-0 lg:rotate-[-7deg] lg:text-[18px]
  ">
    DID YOU CATCH THAT?
  </div>
);

const AnchorPulseNode = () => (
  <div className="
    absolute z-13 bg-white border-[2px] border-black rounded-full flex items-center justify-center
    w-[36px] h-[36px] top-[408px] left-[calc(50%-160px)]
    md:w-[40px] md:h-[40px] md:top-[394px] md:left-[147px]
    lg:w-[40px] lg:h-[40px] lg:top-[386px] lg:left-[248px]
  ">
    <div className="w-[9px] h-[9px] bg-black rounded-full"></div>
  </div>
);

const RightControlRail = () => (
  <div className="
    hidden lg:block absolute z-2 rail-pattern w-[3px] h-[94px] opacity-85
    top-[250px] right-[70px]
  "></div>
);

const FilterBarsMark = () => (
  <div className="
    hidden sm:inline-flex absolute z-5 flex items-center justify-between
    w-[28px] h-[28px] top-[246px] right-[24px]
    md:w-[30px] md:h-[30px] md:top-[286px] md:right-[40px]
    lg:w-[34px] lg:h-[34px] lg:top-[346px] lg:right-[56px]
  ">
    <div className="relative w-[3px] h-[26px] bg-black rounded-full">
      <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[9px] h-[5px] bg-black rounded-full border-[1.5px] border-shell-bg"></div>
    </div>
    <div className="relative w-[3px] h-[26px] bg-black rounded-full">
      <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-[9px] h-[5px] bg-black rounded-full border-[1.5px] border-shell-bg"></div>
    </div>
    <div className="relative w-[3px] h-[26px] bg-black rounded-full">
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[9px] h-[5px] bg-black rounded-full border-[1.5px] border-shell-bg"></div>
    </div>
  </div>
);

const MavroSupportGrid = () => {
  return (
    <section className="
      flex flex-col gap-[42px] mt-[48px] relative z-8
      md:grid md:grid-cols-[0.9fr_1.1fr] md:gap-[44px] md:mt-[56px] md:items-start
      lg:grid-cols-[0.9fr_1.1fr] lg:gap-[72px] lg:mt-[76px]
    ">
      <InsightPreviewCluster />
      <SupportContentPanel />
    </section>
  );
};

const InsightPreviewCluster = () => (
  <div className="flex items-center gap-[16px] pl-0">
    <NftMarkerStack />
    <OverviewMediaCard />
  </div>
);

const NftMarkerStack = () => (
  <div className="flex flex-col items-center w-[64px] h-[130px]">
    <div className="
      w-[58px] h-[74px] bg-white border-[1.6px] border-black rounded-[15px]
      flex items-center justify-center
      text-[13px] font-[850] text-black
    ">
      NFT
    </div>
    <div className="w-[2px] h-[28px] bg-black mt-0"></div>
    <div className="w-[28px] h-[28px] rounded-full bg-white border-[2px] border-black flex items-center justify-center">
      <div className="w-[8px] h-[8px] bg-black rounded-full"></div>
    </div>
  </div>
);

const OverviewMediaCard = () => (
  <div className="
    flex-1 h-[140px] md:h-[160px] lg:h-[180px] bg-off-black rounded-[22px] overflow-hidden
    relative flex items-center justify-center border border-[rgba(0,0,0,0.05)]
    shadow-soft
  ">
    <div className="absolute top-0 left-0 w-full h-full opacity-60">
       <img src="https://images.unsplash.com/photo-1641580521556-ea1fb44b20ec?q=80&w=800&auto=format&fit=crop" alt="Graph" className="w-full h-full object-cover" />
    </div>
    <button className="
      relative z-10 w-[54px] h-[54px] rounded-full bg-white text-black
      flex items-center justify-center transition-transform hover:scale-110 cursor-pointer
      shadow-[0_8px_20px_rgba(0,0,0,0.2)]
    ">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
      </svg>
    </button>
  </div>
);

const SupportContentPanel = () => (
  <div className="flex flex-col gap-[24px]">
    <h3 className="m-0 text-[24px] lg:text-[32px] font-[850] leading-[1.1] text-black tracking-[-0.03em] max-w-[400px]">
      Unlock absolute clarity in volatile markets.
    </h3>
    <p className="m-0 text-[15px] lg:text-[17px] text-muted font-[500] leading-[1.6] max-w-[440px]">
      Join an elite circle of traders leveraging real-time data, insider panels, and algorithmic edge to capture upside safely. We turn noise into conviction.
    </p>
    <div className="flex items-center gap-[24px] mt-[12px] pt-[24px] border-t border-border-soft">
      <div className="flex flex-col">
        <span className="text-[28px] font-[900] text-black tracking-[-0.04em]">2.4x</span>
        <span className="text-[13px] font-[600] text-muted uppercase tracking-[0.02em] mt-1">Average Edge</span>
      </div>
      <div className="w-[1px] h-[40px] bg-border-soft"></div>
      <div className="flex flex-col">
        <span className="text-[28px] font-[900] text-black tracking-[-0.04em]">80k+</span>
        <span className="text-[13px] font-[600] text-muted uppercase tracking-[0.02em] mt-1">Community</span>
      </div>
      <div className="w-[1px] h-[40px] bg-border-soft"></div>
      <div className="flex flex-col">
        <span className="text-[28px] font-[900] text-black tracking-[-0.04em]">24/7</span>
        <span className="text-[13px] font-[600] text-muted uppercase tracking-[0.02em] mt-1">Live Desks</span>
      </div>
    </div>
  </div>
);
