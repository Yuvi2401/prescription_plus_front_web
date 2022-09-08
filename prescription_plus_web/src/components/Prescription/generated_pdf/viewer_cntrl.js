
import React from "react";

import samplePDF from '../../../assests/uploadedRx/p3.pdf'


import PDFViewer from './pdf_viewer';

export default function RxViewer() {
  return (
    <div style={{width: 'auto'}}>
        <PDFViewer pdf = {samplePDF}/>
    </div>
  );
}