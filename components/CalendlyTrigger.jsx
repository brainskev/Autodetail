'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const CALENDLY_URL = 'https://calendly.com/kngotho3/30min?primary_color=ed1c24'

export default function CalendlyTrigger({ children, className = '', onClick, type = 'button' }) {
  const router = useRouter()

  useEffect(() => {
    // Listen for Calendly events
    const handleCalendlyEvent = (e) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        console.log('Calendly event:', e.data.event)
        
        // When event is scheduled, navigate to confirmation page with details
        if (e.data.event === 'calendly.event_scheduled') {
          console.log('Event scheduled!')
          console.log('Full payload:', JSON.stringify(e.data.payload, null, 2))
          
          const payload = e.data.payload || {}
          const params = new URLSearchParams()
          
          // Calendly sends event details in the payload object
          // Try multiple possible property paths
          if (payload.event?.uri) params.append('event_uri', payload.event.uri)
          
          // Try different paths for invitee name
          const name = payload.invitee?.name || payload.invitee_full_name || payload.name
          if (name) params.append('invitee_full_name', name)
          
          // Try different paths for email
          const email = payload.invitee?.email || payload.invitee_email || payload.email
          if (email) params.append('invitee_email', email)
          
          // Try different paths for event name
          const eventName = payload.event?.name || payload.event_type_name || payload.event_name
          if (eventName) params.append('event_type_name', eventName)
          
          // Try different paths for start time
          const startTime = payload.event?.start_time || payload.event_start_time || payload.start_time
          if (startTime) params.append('event_start_time', startTime)
          
          // Try different paths for end time
          const endTime = payload.event?.end_time || payload.event_end_time || payload.end_time
          if (endTime) params.append('event_end_time', endTime)
          
          console.log('Extracted params:', params.toString())
          
          // Navigate to confirmation page
          router.push(`/booking-confirmed?${params.toString()}`)
        }
      }
    }

    window.addEventListener('message', handleCalendlyEvent)
    return () => window.removeEventListener('message', handleCalendlyEvent)
  }, [router])

  const handleClick = (event) => {
    if (event?.preventDefault) {
      event.preventDefault()
    }

    console.log('CalendlyTrigger clicked')
    console.log('Window:', typeof window)
    console.log('Calendly:', typeof window.Calendly)

    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      console.log('Opening Calendly popup with URL:', CALENDLY_URL)
      // Open popup without redirect_uri - we'll handle navigation via event listener
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    } else if (typeof window !== 'undefined') {
      console.log('Calendly not loaded, opening in new tab')
      window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')
    } else {
      console.error('Window is undefined')
    }

    if (onClick) {
      onClick(event)
    }
  }

  return (
    <button type={type} onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
