## Changes

1. add babel plugins for class fields and private fields
   ```shell
   npx babel ./sqlite-wasm/jswasm/sqlite3-bundler-friendly.mjs > ./sqlite-wasm/jswasm/sqlite3-bundler-friendly.mjs
   ```
2. change `delete xcvPart.get(typeName)` to `delete xcvPart[typeName])` Error:
   Invalid delete operand. Only properties can be deleted.
3. Replace `import.meta.url` with `Module['url']`
   https://github.com/tiensonqin/sqlite-wasm/commit/e581a09bc2648b7e69bfbee25bbb27188c696580
   Error: This code cannot be converted from ES6. import.meta. Use
   --chunk_output_type=ES_MODULES to allow passthrough support.
