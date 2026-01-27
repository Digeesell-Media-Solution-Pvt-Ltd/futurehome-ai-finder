import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-charcoal text-white hover:bg-charcoal-light shadow-md hover:shadow-lg hover:scale-[1.02]",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-white font-medium",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-charcoal underline-offset-4 hover:underline font-medium",
        gold: "bg-gold-dark text-white font-semibold shadow-gold hover:bg-primary hover:shadow-gold-lg hover:scale-[1.02]",
        "gold-outline": "border-2 border-gold-dark text-charcoal bg-transparent hover:bg-gold-dark hover:text-white font-semibold",
        hero: "bg-charcoal text-white font-semibold px-8 py-4 text-base shadow-lg hover:bg-charcoal-light hover:shadow-xl hover:scale-[1.02] rounded-lg",
        "hero-outline": "border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-white font-semibold px-8 py-4 text-base rounded-lg",
        dark: "bg-charcoal text-white font-semibold hover:bg-charcoal-light hover:scale-[1.02]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
