export default function Eyes({
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
}: {
  eyeOffsetX: number
  eyeOffsetY: number
  eyeRadius: number
}) {
  return (
    <>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    </>
  )
}
