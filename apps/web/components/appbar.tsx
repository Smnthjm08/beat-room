"use client"

import Link from "next/link"
import { Button } from "@workspace/ui/components/button"
import { usePathname } from "next/navigation"
import { authClient } from "@workspace/auth/client"
import { LogoutButton } from "./buttons/logout"

export function Appbar() {
  const pathname = usePathname()
  const { data, isPending } = authClient.useSession()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-extrabold text-xl text-foreground">
            resonate
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
            <Link
              href="/profile"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/profile" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Profile
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isPending ? (
              // Skeleton / Placeholder state
              <div className="w-20 h-8 bg-muted rounded animate-pulse" />
            ) : data?.user ? (
              <LogoutButton />
            ) : (
              <>
                <Link href="/signin">
                  <Button variant="ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button size="sm">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
