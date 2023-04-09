import HText from "@/components/HText";
import { BenefitType, PagesProps, SelectedPage } from "@/models/types";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  HomeModernIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Benefit from "@/components/Benefit";
import ActionButton from "@/components/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: BenefitType[] = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the art facilities",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut. Maiores minima, aperiam laboriosam similique quasi ducimus quia assumenda eos?",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of diverse classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut. Maiores minima, aperiam laboriosam similique quasi ducimus quia assumenda eos?",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and pro trainers.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut. Maiores minima, aperiam laboriosam similique quasi ducimus quia assumenda eos?",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const BenefitsPage = ({ setSelectedPage }: PagesProps) => {
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:my-5 md:w-3/5"
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            quia, aperiam illo cumque esse incidunt porro dolor, ea qui quasi
            odit quaerat vel. Neque atque nemo unde laudantium laborum
            exercitationem!
          </p>
        </motion.div>

        {/* benefits section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              description={benefit.description}
              icon={benefit.icon}
              title={benefit.title}
              key={benefit.title}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />

          {/* description */}
          <div className="">
            {/* title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Millions of happy members getting{" "}
                    <span className="text-primary-500">fit</span>{" "}
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                sed voluptate facilis quibusdam ab numquam magni voluptas velit
                perspiciatis iure magnam odio facere fugiat suscipit
                accusantium, sint distinctio, laboriosam laborum, incidunt
                deleniti harum quae. Nam voluptate libero aliquam nulla fugiat!
              </p>

              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                rerum fugit exercitationem similique, ab maiores molestias?
                Ullam minima odit praesentium voluptas vel laboriosam, neque
                reiciendis natus laborum sint ipsa ex.
              </p>
            </motion.div>

            {/* ?buttons */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BenefitsPage;
