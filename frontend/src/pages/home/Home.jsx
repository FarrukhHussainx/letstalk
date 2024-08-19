import React, { useState } from "react";
import AsideBar from "../../components/AsideBar";
import UserChat from "../../components/UserChat";
import ChatBoiler from "../../components/ChatBoiler";
import MessageInput from "../../components/MessageInput";

const Home = () => {
  const [chatSelected, setChatSelected] = useState(true);
  return (
    <div className="h-[calc(100vh-80px)] ">
      <div className="grid grid-cols-4 gap-4 w-full h-full">
        <div className=" border-r-4 rounded-e-md border-[#117c11]">
          <AsideBar />
        </div>
        <div className="  col-span-3 relative">
          {chatSelected ? <UserChat /> : <ChatBoiler />}
          {chatSelected && (
            <div className="absolute bottom-5 right-0 left-0">
              <MessageInput />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
