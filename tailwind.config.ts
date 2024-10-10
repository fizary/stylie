import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            openSans: "'Open Sans', sans-serif",
            sriracha: "'Sriracha', cursive",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "hsl(0 0% 100%)",
            black: {
                1: "hsl(0 0% 0%)",
                2: "hsl(0 0% 10%)",
                3: "hsl(0 0% 20%)",
            },
            gray: {
                1: "hsl(0 0% 60%)",
                2: "hsl(0 0% 80%)",
                3: "hsl(0 0% 93%)",
                4: "hsl(0 0% 96%)",
                5: "hsl(0 0% 98%)",
            },
            primary: {
                1: "hsl(10 70% 40%)",
                2: "hsl(10 70% 45%)",
                3: "hsl(10 70% 60%)",
                4: "hsl(10 70% 80%)",
                5: "hsl(10 70% 96%)",
            },
            danger: {
                1: "hsl(45 85% 55%)",
                2: "hsl(45 85% 75%)",
            },
        },
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        plugin(({ addComponents, theme }) => {
            addComponents({
                ".container": {
                    width: "100%",
                    maxWidth: theme("screens.xl"),
                    marginLeft: "auto",
                    marginRight: "auto",
                    paddingLeft: theme("spacing.5"),
                    paddingRight: theme("spacing.5"),

                    "@screen md": {
                        paddingLeft: theme("spacing.8"),
                        paddingRight: theme("spacing.8"),
                    },
                    "@screen lg": {
                        paddingLeft: theme("spacing.10"),
                        paddingRight: theme("spacing.10"),
                    },
                    "@screen xl": {
                        paddingLeft: theme("spacing.16"),
                        paddingRight: theme("spacing.16"),
                    },
                },

                ".container-padding": {
                    paddingLeft: theme("spacing.5"),
                    paddingRight: theme("spacing.5"),

                    "@screen md": {
                        paddingLeft: theme("spacing.8"),
                        paddingRight: theme("spacing.8"),
                    },
                    "@screen lg": {
                        paddingLeft: theme("spacing.10"),
                        paddingRight: theme("spacing.10"),
                    },
                    "@screen xl": {
                        paddingLeft: theme("spacing.16"),
                        paddingRight: theme("spacing.16"),
                    },
                },
            });
        }),
    ],
} satisfies Config;
