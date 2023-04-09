import { PagesProps } from "@/models/types";
import Logo from "@/assets/Logo.png";

const FooterPage = ({}: PagesProps) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere rem
            odio voluptate laudantium tempore aliquid ab, natus facilis
            inventore, quasi totam optio excepturi, eos repudiandae. Nesciunt
            ipsum harum laboriosam sed!
          </p>
          <p>© RizalGyms All Rights Reserved</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem ipsum dolor sit am</p>
          <p className="my-5">Lorem ipsum dolor sit amet,</p>
          <p>Lorem ipsum dolor sit amet,</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem ipsum dolor sit am</p>
          <p>+91 9876543210</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
