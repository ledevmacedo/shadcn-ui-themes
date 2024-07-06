"use client";

import {
  HsvaColor,
  Hue,
  Saturation,
  hexToHsva,
  hslaToHsva,
  hsvaToHex,
  hsvaToHsla,
  validHex,
} from "@uiw/react-color";
import { useEffect, useState } from "react";

import { Theme } from "@/lib/theme";

import { EyeDropper } from "@/components/eye-dropper";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "./ui/slider";

interface ItemProps {
  theme: Theme;
}

export function Item({ theme }: ItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hsva, setHsva] = useState<HsvaColor>({ h: 0, s: 0, v: 68, a: 1 });
  const [hexValue, setHexValue] = useState("#000000");
  const [hsl, setHsl] = useState({ h: 0, s: 0, l: 0, a: 1 });

  useEffect(() => {
    const rootStyles = window.getComputedStyle(document.documentElement);
    const defaultColor = rootStyles.getPropertyValue(theme.variable).split(" ");

    const hsvaColor = hslaToHsva({
      h: parseFloat(defaultColor[0]),
      s: parseFloat(defaultColor[1]),
      l: parseFloat(defaultColor[2]),
      a: hsva.a,
    });

    setHsva(hsvaColor);
    setHexValue(hsvaToHex(hsvaColor));
    setHsl(hsvaToHsla(hsvaColor));
  }, [isOpen]);

  const updateColors = (color: { h: number; s: number; l: number; a: number }) => {
    (document.querySelector(":root") as HTMLElement)?.style.setProperty(
      theme.variable,
      `${color.h.toFixed(2)} ${color.s.toFixed(2)}% ${color.l.toFixed(2)}% / ${color.a.toFixed(2)}`,
    );
  };


  const updateHex = (color: string, alpha: string) => {
    (document.querySelector(":root") as HTMLElement)?.style.setProperty(
      theme.hex,
      `${color}- ${alpha}%`,
    );
  };

  const handleEyeDropper = (color: { h: number; s: number; l: number }) => {
    const hsvaColor = hslaToHsva({ ...color, a: hsl.a });
    setHexValue(hsvaToHex(hsvaColor));
    setHsva(hsvaColor);
    setHsl({ ...color, a: hsl.a });
    updateColors({ ...color, a: hsl.a });
    updateHex(hexValue, alpha.toString());
  };

  const handleSaturation = (color: HsvaColor) => {
    setHsva(color);
    setHexValue(hsvaToHex(color));
    const hslaColor = hsvaToHsla(color);
    setHsl(hslaColor);
    updateColors(hslaColor);
    updateHex(hexValue, alpha.toString());
  };

  const handleHue = (color: { h: number }) => {
    const newHsva = { ...hsva, h: color.h };
    setHsva(newHsva);
    setHexValue(hsvaToHex(newHsva));
    const hslaColor = hsvaToHsla(newHsva);
    setHsl(hslaColor);
    updateColors(hslaColor);
    updateHex(hexValue, alpha.toString());
  };

  const handleHex = (color: string) => {
    setHexValue(color);

    if (validHex(color)) {
      const hsvaColor = hexToHsva(color);
      setHsva(hsvaColor);
      const hslaColor = hsvaToHsla(hsvaColor);
      setHsl(hslaColor);
      updateColors(hslaColor);
      updateHex(hexValue, alpha.toString());
    }
  };

  const handleHslChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const value = parseFloat(e.target.value);
    const newHsl = { ...hsl, [type]: value };
    setHsl(newHsl);
    const hsvaColor = hslaToHsva(newHsl);
    setHsva(hsvaColor);
    setHexValue(hsvaToHex(hsvaColor));
    updateColors(newHsl);
    updateHex(hexValue, alpha.toString());
  };

  const handleSliderChange = (newAlpha: number[]) => {
    const newHsva = { ...hsva, a: newAlpha[0] / 100 };
    setHsva(newHsva);
    setHsl({ ...hsl, a: newAlpha[0] / 100 });
    setAlpha(newAlpha);
    updateColors({ ...hsl, a: newAlpha[0] / 100 });
  };

  const formatSliderValue = (alpha: number): string => {
    if (alpha === 0) {
      return "0";
    } else if (alpha < 100) {
      return (alpha / 100).toFixed(2);
    } else {
      return "1";
    }
  };

  const [alpha, setAlpha] = useState<number[]>([Math.round(hsva.a * 100)]);

  return (
    <div>
      <div className="relative flex w-full items-center justify-between rounded-md border border-transparent px-2 py-1 text-muted-foreground">
        {theme.title}

        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="ml-2 h-6 w-6 shrink-0 border p-0 transition-colors hover:opacity-90 sm:ml-0"
              style={{ backgroundColor: `hsla(var(${theme.variable}))` }}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[224px]">
            <DropdownMenuLabel className="flex items-center justify-between">
              {theme.title}
              <EyeDropper handleChangeStyles={handleEyeDropper} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex flex-col p-2">
              <Saturation
                className="border"
                radius="var(--radius)"
                hsva={hsva}
                onChange={handleSaturation}
              />

              <Hue
                className="mt-1 border"
                radius="var(--radius)"
                hue={hsva.h}
                onChange={handleHue}
              />

              <div className="mt-0.5">
                <Label className="text-xs">Hex</Label>
                <Input
                  className="h-7 px-1 pb-1.5 text-xs"
                  value={hexValue}
                  onChange={(e) => handleHex(e.target.value)}
                />
              </div>
              <div className="mt-2 ">
                <p className="text-xs">Alpha</p>
                <div className="flex gap-2 items-center">
                  <div className="w-10/12 ">
                    <Slider
                      className="bg-secondary rounded-md"
                      value={alpha}
                      max={100}
                      step={1}
                      onValueChange={handleSliderChange}
                    />
                  </div>
                  <div className="w-2/12 ">
                    <p className="text-xs ">{formatSliderValue(alpha[0])}</p>
                  </div>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
