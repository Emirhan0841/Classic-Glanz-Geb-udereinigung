import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const icons = {
    'building-2': (_jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" })),
    'briefcase': (_jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" })),
    'stairs': (_jsx("polyline", { points: "4 14 4 5 12 5 12 9 20 9 20 14" })),
    'glass-water': (_jsx("path", { d: "M6 4h12v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4z" })),
    'sparkles': (_jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })),
    'hammer': (_jsx("path", { d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" })),
    'zap': (_jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })),
    'snowflake': (_jsx("path", { d: "M20 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM4 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 2v6m0 4v6M12 2l3.464 2m0 8L12 20m0 0l-3.464-2m8-8l-2.598-4.5M6.134 6.5L3.536 2M20.464 16.5l2.598 4.5M3.536 22l2.598-4.5" })),
    'arrow-right': (_jsx("path", { d: "M5 12h14M12 5l7 7-7 7" })),
    'menu': (_jsxs(_Fragment, { children: [_jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }), _jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }), _jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })] })),
    'x': (_jsxs(_Fragment, { children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] })),
    'check': (_jsx("polyline", { points: "20 6 9 17 4 12" })),
};
export const Icon = ({ name, size = 24, strokeWidth = 2, className = '', ...props }) => {
    return (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", className: `icon icon-${name} ${className}`, ...props, children: icons[name] }));
};
