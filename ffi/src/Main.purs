module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)
import FFI
import Undefined (undefined)

main :: Effect Unit
main = makeSortable undefined
