'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function BookingConfirmedContent() {
    const searchParams = useSearchParams()

    // Debug: Log all URL parameters
    console.log('All URL params:', Object.fromEntries(searchParams.entries()))

    // Extract Calendly event details from URL parameters
    const eventName = searchParams.get('event_type_name') || searchParams.get('event')
    const inviteeName = searchParams.get('invitee_full_name') || searchParams.get('name')
    const inviteeEmail = searchParams.get('invitee_email') || searchParams.get('email')
    const eventStartTime = searchParams.get('event_start_time') || searchParams.get('start_time')
    const eventEndTime = searchParams.get('event_end_time') || searchParams.get('end_time')

    console.log('Extracted values:', { eventName, inviteeName, inviteeEmail, eventStartTime })

    // Format date/time if available
    const formatDateTime = (isoString) => {
        if (!isoString) return null
        try {
            const date = new Date(isoString)
            return new Intl.DateTimeFormat('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                timeZoneName: 'short'
            }).format(date)
        } catch {
            return null
        }
    }

    return (
        <main className="min-h-screen bg-[#101010] text-white flex items-center justify-center px-4 py-24">
            <section className="w-full max-w-2xl bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <p className="text-[11px] tracking-[0.4em] text-white/70 uppercase mb-3">
                    Booking Confirmed
                </p>
                <h1 className="text-3xl sm:text-4xl font-heading font-semibold mb-4">
                    You're booked{inviteeName ? `, ${inviteeName.split(' ')[0]}` : ''}!
                </h1>
                <p className="text-base sm:text-[17px] text-white/80 leading-7 mb-6">
                    Thanks for choosing us. Your detailing slot is reserved. We'll reach out soon to confirm your
                    service and answer any questions.
                </p>

                {/* Debug info - remove after testing */}
                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-xl p-4 mb-6 text-xs">
                    <p className="font-semibold mb-2">Debug Info (remove after testing):</p>
                    <p>URL Params: {JSON.stringify(Object.fromEntries(searchParams.entries()))}</p>
                    <p className="mt-1">Event Name: {eventName || 'not found'}</p>
                    <p>Invitee Name: {inviteeName || 'not found'}</p>
                    <p>Email: {inviteeEmail || 'not found'}</p>
                    <p>Start Time: {eventStartTime || 'not found'}</p>
                </div>

                {(eventStartTime || eventName || inviteeEmail) && (
                    <div className="bg-[#ED1C24]/10 border border-[#ED1C24]/30 rounded-xl p-5 mb-6">
                        <p className="text-sm font-semibold mb-3 text-[#ED1C24]">Appointment Details</p>
                        <div className="text-sm text-white/90 space-y-2">
                            {eventName && <p><span className="text-white/60">Service:</span> {eventName}</p>}
                            {eventStartTime && (
                                <p><span className="text-white/60">Date & Time:</span> {formatDateTime(eventStartTime)}</p>
                            )}
                            {inviteeEmail && <p><span className="text-white/60">Email:</span> {inviteeEmail}</p>}
                        </div>
                    </div>
                )}

                <div className="bg-[#121212] border border-white/10 rounded-xl p-5 mb-6">
                    <p className="text-sm font-semibold mb-3">To help us serve you faster:</p>
                    <ul className="text-sm text-white/70 space-y-2">
                        <li>• Clear out personal items</li>
                        <li>• Be on time for your appointment</li>
                        <li>• Keep your phone nearby for quick updates</li>
                    </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center bg-[#ED1C24] hover:bg-[#d91920] text-white px-6 py-3 text-[12px] font-semibold uppercase tracking-wide transition-colors rounded-md"
                    >
                        Back to Home
                    </Link>
                    <a
                        href="tel:+18009876654"
                        className="inline-flex items-center justify-center border border-white/30 text-white px-6 py-3 text-[12px] font-semibold uppercase tracking-wide transition-colors rounded-md hover:bg-white/10"
                    >
                        Call Us
                    </a>
                </div>
            </section>
        </main>
    )
}

export default function BookingConfirmedPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-[#101010] text-white flex items-center justify-center">
                <div className="animate-pulse text-white/60">Loading...</div>
            </main>
        }>
            <BookingConfirmedContent />
        </Suspense>
    )
}
