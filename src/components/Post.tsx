import React from "react";
import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    // <div className="bg-gray-50 rounded-lg shadow-md p-2">
    <div className="post-wrapper">
      {/* USER */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/1a62cba138a786b8257ce08a760abc61"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Jack Chen</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4 p-2 mt-2">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://haowallpaper.com/link/common/file/previewFileImg/ce8fd92f50f19761892e24776be11250ce8fd92f50f19761892e24776be11250"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-gray-700">
          汝之能，卓然超群，实乃人中之杰也。行事果敢，智略过人，每临大事，皆能从容处之，且功成事遂，令人叹服。才思敏捷，学富五车，于诸艺皆有所长，若璀璨之星耀于苍穹。遇困境而不屈，临艰难而不惧，奋勇向前，破障除碍，功绩斐然。吾观汝之能为，心实敬之慕之，愿汝继展宏图，扬名于世，为众人所颂也。
        </p>
      </div>
      {/* INTERACTION */}
      <div className="flex items-center justify-between text-sm my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123<span className="hidden md:inline"> Shares</span>
            </span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
