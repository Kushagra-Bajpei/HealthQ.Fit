import React from 'react';

/**
 * CSS-only animated hero visual — no Three.js / WebGL.
 * Eliminates "THREE.Clock deprecated" and "Context Lost" errors entirely.
 * Looks premium with layered glowing orbs and smooth CSS animations.
 */
const Hero3D = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none pointer-events-none" aria-hidden="true">
      {/* Outer slow-spinning ring */}
      <div
        className="absolute w-72 h-72 rounded-full border border-green-400/20"
        style={{ animation: 'spin 18s linear infinite' }}
      />
      <div
        className="absolute w-56 h-56 rounded-full border border-green-300/30"
        style={{ animation: 'spin 12s linear infinite reverse' }}
      />

      {/* Glow layers */}
      <div className="absolute w-64 h-64 rounded-full bg-green-400/10 blur-3xl" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
      <div className="absolute w-48 h-48 rounded-full bg-emerald-300/15 blur-2xl" style={{ animation: 'pulse 3s ease-in-out infinite 1s' }} />

      {/* Center main orb */}
      <div
        className="relative w-44 h-44 rounded-full flex items-center justify-center shadow-2xl"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #86efac, #22c55e 50%, #15803d)',
          animation: 'float 5s ease-in-out infinite',
          boxShadow: '0 0 80px rgba(74, 222, 128, 0.4), 0 20px 60px rgba(34, 197, 94, 0.3)',
        }}
      >
        {/* Inner highlight */}
        <div className="absolute top-6 left-8 w-10 h-6 bg-white/30 rounded-full blur-sm" />
        {/* Icon */}
        <span className="text-6xl" role="img" aria-label="Leaf">🌿</span>
      </div>

      {/* Orbiting pill 1 */}
      <div
        className="absolute"
        style={{ animation: 'orbit1 7s linear infinite' }}
      >
        <div className="bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-semibold text-gray-700 whitespace-nowrap"
          style={{ transform: 'translateX(140px)' }}
        >
          <span className="text-green-500">✓</span> Personalised Plans
        </div>
      </div>

      {/* Orbiting pill 2 */}
      <div
        className="absolute"
        style={{ animation: 'orbit1 9s linear infinite reverse 2s' }}
      >
        <div className="bg-green-500 shadow-lg shadow-green-500/30 rounded-full px-3 py-1.5 flex items-center gap-1.5 text-xs font-bold text-white whitespace-nowrap"
          style={{ transform: 'translateX(-150px)' }}
        >
          🤖 AI Powered
        </div>
      </div>

      {/* Floating stat card bottom-right */}
      <div
        className="absolute bottom-16 right-4 bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl px-4 py-3 flex items-center gap-3"
        style={{ animation: 'float 6s ease-in-out infinite 1.5s' }}
      >
        <div className="bg-green-500 rounded-xl p-2">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-lg font-black text-gray-900">95%</p>
          <p className="text-[10px] text-gray-400 uppercase font-semibold tracking-wide">Success Rate</p>
        </div>
      </div>

      {/* Floating stat card top-left */}
      <div
        className="absolute top-16 left-0 bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl px-4 py-3"
        style={{ animation: 'float 5s ease-in-out infinite 0.5s' }}
      >
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {[1,2,3].map(i => (
              <img key={i} src={`https://ui-avatars.com/api/?name=User+${i}&background=4ade80&color=fff&size=28`}
                alt="" className="w-7 h-7 rounded-full border-2 border-white" />
            ))}
          </div>
          <div>
            <p className="text-xs font-black text-gray-900">2000+</p>
            <p className="text-[10px] text-gray-400">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* CSS Animations via inline style tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes orbit1 {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Hero3D;
