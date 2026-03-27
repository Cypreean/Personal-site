interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`bg-[#111] border border-[#222] overflow-hidden ${className}`}
    >
      <div className="bg-[#161616] px-3 py-2 flex items-center gap-1.5 border-b border-[#222]">
        <div className="w-2 h-2 rounded-full bg-red-500 opacity-70" />
        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-70" />
        <div className="w-2 h-2 rounded-full bg-green-500 opacity-70" />
        <span className="text-[#555] text-xs ml-2">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
