import useBackToTop from '../../hooks/useBackToTop';
import useBackToTopVisibility from '../../hooks/infotech/useBackToTopVisibility';

export default function BackToTop() {
  const visible = useBackToTopVisibility();
  const scrollToTop = useBackToTop();

  return (
    <button
      id="backToTop"
      aria-label="Back to top"
      className={visible ? 'visible' : undefined}
      onClick={scrollToTop}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
