import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const getSubUI = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('netflix')) return { color: 'bg-red-600', logo: 'N' };
  if (n.includes('spotify')) return { color: 'bg-green-500', logo: 'S' };
  if (n.includes('adobe')) return { color: 'bg-blue-600', logo: 'A' };
  if (n.includes('prime') || n.includes('amazon')) return { color: 'bg-blue-400', logo: 'P' };
  if (n.includes('gpt') || n.includes('openai')) return { color: 'bg-emerald-600', logo: 'O' };
  if (n.includes('hulu')) return { color: 'bg-green-600', logo: 'H' };
  if (n.includes('youtube')) return { color: 'bg-red-500', logo: 'Y' };
  return { color: 'bg-indigo-600', logo: name.charAt(0).toUpperCase() };
};
