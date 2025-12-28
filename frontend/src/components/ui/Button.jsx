import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'md', children, isLoading, ...props }, ref) => {
    const variants = {
        primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20',
        secondary: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700',
        ghost: 'bg-transparent hover:bg-zinc-800/50 text-zinc-300 hover:text-white',
        destructive: 'bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20',
        outline: 'bg-transparent border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white'
    };

    const sizes = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10 p-0 flex items-center justify-center'
    };

    return (
        <motion.button
            ref={ref}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : null}
            {children}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
