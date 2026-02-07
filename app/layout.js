import './globals.css'
import { Inter, Manrope, Oxanium } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
})
const oxanium = Oxanium({
    subsets: ['latin'],
    variable: '--font-oxanium',
    weight: ['200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${manrope.variable} ${oxanium.variable}`}>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
