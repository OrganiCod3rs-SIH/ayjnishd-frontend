import React, {useEffect} from "react";
import Script from 'next/script'
import Image from "next/image";
import pdf_img from "../../images/pdf-pic.png"
import Link from 'next/link'
const SinglePdf = (props) => {
    
    // const link=`https://drive.google.com/embeddedfolderview?id=${props.link}#list`
    const link=`https://drive.google.com/file/d/${props.link}/preview`
    const full_link=`https://drive.google.com/file/d/${props.link}/view`
    
  return (
    <>
      <section id="PdfViewer">
        <div className="row pdf-renderer">
            <div className="col-12">
            <iframe
            src={link}
            className="pdf_iframe"
            allow="autoplay"
          ></iframe>
          <Link href={full_link} target="_blank" rel="noopener noreferrer">
          <a className="btn btn-sih">Read Full PDF</a>
            </Link>
            </div>
        </div>
      </section>
    </>
  );
};

export default SinglePdf;
// https://drive.google.com/file/d/1X0ozHxbSFsbX2qpgd6EtNKjxb9hzx588/view?usp=sharing