// Vertical timeline used by Experience and Education.
export const Timeline = ({ children }) => (
  <div className="relative mx-auto max-w-4xl">
    <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-purple-500 via-purple-500/40 to-transparent md:left-[calc(25%+7px)]" />
    <div className="space-y-10">{children}</div>
  </div>
);

export const TimelineItem = ({ date, current, children }) => (
  <div className="relative grid gap-3 pl-8 md:grid-cols-4 md:gap-8 md:pl-0">
    <div className="pt-1 text-sm text-neutral-400 md:pr-8 md:text-right">{date}</div>
    <span
      className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-purple-400 md:left-[25%] ${
        current ? "bg-purple-400 shadow-[0_0_0_6px_rgba(168,85,247,0.2)]" : "bg-neutral-950"
      }`}
    />
    <div className="md:col-span-3 md:pl-8">
      <div className="spotlight rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 transition hover:border-purple-500/40 hover:shadow-[0_0_40px_-12px_rgba(168,85,247,0.45)]">
        {children}
      </div>
    </div>
  </div>
);
