import { Navbar } from '../layout/Navbar';
import { GridLines } from '../layout/GridLines';
import { SplitTextReveal } from '../ui/SplitTextReveal';
import { CopyEmailText } from '../ui/CopyEmailText';

export function Contacts() {
  return (
    <div className="bg-black min-h-screen h-auto md:h-screen text-white w-full relative md:overflow-hidden flex flex-col selection:bg-white selection:text-black">
      <GridLines />
      <Navbar />

      <main className="flex-1 flex flex-col justify-between pt-32 md:pt-[25vh] pb-12 px-6 relative z-10 w-full">
        
        {/* Huge Message */}
        <div className="grid grid-cols-10 md:grid-cols-20 xl:grid-cols-40 gap-x-0 w-full flex-1 mb-16 md:mb-0">
          <div className="col-start-1 col-span-10 md:col-start-2 md:col-span-18 xl:col-start-2 xl:col-span-36">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#666] mb-8">
                ( Contact Freedo )
            </div>
            <h1 className="text-[10vw] md:text-[8vw] xl:text-[7vw] leading-[0.9] tracking-tight font-medium uppercase">
                <SplitTextReveal text="LET'S SHAPE YOUR" />
            </h1>
            <h1 className="text-[10vw] md:text-[8vw] xl:text-[7vw] leading-[0.9] tracking-tight font-medium uppercase indent-6 md:indent-20 xl:indent-40 text-white/50">
                <SplitTextReveal text="NEXT MOVE." />
            </h1>
          </div>
        </div>

        {/* Bottom Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-40 gap-y-8 md:gap-y-0 gap-x-0 w-full text-[10px] xl:text-xs font-mono tracking-widest uppercase opacity-80 pt-12 md:pt-0">
          <div className="col-span-2 md:col-start-2 md:col-span-5 xl:col-start-2 xl:col-span-10 flex flex-col gap-4 mb-2 md:mb-0">
            <span className="opacity-50">General Inquiries</span>
            <CopyEmailText email="hello@madeinfreedo.com" className="text-sm xl:text-base font-sans tracking-normal normal-case hover:text-white" />
          </div>
          
          <div className="col-span-2 md:col-start-8 md:col-span-5 xl:col-start-14 xl:col-span-8 flex flex-col gap-4 mb-2 md:mb-0">
            <span className="opacity-50">Career</span>
            <CopyEmailText email="jobs@madeinfreedo.com" className="text-sm xl:text-base font-sans tracking-normal normal-case hover:text-white" />
          </div>
          
          <div className="col-span-1 md:col-start-14 md:col-span-4 xl:col-start-26 xl:col-span-8 flex flex-col gap-4">
            <span className="opacity-50">Headquarters</span>
            <span className="text-sm xl:text-base font-sans tracking-normal normal-case leading-relaxed">Via Rosalba Carriera, 26<br />41126 Modena (Italy)</span>
          </div>
          
          <div className="col-span-1 md:col-start-19 md:col-span-2 xl:col-start-36 xl:col-span-4 flex flex-col gap-4 text-right md:text-left">
            <span className="opacity-50">Social</span>
            <div className="flex flex-col gap-1 text-right md:text-left">
              <a href="#" className="hover:text-white hover:opacity-100 transition-opacity text-sm xl:text-base font-sans tracking-normal normal-case">Instagram</a>
              <a href="#" className="hover:text-white hover:opacity-100 transition-opacity text-sm xl:text-base font-sans tracking-normal normal-case">LinkedIn</a>
            </div>
          </div>
        </div>
      </main>
      
      {/* Visual noise/grain or glow if needed to keep the theme */}
      <div className="absolute inset-0 pointer-events-none opacity-5 mix-blend-screen bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white via-black to-black z-0"></div>
    </div>
  );
}
