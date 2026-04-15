// blocks/AdvisorGrid/config.ts
import { Block } from 'payload'

export const AdvisorGrid: Block = {
  slug: 'advisor-grid',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Get a personal reading now:',
    },
    {
      name: 'category',
      type: 'select',
      options: ['Love', 'Astrology', 'Career'],
    },
    // You can add a limit field to control how many show up
    {
      name: 'limit',
      type: 'number',
      defaultValue: 3,
    }
  ],
}