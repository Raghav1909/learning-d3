import React from "react"

export default function FaceContainer({
  children,
  width,
  height,
  centerX,
  centerY,
}: {
  children: React.ReactNode
  width: number
  height: number
  centerX: number
  centerY: number
}) {
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>{children}</g>
    </svg>
  )
}
