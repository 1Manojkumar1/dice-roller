export const metadata = {
    title: 'Dice Roller',
    description: 'Roll a virtual dice!',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  