'use client'

const CALENDLY_URL = 'https://calendly.com/kngotho3/30min?primary_color=ed1c24'

export default function CalendlyTrigger({ children, className = '', onClick, type = 'button' }) {
  const handleClick = (event) => {
    if (event?.preventDefault) {
      event.preventDefault()
    }

    console.log('CalendlyTrigger clicked')
    console.log('Window:', typeof window)
    console.log('Calendly:', typeof window.Calendly)

    if (typeof window !== 'undefined' && window.Calendly?.initPopupWidget) {
      const redirectUrl = `${window.location.origin}/booking-confirmed`
      const redirectParam = `&redirect_uri=${encodeURIComponent(redirectUrl)}`
      console.log('Opening Calendly popup with URL:', `${CALENDLY_URL}${redirectParam}`)
      // Calendly automatically passes event details as URL parameters to the redirect page
      window.Calendly.initPopupWidget({ url: `${CALENDLY_URL}${redirectParam}` })
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
