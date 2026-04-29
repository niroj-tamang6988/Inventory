


function DashboardHeader(){

    



    return(

            <>
            <div className="w-full">
                <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-slate-300 bg-[#0f172a] px-4 py-2 text-slate-100">
                <div>
                    <p className="text-[11px] font-bold tracking-[0.15em] text-slate-300 uppercase">Enterprise Resource Planning</p>
                    <h1 className="text-xl font-extrabold tracking-tight">SAP-Style Control Center</h1>
                </div>
                <div className="flex w-full items-center gap-2 sm:w-auto">
                    <input
                    type="text"
                    placeholder="Search orders, vendors, materials..."
                    //   value={globalSearch}
                    //   onChange={(event) => setGlobalSearch(event.target.value)}
                    className="h-9 w-full rounded-md border border-slate-500 bg-slate-800 px-3 text-sm text-slate-100 placeholder:text-slate-400 sm:w-80"
                    />
                    <button
                    type="button"
                    //   onClick={handleExecuteSearch}
                    className="h-9 cursor-pointer rounded-md bg-cyan-500 px-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                    >
                    Execute
                    </button>
                </div>
                </header>
                </div>
                </>
                )
            }

    export default DashboardHeader