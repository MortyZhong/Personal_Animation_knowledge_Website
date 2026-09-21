import { useState } from "react";
import { Sparkles, Orbit } from "lucide-react";
export function Artwork({
  src,
  className = "",
}: {
  src?: string;
  className?: string;
}) {
  const [failedSource, setFailedSource] = useState<string>();
  return src && failedSource !== src ? (
    <img
      className={`character-art ${className}`}
      src={src}
      alt=""
      aria-hidden="true"
      onError={() => setFailedSource(src)}
      draggable={false}
    />
  ) : (
    <div className={`art-placeholder ${className}`} aria-hidden="true">
      <Orbit size={110} strokeWidth={0.7} />
      <Sparkles size={28} />
    </div>
  );
}
