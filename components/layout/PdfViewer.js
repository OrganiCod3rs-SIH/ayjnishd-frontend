import React from "react";

const PdfViewer = () => {
  return (
    <>
      <section id="PdfViewer">
        <div className="container">
          <h1 className="heading">PDF VIEWER</h1>
          <h3>Single PDF Viewer:</h3>
          <p>First Pdf Of Adip Scheme(Consists 21 Pages):</p>
          <iframe
            src="https://drive.google.com/file/d/1HoiFrEAS_RqanjiwbUfj3Ywgh-R5T1jy/preview"
            className="pdf_iframe"
            allow="autoplay"
          ></iframe>
          <h3>All Files In Single Folder Viewer:</h3>
          <p>No Matter What Type Of Files Are There All Can Be Opened And Seen Very Easily(Be It Videos,docx,ppt,excel,jpg,pdf etc.)</p>
          {/* https://drive.google.com/drive/folders/1GruvTcSf2i8uCKsipmF-W36gP_gDhyNI?usp=sharing 
              
              id=1GruvTcSf2i8uCKsipmF-W36gP_gDhyNI
          */}
          <iframe
            src="https://drive.google.com/embeddedfolderview?id=12MU7BEyd3M2xkxrFrbDUqdpDtl9GkCek#grid"
            className="pdf_iframe"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default PdfViewer;
// https://drive.google.com/drive/folders/12MU7BEyd3M2xkxrFrbDUqdpDtl9GkCek?usp=sharing