import useFloatingCta from '../../hooks/infotech/useFloatingCta';

export default function FloatingCta() {
  const collapsed = useFloatingCta();

  return (
    <div className="floating-cta" id="floatingCta">
      <a href="#contact" className={`floating-cta-btn${collapsed ? ' collapsed' : ''}`} id="floatingCtaBtn">
        <i className="fas fa-comments"></i>
        <span>Let's Talk</span>
      </a>
    </div>
  );
}
