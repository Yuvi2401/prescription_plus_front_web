import samplePDF from '../../assests/uploadedRx/62eb4df40fc32b6dac196c21.pdf'
import React from "react";



import PDFViewer from './pdf_viewer';

export default function RxViewer() {
  return (
    <div >
        <PDFViewer pdf = {samplePDF}/>
    </div>
  );
}