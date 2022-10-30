import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { addAddress, getAddressValue } from '../services/FirestoreService'

export const useJoiner = () => {
  const onAdd = useCallback(
    (address: string) => {
      if (address.length !== 0) {
        addAddress(address)
      }
    },
    [],
  )

  return { onAdd }
}
