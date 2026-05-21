import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const paths: Record<string, string[]> = {
  ArrowRight: ["M5 12h14", "M13 5l7 7-7 7"],
  BadgeCheck: [
    "M12 3l2.2 2.1 3-.1.8 2.9 2.6 1.6-1.4 2.7 1.1 2.8-3 .7-1.9 2.4-2.7-1.3-2.7 1.3-1.9-2.4-3-.7 1.1-2.8-1.4-2.7 2.6-1.6.8-2.9 3 .1L12 3z",
    "M8.8 12.2l2.1 2.1 4.5-4.6",
  ],
  CheckCircle2: ["M21 11.1V12a9 9 0 1 1-5.3-8.2", "M9 11l3 3L22 4"],
  Clock: ["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"],
  Fence: [
    "M4 21V8l4-3 4 3 4-3 4 3v13",
    "M8 21V5",
    "M16 21V5",
    "M2 12h20",
    "M2 17h20",
  ],
  Hammer: [
    "M15 12l-8.5 8.5a2.1 2.1 0 0 1-3-3L12 9",
    "M17 10l4-4-3-3-4 4",
    "M12 9l5 5",
  ],
  LandPlot: ["M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6z", "M9 3v15", "M15 6v15"],
  MapPin: [
    "M12 22s7-5.6 7-12a7 7 0 0 0-14 0c0 6.4 7 12 7 12z",
    "M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  ],
  Menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  Mountain: ["M3 20h18", "M5 20l7-14 4 8 2-4 5 10"],
  Phone: [
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z",
  ],
  Quote: ["M7 17h4V9H5v8c0 2 1 3 3 4", "M17 17h4V9h-6v8c0 2 1 3 3 4"],
  ShieldCheck: [
    "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    "M8.5 12l2.2 2.2L16 9",
  ],
  Shovel: ["M3 21l7-7", "M14 10l-4 4", "M13 3l8 8-3 3-8-8 3-3z", "M7 17l-2 2"],
  Sprout: [
    "M12 21V10",
    "M12 10C8 10 5 7 5 3c4 0 7 3 7 7z",
    "M12 12c4 0 7-3 7-7-4 0-7 3-7 7z",
  ],
  Star: [
    "M12 2l3 6.2 6.8 1-4.9 4.8 1.2 6.8L12 17.6 5.9 20.8 7.1 14 2.2 9.2l6.8-1L12 2z",
  ],
  Tractor: [
    "M4 15.5V8h7l3 4h3.5a3.5 3.5 0 0 1 3.5 3.5",
    "M4 8V5h5",
    "M8 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    "M18 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    "M12 15h4",
  ],
  Trees: ["M12 22V8", "M8 18h8", "M6 14l6-12 6 12H6z", "M4 20h16"],
  Wrench: [
    "M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.8 2.8-2.1-2.1 2.8-2.8z",
  ],
  Send: ["M22 2L11 13", "M22 2l-7 20-4-9-9-4 20-7z"],
  Facebook: [
    "M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z",
  ],
  Google: [
    "M21 12.2c0-.7-.1-1.2-.2-1.8H12v3.5h5.1c-.2 1.2-.9 2.2-2 2.9v2.4h3.2c1.8-1.6 2.7-4 2.7-7z",
    "M12 21c2.4 0 4.4-.8 5.9-2.2l-3.2-2.4c-.9.6-1.9 1-2.7 1-2.1 0-3.9-1.4-4.5-3.4H4.2v2.5C5.7 19.2 8.6 21 12 21z",
    "M7.5 14c-.2-.6-.3-1.2-.3-2s.1-1.4.3-2V7.5H4.2A9 9 0 0 0 3 12c0 1.4.3 2.8 1.2 4l3.3-2z",
    "M12 6.6c1.3 0 2.5.5 3.4 1.3l2.6-2.6C16.4 3.8 14.4 3 12 3 8.6 3 5.7 4.8 4.2 7.5l3.3 2.5C8.1 8 9.9 6.6 12 6.6z",
  ],
};

function createIcon(name: keyof typeof paths, fill = false) {
  return function Icon({ className, ...props }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill={fill ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        {...props}
      >
        {paths[name].map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  };
}

export const ArrowRight = createIcon("ArrowRight");
export const BadgeCheck = createIcon("BadgeCheck");
export const CheckCircle2 = createIcon("CheckCircle2");
export const Clock = createIcon("Clock");
export const Fence = createIcon("Fence");
export const Hammer = createIcon("Hammer");
export const LandPlot = createIcon("LandPlot");
export const MapPin = createIcon("MapPin");
export const Menu = createIcon("Menu");
export const Mountain = createIcon("Mountain");
export const Phone = createIcon("Phone");
export const Quote = createIcon("Quote");
export const ShieldCheck = createIcon("ShieldCheck");
export const Shovel = createIcon("Shovel");
export const Sprout = createIcon("Sprout");
export const Star = createIcon("Star", true);
export const Tractor = createIcon("Tractor");
export const Trees = createIcon("Trees");
export const Wrench = createIcon("Wrench");
export const Send = createIcon("Send");
export const Facebook = createIcon("Facebook");
export const Google = createIcon("Google");
