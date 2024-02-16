import Image from "next/image";
import { Inter } from "next/font/google";
import LoginCard from "@/Components/LoginCard";
import ConnectFBCard from "@/Components/ConnectFBCard";
import CustomerDetailsCard from "@/Components/CustomerDetailsCard";
import CustomerProfileCard from "@/Components/CustomerProfileCard";
import Conversations from "@/Components/Conversations";
import ChatBox from "@/Components/ChatBox";
import Sidebar from "@/Components/Sidebar";
import DeleteAndReplyCard from "@/Components/DeleteAndReplyCard";
import RegisterCard from "@/Components/RegisterCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div className="flex flex-col gap-4">
      <div className="flex">
        <Sidebar />
        <Conversations />
        <ChatBox name="Amit RG" />
        <div className="w-[20%]">
          <CustomerProfileCard name="Amit RG" onlineStatus={true} profilePhotoUrl="/Hero.jpg" contactNumber="8949986811" />
          <CustomerDetailsCard email="deepanshu.2@iitj.ac.in" firstname="Deepanshu" lastname="Kewalramani" />
        </div>
      </div>
      <div className="flex gap-5">
        <RegisterCard />
        <LoginCard />
        <ConnectFBCard />
        <DeleteAndReplyCard />
        
      </div>

    </div>
  );
}
