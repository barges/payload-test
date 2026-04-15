// collections/Pages.ts
export const Pages = {
    slug: 'pages',
    fields: [
      {
        name: 'layout',
        type: 'blocks',
        blocks: [AdvisorGrid], // Register your new block here
      },
    ],
  }