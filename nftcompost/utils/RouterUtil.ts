export class RouterUtils {
  static getFirst = (str: string | string[] | undefined) => {
    const ret = Array.isArray(str) ? str[0] : str
    return ret
  }
}

