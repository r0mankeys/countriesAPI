function Footer() {
    return (
        <div className="relative">
            <footer className="absolute bottom-0 text-black dark:text-white w-full">
                <div className="w-full">
                    <p className="p-4 rounded-md w-fit bg-slate-100 hover:bg-slate-200 dark:bg-[hsl(222,14%,14%)] dark:hover:bg-dark-nav mx-auto mb-8 shadow">
                        Made with 💙 by <a href="https://github.com/r0mankeys" className="text-blue-500 dark:text-blue-400 hover:underline">Roman</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
