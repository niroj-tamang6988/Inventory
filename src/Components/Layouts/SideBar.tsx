import { sidebarItems } from "../../Config/Mockdata.ts"


    type SidebarProps = {
  activeModule: string;
  onSelect: (module: string) => void;
};


    export function Sidebar( {activeModule, onSelect}: SidebarProps) {
    return (
        <aside className="border-b border-slate-300 bg-white md:border-r md:border-b-0">
        <div className="border-b border-slate-200 px-4 py-3">
            <p className="text-[11px] font-bold tracking-[0.14em] text-slate-500 uppercase">Modules</p>
            <h2 className="text-lg font-extrabold">Navigation</h2>
        </div>
        <nav className="grid grid-cols-2 md:grid-cols-1">
            {sidebarItems.map((item) => (
            <button
                key={item}
                type="button"
                onClick={() => onSelect(item)}
                className={`min-h-11 cursor-pointer border-b border-slate-200 px-4 text-left text-sm font-semibold transition ${
                activeModule === item ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
            >
                {item}
            </button>
            ))} 
        </nav>
        </aside>
    );
    }
