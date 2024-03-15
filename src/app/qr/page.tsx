"use client";

import { useState } from "react";
import { OnResultFunction, QrReader } from "react-qr-reader";

export default function Home() {
  const [decodedText, setDecodedText] = useState<string | null>(null);

  const onScanResult: OnResultFunction = (result, _error) => {
    if (!!result) setDecodedText(result.getText());
  };

  return (
    <div className="flex flex-col md:flex-row h-full gap-5 items-center justify-start p-5">
      <div className="md:w-1/3 w-full md:h-full h-1/3 bg-blue-500 overflow-hidden">
        <QrReader
          onResult={onScanResult}
          constraints={{ facingMode: "environment" }}
          scanDelay={1000}
        />
      </div>
      <div className="flex-1 text-3xl">
        <span className="text-blue-500">Last decoded value:</span> {decodedText}
      </div>
    </div>
  );
}
