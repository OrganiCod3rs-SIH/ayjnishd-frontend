import React, {useEffect} from "react";
import Script from 'next/script'
const PdfViewer = (props) => {

    // useEffect(() => {

    //     if (document) {
    //       const pdfs=document.getElementsByClassName("flip-entries")[0];
    //       console.log(pdfs)
    //     }
      
    //   }, []);
    
    const link=`https://drive.google.com/embeddedfolderview?id=${props.link}#grid`
  return (
    <>
      <section id="PdfViewer row">
        <div className="container">
          <p className="">All Files this folder:</p>
          <iframe
            src={link}
            className="pdf_iframe"
          ></iframe>
        </div>

      </section>
    </>
  );
};

export default PdfViewer;
// https://drive.google.com/drive/folders/12MU7BEyd3M2xkxrFrbDUqdpDtl9GkCek?usp=sharing