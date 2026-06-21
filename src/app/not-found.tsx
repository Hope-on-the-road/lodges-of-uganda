import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-32 px-4 text-center">
      <h1 className="font-[family-name:var(--font-heading)] font-bold text-forest text-4xl mb-4">Page Not Found</h1>
      <p className="text-olive-dark/60 mb-6">The page you are looking for does not exist or has been moved.</p>
      <Link
        href="/lodges"
        className="inline-flex items-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-light transition-colors text-sm"
      >
        Browse All Lodges
      </Link>
    </div>
  );
}
