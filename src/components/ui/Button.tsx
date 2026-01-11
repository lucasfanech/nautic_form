import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

        const variants = {
            primary: "bg-ocean text-white hover:bg-ocean-dark",
            secondary: "bg-white border border-gray-200 text-charcoal hover:bg-gray-50",
            outline: "border border-gray-300 bg-transparent hover:bg-gray-100 text-charcoal"
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-8 py-2 text-base",
            lg: "h-14 px-10 text-lg"
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
