// blocks/AdvisorGrid/Component.tsx
import { getPayload } from 'payload'
import { AdvisorCard } from '@barges/shared-web'
import config from '@/payload.config'
//import { AdvisorCard } from '@/design-system/AdvisorCard' // Your design system component

export interface AdvisorData {
  /** Advisor display name */
  name: string;
  /** Subtitle text (e.g., "Psychic reader", "Love expert") */
  subtitle: string;
  /** Avatar/photo URL */
  avatarUrl: string;
  /** Rating value (e.g., 4.9) */
  rating?: number;
  /** Number of reviews */
  reviewCount?: number;
  /** Number of readings */
  readingsCount?: number;
  /** Year for readings count context (e.g., 2017) */
  readingsYear?: number;
  /** Description/bio text (list variant only) */
  description?: string;
}

export interface ChannelAvailability {
  /** true = available, false = offline/switched off (secondary icon color), absent = not offered by this brand */
  chat?: boolean;
  voice?: boolean;
  video?: boolean;
}

export interface AdvisorCardProps
  {
  /** Advisor information */
  advisor: AdvisorData;
  /** Current price per minute (e.g., "$3.99/min") */
  price: string;
  /** Original price if there's a promotion (shows strikethrough) */
  originalPrice?: string;
  /** Available channels (grid variant) */
  channels?: ChannelAvailability;
  /** Availability text (list variant, e.g., "Available for chat and call") */
  availabilityText?: string;
  /** Shows "New advisor" badge */
  isNew?: boolean;
  /** Free minutes promotion (e.g., 3 shows "3 free min") */
  freeMinutes?: number;
  /** Whether advisor is favorited (list variant, display only) */
  isFavorite?: boolean;
  /** Called when the "Notify me" / "Notification set" button is pressed (list variant, shown when advisor is busy or offline) */
  onNotifyMe?: () => void;
  /** Whether a notification has already been set for this advisor (list variant) */
  isNotificationSet?: boolean;
}

export const AdvisorGridComponent = async ({ category, limit, title }: { category: string, limit: number, title: string }) => {
  const payload = await getPayload({ config })

  // Option A: Fetch from Payload's own "Advisors" collection
  const advisors: AdvisorCardProps[] = [
    {
      advisor: {
        name: 'John Doe',
        subtitle: 'Psychic reader',
        avatarUrl: 'https://via.placeholder.com/150',
        rating: 4.9,
        reviewCount: 100,
      },
      price: '$3.99/min',
      originalPrice: '$5.99/min',
      channels: {
        chat: true,
        voice: true,
        video: true,
      },
      availabilityText: 'Available for chat and call',
    },
    {
      advisor: {
        name: 'Jane Doe',
        subtitle: 'Love expert',
        avatarUrl: 'https://via.placeholder.com/150',
        rating: 4.8,
        reviewCount: 90,
      },
      price: '$3.99/min',
      originalPrice: '$5.99/min',
      channels: {
        chat: true,
        voice: true,
        video: true,
      },
      availabilityText: 'Available for chat and call',
    },
    {
      advisor: {
        name: 'Jim Doe',
        subtitle: 'Career advisor',
        avatarUrl: 'https://via.placeholder.com/150',
        rating: 4.7,
        reviewCount: 80,
      },
      price: '$3.99/min',
      originalPrice: '$5.99/min',
      channels: {
        chat: true,
        voice: true,
        video: true,
      },
      availabilityText: 'Available for chat and call',
    },
    {
      advisor: {
        name: 'Jill Doe',
        subtitle: 'Astrology expert',
        avatarUrl: 'https://via.placeholder.com/150',
        rating: 4.6,
        reviewCount: 70,
      },
      price: '$3.99/min',
      originalPrice: '$5.99/min',
      channels: {
        chat: true,
        voice: true,
        video: true,
      },
      availabilityText: 'Available for chat and call',
    }
  ]

  /* Option B: Fetch from an external backend API
  const advisors = await fetch('https://api.yourbackend.com/advisors').then(res => res.json())
  */

  return (
    <section className="advisor-section">
      <h2>{title}</h2>
      <div className="grid grid-cols-3 gap-4">
        {advisors.map((advisor) => (
          <AdvisorCard
            key={advisor.advisor.name}
            advisor={advisor.advisor}
            price={advisor.price}
            originalPrice={advisor.originalPrice}
            channels={advisor.channels}
            availabilityText={advisor.availabilityText}
            isNew={advisor.isNew}
            freeMinutes={advisor.freeMinutes}
            isFavorite={advisor.isFavorite}
            onNotifyMe={advisor.onNotifyMe}
            isNotificationSet={advisor.isNotificationSet}
            // ...other props from your design system
          />
        ))}
      </div>
    </section>
  )
}