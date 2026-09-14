export function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M4.07 5.6H2.33V13.2h1.74V5.6ZM3.2 2.8a1.01 1.01 0 1 0 0 2.02 1.01 1.01 0 0 0 0-2.02ZM13.67 8.47c0-2.24-1.2-3.28-2.8-3.28-1.29 0-1.86.71-2.18 1.21V5.6H6.96c.023.5 0 7.6 0 7.6h1.73V9.04c0-.223.016-.445.082-.604.18-.445.59-.906 1.278-.906 1.01 0 1.41.77 1.41 1.9v3.77h1.73V8.47Z"
      />
    </svg>
  );
}

export function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <rect
        x="2.4"
        y="2.4"
        width="11.2"
        height="11.2"
        rx="3.2"
        stroke="currentColor"
        strokeWidth="1.35"
      />
      <circle cx="8" cy="8" r="2.55" stroke="currentColor" strokeWidth="1.35" />
      <circle cx="11.15" cy="4.85" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M9.4 13.2V8.52h1.55l.23-1.8H9.4V5.57c0-.52.14-.88.9-.88h.96V3.08A11.4 11.4 0 0 0 9.66 3C8.22 3 7.24 3.88 7.24 5.4v1.32H5.6v1.8h1.64V13.2H9.4Z"
      />
    </svg>
  );
}
