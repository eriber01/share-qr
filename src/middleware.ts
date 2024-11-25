import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'


const publicApiRoutes = createRouteMatcher(['/api/public(.*)'])
const privateApiRoutes = createRouteMatcher(['/api/private(.*)'])

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/(./)?'])

export default clerkMiddleware(async (auth, request) => {
  if (isPublicRoute(request) || publicApiRoutes(request)) {
    return NextResponse.next()
  }

  if (privateApiRoutes(request)) {
    await auth.protect();
    return NextResponse.next()
  }

  await auth.protect()
  return NextResponse.next()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}