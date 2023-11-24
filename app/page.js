import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Card from "./Components/Card";
import { cards } from "./constants";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-[#E1C200] w-full flex flex-row justify-between py-3">
        <p className="mx-auto font-[550] text-[0.9rem]">
          VISIT US ON TIKTOK @BRAVALAND.COM
        </p>
      </div>
      <nav className="bg-[#212122] text-white text-[1rem] flex justify-between items-center w-full sticky top-[0px] py-2">
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
      <banner></banner>
      <div className="my-8 bg-[white] w-full flex space-x-4 overflow-x-scroll ">
        {cards.map((card) => (
          <Card color={card.color} image={card.image} text={card.text} />
        ))}
      </div>
    </main>
  );
}
