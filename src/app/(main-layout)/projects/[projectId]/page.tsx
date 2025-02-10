import Image from "next/image";
import React from "react";
import image from "../../../../../public/projects/brand.png";
import { Button } from "@/components/ui/button";
const ProjectDetails = () => {
  return (
    <div className="pb-28">
      <div className="max-w-screen-xl mx-auto px-3 xs:px-5 md:px-10 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
          <div className="bg-[#F7F7F7] rounded-t-lg h-[450px] flex justify-center rounded-lg">
            <Image src={image} width={500} height={500} alt={"img"} className="h-full w-full rounded-lg" />
          </div>
          <div>
            {/* <div>
                {inStock ? (
                  <span className="bg-[#e8fbe6] text-green-900 px-2 py-0.5 text-sm font-semibold rounded-md">In Stock</span>
                ) : (
                  <span className="bg-[#FBE6EC] text-primary-bg px-2 py-0.5 text-sm font-semibold rounded-md">Out of Stock</span>
                )}
              </div> */}
            <h1 className="text-3xl font-bold text-light-primary-txt dark:text-dark-primary-txt">Lorem ipsum dolor sit amet.</h1>
            <p className="mt-5 text-light-secondary-txt dark:text-dark-secondary-txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolorum labore placeat impedit quod sapiente, iste sed quidem maxime.
              Perferendis adipisci eveniet assumenda tenetur, amet minus similique! Odit officiis deserunt, possimus hic facilis iste sit aut. Saepe
              porro recusandae hic quisquam debitis ullam labore, doloribus sapiente tempora non eos deleniti maiores asperiores officiis, dolore
              eaque dolorum dolor alias harum enim? Ducimus facere obcaecati minima maiores consequatur, quas nulla non voluptatem ullam unde sapiente
              hic similique. Rerum quas minima omnis nobis dolorem eligendi vitae facilis quos maxime modi ratione et rem eveniet, in corrupti sit,
              ducimus non totam dignissimos quibusdam optio perferendis? Enim fugiat quia accusamus qui perferendis ab provident quisquam rem, eius
              officiis voluptas, ipsum alias, illo unde ea sit rerum. Est fuga eligendi natus ipsum asperiores iste veniam magni accusamus cumque
              laboriosam omnis, consequatur minus excepturi, labore dolore nisi corporis officia nesciunt ex a, perferendis quaerat fugiat. Deserunt
              mollitia vitae consequatur dolorem sapiente magni nihil, omnis reprehenderit tenetur necessitatibus incidunt sint at recusandae fuga hic
              provident expedita ducimus iusto aliquid amet ratione? Architecto pariatur voluptas vel minima facilis natus, quas consequuntur tempora
              vero beatae. Dolores explicabo architecto, et necessitatibus natus odit incidunt libero reprehenderit! Consequatur optio libero tenetur
              molestiae.
            </p>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-2">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Categorie:</span> Javascript
            </h4>
            <h4 className="text-light-secondary-txt dark:text-dark-secondary-txt mt-1">
              <span className="font-semibold text-light-primary-txt dark:text-dark-primary-txt">Brand:</span> fasdf,sfaf,afdsf,adafsf,asdfasf
            </h4>
            <div className="border-t-2 dark:border-[#232935] border-slate-200 mt-5" />
            <div className="mt-5 flex flex-col xsm:flex-row items-center gap-4">
              <div className="flex items-center gap-4 w-full">
                <Button className="flex xsm-mx:w-full items-center justify-center gap-3 py-7 rounded-lg select-none">
                  {/* <MdOutlineShoppingCart /> */}
                  <span>Add To Cart</span>
                </Button>
                {/* <Button className="py-7 rounded-lg group  bg-none border-[#e5e5e5] border-[2px] hover:bg-none hover:border-primary-bg duration-700 ">
                  <Heart size={234} className="text-[#d1c6c6] font-bold text-2xl group-hover:text-primary-bg duration-700" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
