export function BlogIframe({ src }: { src: string }) {
  return (
    <iframe
      src={src}
      title="Toto Finance Blog"
      className="h-full min-h-[60vh] w-full border-0"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      allow="fullscreen"
    />
  );
}
