
function LoadingDetails() {
    return (
<div className="animate-pulse flex flex-col md:flex-row w-full gap-16 md:gap-24 items-start">
    <div className="md:h-[clamp(11rem,25vw,24rem)] h-60 w-full md:max-w-[55%] rounded-md aspect-video bg-slate-300 dark:bg-slate-700"></div>
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-y-0 items-start mb-24">
        <div className="h-8 dark:bg-slate-700 bg-slate-300 rounded-md max-w-48 md:col-span-2 mt-3 mb-6 md:mt-0 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-36 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-28 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md w-32 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-36 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-28 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-28 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md w-32 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-36 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-28 mb-3 "></div>
        <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md w-32 "></div>
    </div>
</div>
    )
}

export default LoadingDetails;
