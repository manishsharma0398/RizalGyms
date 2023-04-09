export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export type PagesProps = {
  setSelectedPage: (val: SelectedPage) => void;
};

export interface ISelectedPageProps extends PagesProps {
  selectedPage: SelectedPage;
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
