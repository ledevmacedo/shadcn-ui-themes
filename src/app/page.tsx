import { CopyTheme } from "@/components/copy-theme";
import { Checkbox } from "@/components/ui/checkbox"

import { Header } from "@/components/header";
import { AlertCircle, ArrowRight, Terminal } from "@/components/icons";
import { Sidebar } from "@/components/sidebar";
import { ToastDemo } from "@/components/toast-demo";
import { useState } from "react";
import { SaveThemeDialog } from "@/components/save-theme-dialog";
import { SavedThemes } from "@/components/saved-themes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DefaultBlock } from "@/components/blocks/defaultBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OrderBlock } from "@/components/blocks/orderBlock";
import { CalendarDemo } from "@/components/demos/calendarDemo";
import { DatePickerWithRange } from "@/components/demos/DatePickerWithRange";
import { CommandDemo } from "@/components/demos/commandDemo";
import { ChartDemo } from "@/components/demos/chartDemo";
import { Badge } from "@/components/ui/badge";
import { RadialChart } from "@/components/demos/radialChart";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col ">
      <Header />
      <div className="flex-1">
        <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <Sidebar />
          <section className="py-6">
            <div className="mb-4 flex items-center space-x-1 border-b px-2 py-1 text-sm text-muted-foreground">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap">
                shadcn/ui themes
              </div>
              <ArrowRight />
              <div className="flex w-full items-center gap-1 whitespace-nowrap font-medium text-foreground">
                Your Theme
                <CopyTheme />
                <SaveThemeDialog />
                <SavedThemes />
              </div>
            </div>
            <Tabs defaultValue="default" className="">
              <TabsList>
                <TabsTrigger value="default">Default</TabsTrigger>
                <TabsTrigger value="orderBlock">Orders</TabsTrigger>
                <TabsTrigger value="demos">Demos<Badge className="bg-lime-400 py-0 px-1 ml-2">New</Badge></TabsTrigger>
                <TabsTrigger value="charts">Charts<Badge className="bg-lime-400 py-0 px-1 ml-2">New</Badge></TabsTrigger>
                <TabsTrigger value="custom">Custom</TabsTrigger>
              </TabsList>
              <TabsContent value="default">
                <DefaultBlock />
              </TabsContent>
              <TabsContent value="orderBlock">
                <OrderBlock />
              </TabsContent>
              <TabsContent value="demos">
                <div className="flex flex-col gap-4 flex-wrap">
                  <ChartDemo />
                  <div className="flex gap-4">

                    <CalendarDemo />
                    <CommandDemo />
                  </div>
                  <DatePickerWithRange />
                </div>
              </TabsContent>
              <TabsContent value="charts">
                <div className="flex gap-2 md:flex-nowrap flex-wrap" >
                  <div className="w-full md:w-auto">
                    <ChartDemo />
                  </div>
                  <div className="w-full md:w-auto">
                    <RadialChart />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="custom">
                <div className="w-full h-screen flex justify-center content-center items-center">
                  <h1 className="text-2xl font-semibold">Add your current component here</h1>

                </div>
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </div>
    </main>
  );
}
