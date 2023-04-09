import { useEffect, useState } from "react";
import { SelectedPage } from "./models/types";
import Navbar from "./scenes/navbar";
import HomePage from "./scenes/home";
import BenefitsPage from "./scenes/benefits";
import OurClasses from "./scenes/classes";
import ContactsPage from "./scenes/contact";
import FooterPage from "./scenes/footer";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <HomePage setSelectedPage={setSelectedPage} />
      <BenefitsPage setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactsPage setSelectedPage={setSelectedPage} />
      <FooterPage setSelectedPage={setSelectedPage} />
    </>
  );
};

export default App;
