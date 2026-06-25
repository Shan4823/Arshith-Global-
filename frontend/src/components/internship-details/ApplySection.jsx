import InternshipApplicationForm from './InternshipApplicationForm';

export default function ApplySection() {
  return (
    <section className="section mncfix-decorated" id="apply">
      <span className="mncfix-blob mncfix-blob--brand mncfix-blob--a" aria-hidden="true"></span>
      <div className="container">
        <div className="mncfix-apply">
          <span className="mncfix-kicker">Take the next step</span>
          <h2>Apply now</h2>
          <p>
            <i className="fa-solid fa-envelope" aria-hidden="true"></i>
            Email: <strong>support@arshithfresh.com</strong>
          </p>
          <p>
            <i className="fa-solid fa-phone" aria-hidden="true"></i>
            Contact: <strong>+91 86184 71424</strong>
          </p>
          <InternshipApplicationForm />
        </div>
      </div>
    </section>
  );
}
