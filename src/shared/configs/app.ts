import {
  getPublicConfig as getNeodaxRuntimeConfig,
  IPublicConfig,
  // setPublicConfig as setNeodaxPublicConfig,
} from "@openware/neodax-web-sdk"

// export const setPublicConfig = setNeodaxPublicConfig
// export const getPublicConfig = getNeodaxRuntimeConfig
export const getPublicConfig = (): IPublicConfig => {
  return { ...getNeodaxRuntimeConfig(), appName: "U-Trader", defaultAppTitle: "U-Trader" }
}
