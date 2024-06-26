export default function BackgroundCircle({
  radius,
  strokeWidth,
}: {
  radius: number
  strokeWidth: number
}) {
  return (
    <circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
  )
}
