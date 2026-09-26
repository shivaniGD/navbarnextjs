import Navbar from '../../../components/Navbar';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div>
      <Navbar />
      <main style={{ padding: '0 1rem' }}>
        <h1>Blog Post</h1>
        <p>Slug from URL: {slug}</p>
      </main>
    </div>
  );
}
