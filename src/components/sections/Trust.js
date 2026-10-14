import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
const trustPoints = [
    { label: 'Zuverlässige Termine', icon: 'check' },
    { label: 'Faire & transparente Preise', icon: 'check' },
    { label: 'Gründliche Reinigung', icon: 'check' },
    { label: 'Karlsruhe & Umgebung', icon: 'check' },
];
export const Trust = () => {
    return (_jsx("section", { className: "bg-muted border-y border-tuerkis/20", children: _jsx(Container, { className: "py-32 md:py-48", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-24 md:gap-32", children: trustPoints.map((point) => (_jsxs("div", { className: "flex items-start gap-12", children: [_jsx(Icon, { name: point.icon, size: 20, className: "text-tuerkis flex-shrink-0 mt-2" }), _jsx("p", { className: "text-sm md:text-base font-medium text-navy", children: point.label })] }, point.label))) }) }) }));
};
