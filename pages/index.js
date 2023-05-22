import Head from "next/head";
import Carousal from "../components/home/Carousal";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CoreTeam from "../components/home/CoreTeam";
import Donate from "../components/home/Donate";
import About from "../components/home/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>BEHOLDEN GIVERS GLOBAL FOUNDATION</title>
        <meta name ="title" content ="BEHOLDEN GIVERS GLOBAL FOUNDATION"/>
<meta name ="description" content ="Empowering Communities through Education, Development, and Welfare: Our Mission for a Better Tomorrow"/>
<meta name ="copyright" content ="BEHOLDEN GIVERS GLOBAL FOUNDATION"/>
<meta name ="keywords" content ="Development
Establishment
Promotion
Commerce
Art
Science
Sports
Education
Research
Social welfare
Religion
Charity
Cowshed
Health
Environment protection
Planting trees
Havana
Crime prevention
Child marriage
Dowry system
Female foeticide
Widow support
Educational improvement
Cultural advancement
Medical relief
Poor and downtrodden
Community welfare
Sustainable development
Village communities
Sovereignty
Food security
Ecological development
Social services
Educational institutes
Schools
Colleges"/>
<meta property ="og:type" content ="website"/>
<meta property ="og:url" content ="https://abc.com"/>
<meta property ="og:title" content ="BEHOLDEN GIVERS GLOBAL FOUNDATION"/>
<meta property ="og:description" content ="Empowering Communities through Education, Development, and Welfare: Our Mission for a Better Tomorrow"/>
<meta property ="og:image" content =""/>
<meta property ="twitter:card" content ="summary_large_image"/>
<meta property ="twitter:url" content ="https://abc.com"/>
<meta property ="twitter:title" content ="BEHOLDEN GIVERS GLOBAL FOUNDATION"/>
<meta property ="twitter:description" content ="Empowering Communities through Education, Development, and Welfare: Our Mission for a Better Tomorrow"/>
<meta property ="twitter:image" content =""/>

      </Head>

      <main className="bg-white">
        <Navbar />
        <Hero />
        <Carousal />
        <Stats />
        <Donate />
        <About />
      </main>

      <Footer />
    </>
  );
}
