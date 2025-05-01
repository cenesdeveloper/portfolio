'use client';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow sticky top-0 z-50 flex items-center justify-between">
      {/* Left: name */}
      <div className="text-lg font-bold text-[--foreground]">Cemal Enes Durak</div>

      {/* Right: nav links */}
      <ul className="flex gap-8 font-semibold">
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:underline hover:text-[--accent] transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
