export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 120" className={`w-auto ${className}`} xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <text fontFamily="inherit" fontSize="100" fontWeight="700" letterSpacing="5" fill="#003847">
          <tspan x="0" y="100">JEX</tspan>
        </text>
        
        {/* Custom O with Red semi-circle */}
        <circle cx="250" cy="67" r="33" stroke="#003847" strokeWidth="8"/>
        <path d="M 250 34 A 33 33 0 0 1 283 67 L 250 67 Z" fill="#FF0000" />
        
        <text fontFamily="inherit" fontSize="100" fontWeight="700" letterSpacing="5" fill="#003847">
          <tspan x="290" y="100">N</tspan>
        </text>
      </g>
    </svg>
  );
}
