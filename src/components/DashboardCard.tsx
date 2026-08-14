import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  count: string;
  icon: ReactNode;
  onClick: () => void;
};

export default function DashboardCard({
  title,
  count,
  icon,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="group w-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-[#719743]/10 p-3 text-[#719743]">
          {icon}
        </div>

        <ChevronRight className="text-slate-400 group-hover:text-[#719743]" />
      </div>

      <h3 className="mt-3 text-base font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {count}
      </p>
    </button>
  );
}