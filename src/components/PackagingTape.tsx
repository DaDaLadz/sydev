const PackagingTape = () => {
  return (
    <div className="w-full relative h-32 overflow-hidden">
      {/* Tape Strip 1 */}
      <div className="absolute inset-x-0 top-2 h-8 bg-black opacity-80 animate-tape-wave-1 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tape-texture-1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="1" fill="white" opacity="0.1" />
              <rect x="10" y="10" width="1" height="1" fill="white" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tape-texture-1)" />
        </svg>
      </div>

      {/* Tape Strip 2 */}
      <div className="absolute inset-x-0 top-12 h-8 bg-black opacity-70 animate-tape-wave-2 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tape-texture-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="1" fill="white" opacity="0.1" />
              <rect x="10" y="10" width="1" height="1" fill="white" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tape-texture-2)" />
        </svg>
      </div>

      {/* Tape Strip 3 */}
      <div className="absolute inset-x-0 top-22 h-8 bg-black opacity-60 animate-tape-wave-3 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tape-texture-3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="1" height="1" fill="white" opacity="0.1" />
              <rect x="10" y="10" width="1" height="1" fill="white" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tape-texture-3)" />
        </svg>
      </div>
    </div>
  );
};

export default PackagingTape;
