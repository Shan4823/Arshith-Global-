import { Fragment } from 'react';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We begin by deeply understanding your business goals, pain points, and technical landscape through collaborative workshops.',
    delay: 'delay-100',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Our architects craft a tailored solution blueprint — choosing the right technologies, platforms, and delivery approach for your specific needs.',
    delay: 'delay-200',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Our expert teams execute with precision using agile sprints, continuous integration, and transparent progress reporting throughout.',
    delay: 'delay-300',
  },
  {
    num: '04',
    title: 'Scale & Support',
    desc: 'Post-launch, we continuously monitor, optimize, and evolve your solution — ensuring it grows alongside your business ambitions.',
    delay: 'delay-400',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <div className="text-center reveal-up">
          <h4 className="section-badge">Our Process</h4>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A structured, transparent engagement model designed to deliver results at every stage.
          </p>
        </div>
        <div className="process-steps">
          {PROCESS_STEPS.map((step, i) => (
            <Fragment key={step.num}>
              <div className={`process-step reveal-up ${step.delay}`}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < PROCESS_STEPS.length - 1 && <div className="process-connector"></div>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
