'use client';

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <ul className="flex gap-6 justify-center font-semibold">
        {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:underline">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}