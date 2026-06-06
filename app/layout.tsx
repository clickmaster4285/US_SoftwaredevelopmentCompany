import './globals.css';
import Providers from './providers';

export const metadata = {
   title: 'hmmmmmm....',
   description: 'Immersive Hero creates an engaging hero section with a video that animates on scroll.',
   openGraph: {
      title: 'hmmmmmm....',
      description: 'Immersive Hero creates an engaging hero section with a video that animates on scroll.',
      type: 'website',
   },
   twitter: {
      card: 'summary',
      title: 'hmmmmmm....',
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
