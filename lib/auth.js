// Simple admin authentication
export const DEFAULT_ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123'

export const isAdminLoggedIn = () => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem('adminToken') === 'authenticated'
}

export const loginAdmin = (password) => {
    if (password === DEFAULT_ADMIN_PASSWORD) {
        localStorage.setItem('adminToken', 'authenticated')
        return true
    }
    return false
}

export const logoutAdmin = () => {
    localStorage.removeItem('adminToken')
}
