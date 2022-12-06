import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import { dashboardTool, projectUsersWidget, projectInfoWidget, } from '@sanity/dashboard'
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { documentListWidget } from "sanity-plugin-dashboard-widget-document-list";
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: 'lxexpressCMS',

  projectId: '6h6lvvg2',
  dataset: 'production',

  plugins: [deskTool(), dashboardTool({
    widgets: [
      documentListWidget({
        title: "Recent Posts",
        order: '_updatedAt desc',
        types: ['post'],
        layout: { height: "small" }
      }),

      projectInfoWidget({ layout: { width: "small" } }),
      projectUsersWidget(),
      netlifyWidget({
        title: "liuxin.express",
        sites: [{
          title: "Sanity Studio",
          apiId: "5b22a292-3661-4a71-85a4-920213d93460",
          buildHookId: "https://api.netlify.com/build_hooks/638b56760bb609282532cf47",
          branch: "next"
          // url: "https://liuxin.express"
        }],
        layout: { width: "small" }
      }),
    ]
  }),
  visionTool({
    defaultApiVersion: "v2021-10-21",
    defaultDataset: "production",
  })
  ],

  schema: {
    types: schemaTypes,
  },
})
