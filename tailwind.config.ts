const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const breakpoints = {
  // Old break points
  xxs: "360px",
  xs: "370px",
  sm: "575px",
  md: "655px",
  "md-lg": "720px",
  lg: "1025px",
  xl: "1026px",
  "2xl": "1250px",
  "3xl": "1350px",
  "4xl": "1500px",

  // NEW BREAKPOINTS BELOW

  // Large break points
  "lg-4": "1280px",
  "lg-3": "1200px",
  "lg-2": "1150px",
  "lg-1": "1100px",

  // Medium break points
  "md-7": "1024px",
  "md-6": "960px",
  "md-5": "912px",
  "md-4": "853px",
  "md-3": "820px",
  "md-2": "768px",
  "md-1": "730px",

  // Small break points
  "sm-8": "600px",
  "sm-7": "540px",
  "sm-6": "500px",
  "sm-5": "460px",
  "sm-4": "430px",
  "sm-3": "414px",
  "sm-2": "390px",
  "sm-1": "375px",

  // Extra small break points
  "xs-5": "360px",
  "xs-4": "344px",
  "xs-3": "300px",
  "xs-2": "280px",
  "xs-1": "260px",
};

const askBidColors = {
  "ask-10": "var(--ask-10)",
  "ask-20": "var(--ask-20)",
  "ask-40": "var(--ask-40)",
  "ask-60": "var(--ask-60)",
  "ask-80": "var(--ask-80)",
  "ask-90": "var(--ask-90)",
  "bid-10": "var(--bid-10)",
  "bid-20": "var(--bid-20)",
  "bid-40": "var(--bid-40)",
  "bid-60": "var(--bid-60)",
  "bid-80": "var(--bid-80)",
  "bid-90": "var(--bid-90)",
};

