interface ContactMapProps {
  embedUrl: string;
  title?: string;
}

export default function ContactMap({ embedUrl, title = "Ubicación" }: ContactMapProps) {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-xl border border-gray-200 lg:h-full">
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}