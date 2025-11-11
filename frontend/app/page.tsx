'use client';
import { useEffect, useRef, useState } from 'react';
import Carousel from '../components/Carousel';

type BannerOffsets = { imgY: number; textY: number };

export default function Page() {
  const bannerRef = useRef<HTMLElement | null>(null);
  const [bannerOffsets, setBannerOffsets] = useState<BannerOffsets>({ imgY: 0, textY: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let raf: number | null = null;

    const onScroll = () => {
      if (raf !== null) return;
      raf = window.requestAnimationFrame(() => {
        const y = window.scrollY; 
        document.documentElement.style.setProperty('--px', `${y * 0.25}px`);

        const section = bannerRef.current;
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTopInDoc = y + rect.top;
          const local = Math.max(0, y - sectionTopInDoc);
          const imgY = local * 0.20;
          const textY = local * -0.10;
          setBannerOffsets({ imgY, textY });
        }

        raf = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <img src="/hero-image.png" alt="Snowboarder carving down a slope" className="hero-image" />
      </section>

      <Carousel />

      {/* SECTION 2 — Centered “Why us” */}
      <section className="section why" aria-labelledby="why-heading">
       <div className="why-wrap">
        <h2 id="why-heading" className="why-hero">SnowIn is the all-in-one precision tracker</h2>
        <p className="why-sub">So you can push harder, ride smarter, and relive every line.</p>

       <figure className="why-figure">
        <img src="/snowboards.png" alt="Snowboards on a bench" />
       </figure>

       <div className="why-cols">
        <p>Sync your board to your phone and unlock performance stats, trail maps, and fall detection.</p>
        <p>Built tough for subzero conditions, SnowIn keeps you connected from summit to base.</p>
        <p>SnowIn keeps tabs on your board’s every move—because the best rides shouldn’t need a pause.</p>
       </div>
       </div>
      </section>


      {/* BANNER */}
      <section className="full-bleed image-banner" aria-label="Banner image" ref={bannerRef}>
        <img
          src="/snowboarders.png" 
          alt="A biker adventure"
          className="banner-image"
          style={{ transform: `translateY(${bannerOffsets.imgY}px)` }}
        />
        <div
          className="banner-overlay"
          style={{ transform: `translateY(${bannerOffsets.textY}px)` }}
        >
          <h2 className="banner-text">Every Turn Tells A Story...</h2>
          <a className="button-59 banner-cta" href="#join">Join Our Community</a>
        </div>
      </section>
    </>
  );
}
