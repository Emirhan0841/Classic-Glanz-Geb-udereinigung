import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from '../ui/Container';
import { services } from '../../data/services';
const serviceImages = {
    gebaudereinigung: '/classic-glanz-images/services/service-building-cleaning.webp',
    fensterreinigung: '/classic-glanz-images/services/service-window-cleaning.webp',
    grundreinigung: '/classic-glanz-images/services/service-deep-cleaning.webp',
    unterhaltsreinigung: '/classic-glanz-images/services/service-maintenance-cleaning.webp',
    hochdruckreinigung: '/classic-glanz-images/services/service-pressure-washing.webp',
    winterdienst: '/classic-glanz-images/services/service-winter-service.webp',
};
export const Services = () => {
    return (_jsx("section", { id: "services", className: "bg-white", children: _jsxs(Container, { className: "section-spacing", children: [_jsxs("div", { className: "mb-64", children: [_jsx("span", { className: "subline", children: "Leistungen" }), _jsx("h2", { className: "font-display text-4xl md:text-5xl text-navy mb-16", children: "Unsere Services" }), _jsx("p", { className: "text-base text-foreground max-w-2xl", children: "Von Unterhaltsreinigung bis Hochdruckreinigung: Wir bieten professionelle Reinigungsservices f\u00FCr jeden Bedarf." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-48 md:gap-64", children: services.map((service) => (_jsx("div", { className: "group border-l-4 border-tuerkis pl-24 py-12 hover:border-petrol transition-colors", children: _jsxs("div", { className: "flex gap-24 items-start", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-56 h-56 rounded-md overflow-hidden bg-muted", children: _jsx("img", { src: serviceImages[service.id], alt: service.title, className: "w-full h-full object-cover", loading: "lazy" }) }) }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-lg font-semibold mb-8 text-navy group-hover:text-petrol transition-colors", children: service.title }), _jsx("p", { className: "text-sm md:text-base text-foreground leading-relaxed", children: service.description })] })] }) }, service.id))) })] }) }));
};
