import { ClassType } from "@/models/types";

const Class = ({ image, name, description }: ClassType) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className="absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90">
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img src={image} alt={name} />
    </li>
  );
};

export default Class;
