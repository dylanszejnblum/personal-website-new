export type VolumePhileSort = {
  by: "date" | "order";
  direction: "asc" | "desc";
};

export type VolumeConfig = {
  title: string;
  subtitle?: string;
  listLabel: string;
  postscript?: string[];
  entryPrefix?: string;
  entryLabel?: "index" | "year";
  reverseEntryNumbers?: boolean;
  phileSort?: VolumePhileSort;
};

export const defaultVolumeConfig = (number: number): VolumeConfig => ({
  title: `dylansz Volume ${number}`,
  listLabel: `Volume ${number}`,
  phileSort: {
    by: "date",
    direction: "desc"
  },
  postscript: ["  ──[ EOF ]──────────────────────────────────────────────────────────────────//───"]
});

export const volumeConfigs = new Map<number, VolumeConfig>([
  [
    0,
    {
      title: "Portfolio & CV",
      subtitle: "Projects, CV, and what I'm building",
      listLabel: "Portfolio & CV",
      phileSort: {
        by: "order",
        direction: "asc"
      },
      entryPrefix: "P",
      postscript: [
        "  ──[ 0x00 ]─────────────────────────────────────────────────────────────────//───",
        "",
        "  Built to ship.",
        "",
        "  dylansz"
      ]
    }
  ],
  [
    1,
    {
      title: "Articles",
      subtitle: "Write-ups, CTFs, and technical notes",
      listLabel: "Articles",
      phileSort: {
        by: "date",
        direction: "desc"
      },
      entryPrefix: "A",
      postscript: [
        "  ──[ EOF ]──────────────────────────────────────────────────────────────────//───",
        "",
        "  Life can only be understood backwards;",
        "  but it must be lived forwards.",
        "",
        "  Søren Kierkegaard"
      ]
    }
  ],
  [
    2,
    {
      title: "Year-End Wrap-ups",
      listLabel: "Year-End Wrap-ups",
      postscript: [
        "  ──[ 0x146 ]────────────────────────────────────────────────────────────────//───",
        "",
        "  Let this be my last word,",
        "  that I trust in thy love.",
        "",
        "  Tagore, Stray Birds"
      ],
      phileSort: {
        by: "date",
        direction: "desc"
      },
      entryLabel: "year"
    }
  ],
  [
    3,
    {
      title: "Experiments",
      listLabel: "Experiments",
      postscript: [
        "  ──[ SGR ]──────────────────────────────────────────────────────────────────//───",
        "",
        "  Color is only another byte of pressure",
        "  applied to a line that was already executable.",
        "",
        "  dylansz"
      ],
      phileSort: {
        by: "date",
        direction: "desc"
      },
      entryPrefix: "X"
    }
  ]
]);

export function volumeConfig(number: number): VolumeConfig {
  return volumeConfigs.get(number) ?? defaultVolumeConfig(number);
}
