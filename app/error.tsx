"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
   return (
      <div className="min-h-screen bg-background text-foreground px-6 py-24">
         <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-lg">
            <h1 className="text-3xl font-semibold">Something went wrong</h1>
            <p className="mt-4 text-muted-foreground">{error.message}</p>
            <button
               className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
               onClick={() => reset()}
            >
               Try again
            </button>
         </div>
      </div>
   );
}
