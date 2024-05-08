import { arc } from "d3"

export default function Mouth({
  mouthRadius,
  mouthWidth,
}: {
  mouthRadius: number
  mouthWidth: number
}) {
  const mouthArc = arc()

  return (
    <path
      d={
        mouthArc({
          innerRadius: mouthRadius,
          outerRadius: mouthRadius + mouthWidth,
          startAngle: Math.PI / 2,
          endAngle: (Math.PI * 3) / 2,
        }) || ""
      }
    />
  )
}
