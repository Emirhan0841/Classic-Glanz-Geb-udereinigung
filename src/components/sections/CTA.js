import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
export const CTA = () => {
    return (_jsx("section", { className: "bg-navy border-y border-navy", children: _jsxs(Container, { className: "py-64 md:py-96 text-center", children: [_jsx("h2", { className: "font-display text-4xl md:text-5xl text-white font-semibold mb-24 max-w-3xl mx-auto", children: "Kontaktieren Sie uns f\u00FCr ein kostenloses Angebot" }), _jsx("p", { className: "text-base md:text-lg text-white/75 mb-40 max-w-2xl mx-auto", children: "Schildern Sie uns kurz Ihren Bedarf und erhalten Sie ein unverbindliches Angebot von unserem Team." }), _jsx(Button, { variant: "primary", size: "lg", children: "Jetzt Angebot anfragen" })] }) }));
};
