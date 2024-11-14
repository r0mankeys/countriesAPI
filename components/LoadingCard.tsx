function LoadingCard() {
    return (
            <div className="animate-pulse flex flex-col rounded-md shadow">
                <div className="rounded-t-md dark:bg-slate-700 bg-slate-300 h-44 "></div>
                <div className="p-4">
                    <div className="h-8 dark:bg-slate-700 bg-slate-300 rounded-md max-w-48 mt-3 mb-6"></div>
                    <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-36 mb-3"></div>
                    <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md max-w-28 mb-3"></div>
                    <div className="h-4 dark:bg-slate-700 bg-slate-300 rounded-md w-32"></div>
                </div>
            </div>
    );
}

export default LoadingCard;
