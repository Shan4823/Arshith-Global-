import usePreloader from '../../hooks/infotech/usePreloader';

export default function Preloader() {
  const hidden = usePreloader();

  return (
    <div id="preloader" className={hidden ? 'hidden' : ''}>
      <div className="preloader-logo">
        Arshith&nbsp;<span className="logo-tech">Info-Tech</span>
        <span className="logo-dot">.</span>
      </div>
      <div className="preloader-spinner"></div>
    </div>
  );
}
