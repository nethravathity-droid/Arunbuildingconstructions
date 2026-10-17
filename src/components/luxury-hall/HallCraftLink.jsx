import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

/**
 * Gold-accented close for the Refined Living section. Points at the existing
 * /projects route — no new route or anchor is introduced for this feature.
 */
export function HallCraftLink({ className = "" }) {
  return (
    <Link to="/projects" className={`lux-hall__craft ${className}`.trim()}>
      <span className="lux-hall__craft-label">Discover Our Craft</span>
      <span className="lux-hall__craft-icon" aria-hidden="true">
        <ArrowRight size={15} strokeWidth={1.5} />
      </span>
    </Link>
  );
}

export default HallCraftLink;
