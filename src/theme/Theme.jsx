// import type { Theme } from "theme-ui";
const Theme = {
  initialColorMode: "light",
  colors: {
    text: "black",
    background: "#F9F5F6",
    primary: "#121212",
    inverseText: "black",
    secondary: "#306",
    muted: "#f6f6f6",
    h1: {
      color: "#f6f6f6",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    modes: {
      dark: {
        text: "white",
        background: "#180A0A",
        primary: "hsl(209, 23%, 22%)",
        inverseText: "#fff",
      },
      back: {
        color: " hsl(209, 23%, 22%)", // use the page background color for an inverted effect
        background: "primary",
      },
      papaya: {
        // this color mode will fallback to the root color object
        // for values not defined here
        text: "#433",
        background: "papayawhip",
      },
    },
  },
};

export default Theme;
