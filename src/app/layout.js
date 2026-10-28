import './globals.css';

export const metadata = {
  title: 'CLAIM READY - Warranty Guide',
  description: 'A free checklist for anyone about to file a warranty claim.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
