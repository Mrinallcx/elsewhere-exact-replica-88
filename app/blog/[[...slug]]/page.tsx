import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { BlogIframe } from './BlogIframe';

const BLOG_BASE = 'https://tiamondstestblog-wj33.vercel.app';

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const pathSegments = slug ?? [];
  const path = pathSegments.length > 0 ? pathSegments.join('/') + '/' : '';
  const iframeSrc = `${BLOG_BASE}/blog/${path}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="min-h-[60vh] flex-1">
        <div className="h-full min-h-[60vh]">
          <BlogIframe src={iframeSrc} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
