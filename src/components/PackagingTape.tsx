const PackagingTape = () => {
  return (
    <div className="w-full relative h-8 overflow-hidden flex items-center justify-center gap-6 md:gap-8 lg:gap-12">
      {/* 9 Vertical Tape Strips */}
      {[...Array(9)].map((_, index) => (
        <div key={index} className="h-full w-10 md:w-16 lg:w-20 bg-gray-600/40 shadow-lg relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`tape-texture-v${index + 1}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="1" height="1" fill="white" opacity="0.2" />
                <rect x="10" y="10" width="1" height="1" fill="white" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#tape-texture-v${index + 1})`} />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default PackagingTape;
