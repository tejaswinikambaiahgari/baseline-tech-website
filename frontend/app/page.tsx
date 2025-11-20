'use client';
import { useEffect, useRef, useState } from 'react';
import Carousel from '../components/Carousel';
import "./homepage.css";

type BannerOffsets = { imgY: number; textY: number };

export default function Page() {
  // ----- HERO REVEAL -----
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onEnded = () => {
      setReveal(true);
      try { v.pause(); } catch {}
    };

    // Fallback: if ended isn't fired (autoplay blocked/short clip), reveal anyway
    const fallback = window.setTimeout(() => setReveal(true), 9000);

    v.addEventListener('ended', onEnded);
    return () => {
      v.removeEventListener('ended', onEnded);
      clearTimeout(fallback);
    };
  }, []);

  // ----- BANNER PARALLAX -----
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
      <section className={`hero ${reveal ? 'hero--reveal' : ''}`} aria-label="Hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          playsInline
          preload="metadata"
          // no loop: we only want one playthrough
          poster="/hero-poster.jpg"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dimmer that fades in after video ends */}
        <div className="hero-dimmer" />

        {/* Content that fades/slides in after video ends */}
        <div className="hero-content">
          <h1 className="hero-title">
            The motion tech that<br />levels up your ride.
          </h1>
          <p className="hero-sub">
            Flowmersion captures how you move, turning motion into insight and insight into flow.
          </p>
          <a href="#join" className="button-59 banner-cta hero-cta">Join Now</a>
        </div>
      </section>

      <Carousel />

      {/* SECTION 2 — Centered “Why us” */}
      <section className="section why" aria-labelledby="why-heading">
        <div className="why-wrap">
          <h2 id="why-heading" className="why-hero">Train Smarter. Ride in Flow.</h2>
          <p className="why-sub">So you can push harder, ride smarter, and relive every line.</p>

          <figure className="why-figure">
            <img src="/happy-snowboarders.png" alt="Three snowboarders smiling with their hands raised up." />
          </figure>

          <div className="why-cols why-cols--aud">
          <div className="why-card">
            <h3 className="why-col-title">For Parents</h3>
            <p className="why-col-body">
              Track your child’s location, progress, and safety — peace of mind on slopes.
            </p>
          </div>

          <div className="why-card">
            <h3 className="why-col-title">For Resorts</h3>
            <p className="why-col-body">
              Host competitions, track riders, and engage guests with real-time data and leaderboards.
            </p>
          </div>

          <div className="why-card">
            <h3 className="why-col-title">For Riders</h3>
            <p className="why-col-body">
              Visualize your ride, relive every run, and compete with friends — because progress should feel fun.
            </p>
          </div>
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
          <p className="banner-caption"> Let's capture yours! </p>
          <a className="button-59 banner-cta" href="#join">Join Us</a>
        </div>
      </section>
    </>
  );
}
