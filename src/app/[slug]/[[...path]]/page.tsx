import { ShareProvider } from '@/app/share/ShareProvider';
import { SharePage } from './SharePage';

export default async function ({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <ShareProvider slug={slug}>
      <SharePage />
    </ShareProvider>
  );
}