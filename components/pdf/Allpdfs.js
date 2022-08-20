import React, {useEffect} from "react";
import Script from 'next/script'
import Image from "next/image";
import pdf_img from "../../images/pdf-pic.png"
const Allpdfs = (props) => {

    // useEffect(() => {

    //     if (document) {
    //       const pdfs=document.getElementsByClassName("flip-entries")[0];
    //       console.log(pdfs)
    //     }
      
    //   }, []);
    
    const link=`https://drive.google.com/embeddedfolderview?id=${props.link}#list`
  return (
    <>
      <section id="PdfViewer">
        <div className="row">
          {/* <p className="">All Files this folder:</p> */}
          <div className="col-md-4 col-12">
            <Image className="mt-5" src={pdf_img} alt="img" />
          </div>
          <div className="pdfs col-md-8 col-12 ">
          <iframe
            src={link}
            className="pdf_iframe"
          ></iframe>
          </div>
          
          
        </div>

      </section>
    </>
  );
};

export default Allpdfs;
// https://drive.google.com/drive/folders/12MU7BEyd3M2xkxrFrbDUqdpDtl9GkCek?usp=sharing