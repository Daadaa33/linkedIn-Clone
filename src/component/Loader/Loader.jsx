import React from "react";
import { Space, Spin } from "antd";

export default function Loader() {
  return (
    <div className="flex justify-center items-center flex-col gap-[10px] h-screen">
      <p className="font-bold text-xl text-[#000000e6] ">Loading..Please Wait..</p>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
}
