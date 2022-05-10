import colors from "./color";

interface Theme {
  mainBgColor: string;
  textColor: string;
  accentColor: string;
}

const lightTheme: Theme = {
  mainBgColor: colors.WHITE_COLOR,
  textColor: "#1e272e",
  accentColor: colors.YELLOW_COLOR,
};

const darkTheme: Theme = {
  mainBgColor: colors.BLACK_COLOR,
  textColor: "#d2dae2",
  accentColor: colors.YELLOW_COLOR,
};

const theme = {
  colors,
  lightTheme,
  darkTheme,
};

export default theme;
