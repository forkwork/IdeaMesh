import type { TLReactCallbacks } from '@tldraw/react'
import * as React from 'react'
import { IdeameshContext } from '../lib/ideamesh-context'

export function useCopy() {
  const { handlers } = React.useContext(IdeameshContext)

  return React.useCallback<TLReactCallbacks['onCopy']>((app, { text, html }) => {
    handlers.copyToClipboard(text, html)
  }, [])
}
