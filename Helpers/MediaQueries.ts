/**
 * Retrieves the screen breakpoints based on the current theme.
 * @returns The screen breakpoints object.
 *
 * @usage
 *
 * @styled @components
 * const Container = styled('div')<ScreenBreakPoints>((props) => ({
 *   backgroundColor: props.isBelow300 ? "red" : "blue",
 * }));
 *
 * @app
 * function App() {
 *   const screenBreakpoints: ScreenBreakPoints = GetScreenBreakPoints();
 *   return <Container {...screenBreakpoints}> ... </Container>;
 * }
 */

import { useMediaQuery, useTheme } from "@mui/material";
import { ScreenBreakPoints } from "./Types";

export function GetScreenBreakPoints(): ScreenBreakPoints {
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.only("xs")); // Up to 599px
  const isIpad = useMediaQuery(theme.breakpoints.only("sm")); //600px - 899px
  const isNextHub = useMediaQuery(theme.breakpoints.only("md")); //901px - 1199px
  const isLaptop = useMediaQuery(theme.breakpoints.only("lg")); //1200px - 1535px
  const isDesktop = useMediaQuery(theme.breakpoints.only("xl")); //1535px and above
  const isCustomBreakPoint = useMediaQuery(theme.breakpoints.up(899));

  return {
    isPhone,
    isIpad,
    isNextHub,
    isLaptop,
    isDesktop,
    isCustomBreakPoint,
  };
}
