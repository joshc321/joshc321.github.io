"use client";

import {NavElementSpec} from "@/components/SideNav/SideNav.spec";
import useScrollspy from "@/shared/helpers/hooks/useScrollspy";
function NavElement({label, href, active}: NavElementSpec) {

    if(active) {
        return (
            <a className={`group flex items-center py-3`}  href={href}>
            <span
                className="nav-indicator mr-4 h-px transition-all w-16 bg-slate-200  motion-reduce:transition-none">
            </span>
                <span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-200">
              {label}
            </span>
            </a>
        )
    } else {
        return (
            <a className={`group flex items-center py-3`}  href={href}>
            <span
                className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
            </span>
                <span
                    className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              {label}
            </span>
            </a>
        )
    }
}
export default function SideNav() {
    const ids = ["about", "experience", "projects"];
    const activeId = useScrollspy(ids, 100)

    return (
        <nav className="nav hidden lg:block">
            <ul className="mt-16 w-max">
                <li>
                    <NavElement label={"about"} href={"#about"} active={activeId === "about"} />
                    <NavElement label={"experience"} href={"#experience"} active={activeId === "experience"} />
                    <NavElement label={"projects"} href={"#projects"} active={activeId === "projects"} />
                </li>
            </ul>
        </nav>
    )
}