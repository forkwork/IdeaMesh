(ns frontend.util.url
  "Util fns related to protocol url"
  (:require [frontend.db.conn :as db-conn]))

;; Keep same as electron/electron.core
(def LSP_SCHEME "ideamesh")

;; Keep same as electron/electron.url
(def encode js/encodeURI)
(def encode-param js/encodeURIComponent)

(defn get-local-repo-identifier
  [repo]
  (let [repo-name (db-conn/get-repo-name repo)]
    (db-conn/get-short-repo-name repo-name)))

(defn get-repo-id-url
  "Get Ideamesh protocol URL, w/o param (v0.1).
   host: set to `nil` for local graph
   protocol?: if true, returns URL with protocol prefix"
  ([host action repo-identifier]
   (get-repo-id-url host action repo-identifier true))
  ([host action repo-identifier protocol?]
   (str (when protocol? (str LSP_SCHEME "://")) 
        (when host (str host "/")) 
        action "/" 
        (encode repo-identifier))))

(defn get-ideamesh-graph-url
  "The URL represents an graph, for example:
   ideamesh://graph/abc
   Ensure repo is valid before hand.
   host: set to `nil` for local graph
   protocol?: if true, returns URL with protocol prefix"
  ([host repo]
   (get-ideamesh-graph-url host repo true))
  ([host repo protocol?]
   (let [repo-identifier (if host
                           repo ;; resolve remote repo identifier here
                           (get-local-repo-identifier repo))]
     (get-repo-id-url host "graph" repo-identifier protocol?))))

(defn get-ideamesh-graph-uuid-url
  "The URL represents an entity in graph with uuid, for example:
   ideamesh://graph/abc?block-id=<uuid>
   Ensure repo and uuid are valid before hand.
   host: set to `nil` for local graph
   protocol?: if true, returns URL with protocol prefix"
  ([host repo uuid]
   (get-ideamesh-graph-uuid-url host repo uuid true))
  ([host repo uuid protocol?]
   (str (get-ideamesh-graph-url host repo protocol?)
        "?block-id=" uuid)))

(defn get-ideamesh-graph-page-url
  "The URL represents an page in graph with pagename, for example:
   ideamesh://graph/abc?page=<page-name>
   Ensure repo and page-name are valid before hand.
   host: set to `nil` for local graph
   protocol?: if true, returns URL with protocol prefix"
  ([host repo page-name]
   (get-ideamesh-graph-page-url host repo page-name true))
  ([host repo page-name protocol?]
   (str (get-ideamesh-graph-url host repo protocol?)
        "?page=" (encode-param page-name))))
