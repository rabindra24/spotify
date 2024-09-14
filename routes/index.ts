/**
 * An array of routes that are accessible to the public 
 * These routes do not required auth
 * @type {string []}
 */

export const publicRoutes = [
    "/", 
]

/**
 * An array of routes that are used for auth 
 * These routes will redirect logged in users to /settings
 * @type {string []}
 */

export const authRoutes = [
    "/auth/login",
    "/auth/signup",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix used for api auth prefixes
 * @type {string}
 */

export const apiAuthRoutes = '/api/auth'

/**
 * The default redirect path after logging in 
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/admin/dashboard'