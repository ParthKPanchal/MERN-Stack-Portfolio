import { useEffect } from "react";
import axios from "axios";

import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certificates from "../components/Certificates";

function Home() {
   useEffect(() => {
    const trackVisitor = async () => {
      try {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/visitors`
        );
      } catch (error) {
        console.log(error);
      }
    };

    trackVisitor();
  }, []);
   return (
    <MainLayout>
      <Hero />
      <Skills/>
      <Experience/>
      <Education/>
      <Certificates/>
    </MainLayout>
  );
}
export default Home;
