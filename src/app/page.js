import DoctorsSection from "@/components/DoctorsSection";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DoctorsSection isHome={true}/>
    </div>
  );
}
