'use client';
import { useRef, useState } from 'react';
// If you want to use a local image, copy it to /public and use "/prototype.png":
// import prototypeImage from '/prototype.png';  // using plain <img>, not next/image

export default function Carousel() {
  const baseSlide = {
    kicker: 'Snowin Sensor',
    title: 'Meet Snowin',
    headline: 'Your Potential,\nOur Passion',
    body:
      'Lorem ipsum dolor sit amet consectetur. Condimentum aliquam nunc vestibulum proin aliquam tellus habitasse suspendisse gravida. Metus phasellus ridiculus nisi velit libero vel id.',
    cta: 'Learn More',
    img: '/prototype.png', // path from /public
  };
  const slides = [baseSlide, baseSlide, baseSlide];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const AUTOPLAY_MS = 6000;

  const goTo = (i) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, AUTOPLAY_MS);
  };

  return (
    <section
      className="carousel full-bleed"
      aria-label="Featured slides"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((s, i) => (
          <article className="slide" key={i} aria-roledescription="slide" aria-label={`${i + 1} of ${slides.length}`}>
            <div className="slide-inner">
              <div className="slide-copy">
                <h1 className="slide-title">{s.title}</h1>
                <div className="slide-kicker">{s.kicker}</div>
                <h3 className="slide-headline">
                  {s.headline.split('\n').map((line, li) => (
                    <span key={li}>
                      {line}
                      <br />
                    </span>
                  ))}
                </h3>
                <p className="slide-body">{s.body}</p>
                <a className="button-59 ghost" href="#learn-more">{s.cta}</a>
              </div>

              <figure className="slide-asset">
                <img src={s.img} alt="Snowin product" />
              </figure>
            </div>
          </article>
        ))}
      </div>

      <button className="nav prev" aria-label="Previous slide" onClick={prev} onFocus={pause} onBlur={resume}>‹</button>
      <button className="nav next" aria-label="Next slide" onClick={next} onFocus={pause} onBlur={resume}>›</button>

      <div className="dots" role="tablist" aria-label="Slide selectors">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            className={`dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            onFocus={pause}
            onBlur={resume}
          />
        ))}
      </div>
    </section>
  );
}
