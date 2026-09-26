import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '0 1rem' }}>
        <h1>Home Page</h1>
        <p>Welcome to the homepage. Use the nav links above to explore.</p>
      </main>
    </div>
  );
}
