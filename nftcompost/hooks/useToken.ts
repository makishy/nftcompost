import { useCallback } from "react"
import { consumePoint, requestToken } from "../services/FirestoreService"

export const useToken = (): any => {
  const onRequestToken = useCallback(
    async (amountOfRequestTokens: number, address: string) => {
      // decrease own points
      consumePoint(address, amountOfRequestTokens * 100)
      // decrease remain tokens
      requestToken(amountOfRequestTokens, address)
    },
    [])

  return { onRequestToken }
}