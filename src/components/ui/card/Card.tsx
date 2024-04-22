import { cn } from '@/utils'
import React from 'react'

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'bg-card text-card-foreground rounded-lg border shadow-sm',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'

export default Card
