'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingLogos = ({
  logos,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  logos: string[]; // Mengubah items menjadi logos yang berisi array string (URL gambar)
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '10s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 w-full overflow-hidden', // Mengubah w-screen menjadi w-full untuk menutupi seluruh lebar
        className
      )}
      style={{
        maskImage:
          'linear-gradient(to right, transparent 0%, white 10%, white 90%, transparent 100%)', // Mempersempit area white untuk lebih jelas transisi
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        style={{ animationTimingFunction: 'ease-in-out', padding: '0 20px' }} // Menambahkan padding untuk memberi lebih banyak ruang
      >
        {logos.map((logo, idx) => (
          <li
            key={idx}
            className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center" // Ukuran lebih kecil untuk ikon
          >
            <img
              src={logo}
              alt={`logo-${idx}`}
              className="w-full h-full object-contain" // Gambar menyesuaikan ukuran ikon
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
