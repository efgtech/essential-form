import { isBrowser } from "../data/utils"

export const DEFAULT_PG_VALUE = 9999
const PG_PARAM_KEY = "pg"

export const getPGFromURL = () => {
  //server build will fail if we don't check, window not available there

  if (isBrowser()) {
    const params = new URLSearchParams(window.location.search)
    const pgParamValue = params.get(PG_PARAM_KEY)
    //return default value if we can't parse
    if (pgParamValue === "" || pgParamValue === undefined) {
      return DEFAULT_PG_VALUE
    }

    //test that value looks like a number
    const isInt = new RegExp(/^[0-9]*$/)
    if (!isInt.test(pgParamValue)) {
      return DEFAULT_PG_VALUE
    }

    //return value as an int
    return parseInt(pgParamValue)
  } else {
    return DEFAULT_PG_VALUE
  }
}
