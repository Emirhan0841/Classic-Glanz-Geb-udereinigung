import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
const advantages = [
    {
        title: 'Persönlicher Ansprechpartner',
        description: 'Ein Ansprechpartner, der Ihre Anforderungen kennt und verantwortlich ist.',
        icon: 'briefcase',
    },
    {
        title: 'Flexible Reinigungstermine',
        description: 'Nach Ihren Wünschen: täglich, wöchentlich, monatlich oder nach Bedarf.',
        icon: 'check',
    },
    {
        title: 'Individuelle Angebote',
        description: 'Kostenlose und unverbindliche Angebote, speziell auf Ihren Bedarf zugeschnitten.',
        icon: 'briefcase',
    },
    {
        title: 'Gründlich & Zuverlässig',
        description: 'Professionelle Standards, moderne Methoden und sichtbare Sauberkeit.',
        icon: 'sparkles',
    },
];
export const Why = () => {
    return (_jsx("section", { className: "bg-white", children: _jsxs(Container, { className: "section-spacing", children: [_jsx("span", { className: "subline", children: "Vorteile" }), _jsx("h2", { className: "font-display text-4xl md:text-5xl text-navy mb-64", children: "Warum Sie uns w\u00E4hlen sollten" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-48 md:gap-64", children: advantages.map((advantage) => (_jsxs("div", { className: "flex gap-24 p-24 rounded-md border border-tuerkis/20 hover:border-petrol hover:bg-muted/30 transition-all", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-48 h-48 rounded-md bg-tuerkis/10 flex items-center justify-center", children: _jsx(Icon, { name: advantage.icon, size: 24, className: "text-tuerkis" }) }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "font-semibold text-lg text-navy mb-12", children: advantage.title }), _jsx("p", { className: "text-base text-foreground", children: advantage.description })] })] }, advantage.title))) })] }) }));
};
