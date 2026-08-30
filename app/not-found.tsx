import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="bg-navy-900 text-white flex flex-col items-center justify-center min-h-screen p-6 text-center font-sans">
      <h2 className="text-4xl font-serif mb-4 text-uva-orange">404 - Page Not Found</h2>
      <p className="text-white/70 mb-6 max-w-md text-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-uva-orange hover:bg-uva-orange-light text-navy-900 font-semibold rounded transition-colors inline-block"
      >
        Return Home
      </Link>
    </div>
  );
}
