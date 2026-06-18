export type HomeItem = {
  label: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
  prefix?: string;
};

export type HomeSection = {
  title: string;
  items?: HomeItem[];
  columns?: number;
  volumes?: {
    include?: number[];
    exclude?: number[];
    sort?: "asc" | "desc";
    showEmpty?: boolean;
  };
};

export type SiteConfig = {
  name: string;
  description: string;
  homeAsciiArt: string;
  homeSections: HomeSection[];
};

export const siteConfig: SiteConfig = {
  name: "dylansz",
  description: "dylansz — fullstack engineer / fintech & crypto",
  homeAsciiArt: ` ██████╗  ██╗   ██╗ ██╗       █████╗  ███╗   ██╗ ███████╗ ███████╗
 ██╔══██╗ ╚██╗ ██╔╝ ██║      ██╔══██╗ ████╗  ██║ ██╔════╝ ╚══███╔╝
 ██║  ██║  ╚████╔╝  ██║      ███████║ ██╔██╗ ██║ ███████╗   ███╔╝
 ██║  ██║   ╚██╔╝   ██║      ██╔══██║ ██║╚██╗██║ ╚════██║  ███╔╝
 ██████╔╝    ██║    ███████╗ ██║  ██║ ██║ ╚████║ ███████║ ███████╗
 ╚═════╝     ╚═╝    ╚══════╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚══════╝ ╚══════╝`,
  homeSections: [
    {
      title: "WHOIS",
      items: [
        {
          label: "Fullstack engineer, 6+ years shipping production systems."
        },
        {
          label: "TS/JS, Python, Java, SQL, React, Node. End-to-end owner."
        },
        {
          label: "Fintech, stablecoins, DeFi, payments, data pipelines."
        },
        {
          label: "Engineer-turned-product. Close the gap between scope and shipped."
        }
      ]
    },
    {
      title: "AREAS",
      items: [
        { label: "Fintech & Payments Infrastructure" },
        { label: "Stablecoins & DeFi" },
        { label: "Large-Scale Data Pipelines" },
        { label: "AI Agents & Automation" },
        { label: "Product & Delivery Leadership" },
        { label: "CTF / Binary Exploitation" }
      ]
    },
    {
      title: "CURRENT PROJECTS",
      columns: 2,
      items: [
        {
          label: "Petrodata.ar",
          prefix: "~"
        },
        {
          label: "petrodata.ar",
          href: "https://petrodata.ar",
          external: true,
          prefix: "~ call"
        },
        {
          label: "TenderClaw",
          prefix: "~"
        },
        {
          label: "tenderclaw.io",
          href: "https://tenderclaw.io",
          external: true,
          prefix: "~ call"
        },
        {
          label: "NonUSD",
          prefix: "~"
        },
        {
          label: "nonusd.com",
          href: "https://nonusd.com",
          external: true,
          prefix: "~ call"
        },
        {
          label: "DeFi Fork Auditor",
          prefix: "~"
        },
        {
          label: "fork diff + replay",
          prefix: "~"
        },
        {
          label: "MervalBot",
          prefix: "~"
        },
        {
          label: "AI broker — Argentina PPI",
          prefix: "~"
        }
      ]
    },
    {
      title: "EXPERIENCE",
      items: [
        {
          label: "W3G (Remote) — Software Eng → Product Manager",
          prefix: "call"
        },
        {
          label: "DeFi Zoo / VaultEdge (Remote) — Full Stack Engineer",
          prefix: "call"
        },
        {
          label: "Num Finance → Twin Finance (BA) — Full Stack Engineer",
          prefix: "call"
        },
        {
          label: "Mangos Wallet (Remote) — Software Engineer",
          prefix: "call"
        },
        {
          label: "Perro en la Luna (BA/Remote) — Software Eng Intern",
          prefix: "call"
        }
      ]
    },
    {
      title: "SKILLS",
      items: [
        { label: "TypeScript / JavaScript / Node.js" },
        { label: "Python / Java / SQL / Analytics" },
        { label: "React / Next.js / React Native" },
        { label: "REST / GraphQL / Microservices" },
        { label: "Solidity / Wagmi / Viem / Onchain" },
        { label: "Product Scoping / Roadmap / Delivery" }
      ]
    },
    {
      title: "CONTACT",
      items: [
        { label: "dylanszejnblum@gmail.com" },
        {
          label: "github@dylanszejnblum",
          href: "https://github.com/dylanszejnblum/",
          external: true,
          prefix: "~ call"
        },
        {
          label: "@dylansz_",
          href: "https://twitter.com/dylansz_",
          external: true,
          prefix: "~ call"
        }
      ]
    },
    {
      title: "EDUCATION",
      items: [
        { label: "University of Gothenburg — Engineering Program" },
        { label: "UBA — Computer Science" },
        { label: "ORT Argentina — IT Technical HS Diploma" }
      ]
    },
    {
      title: "AWARDS",
      items: [
        {
          label: "Seedstars LATAM x WEF — Winner 2023 (AIGrou)"
        }
      ]
    },
    {
      title: "Philes",
      volumes: {
        exclude: [1, 2, 3],
        sort: "asc",
        showEmpty: false
      }
    }
  ]
};
