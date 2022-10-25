import { atom } from "recoil";

export const connectedAddress = atom<string | undefined>({
  key: 'ConnectedAddress',
  default: undefined,
})