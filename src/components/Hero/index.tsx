import SideNav from "@/components/SideNav";

export default function Hero() {

    const info = {
        name: "Josh Cordero",
        primary: "The Thinker",
        secondary: "Passionate about leveraging technology to drive positive change."
    }

    return (
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">{info.name}</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                {info.primary}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
                {info.secondary}
            </p>
            <SideNav />
        </div>
    )
}