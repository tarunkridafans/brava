"use client";

function Card({
  color = "black",
  image = "https://bravaland.com/cdn/shop/files/Future_Fest_Profile_Picture_2.png?v=1684398899",
  text = "future fest",
}) {
  return (
    <div
      style={{ background: color }}
      className={`flex min-w-fit rounded-tl-[50%] rounded-bl-[50%] rounded-tr-[10px] rounded-br-[10px] cursor-pointer`}
    >
      <div className="rounded-tl-[50%] rounded-bl-[50%]">
        <img
          className="w-[150px] rounded-tl-[50%] rounded-bl-[50%]"
          src={image}
        />
      </div>
      <div className="min-w-[200px] py-4 text-white flex flex-col justify-between items-end pr-4 rounded-tr-[10px] rounded-br-[10px] ">
        <span className="font-[700] text-[1.5rem]">{text}</span>
        <span className="underline">shop now</span>
      </div>
    </div>
  );
}

export default Card;
