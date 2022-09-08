
import React from "react";

import samplePDF from '../../assests/uploadedRx/p1.pdf'


import PDFViewer from './pdf_viewer';

export default function RxViewer() {
  return (
    <div >
        <PDFViewer pdf = {samplePDF}/>
    </div>
  );
}