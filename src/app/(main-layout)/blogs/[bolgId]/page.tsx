import Image from "next/image";
import image from "../../../../../public/projects/brand.png";
import { BiCalendar } from "react-icons/bi";
const BlogDetailslPage = () => {
  return (
    <div className="py-10 px-3 xs:px-5 md:px-10 xl:px-0">
      <div className="max-w-screen-lg mx-auto p-5 md:p-10 bg-[#f7fbfe] dark:bg-[#101624] shadow-sm min-h-screen rounded-lg ">
        <div>
          <Image src={image} width={800} height={500} alt="Image" className="w-full rounded-lg" />
        </div>
        <div>
          <p className="flex items-center font-semibold text-sm mt-5 text-primary">
            <BiCalendar className="mr-2" />
            {"27 - 2 - 2034"}
          </p>
          <h1 className="text-light-primary-txt dark:text-dark-primary-txt text-xl sm:text-2xl md:text-3xl font-semibold mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
        </div>
        <div>
          <p className="text-light-secondary-txt dark:text-dark-secondary-txt mt-5 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi veritatis molestias, quod minima exercitationem officiis
            debitis odit atque animi ratione, quam earum totam voluptate rerum sapiente officia dolores! Fugit fugiat doloremque atque nemo error quis
            tenetur esse quia! Consectetur tempore cumque fugit, consequuntur a, molestiae beatae commodi distinctio dolorum laudantium ullam repellat
            accusantium nam unde dolor aperiam! Suscipit quam tenetur velit repellendus quidem veniam iure architecto fugiat molestias dolore odit,
            veritatis, dicta, quaerat alias! Tenetur quas error quis veritatis dignissimos eius odit, repudiandae velit dolorem, sunt quaerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailslPage;
