import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
export const Button = React.forwardRef(({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    const baseClass = 'cg-btn';
    const variantClass = `cg-btn--${variant}`;
    const sizeClass = {
        sm: 'px-12 py-4 text-sm',
        md: 'px-16 py-6 text-base',
        lg: 'px-24 py-8 text-base',
    }[size];
    return (_jsx("button", { ref: ref, className: `${baseClass} ${variantClass} ${sizeClass} ${className}`, ...props }));
});
Button.displayName = 'Button';
