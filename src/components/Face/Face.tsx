import BackgroundCircle from "./BackgroundCircle"
import Eyes from "./Eyes"
import Mouth from "./Mouth"
import FaceContainer from "./FaceContainer"

export default function Face({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius,
}: {
  width: number
  height: number
  centerX: number
  centerY: number
  strokeWidth: number
  eyeOffsetX: number
  eyeOffsetY: number
  eyeRadius: number
  mouthWidth: number
  mouthRadius: number
}) {
  return (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={10} />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  )
}
