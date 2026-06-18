export type ParticleContext = "home" | "volume" | "article";

export type ParticleContextConfig = {
  desktopCount: number;
  mobileCount: number;
  opacity: [number, number];
  pointerScale: number;
};

export type ParticleConfig = {
  enable: boolean;
  chars: string[];
  mobileBreakpoint: number;
  contentSafeWidth: number;
  pointerInfluenceRadius: number;
  driftX: [number, number];
  driftY: [number, number];
  speed: [number, number];
  contexts: Record<ParticleContext, ParticleContextConfig>;
};

export type HomeAsciiGlitchConfig = {
  enable: boolean;
  minIntervalMs: number;
  maxIntervalMs: number;
  frameMinMs: number;
  frameMaxMs: number;
  burstFrameMin: number;
  burstFrameMax: number;
  mutationRatioMin: number;
  mutationRatioMax: number;
  lineShiftChance: number;
};

export type EffectsConfig = {
  particles: ParticleConfig;
  homeAsciiGlitch: HomeAsciiGlitchConfig;
};

export const effectsConfig: EffectsConfig = {
  particles: {
    enable: true,
    chars: [".", ".", "·", "·", ":", "'", "*"],
    mobileBreakpoint: 760,
    contentSafeWidth: 760,
    pointerInfluenceRadius: 150,
    driftX: [-0.28, 0.28],
    driftY: [-0.72, -0.2],
    speed: [0.03, 0.085],
    contexts: {
      home: {
        desktopCount: 120,
        mobileCount: 52,
        opacity: [0.22, 0.58],
        pointerScale: 1.2
      },
      volume: {
        desktopCount: 48,
        mobileCount: 22,
        opacity: [0.18, 0.42],
        pointerScale: 0.72
      },
      article: {
        desktopCount: 28,
        mobileCount: 16,
        opacity: [0.1, 0.26],
        pointerScale: 0.45
      }
    }
  },
  homeAsciiGlitch: {
    enable: true,
    minIntervalMs: 800,
    maxIntervalMs: 4800,
    frameMinMs: 20,
    frameMaxMs: 80,
    burstFrameMin: 3,
    burstFrameMax: 12,
    mutationRatioMin: 0.04,
    mutationRatioMax: 0.22,
    lineShiftChance: 0.7
  }
};
