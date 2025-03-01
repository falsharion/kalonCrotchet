import { twMerge } from 'tailwind-merge';

export default function KalonLogo({ className }) {
  return (
    <div
      className={twMerge(
        'inline-flex items-center font-extrabold',
        className
      )}
    >
      <span className="bg-orange-700 text-white px-1 py-1 rounded-md uppercase tracking-wide">
        KA
      </span>
      <span className="text-amber-400 pl-1 uppercase tracking-wide">
        LON
      </span>
    </div>
  );
}