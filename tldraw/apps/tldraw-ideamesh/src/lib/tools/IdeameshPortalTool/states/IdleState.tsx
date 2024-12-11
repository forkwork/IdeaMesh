import { TLApp, TLCursor, TLToolState } from '@tldraw/core'
import type { TLReactEventMap, TLReactEvents } from '@tldraw/react'
import type { Shape } from '../../../shapes'
import type { IdeameshPortalTool } from '../IdeameshPortalTool'

export class IdleState extends TLToolState<
  Shape,
  TLReactEventMap,
  TLApp<Shape, TLReactEventMap>,
  IdeameshPortalTool
> {
  static id = 'idle'
  cursor = TLCursor.Cross

  onPointerDown: TLReactEvents<Shape>['pointer'] = e => {
    this.tool.transition('creating')
  }
}
