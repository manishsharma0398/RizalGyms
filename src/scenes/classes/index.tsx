import { ClassType, PagesProps, SelectedPage } from "@/models/types";
import { motion } from "framer-motion";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";
import HText from "@/components/HText";
import Class from "@/components/Class";

const ourClasses: ClassType[] = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image1,
  },
  {
    name: "Yoga Classes",
    image: Image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image4,
  },
  {
    name: "Fitness Classes",
    image: Image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image6,
  },
];

const OurClasses = ({ setSelectedPage }: PagesProps) => {
  return (
    <section
      id={SelectedPage.OurClasses}
      className="w-full  bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>our classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nihil totam repellat quaerat eum, aperiam nam odit dignissimos
              obcaecati exercitationem, provident inventore alias distinctio,
              atque harum excepturi illo molestias! Ratione?
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="whitespace-nowrap">
            {ourClasses.map((ourClass: ClassType, index: number) => (
              <Class
                key={index}
                image={ourClass.image}
                name={ourClass.name}
                description={ourClass.description}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
export default OurClasses;
