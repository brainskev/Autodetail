'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import InvoiceGenerator from '@/components/InvoiceGenerator'
import InvoicePrint from '@/components/InvoicePrint'
import { isAdminLoggedIn, logoutAdmin } from '@/lib/auth'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminDashboard() {
    const [invoiceData, setInvoiceData] = useState(null)
    const [showPreview, setShowPreview] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const authenticated = isAdminLoggedIn()
        setIsAuthenticated(authenticated)
        setIsLoading(false)

        if (!authenticated) {
            router.push('/admin/login')
        }
    }, [router])

    const handleGenerateInvoice = (data) => {
        setInvoiceData(data)
        setShowPreview(true)
    }

    const handlePrint = () => {
        window.print()
    }

    const handleNewInvoice = () => {
        setInvoiceData(null)
        setShowPreview(false)
    }

    const handleLogout = () => {
        logoutAdmin()
        router.push('/admin/login')
    }

    useEffect(() => {
        if (showPreview && invoiceData) {
            document.title = `Invoice ${invoiceData.invoiceNumber} - ${invoiceData.customerName}`
        } else {
            document.title = 'Admin Dashboard - Shift-up Auto Detailing'
        }
    }, [showPreview, invoiceData])

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-light via-white to-light flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block">
                        <div className="w-12 h-12 bg-primary rounded-full animate-spin"></div>
                    </div>
                    <p className="mt-4 text-secondary font-manrope text-lg">Loading...</p>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return null
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-light via-white to-light">
            {/* Header */}
            <div className="bg-white border-b border-border print:hidden">
                <div className="container mx-auto px-4 lg:px-8 py-4 sm:py-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-black">
                                    <Image
                                        src="/logo-white.webp"
                                        alt="Shift-up Logo"
                                        width={48}
                                        height={48}
                                        className="object-contain p-2"
                                        priority
                                    />
                                </div>
                                <div>
                                    <h1 className="text-xl sm:text-2xl font-heading font-bold text-secondary">
                                        Admin
                                    </h1>
                                    <p className="text-gray-600 text-xs sm:text-sm font-manrope">Dashboard</p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex items-center gap-3 sm:gap-4 ml-auto">
                            <Link
                                href="/"
                                className="px-4 py-2 rounded-lg font-heading font-semibold text-sm text-gray-600 hover:text-secondary transition-colors"
                            >
                                Exit
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-primary text-white rounded-lg font-heading font-semibold text-sm hover:bg-primary/90 transition-all"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 lg:px-8 py-8">
                {!showPreview ? (
                    <InvoiceGenerator onGenerate={handleGenerateInvoice} />
                ) : (
                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 print:hidden">
                            <div className="flex items-start gap-3">
                                <span className="text-2xl">💡</span>
                                <div>
                                    <h4 className="font-heading font-bold text-secondary text-sm sm:text-base">Print Tip</h4>
                                    <p className="text-xs sm:text-sm text-gray-600 font-manrope mt-1">
                                        For best results, disable browser headers/footers in your print dialog. In the print settings, turn off "Headers and footers" option.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                            <button
                                onClick={handlePrint}
                                className="flex-1 bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-heading font-semibold text-base sm:text-lg hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Print Invoice
                            </button>
                            <button
                                onClick={handleNewInvoice}
                                className="flex-1 bg-secondary text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-heading font-semibold text-base sm:text-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                New Invoice
                            </button>
                        </div>
                        <InvoicePrint data={invoiceData} />
                    </div>
                )}
            </div>
        </div>
    )
}
