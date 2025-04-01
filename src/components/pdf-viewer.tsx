"use client";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useEffect, useState } from 'react';
import { APIData } from '../lib/types';
import { getDocument } from '../lib/api';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

export default function PDFViewer({ data }: { data: APIData | null }) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [highlights, setHighlights] = useState<Record<number, Array<{
    text: string;
    position: {
      top: number;
      left: number;
      width: number;
      height: number;
    };
  }>>>({});

  useEffect(() => {
    let pdfUrl: string | null = null;

    (async () => {
      try {
        if (!data?.documents?.[0]) {
          setPdfUrl(null);
          return;
        }

        const blob = await getDocument(data?.documents?.[0] || '');
        if (!blob) throw new Error('Failed to load PDF blob');

        pdfUrl = URL.createObjectURL(blob);
        setPdfUrl(pdfUrl);
      } catch (err) {
        console.error('PDF loading error:', err);
        setPdfUrl(null);
      }
    })();

    // Process coordinates for highlighting
    if (data?.coordinates) {
      const processedHighlights: typeof highlights = {};

      data.coordinates.forEach((coordObj) => {
        Object.entries(coordObj).forEach(([pageStr, coord]) => {
          const pageNum = parseInt(pageStr);
          if (!processedHighlights[pageNum]) {
            processedHighlights[pageNum] = [];
          }

          processedHighlights[pageNum].push({
            text: data.answer, // Or extract specific text if available
            position: {
              left: coord.top_left[0],
              top: coord.top_left[1],
              width: coord.bottom_right[0] - coord.top_left[0],
              height: coord.bottom_right[1] - coord.top_left[1]
            }
          });
        });
      });

      setHighlights(processedHighlights);
    }

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [data]);

  return (
    <div className="relative">
      {pdfUrl ? (
        <Document
          file={pdfUrl}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="border rounded-lg"
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} className="relative">
              <Page
                pageNumber={index + 1}
                width={600}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
                {highlights[index + 1]?.map((highlight, i) => (
                  <div
                    key={`highlight_${index}_${i}`}
                    className="absolute bg-yellow-200 bg-opacity-50 border border-yellow-400"
                    style={{
                      left: `${highlight.position.left}px`,
                      top: `${highlight.position.top}px`,
                      width: `${highlight.position.width}px`,
                      height: `${highlight.position.height}px`,
                    }}
                    title={highlight.text}
                  />
                ))}
              </div>
          ))}
        </Document>
      ) : (
        <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
          <p>Nessun documento trovato</p>
        </div>
      )}
    </div>
  );
}