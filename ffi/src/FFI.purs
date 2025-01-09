module FFI where

import Prelude
import Effect (Effect)
import Effect.Console (log)
import Web.DOM.Node (Node)

foreign import makeSortable :: Node -> Effect Unit

