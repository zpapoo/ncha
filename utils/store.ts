import { RootState } from 'features'

type IndexSignatureWith<T> = { [key: string]: T }

export function connectToRoot(
  name: keyof RootState,
  selector: IndexSignatureWith<Function>,
): IndexSignatureWith<(state: RootState) => any> {
  return Object.entries(selector).reduce((prev, [key, selectorFunction]) => {
    return {
      ...prev,
      [key]: (state: RootState) => selectorFunction(state[name]),
    }
  }, {})
}
