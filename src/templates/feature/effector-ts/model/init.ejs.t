---
to: <%= featuresPath %>/<%= featureName %>/model/init.ts
---

import { createStore, createEvent } from 'effector'

const $data = createStore(null)

export const <%= featureName %>Model = {
  $data
}