const systemColors = {
  "system-green-10": "var(--system-green-10)",
  "system-green-20": "var(--system-green-20)",
  "system-green-40": "var(--system-green-40)",
  "system-green-60": "var(--system-green-60)",
  "system-green-80": "var(--system-green-80)",
  "system-green-90": "var(--system-green-90)",
  "system-blue-10": "var(--system-blue-10)",
  "system-blue-20": "var(--system-blue-20)",
  "system-blue-40": "var(--system-blue-40)",
  "system-blue-60": "var(--system-blue-60)",
  "system-blue-80": "var(--system-blue-80)",
  "system-blue-90": "var(--system-blue-90)",
  "system-yellow-10": "var(--system-yellow-10)",
  "system-yellow-20": "var(--system-yellow-20)",
  "system-yellow-40": "var(--system-yellow-40)",
  "system-yellow-60": "var(--system-yellow-60)",
  "system-yellow-80": "var(--system-yellow-80)",
  "system-yellow-90": "var(--system-yellow-90)",
  "system-red-10": "var(--system-red-10)",
  "system-red-20": "var(--system-red-20)",
  "system-red-40": "var(--system-red-40)",
  "system-red-60": "var(--system-red-60)",
  "system-red-80": "var(--system-red-80)",
  "system-red-90": "var(--system-red-90)",
  "system-orange": "var(--system-orange)",
};

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./pages/*.{js,jsx,ts,tsx}",
    "./helpers/*.{js,jsx,ts,tsx}",
    "../../node_modules/@openware/neodax-web-sdk/**/*.{js,jsx,ts,tsx}",
    "../web-sdk/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "bg-yellow-200",
    "text-yellow-800",
    "bg-red-100",
    "text-red-800",
    "whitespace-normal",
    "-ml-10",
    "w-32",
    "align-text-bottom",
    "bg-system-yellow-10",
    "bg-system-yellow-20",
    "bg-system-green-10",
    "bg-system-red-10",
    "bg-system-yellow-10",
    "text-system-green-60",
    "text-system-red-60",
    "text-system-yellow-60",
    "mr-1",
    "py-2.5",
    ...Object.keys(askBidColors).flatMap((color) => [`bg-${color}`, `text-${color}`]),
    "w-1.5",
    "h-1.5",
    "text-color-30",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: { ...breakpoints },
      containers: { ...breakpoints },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        inter: ['"Inter"', "sans-serif"],
        "open-sans": ['"Open Sans"', "sans-serif"],
      },
      fontSize: {
        m5xl: "2.625rem",
        mbase: "0.9375rem",
        lg: ["1.125rem", "1.625rem"],
        sm: ["0.875rem", "1.375rem"],
        xxs: ["0.688rem", "1rem"],
        "3xl": ["1.875rem", "2.5rem"],
        "4xl": ["2.25rem", "2.75rem"],
        "6xl": ["3.75rem", "4rem"],
        "7xl": ["4.5rem", " 4.75rem"],
      },
      colors: {
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        "primary-cta-color-main": "var(--app-primary-cta-color-main)",
        "primary-cta-color-hover": "var(--app-primary-cta-color-hover)",

        "secondary-color-dark": "var(--app-secondary-color-dark)",
        "secondary-color-light": "var(--app-secondary-color-light)",

        "navbar-color": "var(--app-navbar-color)",
        "text-color": "var(--app-text-color)",
        "primary-cta-color": "var(--app-primary-cta-color)",
        "secondary-control-color": "var(--app-secondary-control-color)",

        "main-background-color": "var(--app-main-background-color)",
        "body-background-color": "var(--app-body-background-color)",
        "subheader-background-color": "var(--app-subheader-background-color)",
        "input-background-color": "var(--app-input-background-color)",
        "dropdown-background-color": "var(--app-dropdown-background-color)",
        "footer-background-color": "var(--app-footer-background-color)",
        "navbar-background-color": "var(--app-navbar-background-color)",
        "navbar-control-bg-color-10": "var(--app-navbar-control-bg-color-10)",
        "navbar-control-bg-color-20": "var(--app-navbar-control-bg-color-20)",
        "navbar-control-bg-color-40": "var(--app-navbar-control-bg-color-40)",
        "navbar-control-bg-color-60": "var(--app-navbar-control-bg-color-60)",
        "navbar-control-bg-color-80": "var(--app-navbar-control-bg-color-80)",
        "navbar-control-bg-color-90": "var(--app-navbar-control-bg-color-90)",
        "neutral-control-color-0": "var(--app-neutral-control-color-0)",
        "neutral-control-color-10": "var(--app-neutral-control-color-10)",
        "neutral-control-color-20": "var(--app-neutral-control-color-20)",
        "neutral-control-color-30": "var(--app-neutral-control-color-30)",
        "neutral-control-color-40": "var(--app-neutral-control-color-40)",
        "neutral-control-color-50": "var(--app-neutral-control-color-50)",
        "neutral-control-color-60": "var(--app-neutral-control-color-60)",
        "neutral-control-color-70": "var(--app-neutral-control-color-70)",
        "neutral-control-color-80": "var(--app-neutral-control-color-80)",
        "neutral-control-color-90": "var(--app-neutral-control-color-90)",
        "neutral-control-color-100": "var(--app-neutral-control-color-100)",
        "neutral-control-layer-color-0": "var(--app-neutral-control-layer-color-0)",
        "neutral-control-layer-color-10": "var(--app-neutral-control-layer-color-10)",
        "neutral-control-layer-color-50": "var(--app-neutral-control-layer-color-50)",
        "primary-cta-color-10": "var(--app-primary-cta-color-10)",
        "primary-cta-color-20": "var(--app-primary-cta-color-20)",
        "primary-cta-color-40": "var(--app-primary-cta-color-40)",
        "primary-cta-color-60": "var(--app-primary-cta-color-60)",
        "primary-cta-color-80": "var(--app-primary-cta-color-80)",
        "primary-cta-color-90": "var(--app-primary-cta-color-90)",
        "primary-cta-layer-color-10": "var(--app-primary-cta-layer-color-10)",
        "secondary-control-color-10": "var(--app-secondary-control-color-10)",
        "secondary-control-color-20": "var(--app-secondary-control-color-20)",
        "secondary-control-color-40": "var(--app-secondary-control-color-40)",
        "secondary-control-color-60": "var(--app-secondary-control-color-60)",
        "secondary-control-color-80": "var(--app-secondary-control-color-80)",
        "secondary-control-color-90": "var(--app-secondary-control-color-90)",
        ...systemColors,
        ...askBidColors,
        "customization-background-color": "#fff",
        "customization-background-cta-color": "#f5f5f5",
        "customization-primary-cta-color": "#4C40E6",
        "customization-system-green": "#54B489",
        "customization-system-red": "#E85E59",
        "customization-contrast-text-color-0-18": "rgba(91, 100, 136, 0.18)",
        "customization-theme-switcher-button-light": "#E4E6EB",
        "customization-theme-switcher-button-dark": "#303648",
        "customization-theme-switcher-light": "#FFFFFF",
        "customization-theme-switcher-dark": "#454E68",
        "customization-theme-reset-button": "#F9F9FA",
        "connector-networks-info": "#76809D",
        "text-color-0": "var(--app-text-color-0)",
        "text-color-10": "var(--app-text-color-10)",
        "text-color-20": "var(--app-text-color-20)",
        "text-color-30": "var(--app-text-color-30)",
        "text-color-40": "var(--app-text-color-40)",
        "text-color-50": "var(--app-text-color-50)",
        "text-color-60": "var(--app-text-color-60)",
        "text-color-70": "var(--app-text-color-70)",
        "text-color-80": "var(--app-text-color-80)",
        "text-color-90": "var(--app-text-color-90)",
        "text-color-100": "var(--app-text-color-100)",
        "divider-color-20": "var(--app-divider-color-20)",
      },
      textColor: {
        "navbar-control-layer-color-10": "var(--app-navbar-control-layer-color-10)",
        "navbar-control-layer-color-20": "var(--app-navbar-control-layer-color-20)",
        "navbar-control-layer-color-40": "var(--app-navbar-control-layer-color-40)",
        "navbar-control-layer-color-60": "var(--app-navbar-control-layer-color-60)",
        "navbar-control-layer-color-80": "var(--app-navbar-control-layer-color-80)",
        "navbar-control-layer-color-90": "var(--app-navbar-control-layer-color-90)",
        "neutral-control-layer-color-0": "var(--app-neutral-control-layer-color-0)",
        "neutral-control-layer-color-10": "var(--app-neutral-control-layer-color-10)",
        "neutral-control-layer-color-20": "var(--app-neutral-control-layer-color-20)",
        "neutral-control-layer-color-30": "var(--app-neutral-control-layer-color-30)",
        "neutral-control-layer-color-40": "var(--app-neutral-control-layer-color-40)",
        "neutral-control-layer-color-50": "var(--app-neutral-control-layer-color-50)",
        "neutral-control-layer-color-60": "var(--app-neutral-control-layer-color-60)",
        "neutral-control-layer-color-70": "var(--app-neutral-control-layer-color-70)",
        "neutral-control-layer-color-80": "var(--app-neutral-control-layer-color-80)",
        "neutral-control-layer-color-90": "var(--app-neutral-control-layer-color-90)",
        "neutral-control-layer-color-100": "var(--app-neutral-control-layer-color-100)",
        "primary-cta-layer-color-10": "var(--app-primary-cta-layer-color-10)",
        "primary-cta-layer-color-20": "var(--app-primary-cta-layer-color-20)",
        "primary-cta-layer-color-40": "var(--app-primary-cta-layer-color-40)",
        "primary-cta-layer-color-60": "var(--app-primary-cta-layer-color-60)",
        "primary-cta-layer-color-80": "var(--app-primary-cta-layer-color-80)",
        "primary-cta-layer-color-90": "var(--app-primary-cta-layer-color-90)",
        "secondary-control-layer-color-10": "var(--app-secondary-control-layer-color-10)",
        "secondary-control-layer-color-20": "var(--app-secondary-control-layer-color-20)",
        "secondary-control-layer-color-40": "var(--app-secondary-control-layer-color-40)",
        "secondary-control-layer-color-60": "var(--app-secondary-control-layer-color-60)",
        "secondary-control-layer-color-80": "var(--app-secondary-control-layer-color-80)",
        "secondary-control-layer-color-90": "var(--app-secondary-control-layer-color-90)",
        "text-color-0": "var(--app-text-color-0)",
        "text-color-10": "var(--app-text-color-10)",
        "text-color-20": "var(--app-text-color-20)",
        "text-color-30": "var(--app-text-color-30)",
        "text-color-40": "var(--app-text-color-40)",
        "text-color-50": "var(--app-text-color-50)",
        "text-color-60": "var(--app-text-color-60)",
        "text-color-70": "var(--app-text-color-70)",
        "text-color-80": "var(--app-text-color-80)",
        "text-color-90": "var(--app-text-color-90)",
        "text-color-100": "var(--app-text-color-100)",
        ...systemColors,
        ...askBidColors,
        "primary-cta-color-main": "var(--app-primary-cta-color-main)",
        "primary-cta-color-hover": "var(--app-primary-cta-color-hover)",
        "color-contrast": "var(--app-color-contrast)",
        "cta-contrast": "var(--app-cta-contrast)",
        "secondary-color": "var(--app-secondary-color)",
        "customization-primary-text-color": "#111827",
        "customization-secondary-text-color": "#ffffff",
        "customization-contrast-text-color": "#737F92",
        "customization-primary-cta-color": "#3C78E0",
        "customization-theme-switcher": "#76809D",
      },
      boxShadow: {
        "lg-updated": "0px 0px 2px rgba(0, 0, 0, 0.12), 0px 10px 15px -3px rgba(0, 0, 0, 0.12), 0px 4px 6px -2px rgba(0, 0, 0, 0.04);",
        "md-button": "-3px 3px 0px 1px primary-cta-color-60;",
      },
      borderColor: {
        "divider-color-10": "var(--app-divider-color-10)",
        "divider-color-20": "var(--app-divider-color-20)",
        "divider-color-40": "var(--app-divider-color-40)",
        "divider-color-60": "var(--app-divider-color-60)",
        "divider-color-80": "var(--app-divider-color-80)",
        "divider-color-90": "var(--app-divider-color-90)",
        ...askBidColors,
        "primary-cta-color-40": "var(--app-primary-cta-color-40)",
        "primary-cta-color-60": "var(--app-primary-cta-color-60)",
        "primary-cta-layer-color-60": "var(--app-primary-cta-layer-color-60)",
        "neutral-control-color-70": "var(--neutral-control-color-70)",
        "neutral-control-color-80": "var(--neutral-control-color-80)",
        "customization-theme": "#DDDDDD",
        "customization-theme-reset-button": "#DBDDE5",
        "text-color-100": "var(--text-color-100)",
      },
      ring: {
        "primary-cta-color-60": "var(--app-primary-cta-color-60)",
      },
      height: {
        4.5: "1.125rem",
        inherit: "inherit",
      },
      width: {
        "4.5": "1.125rem",
        "1/3": "33%",
      },
      keyframes: {
        wobble: {
          "0%, 100%": {
            transform: "translateX(0%)",
            "transform-origin": "50% 50%",
          },
          "15%": {
            transform: "translateX(-8px) rotate(-10deg)",
          },
          "30%": {
            transform: "translateX(calc(8px / 2)) rotate(10deg)",
          },
          "45%": {
            transform: "translateX(calc(-8px / 2)) rotate(calc(-10deg / 1.8))",
          },
          "60%": {
            transform: "translateX(calc(8px / 3.3)) rotate(calc(10deg / 3))",
          },
          "75%": {
            transform: "translateX(calc(-8px / 5.5)) rotate(calc(-10deg / 5))",
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "translateX(0%)",
            "transform-origin": "50% 50%",
          },
          "15%": {
            transform: "translateX(-2px) rotate(-4deg)",
          },
          "30%": {
            transform: "translateX(calc(2px / 2)) rotate(4deg)",
          },
          "45%": {
            transform: "translateX(calc(-2px / 2)) rotate(calc(-4deg / 1.8))",
          },
          "60%": {
            transform: "translateX(calc(2px / 3.3)) rotate(calc(4deg / 3))",
          },
          "75%": {
            transform: "translateX(calc(-2px / 5.5)) rotate(calc(-4deg / 5))",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        wobble: "wobble 1s ease-in-out infinite",
        "wobble-once": "wobble 1s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        "wiggle-once": "wiggle 1s ease-in-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionProperty: {
        all: "all, width, height",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries"), require("@tailwindcss/forms"), require("tailwindcss-animate")],
};
