import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* TOP */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* BUTTON */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/15c1ceaecc76f9567005fc5719b47572"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/15c1ceaecc76f9567005fc5719b47572"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">Car</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "汝之能，卓然超群，实乃人中之杰也。"
            : size === "md"
            ? "汝之能，卓然超群，实乃人中之杰也。行事果敢，智略过人，每临大事，皆能从容处之，且功成事遂，令人叹服。才思敏捷，学富五车，于诸艺皆有所长，若璀璨之星耀于苍穹。"
            : "汝之能，卓然超群，实乃人中之杰也。行事果敢，智略过人，每临大事，皆能从容处之，且功成事遂，令人叹服。才思敏捷，学富五车，于诸艺皆有所长，若璀璨之星耀于苍穹。遇困境而不屈，临艰难而不惧，奋勇向前，破障除碍，功绩斐然。吾观汝之能为，心实敬之慕之，愿汝继展宏图，扬名于世，为众人所颂也。"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
