import {
  Building2,
  Dumbbell,
  GraduationCap,
  House,
  Stethoscope,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";

const industryIcons: Record<string, LucideIcon> = {
  Stethoscope,
  Building2,
  Dumbbell,
  GraduationCap,
  Store,
  Truck,
  House,
};

export function IndustryIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = industryIcons[name] ?? Building2;
  return <Icon className={className} aria-hidden />;
}
