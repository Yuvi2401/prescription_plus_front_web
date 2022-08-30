import samplePDF from '../../assests/uploadedRx/62eb4df40fc32b6dac196c21.pdf'
import React from "react";


/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import PDFViewer from './pdf_viewer';

export default function RxViewer() {
  return (
    <div >
        <PDFViewer pdf = {samplePDF}/>
    </div>
  );
}