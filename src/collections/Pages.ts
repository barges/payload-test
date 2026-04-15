import type { CollectionConfig } from 'payload'
import { AdvisorGrid } from "@/blocks/AdvisorGrid/config";

export const Pages: CollectionConfig = {
    slug: 'pages',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [AdvisorGrid], // Register your new block here
      },
    ],
  }