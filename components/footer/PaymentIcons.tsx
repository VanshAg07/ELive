function Badge({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className="inline-flex h-6 w-[34px] items-center justify-center overflow-hidden rounded-[4px] border border-black/15 bg-white"
      role="img"
      aria-label={label}
    >
      {children}
    </span>
  );
}

export default function PaymentIcons() {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <Badge label="Visa">
        <svg viewBox="0 0 34 24" className="h-full w-full" aria-hidden>
          <text
            x="17"
            y="15.5"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="8"
            fontWeight="800"
            fontStyle="italic"
            fill="#1A1F71"
            letterSpacing="0.5"
          >
            VISA
          </text>
        </svg>
      </Badge>
      <Badge label="Mastercard">
        <svg viewBox="0 0 34 24" className="h-full w-full" aria-hidden>
          <circle cx="13.2" cy="12" r="5.2" fill="#EB001B" />
          <circle cx="20.8" cy="12" r="5.2" fill="#F79E1B" />
          <path
            d="M17 7.9a5.2 5.2 0 0 1 0 8.2 5.2 5.2 0 0 1 0-8.2Z"
            fill="#FF5F00"
          />
        </svg>
      </Badge>
      <Badge label="American Express">
        <svg viewBox="0 0 34 24" className="h-full w-full" aria-hidden>
          <rect width="34" height="24" rx="4" fill="#016FD0" />
          <text
            x="17"
            y="15.2"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="6.2"
            fontWeight="800"
            fill="#fff"
            letterSpacing="0.4"
          >
            AMEX
          </text>
        </svg>
      </Badge>
      <Badge label="UnionPay">
        <svg viewBox="0 0 34 24" className="h-full w-full" aria-hidden>
          <rect x="7" y="6" width="8.2" height="12" rx="1" fill="#E21836" />
          <rect x="12.6" y="6" width="8.2" height="12" rx="1" fill="#00447C" />
          <rect x="18.4" y="6" width="8.2" height="12" rx="1" fill="#007B84" />
        </svg>
      </Badge>
      <Badge label="JCB">
        <svg viewBox="0 0 34 24" className="h-full w-full" aria-hidden>
          <rect x="7.2" y="5.5" width="6.4" height="13" rx="1.4" fill="#1F286F" />
          <rect x="13.8" y="5.5" width="6.4" height="13" rx="1.4" fill="#BE1833" />
          <rect x="20.4" y="5.5" width="6.4" height="13" rx="1.4" fill="#007940" />
          <text
            x="10.4"
            y="14"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="5.4"
            fontWeight="800"
            fill="#fff"
          >
            J
          </text>
          <text
            x="17"
            y="14"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="5.4"
            fontWeight="800"
            fill="#fff"
          >
            C
          </text>
          <text
            x="23.6"
            y="14"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="5.4"
            fontWeight="800"
            fill="#fff"
          >
            B
          </text>
        </svg>
      </Badge>
      <Badge label="Apple Pay">
        <svg viewBox="0 0 34 24" className="h-full w-full" aria-hidden>
          <path
            d="M12.4 8.2c.5-.6 1.3-1 2-1.1.1.8-.2 1.6-.7 2.2-.5.6-1.2 1-1.9 1-.1-.8.2-1.6.6-2.1Zm.2 2.2c1.1 0 1.9.6 2.6.6s1.7-.8 2.8-.8c1.1 0 1.8.6 2.3 1.1-2 1.2-1.7 4.2.3 5.1-.5 1.2-1.2 2.4-2.1 2.4-.8 0-1-.5-2.1-.5s-1.3.5-2.1.5c-.9 0-1.6-1.3-2.2-2.5-1.2-2.2-1.3-4.1-.4-5.2.7-.8 1.8-1.1 2.9-1.1Z"
            fill="#111"
          />
        </svg>
      </Badge>
      <Badge label="Google Pay">
        <svg viewBox="0 0 34 24" className="h-full w-full" aria-hidden>
          <circle cx="10.6" cy="12" r="4.4" fill="#fff" />
          <path
            d="M14.6 12c0-.3 0-.6-.1-.9h-3.9v1.7h2.3c-.1.6-.5 1.1-1.1 1.4v1.1h1.7c1-1 1.1-2.3 1.1-3.3Z"
            fill="#4285F4"
          />
          <path
            d="M10.6 16.4c1.5 0 2.7-.5 3.6-1.3l-1.7-1.1c-.5.3-1.1.6-1.9.6-1.4 0-2.6-.9-3-2.2H5.8v1.2c.8 1.7 2.7 2.8 4.8 2.8Z"
            fill="#34A853"
          />
          <path
            d="M7.6 12.4c-.1-.3-.2-.6-.2-.9s.1-.6.2-.9V9.4H5.8A4.4 4.4 0 0 0 5.2 12c0 .7.2 1.4.6 2.1l1.8-1.7Z"
            fill="#FBBC05"
          />
          <path
            d="M10.6 7.6c.8 0 1.5.3 2.1.8l1.5-1.5C13.3 5.9 12.1 5.4 10.6 5.4c-2.1 0-4 1.1-4.8 2.8l1.8 1.4c.4-1.3 1.6-2 3-2Z"
            fill="#EA4335"
          />
          <text
            x="24.2"
            y="15.6"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            fontSize="7.5"
            fontWeight="600"
            fill="#3C4043"
          >
            Pay
          </text>
        </svg>
      </Badge>
    </div>
  );
}
