"use client";

import { themeColors, radiusTheme } from "@/lib/theme";

import { CopyIcon } from "@/components/icons";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CopyTheme() {
  const { toast } = useToast();

  const hslToHex = (hsl: string) => {
    const matches = hsl.match(/\d+(\.\d+)?/g);
    if (!matches || matches.length < 3) {
      throw new Error("Invalid HSL color format");
    }

    const [h, s, l] = matches.map(Number);

    const sFraction = s / 100;
    const lFraction = l / 100;

    const c = (1 - Math.abs(2 * lFraction - 1)) * sFraction;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = lFraction - c / 2;

    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  };

  const handleClick = () => {
    let themeString = themeColors
      .map((item) => {
        const rootStyles = window.getComputedStyle(document.documentElement);
        const color = rootStyles.getPropertyValue(item.variable).split(" ").join(" ");

        let colorHex = rootStyles.getPropertyValue(item.hex);
        if (!colorHex) {
          colorHex = hslToHex(color);
        }

        return `${item.variable}: ${color} //${colorHex}`;
      })
      .join("\n");

    const radiusString = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(radiusTheme.variable);

    themeString += `\n${radiusTheme.variable}: ${radiusString};`;

    navigator.clipboard.writeText(themeString);
    toast({ title: "Wohoo!", description: "Theme copied to clipboard!" });
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={"ghost"}
            size="icon"
            className="h-6 w-6"
            onClick={handleClick}
          >
            <CopyIcon />
            <span className="sr-only">Copy theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Copy theme to clipboard</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
