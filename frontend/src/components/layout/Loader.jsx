import useLoader from '../../hooks/useLoader';

export default function Loader() {
  const { visible, gone } = useLoader();

  if (!visible) return null;

  return (
    <div id="loader" className={gone ? 'gone' : undefined}>
      <div className="ld-logo">
        <video
          src="/assets/reloader.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ maxWidth: '700px' }}
        ></video>
      </div>
    </div>
  );
}
