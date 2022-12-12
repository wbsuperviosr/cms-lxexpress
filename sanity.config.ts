import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'lxexpressCMS',

  projectId: '6h6lvvg2',
  dataset: 'production',

  plugins: [deskTool(),
  visionTool({
    defaultApiVersion: "v2021-10-21",
    defaultDataset: "production",
  })
  ],

  schema: {
    types: schemaTypes,
  },
})
