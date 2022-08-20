import Navbar from "../components/layout/Navbar"
import Hero from "../components/layout/Hero"
import Kpi from "../components/layout/Kpi";
import CiApplication from "../components/layout/CIApplication";
import Faq from "../components/layout/Faq";
import PdfViewer from "../components/layout/PdfViewer";
import Info from "../components/layout/Info";
import News from "../components/layout/News";
import SideBar from "../components/layout/SideBar";
import Footer from "../components/layout/Footer";

//KPI from restAPI
const api = 'https://ayjnishd-backend.herokuapp.com/kpi';
export async function getServerSideProps(){
   const res = await fetch(api);
    const data = await res.json();
    return{
        props:{
            data
        }
    }
}

export default function Home({data}) {
  return (
    <div>
      <Navbar active="Home"/>
      <Hero/>
      <Kpi data={data}/>
      <Info/>
      <News/>
      <CiApplication/>
      <Faq/>
      <Footer/>
    </div>
  )
} 
