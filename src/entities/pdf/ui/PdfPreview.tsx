import { FC, ReactNode, useRef } from 'react';

import { downloadPdfFromElement } from '../lib/downloadPdfFromElement';

interface PdfPreviewProps {
  children: ReactNode;
}

export const PdfPreview: FC<PdfPreviewProps> = props => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={ref}>{props.children}</div>
      <button
        onClick={() => {
          if (ref.current) downloadPdfFromElement(ref.current);
        }}
      >
        Скачать
      </button>
    </div>
  );
};
