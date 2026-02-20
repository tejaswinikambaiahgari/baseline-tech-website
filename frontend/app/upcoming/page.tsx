export default function UpcomingPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
      style={{ fontFamily: 'var(--font-manrope)' }}
    >
      <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-center">
        Coming Soon
      </h1>
      <p className="text-lg lg:text-xl text-gray-300 text-center max-w-xl px-6">
        We&apos;re working on something exciting. Stay tuned for upcoming
        sessions and features from Flowmersion.
      </p>
    </main>
  );
}
