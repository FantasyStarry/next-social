import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* BUTTOM */}
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/9899ff6be6c80b55c1704863a327cace"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
