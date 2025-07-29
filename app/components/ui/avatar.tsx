'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { cn } from '@/lib/utils'

/**
 * Avatar root wrapper using Radix UI's Avatar.Root.
 * Provides a circular container for an avatar image or fallback.
 *
 * @example
 * ```tsx
 * <Avatar>
 *   <AvatarImage src="/user.jpg" alt="User" />
 *   <AvatarFallback>AB</AvatarFallback>
 * </Avatar>
 * ```
 */
const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/**
 * Avatar image using Radix UI's Avatar.Image.
 * Renders the user's image inside the avatar container.
 */
const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * Avatar fallback using Radix UI's Avatar.Fallback.
 * Renders fallback content (e.g. initials) if the image fails to load.
 */
const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
