import {
  getPublicConfig as getNeodaxRuntimeConfig,
  IPublicConfig,
  // setPublicConfig as setNeodaxPublicConfig,
} from "@openware/neodax-web-sdk"

// export const setPublicConfig = setNeodaxPublicConfig
// export const getPublicConfig = getNeodaxRuntimeConfig

const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "U-Trader"

export const getPublicConfig = (): IPublicConfig => {
  return { ...getNeodaxRuntimeConfig(), appName: APP_NAME, defaultAppTitle: APP_NAME }
}
