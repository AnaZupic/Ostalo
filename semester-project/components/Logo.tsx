import { cn } from "@/lib/utils";

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <img
      src="./logoHajduk.jpg"
      alt="logo-2"
      style={{ width: "42px", height: "42px" }}
    />

    <span
      className={cn(
        "font-roboto-condensed font-bold text-3xl whitespace-nowrap",
        { "text-brand-blue-50": !dark, "text-brand-grey-600": dark }
      )}
    >
      hajduk story.
    </span>
  </div>
);

export default Logo;
