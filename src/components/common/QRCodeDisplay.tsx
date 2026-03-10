import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode } from 'lucide-react';

interface QRCodeDisplayProps {
  value?: string;
  size?: number;
  className?: string;
  title?: string;
  subtitle?: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ 
  value = typeof window !== 'undefined' ? window.location.origin : 'https://kingdigital.et',
  size = 120,
  className = '',
  title = 'Scan to Visit',
  subtitle = 'Access our services on your mobile device'
}) => {
  return (
    <div className={`flex flex-col items-center p-4 bg-white rounded-2xl shadow-xl w-fit mx-auto ${className}`}>
      <div className="bg-white p-2 rounded-xl mb-3">
        <QRCodeSVG 
          value={value} 
          size={size}
          level="H"
          includeMargin={false}
          imageSettings={{
            src: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/3be579af-199d-4cb1-b400-9f4f8da3b236/king-digital-marketing-new-logo-6e32188f-1772862270412.webp",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
          }}
        />
      </div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 text-slate-900 font-bold text-sm">
          <QrCode className="w-4 h-4 text-yellow-600" />
          {title}
        </div>
        <p className="text-[10px] text-slate-500 mt-0.5 leading-tight max-w-[120px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default QRCodeDisplay;