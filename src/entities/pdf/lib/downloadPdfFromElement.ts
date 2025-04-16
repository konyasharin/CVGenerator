import jsPDF from 'jspdf';

export const downloadPdfFromElement = (element: HTMLElement) => {
  const doc = new jsPDF({
    format: 'a4',
    unit: 'px',
  });

  doc.html(element, {
    callback: doc => {
      doc.save('pdf_name');
    },
  });
};
