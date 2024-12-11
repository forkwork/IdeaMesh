(ns ideamesh.shui.stories.badge-story
  (:require [ideamesh.shui.ui :as ui]
            [cljs-bean.core :as bean]
            [rum.core :as rum])
  (:require-macros [ideamesh.shui.storybook :refer [defmeta defstory]]))

(defmeta
  :Shui/Badge
  {:component ui/badge
   :argTypes  {:variant {:control :select
                         :options [:default :destructive :outline :secondary]}
               :class   {:control {:type :text}}}
   :args      {:children "a badge"
               :class    ""}})

(defstory Default {})