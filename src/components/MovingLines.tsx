'use client';

const MovingLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-scan-slow"></div>
      <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/50 to-transparent animate-scan-fast"></div>
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-scan-slow delay-1000"></div>
    </div>
  );
};

export default MovingLines;
