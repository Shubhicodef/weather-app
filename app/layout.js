// app/layout.js
import './globals.css'; // ✅ already usually present

export const metadata = {
  title: 'Weather App',
  description: 'Check the weather instantly',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
