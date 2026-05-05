'use client';

const MovingLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {/* Vertical Lines */}
      <div className="absolute top-0 left-[10%] w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-slow opacity-50"></div>
      <div className="absolute top-0 left-[30%] w-0.5 h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-scan-fast opacity-70"></div>
      <div className="absolute top-0 left-[50%] w-[1px] h-full bg-gradient-to-b from-transparent via-primary/80 to-transparent animate-scan-slow delay-1000"></div>
      <div className="absolute top-0 left-[70%] w-0.5 h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-scan-fast delay-500 opacity-60"></div>
      <div className="absolute top-0 left-[90%] w-0.5 h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-scan-slow delay-2000 opacity-50"></div>
      
      {/* Horizontal Scanning Lines (optional for more visual impact) */}
      <div className="absolute left-0 top-[20%] h-[1px] w-full bg-gradient-to-r from-transparent via-secondary/40 to-transparent animate-scan-horizontal"></div>
      <div className="absolute left-0 top-[60%] h-[1px] w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan-horizontal delay-1500"></div>
    </div>
  );
};

export default MovingLines;
