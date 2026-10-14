import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
const steps = [
    {
        number: '1',
        title: 'Anfrage senden',
        description: 'Kontaktieren Sie uns per Telefon, E-Mail oder über das Kontaktformular.',
    },
    {
        number: '2',
        title: 'Bedarf besprechen',
        description: 'Wir besprechen Ihre Anforderungen und entwickeln ein passendes Konzept.',
    },
    {
        number: '3',
        title: 'Angebot erhalten',
        description: 'Sie erhalten ein unverbindliches, transparentes Angebot für Ihre Reinigung.',
    },
    {
        number: '4',
        title: 'Reinigung startet',
        description: 'Nach Absprache beginnt die professionelle Reinigung nach Ihren Vorgaben.',
    },
];
export const Process = () => {
    return (_jsx("section", { id: "process", className: "bg-muted border-y border-tuerkis/20", children: _jsxs(Container, { className: "section-spacing", children: [_jsxs("div", { className: "mb-64", children: [_jsx("span", { className: "subline", children: "Ablauf" }), _jsx("h2", { className: "font-display text-4xl md:text-5xl text-navy mb-16", children: "So funktioniert's" }), _jsx("p", { className: "text-base text-foreground max-w-2xl", children: "Der Weg zu Ihrer professionellen Geb\u00E4udereinigung ist einfach und unkompliziert." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-32 md:gap-24", children: steps.map((step, index) => (_jsxs("div", { children: [_jsxs("div", { className: "mb-24", children: [_jsx("div", { className: "inline-flex items-center justify-center w-56 h-56 rounded-md bg-navy text-white font-semibold text-2xl mb-16", children: step.number }), _jsx("h3", { className: "font-semibold text-lg text-navy mb-12", children: step.title }), _jsx("p", { className: "text-base text-foreground leading-relaxed", children: step.description })] }), index < steps.length - 1 && (_jsxs("div", { className: "hidden md:flex items-center justify-center h-16 -mr-32", children: [_jsx("div", { className: "w-12 h-0.5 bg-tuerkis/30" }), _jsx(Icon, { name: "arrow-right", size: 16, className: "text-tuerkis/30 absolute ml-16" })] }))] }, step.number))) })] }) }));
};
