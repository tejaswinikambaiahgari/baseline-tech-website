'use client';

import { useRef, useState } from 'react';

export default function Carousel() {
  const firstSlide = {
    kicker: 'Smart Sensor',
    title: 'Meet Snowin',
    headline: 'Your Board,\nUpgraded.',
    body:
      'Your board, upgraded. The SnowIn Core attaches seamlessly to any snowboard, tracking speed, airtime, turns, and balance in real time. Lightweight. Waterproof. Impact-proof. Ready for every run.',
    cta: 'Learn More',
    img: '/product-image.png', // path from /public
  };
  const secondSlide = {
    kicker: 'Meet our Simulator',
    title: 'Indoor Simulator',
    headline: 'Make snowboarding\n safe, trainable, and\n accessible all year round.',
    body:
      'Train smarter before you hit the snow.',
    cta: 'Learn More',
    img: '/drone.png', // path from /public
  };
  const thirdSlide = {
    kicker: 'Snowin App',
    title: 'Meet Snowin App',
    headline: 'Track, analyze, perform,\nrepeat.',
    body:
      'Your mountain, visualized. Sync your core to the SnowIn app to see live stats, 3D ride replays, and detailed performance analytics.',
    cta: 'Learn More',
    img: '/phone.png', // path from /public
  };
  const slides = [firstSlide, secondSlide, thirdSlide];

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
                <a className="button-59 banner-cta" href="/smartride">{s.cta}</a>
              </div>

              <figure className={`slide-asset ${s.img === '/drone.png' ? 'is-drone' : ''}`}>
                {s.img === '/drone.png' ? (
                    <img src={s.img} alt={s.title} className="slide-img--drone" />
                ) : (
                    <img src={s.img} alt={s.title} />
                )}
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
