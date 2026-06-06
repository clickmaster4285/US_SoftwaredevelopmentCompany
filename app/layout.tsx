import './globals.css';
import Providers from './providers';

export const metadata = {
   title: 'ClickMasters',
   description: 'ClickMasters is a leading provider of web development and digital marketing services.',
   openGraph: {
      title: 'ClickMasters',
      description: 'ClickMasters is a leading provider of web development and digital marketing services.',
      type: 'website',
   },
   twitter: {
      card: 'summary',
      title: 'ClickMasters',
      description: 'ClickMasters is a leading provider of web development and digital marketing services.',
   },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className="bg-background text-foreground">
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
