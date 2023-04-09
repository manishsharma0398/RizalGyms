import { SelectedPage } from "@/models/types";
import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
