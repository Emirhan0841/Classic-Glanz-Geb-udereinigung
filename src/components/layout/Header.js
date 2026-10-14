import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';
import { navItems } from '../../data/navigation';
export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (_jsxs("header", { className: "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-cg-linie transition-all duration-200", children: [_jsxs(Container, { className: "py-4 flex items-center justify-between", children: [_jsx("div", { className: "flex items-center", children: _jsx("img", { src: "/brand/logo/logo-horizontal.svg", alt: "Classic Glanz Geb\u00E4udereinigung", className: "cg-logo cg-logo--header" }) }), _jsx("nav", { className: "hidden md:flex items-center gap-32", children: navItems.map((item) => (_jsx("a", { href: item.href, className: "text-sm text-navy font-medium hover:text-petrol transition-colors", children: item.label }, item.href))) }), _jsx("div", { className: "hidden md:block", children: _jsx("button", { className: "cg-btn cg-btn--primary", style: { height: '46px', padding: '0 22px', minHeight: 'auto' }, children: "Angebot anfragen" }) }), _jsx("button", { className: "md:hidden p-8 hover:bg-muted rounded-md transition-colors", onClick: () => setMenuOpen(!menuOpen), "aria-label": "Men\u00FC \u00F6ffnen", "aria-expanded": menuOpen, children: _jsx(Icon, { name: menuOpen ? 'x' : 'menu', size: 24 }) })] }), menuOpen && (_jsx("div", { className: "md:hidden border-t border-cg-linie bg-white", children: _jsxs(Container, { className: "py-16 flex flex-col gap-16", children: [navItems.map((item) => (_jsx("a", { href: item.href, className: "text-sm text-navy font-medium hover:text-petrol transition-colors", onClick: () => setMenuOpen(false), children: item.label }, item.href))), _jsx(Button, { variant: "primary", size: "md", className: "w-full", children: "Angebot anfragen" })] }) }))] }));
};
