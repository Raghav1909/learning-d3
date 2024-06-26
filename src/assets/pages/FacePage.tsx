import { range } from "d3"
import Face from "../../components/Face/Face"

const width = 160
const height = 160

export default function FacePage() {
  const array = range(15)
  return (
    <>
      {array.map((_, index) => (
        <Face
          key={index}
          width={width}
          height={height}
          centerX={width / 2}
          centerY={height / 2}
          strokeWidth={6 + Math.random() * 3}
          eyeOffsetX={20 + Math.random() * 9}
          eyeOffsetY={20 + Math.random() * 15}
          eyeRadius={5 + Math.random() * 10}
          mouthWidth={7 + Math.random() * 9}
          mouthRadius={30 + Math.random() * 10}
        />
      ))}
    </>
  )
}
