export interface Theme {
  title: string;
  variable: string;
  hex: string;
}

export const themeColors = [
  {
    title: "Primary",
    variable: "--primary",
    hex: "--primary-hex",
  },
  {
    title: "Primary Foreground",
    variable: "--primary-foreground",
    hex: "--primary-foreground-hex",
  },
  {
    title: "Secondary",
    variable: "--secondary",
    hex: "--secondary-hex",
  },
  {
    title: "Secondary Foreground",
    variable: "--secondary-foreground",
    hex: "--secondary-foreground-hex",
  },
  {
    title: "Background",
    variable: "--background",
    hex: "--background-hex",
  },
  {
    title: "Foreground",
    variable: "--foreground",
    hex: "--foreground-hex",
  },
  {
    title: "Card",
    variable: "--card",
    hex: "--card-hex",
  },
  {
    title: "Card Foreground",
    variable: "--card-foreground",
    hex: "--card-foreground-hex",
  },
  {
    title: "Popover",
    variable: "--popover",
    hex: "--popover-hex",
  },
  {
    title: "Popover Foreground",
    variable: "--popover-foreground",
    hex: "--popover-foreground-hex",
  },
  {
    title: "Muted",
    variable: "--muted",
    hex: "--muted-hex",
  },
  {
    title: "Muted Foreground",
    variable: "--muted-foreground",
    hex: "--muted-foreground-hex",
  },
  {
    title: "Accent",
    variable: "--accent",
    hex: "--accent-hex",
  },
  {
    title: "Accent Foreground",
    variable: "--accent-foreground",
    hex: "--accent-foreground-hex",
  },
  {
    title: "Destructive",
    variable: "--destructive",
    hex: "--destructive-hex",
  },
  {
    title: "Destructive Foreground",
    variable: "--destructive-foreground",
    hex: "--destructive-foreground-hex",
  },
  {
    title: "Input",
    variable: "--input",
    hex: "--input-hex",
  },
  {
    title: "Input Foreground",
    variable: "--input-foreground",
    hex: "--input-foreground-hex",
  },
  {
    title: "Border",
    variable: "--border",
    hex: "--border-hex",
  },
  {
    title: "Ring",
    variable: "--ring",
    hex: "--ring-hex",
  },
];

export const radiusTheme = {
  title: "Radius",
  variable: "--radius",
  hex: "",
};

export type savedTheme = {
  name: string;
  radius: string;
  colors: {
    title: string;
    variable: string;
    hex: Theme[];
  }[];
};
