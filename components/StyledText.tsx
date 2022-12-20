import { FontRes } from "../hooks/useCachedResources";
import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: Object.keys(FontRes)[0] }]}
    />
  );
}

export function ParisText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: Object.keys(FontRes)[1] }]}
    />
  );
}

export function MateText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: Object.keys(FontRes)[2] }]}
    />
  );
}
