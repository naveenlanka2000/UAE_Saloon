export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-obsidian)] px-6">
      <div className="grid gap-6 text-center">
        <div className="mx-auto h-px w-24 bg-[linear-gradient(90deg,transparent,var(--color-champagne),transparent)]" />
        <div>
          <p className="font-heading text-5xl text-[var(--color-ivory)]">Maison de Sable</p>
          <p className="mt-3 text-[11px] tracking-[0.34em] text-[var(--color-champagne)] uppercase">
            Preparing the luxury experience
          </p>
        </div>
      </div>
    </div>
  );
}
