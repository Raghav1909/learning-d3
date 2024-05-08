import { useCallback, useState } from "react"

const width = 600
const height = 600
const initialMousePosition = { x: width / 2, y: height / 2 }

export default function MouseMovement() {
  const [mousePosition, setMousePosition] = useState(initialMousePosition)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    },
    [setMousePosition]
  )

  return (
    <svg width={`100%`} height={height} onMouseMove={handleMouseMove}>
      <circle cx={mousePosition.x} cy={mousePosition.y} r={10} />
    </svg>
  )
}
