import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BUTTON */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">张三</span>
          <span className="text-sm">@jonathan</span>
        </div>
        <p>
          汝之能，卓然超群，实乃人中之杰也。行事果敢，智略过人，每临大事，皆能从容处之，且功成事遂，令人叹服。才思敏捷，学富五车，于诸艺皆有所长，若璀璨之星耀于苍穹。遇困境而不屈，临艰难而不惧，奋勇向前，破障除碍，功绩斐然。吾观汝之能为，心实敬之慕之，愿汝继展宏图，扬名于世，为众人所颂也。
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Living in <b>Denver</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to <b>Edgar High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/wrok.png" alt="" width={16} height={16} />
          <span>
            Works at <b>apple Inc.</b>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="https://lama.dev" className="text-blue-500 font-medium">
              lama.dev
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined November 2024</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
