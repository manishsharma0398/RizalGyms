import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/components/ActionButton";
import { ISelectedPageProps } from "@/models/types";

interface MenuItemsProps extends ISelectedPageProps {
  className: string;
}

const MenuItems = ({
  selectedPage,
  setSelectedPage,
  className,
}: MenuItemsProps) => {
  return (
    <div className={className}>
      <Link
        page="Home"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Benefits"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Our Classes"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Link
        page="Contact Us"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

interface Props extends ISelectedPageProps {
  setIsMenuToggled: (val: boolean) => void;
}

const MobileNavbar = ({
  setIsMenuToggled,
  selectedPage,
  setSelectedPage,
}: Props) => {
  return (
    <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
      {/* close icon */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(false)}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>

      <MenuItems
        className="ml-[33%] flex flex-col gap-10 text-2xl"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

interface NavbarProps extends ISelectedPageProps {
  isTopOfPage: boolean;
}

const Navbar = ({
  selectedPage,
  setSelectedPage,
  isTopOfPage,
}: NavbarProps) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <>
      <nav
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src={Logo} alt="logo" />

            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* menu items */}
                <MenuItems
                  className={`${flexBetween} gap-8 text-sm`}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <div className={`${flexBetween} gap-8 `}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </nav>
      {!isAboveMediumScreens && isMenuToggled && (
        <MobileNavbar
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setIsMenuToggled={setIsMenuToggled}
        />
      )}
    </>
  );
};

export default Navbar;
