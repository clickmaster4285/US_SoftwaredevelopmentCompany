export default function NotFound() {
   return (
      <div className="min-h-screen bg-background text-foreground px-6 py-24">
         <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-lg">
            <h1 className="text-3xl font-semibold">404 — Page not found</h1>
            <p className="mt-4 text-muted-foreground">The page you are looking for could not be found.</p>
         </div>
      </div>
   );
}
