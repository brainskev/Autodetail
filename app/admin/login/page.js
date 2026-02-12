'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAdmin } from '@/lib/auth'
import Image from 'next/image'

export default function AdminLogin() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        if (loginAdmin(password)) {
            router.push('/admin')
        } else {
            setError('Invalid password')
            setPassword('')
        }

        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-light via-white to-light flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl border border-border overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-10">
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-black">
                                <Image
                                    src="/logo-white.webp"
                                    alt="Shift-up Logo"
                                    fill
                                    className="object-contain p-2"
                                    priority
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl font-heading font-bold text-center">Admin Access</h1>
                        <p className="text-white/90 font-manrope text-center mt-2">Shift-up Auto Detailing</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-secondary mb-3 font-heading">
                                Admin Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter admin password"
                                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-base"
                                disabled={isLoading}
                                autoFocus
                            />
                        </div>

                        {error && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                                <p className="text-red-700 font-manrope text-sm">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-secondary text-white px-6 py-3 rounded-xl font-heading font-semibold text-lg hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                        >
                            {isLoading ? 'Logging in...' : 'Access Dashboard'}
                        </button>

                        <p className="text-center text-gray-600 font-manrope text-xs mt-6">
                            This area is restricted to authorized administrators only.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
