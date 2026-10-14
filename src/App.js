import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Trust } from './components/sections/Trust';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Why } from './components/sections/Why';
import { Process } from './components/sections/Process';
import { CTA } from './components/sections/CTA';
import { Contact } from './components/sections/Contact';
function App() {
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx(Header, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(Trust, {}), _jsx(Services, {}), _jsx(About, {}), _jsx(Why, {}), _jsx(Process, {}), _jsx(CTA, {}), _jsx(Contact, {})] }), _jsx(Footer, {})] }));
}
export default App;
