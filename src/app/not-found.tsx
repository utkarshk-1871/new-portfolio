import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="font-display text-4xl font-bold text-[var(--color-text-primary)]">
        404
      </h1>
      <p className="mt-4 text-[var(--color-text-secondary)]">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
      >
        Back to home
      </Link>
    </div>
  );
}
