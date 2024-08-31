import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import React from "react";

const ProfielPage = () => {
  return (
    <div className="flex gap-6">
      <div className="hidden xl:block xl:w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%] xl:w-[30%]">
        <RightMenu userId="test" />
      </div>
    </div>
  );
};

export default ProfielPage;
