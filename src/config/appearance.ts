export type AppearanceConfig = {
  colors: {
    background: string;
    homeBackground: string;
    foreground: string;
    link: string;
    linkHover: string;
    linkHoverBackground: string;
    accent: string;
    accentGlow: string;
    particleHome: string;
    particleHomeGlow: string;
    particlePage: string;
    particlePageGlow: string;
    particleVolume: string;
    particleVolumeGlow: string;
  };
  fonts: {
    asciiFamily: string;
    asciiUrl: string;
    asciiFormat: string;
  };
  sizing: {
    textSize: string;
    cjkSize: string;
    cjkLinkSize: string;
    textCell: string;
    homeSize: string;
  };
};

export const appearanceConfig: AppearanceConfig = {
  colors: {
    background: "#0c0d10",
    homeBackground: "#0a0b11",
    foreground: "#fefefe",
    link: "#7dcfff",
    linkHover: "#a8e6ff",
    linkHoverBackground: "#143340",
    accent: "#37f712",
    accentGlow: "#37f71255",
    particleHome: "#7dcfff",
    particleHomeGlow: "#4da6cf",
    particlePage: "#5fbcdb",
    particlePageGlow: "#3a7a94",
    particleVolume: "#6fc8e8",
    particleVolumeGlow: "#448aa8"
  },
  fonts: {
    asciiFamily: "gohu",
    asciiUrl: "/fonts/gohu-subset.woff",
    asciiFormat: "woff"
  },
  sizing: {
    textSize: "14px",
    cjkSize: "13px",
    cjkLinkSize: "15px",
    textCell: "8px",
    homeSize: "14px"
  }
};
