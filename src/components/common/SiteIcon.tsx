export type IconName =
  | "baptism"
  | "event-announcement"
  | "contact"
  | "faith-community"
  | "photo-documentation"
  | "youth"
  | "prayer"
  | "bible-study"
  | "giving"
  | "outreach"
  | "pastoral-care"
  | "service-information"
  | "sunday-school"
  | "worship"
  | "church-location"
  | "serving";

interface SiteIconProps {
  name: IconName;
  className?: string;
}

export default function SiteIcon({ name, className }: SiteIconProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block size-6 shrink-0 ${className ?? ""}`}
      style={{
        backgroundColor: "currentColor",
        maskImage: `url(/icons/warm-sanctuary/${name}.svg)`,
        WebkitMaskImage: `url(/icons/warm-sanctuary/${name}.svg)`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskSize: "contain",
        WebkitMaskSize: "contain",
      }}
    />
  );
}
