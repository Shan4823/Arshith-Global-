import useCookieConsent from '../../hooks/infotech/useCookieConsent';

export default function CookieBanner() {
  const { visible, accept, decline } = useCookieConsent();

  return (
    <div id="cookieBanner" role="alertdialog" aria-label="Cookie consent" className={visible ? 'visible' : undefined}>
      <div className="cookie-icon">🍪</div>
      <div className="cookie-text">
        <p>
          We use cookies to enhance your experience and analyze site performance. See our{' '}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>
      <div className="cookie-actions">
        <button className="cookie-accept" id="cookieAccept" onClick={accept}>
          Accept All
        </button>
        <button className="cookie-decline" id="cookieDecline" onClick={decline}>
          Decline
        </button>
      </div>
    </div>
  );
}
