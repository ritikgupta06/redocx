import Head from "next/head";
import Myhome from "./myhome";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Homepage from "./Home";
import Footer from "@/components/footer";



export default function Home() {
  return (
    <>
     {/* <Homepage/> */}
     <Navbar></Navbar>
    
     <Myhome/>
     <Footer/>
    </>
  );
}
