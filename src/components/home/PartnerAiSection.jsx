import { useEffect, useRef } from 'react';

export default function PartnerAiSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => console.log('Video play prevented:', err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="partner-ai-section" id="partner-ai">
      <div className="partner-video-bg">
        <video loop muted playsInline preload="none" className="partner-bg-video" ref={videoRef}>
          <source src="/logos/277093_medium.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="partner-video-overlay"></div>
      </div>
    </section>
  );
}
