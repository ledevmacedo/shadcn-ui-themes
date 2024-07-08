import React from 'react';
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const backgroundVariants = cva(
    "bg-cover bg-center",
    {
        variants: {
            variant: {
                default: "bg-cover bg-center bg-[url('https://placehold.co/600x400')]",
                abstract: "bg-[url('https://placehold.co/600x400')]",
            },
            repeat: {
                default: "bg-no-repeat",
                pattern: "bg-repeat",
            },
        },
        defaultVariants: {
            variant: "default",
            repeat: "default",
        },
    }
);

interface BgProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof backgroundVariants> {
    children?: React.ReactNode;
    className?: string;
}

export function Background({ children, className, variant, repeat, ...props }: BgProps) {
    return (
        <div className={cn(backgroundVariants({ variant, repeat }), className)} {...props}>
            {children}
        </div>
    );
}
