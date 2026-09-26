import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd', marginBottom: '2rem' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>
        Home
      </Link>
      <Link href="/about" style={{ marginRight: '1rem' }}>
        About
      </Link>
      <Link href="/blog/hello-world">
        Blog (sample post)
      </Link>
    </nav>
  );
}
