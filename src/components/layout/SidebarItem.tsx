import { LucideIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group hover:bg-white/5",
        isActive ? "bg-primary/10 text-primary" : "text-gray-400 hover:text-white"
      )}
    >
      <Icon size={20} className={cn("transition-colors", isActive ? "text-primary" : "group-hover:text-white")} />
      <span className="font-medium">{label}</span>
    </Link>
  );
};

export { SidebarItem };
