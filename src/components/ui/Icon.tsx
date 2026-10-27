import React from 'react'

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
  size?: number
  strokeWidth?: number
}

const icons: Record<string, React.ReactNode> = {
  'building-2': (
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  ),
  'briefcase': (
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
  ),
  'stairs': (
    <polyline points="4 14 4 5 12 5 12 9 20 9 20 14" />
  ),
  'glass-water': (
    <path d="M6 4h12v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4z" />
  ),
  'sparkles': (
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  ),
  'hammer': (
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
  ),
  'zap': (
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  ),
  'snowflake': (
    <path d="M20 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM4 10.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 2v6m0 4v6M12 2l3.464 2m0 8L12 20m0 0l-3.464-2m8-8l-2.598-4.5M6.134 6.5L3.536 2M20.464 16.5l2.598 4.5M3.536 22l2.598-4.5" />
  ),
  'arrow-right': (
    <path d="M5 12h14M12 5l7 7-7 7" />
  ),
  'menu': (
    <>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </>
  ),
  'x': (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
  'check': (
    <polyline points="20 6 9 17 4 12" />
  ),
  'home': (
    <>
      <path d="M3 10l9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </>
  ),
  'leaf': (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),
  'grid': (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </>
  ),
  'car': (
    <>
      <path d="M3 13l2-6h14l2 6v5H3z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </>
  ),
  'trash-2': (
    <>
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </>
  ),
  'package': (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </>
  ),
  'more-horizontal': (
    <>
      <circle cx="5" cy="12" r="1" />
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
    </>
  ),
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  strokeWidth = 2,
  className = '',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`icon icon-${name} ${className}`}
      {...props}
    >
      {icons[name]}
    </svg>
  )
}
