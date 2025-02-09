import Heading from "../Heading";
import inventohub from "../../assets/projects/Inventohub.png";
import library from "../../assets/projects/library.png";
import brand from "../../assets/projects/brand.png";
import Button from "../Button";
const Projects = () => {
  return (
    <div className="bg-[#1D1730]" id="projects">
      <div className="max-w-screen-lg mx-auto">
        <div className="py-20">
          <Heading>Projects</Heading>
        </div>
        <div className="pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7  bg-[#2B2344] shadow-xl rounded-md">
            <figure>
              <img src={inventohub} alt="Album" className=" p-5 brightness-50 hover:brightness-100 rounded-md h-full" />
            </figure>
            <div className="p-5">
              <h2 className="text-xl font-semibold  text-[#cee1e1]">Featured Project</h2>
              <h2 className="text-3xl font-bold text-[#00EEFF]">
                InventoHub<span className="font-medium text-2xl">-An Inventory Management System</span>
              </h2>
              <p className="text-[#cee1e1] font-semibold">
                Technology that I have used in this project are html, tailwind css, javascript, react, express js, mongodb, firebase
              </p>
              <div className="flex items-center justify-evenly mt-5">
                <Button>
                  <a href="https://github.com/Arnab-Gupta11/InventoHub-client" target="_blank" rel="noopener noreferrer">
                    Client
                  </a>
                </Button>
                <Button>
                  <a href="https://github.com/Arnab-Gupta11/InventoHub-server" target="_blank" rel="noopener noreferrer">
                    Server
                  </a>
                </Button>
                <Button>
                  <a href="https://inventory-management-sys-67be7.web.app/" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7  bg-[#2B2344] shadow-xl rounded-md">
            <figure>
              <img src={library} alt="Album" className=" p-5 brightness-50 hover:brightness-100 rounded-md h-full" />
            </figure>
            <div className="p-5">
              <h2 className="text-xl font-semibold  text-[#cee1e1]">Featured Project</h2>
              <h2 className="text-3xl font-bold text-[#00EEFF]">
                eLibra<span className="font-medium text-2xl">-A Library Management System</span>
              </h2>
              <p className="text-[#cee1e1] font-semibold">
                Technology that I have used in this project are html, tailwind css, javascript, react, express js, mongodb, firebase
              </p>
              <div className="flex items-center justify-evenly mt-5">
                <Button>
                  <a href="https://github.com/Arnab-Gupta11/eLibra-client" target="_blank" rel="noopener noreferrer">
                    Client
                  </a>
                </Button>
                <Button>
                  <a href="https://github.com/Arnab-Gupta11/eLibra-server" target="_blank" rel="noopener noreferrer">
                    Server
                  </a>
                </Button>
                <Button>
                  <a href="http://guttural-respect.surge.sh/" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7  bg-[#2B2344] shadow-xl rounded-md">
            <figure>
              <img src={brand} alt="Album" className=" p-5 brightness-50 hover:brightness-100 rounded-md h-full" />
            </figure>
            <div className="p-5">
              <h2 className="text-xl font-semibold  text-[#cee1e1]">Featured Project</h2>
              <h2 className="text-3xl font-bold text-[#00EEFF]">
                AutoWheelsToday<span className="font-medium text-2xl">-A Car Brand Shop</span>
              </h2>
              <p className="text-[#cee1e1] font-semibold">
                Technology that I have used in this project are html, tailwind css, javascript, react, express js, mongodb, firebase
              </p>
              <div className="flex items-center justify-evenly mt-5">
                <Button>
                  <a href="https://github.com/Arnab-Gupta11/AutoWheelsToday-client" target="_blank" rel="noopener noreferrer">
                    Client
                  </a>
                </Button>
                <Button>
                  <a href="https://github.com/Arnab-Gupta11/AutoWheelsToday-server" target="_blank" rel="noopener noreferrer">
                    Server
                  </a>
                </Button>
                <Button>
                  <a href="https://brand-shop-a541e.web.app/" target="_blank" rel="noopener noreferrer">
                    Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
