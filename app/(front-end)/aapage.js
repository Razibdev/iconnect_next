import HomeOne from "@/components/frontend/HomeOne";
import HomeTwo from "@/components/frontend/HomeTwo";
import NavBar from "@/components/frontend/NavBar";
import Services from "@/components/frontend/Services";

export default function Home() {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 min-h-screen font-inter sm:px-40">
      <NavBar />
      <HomeOne />
      <HomeTwo />
      <Services />
    </div>
  );
}
