const PackagingTape = () => {
  return (
    <div className="w-full relative h-24 overflow-hidden flex items-center justify-center gap-8 md:gap-12 lg:gap-16">
      {/* Vertical Tape Strip 1 */}
      <div className="h-full w-12 md:w-16 bg-gray-600/40 shadow-lg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tape-texture-v1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="1" fill="white" opacity="0.2" />
              <rect x="10" y="10" width="1" height="1" fill="white" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tape-texture-v1)" />
        </svg>
      </div>

      {/* Vertical Tape Strip 2 */}
      <div className="h-full w-12 md:w-16 bg-gray-600/40 shadow-lg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tape-texture-v2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="1" fill="white" opacity="0.2" />
              <rect x="10" y="10" width="1" height="1" fill="white" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tape-texture-v2)" />
        </svg>
      </div>

      {/* Vertical Tape Strip 3 */}
      <div className="h-full w-12 md:w-16 bg-gray-600/40 shadow-lg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tape-texture-v3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="1" fill="white" opacity="0.2" />
              <rect x="10" y="10" width="1" height="1" fill="white" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tape-texture-v3)" />
        </svg>
      </div>
    </div>
  );
};

export default PackagingTape;
