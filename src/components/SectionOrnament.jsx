export default function SectionOrnament({ className = "" }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      <div className="flex items-center gap-3">
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#caa193] sm:w-28" />
        <span className="text-[9px] text-[#caa193]">◆</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#caa193] sm:w-28" />
      </div>
    </div>
  );
}
