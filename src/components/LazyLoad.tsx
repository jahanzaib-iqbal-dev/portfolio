"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./LazyLoad.module.scss";

interface LazyLoadProps {
  children: React.ReactNode;
  height?: number | string;
  className?: string;
}

export const LazyLoad = ({ children, height = 400, className }: LazyLoadProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${className || ""}`}
      style={{ minHeight: isLoaded ? "auto" : height }}
    >
      {!isLoaded && (
        <div className={styles.skeleton}>
          <div className={styles.shimmer} />
        </div>
      )}
      {isInView && (
        <div
          className={`${styles.content} ${isLoaded ? styles.visible : styles.hidden}`}
          onLoad={() => setIsLoaded(true)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface LazyIframeProps {
  src: string;
  width?: string;
  height?: number;
  title: string;
}

export const LazyIframe = ({ src, width = "100%", height = 700, title }: LazyIframeProps) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.wrapper} style={{ minHeight: height }}>
      {!isLoaded && (
        <div className={styles.skeleton}>
          <div className={styles.shimmer} />
          <div className={styles.skeletonContent}>
            <div className={styles.skeletonIcon}>📅</div>
            <div className={styles.skeletonText}>Loading calendar...</div>
          </div>
        </div>
      )}
      {isInView && (
        <iframe
          src={src}
          width={width}
          height={height}
          frameBorder="0"
          title={title}
          style={{
            border: "none",
            minWidth: "320px",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

interface LazyImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  radius?: string;
  sizes?: string;
}

export const LazyImage = ({ src, alt, aspectRatio = "16 / 9", sizes }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.imageWrapper} style={{ aspectRatio }}>
      {!isLoaded && (
        <div className={styles.skeleton}>
          <div className={styles.shimmer} />
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          className={`${styles.image} ${isLoaded ? styles.imageVisible : styles.imageHidden}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};
