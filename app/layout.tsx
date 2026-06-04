import './globals.css';
import Providers from './providers';

export const metadata = {
   title: 'Lovable App',
   description: 'Immersive Hero creates an engaging hero section with a video that animates on scroll.',
   openGraph: {
      title: 'Lovable App',
      description: 'Immersive Hero creates an engaging hero section with a video that animates on scroll.',
      type: 'website',
   },
   twitter: {
      card: 'summary',
      title: 'Lovable App',
      description: 'Immersive Hero creates an engaging hero section with a video that animates on scroll.',
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
