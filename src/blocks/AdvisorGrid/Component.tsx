// blocks/AdvisorGrid/Component.tsx
import { getPayload } from 'payload'
import config from '@/payload.config'
//import { AdvisorCard } from '@/design-system/AdvisorCard' // Your design system component

export const AdvisorGridComponent = async ({ category, limit, title }) => {
  const payload = await getPayload({ config })

  // Option A: Fetch from Payload's own "Advisors" collection
  const { docs: advisors } = await payload.find({
    collection: 'advisors',
    where: {
      category: { equals: category },
    },
    limit: limit || 3,
  })

  /* Option B: Fetch from an external backend API
  const advisors = await fetch('https://api.yourbackend.com/advisors').then(res => res.json())
  */

  return (
    <section className="advisor-section">
      <h2>{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {advisors.map((advisor) => (
          <AdvisorCard 
            key={advisor.id}
            name={advisor.name}
            price={advisor.price}
            rating={advisor.rating}
            imageUrl={advisor.image.url}
            // ...other props from your design system
          />
        ))}
      </div>
    </section>
  )
}