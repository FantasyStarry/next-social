import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://haowallpaper.com/link/common/file/getCroppingImg/7184cc313d47b0fa611801070a8f5daa"
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src="https://haowallpaper.com/link/common/file/previewFileImg/62c82b797636da270c4d22e2d2ed3d70"
          alt=""
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12 absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
        />
      </div>
      <div className="h-20 flex flex-col gap-2 items-center">
        <span className="font-semibold">Edward Gabriel May</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src="https://haowallpaper.com/link/common/file/previewFileImg/62c82b797636da270c4d22e2d2ed3d70"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
            <Image
              src="https://haowallpaper.com/link/common/file/previewFileImg/62c82b797636da270c4d22e2d2ed3d70"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
            <Image
              src="https://haowallpaper.com/link/common/file/previewFileImg/62c82b797636da270c4d22e2d2ed3d70"
              alt=""
              width={12}
              height={12}
              className="rounded-full object-cover w-3 h-3 "
            />
          </div>
          <span className="text-xs text-gray-500">5500 Followers</span>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-md">
          My Profile
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
