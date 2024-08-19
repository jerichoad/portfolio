import { skills } from '@/data';
import React from 'react';
import { InfiniteMovingLogos } from './ui/InfinteCardsLogo';

const Skills = () => {
  const logos = skills.map((skill) => skill.logos);
  return (
    <InfiniteMovingLogos
      logos={logos}
      speed="normal" // Anda dapat mengatur kecepatan sesuai keinginan: "fast", "normal", atau "slow"
    />
  );
};

export default Skills;
