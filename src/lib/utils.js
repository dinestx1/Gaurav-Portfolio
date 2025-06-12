import { clsx} from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}



// utils/dateFormatter.js
export const formatTimeline = (startDate, endDate, isOngoing) => {
  if (!startDate) return "TBD";
  
  const start = new Date(startDate);
  const formattedStart = start.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });

  if (isOngoing) {
    return `${formattedStart} - Present`;
  }

  if (!endDate) return formattedStart;

  const end = new Date(endDate);
  const formattedEnd = end.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric'
  });

  return `${formattedStart} - ${formattedEnd}`;
};