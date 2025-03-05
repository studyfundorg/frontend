'use client';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function AOSAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <div>{children} </div>;
}
