import { cn } from "@/lib/utils";

interface BrowserWindowProps {
    className?: string;
    children?: React.ReactNode;
    url?: string;
}

export function BrowserWindow({ className, children, url = "indodesign.website" }: BrowserWindowProps) {
    return (
        <div className={cn("rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl", className)}>
            {/* Browser Header */}
            <div className="flex items-center gap-4 px-4 py-3 bg-[#2a2a2a] border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="px-3 py-1 rounded bg-[#111] text-xs text-center text-gray-500 w-full max-w-[200px] truncate">
                        {url}
                    </div>
                </div>
                <div className="w-10" /> {/* Spacer for balance */}
            </div>

            {/* Browser Content */}
            <div className="bg-[#111] p-0 relative">
                {children ? children : (
                    <div className="p-4 space-y-4 animate-pulse">
                        <div className="h-32 bg-white/5 rounded-lg w-full mb-4" />
                        <div className="flex gap-4">
                            <div className="h-20 bg-white/5 rounded-lg w-2/3" />
                            <div className="h-20 bg-white/5 rounded-lg w-1/3" />
                        </div>
                        <div className="h-4 bg-white/5 rounded w-3/4" />
                        <div className="h-4 bg-white/5 rounded w-1/2" />
                    </div>
                )}
            </div>
        </div>
    );
}
