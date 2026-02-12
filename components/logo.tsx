interface LogoProps {
  size?: "sm" | "md" | "lg" | "hero"
  className?: string
}

const heightMap = {
  sm: "h-7",
  md: "h-9",
  lg: "h-14",
  hero: "h-20 sm:h-28 lg:h-20",
} as const

export function Logo({ size = "md", className = "" }: LogoProps) {
  return (
    <img
      src="/ed2x-logo.svg"
      alt="ED2X"
      className={`${heightMap[size]} w-auto ${className}`}
    />
  )
}
