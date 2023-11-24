import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Card from "./Components/Card";
import { cards, bannerImages } from "./constants";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-[#E1C200] w-full flex flex-row justify-between py-3">
        <p className="mx-auto font-[550] text-[0.9rem]">
          VISIT US ON TIKTOK @BRAVALAND.COM
        </p>
      </div>
      <nav className="bg-[#212122] text-white text-[1rem] flex justify-between items-center w-full sticky top-[0px] z-[100] py-2">
        <ul className="ml-8 flex space-x-4 [&>*]:cursor-pointer">
          <li>brands</li>
          <li>shop</li>
          <li>premium</li>
          <li>gift cards</li>
        </ul>
        {/* <Image
          src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
          width="1920"
          height="1080"
        /> */}
        <img
          width="140px"
          src="https://bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853"
        />
        <ul className="mr-8 flex space-x-4 [&>*]:cursor-pointer">
          <li>become an affiliate</li>
          <li>
            {" "}
            <TwitterIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <PersonOutlineOutlinedIcon />
          </li>
          <li>
            <SearchOutlinedIcon />
          </li>
          <li>
            <LocalMallOutlinedIcon />
          </li>
        </ul>
      </nav>
      <banner className="w-full">
        {bannerImages.map((img) => {
          let style = {};
          style[img.position] = "150px";
          return (
            <div className="w-[100vw] relative">
              <img className="w-full contrast-img" src={img.img} />
              <div
                style={style}
                className="absolute right-[20px] bottom-[50%] transform translate-y-1/2 "
              >
                {img.text.split(" ").map((word) => {
                  return (
                    <p className="whitespace-pre-line font-[700] text-white  text-[4rem] ">
                      {word}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </banner>
      <div className="my-8 bg-[white] w-full flex space-x-4 overflow-x-scroll ">
        {cards.map((card) => (
          <Card color={card.color} image={card.image} text={card.text} />
        ))}
      </div>
    </main>
  );
}
