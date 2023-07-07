import { ElementType, ReactElement, createElement } from "react";

export type SplitTextAnimationType = "fade" | "slide" | "bounce"
export enum SplitTextAnimationTypeEnum {
  FADE = "fade",
  SLIDE = "slide",
  BOUNCE = "bounce",
}

interface SplitTextProps {
  children: string;
  role: string;
  elementType: ElementType;
  animationType: SplitTextAnimationType
}

const SplitText = (props: SplitTextProps) => {
  const {
    children,
    role,
    elementType,
    animationType
  } = props

  const characters: ReactElement[] = []

  // Split the text into characters
  children.split("").map((char, idx) => {
    let length = 0
    if (char == " ") {
      length = 0
    } else {
      length = char.length
    }

    const attrs = {
      role: role,
      key: `split-text-character-${idx}}`,
      "data-length": length,
    }

    characters.push(createElement('span', attrs, char))
  })

  return createElement(
    elementType,
    {
      ariaLabel: children,
      role: role,
      key: `split-text-${elementType}`,
      className: `split-text split-text-${animationType}`,
    }, characters,
  )

}

export default SplitText
