import { CopyTheme } from "@/components/copy-theme";
import { Checkbox } from "@/components/ui/checkbox"

import { Header } from "@/components/header";
import { AlertCircle, ArrowRight, Terminal } from "@/components/icons";
import { Sidebar } from "@/components/sidebar";
import { ToastDemo } from "@/components/toast-demo";

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
              </TabsList>
              <TabsContent value="default">
                <DefaultBlock />
              </TabsContent>
              <TabsContent value="orderBlock">
                <OrderBlock />
              </TabsContent>
            </Tabs>
          </section>
        </div>
      </div>
    </main>
  );
}
