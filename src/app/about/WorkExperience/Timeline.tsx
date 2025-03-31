import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import React, { forwardRef } from "react"

const Timeline = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />
)
Timeline.displayName = "Timeline"

const TimelineItem = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("", className)} {...props} />
)
TimelineItem.displayName = "TimelineItem"

const TimelineHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn(className)} {...props} />
)
TimelineHeader.displayName = "TimelineHeader"

const TimelineTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-xl font-bold text-primary", className)} {...props} />
  )
)
TimelineTitle.displayName = "TimelineTitle"

const TimelineTime = ({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof Badge>) => {
  return (
    <Badge className={cn("", className)} variant={variant} {...props}>
      {props.children}
    </Badge>
  )
}
TimelineTime.displayName = "TimelineTime"

const TimelineDescription = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-muted-foreground ", className)} {...props} />
  )
)
TimelineDescription.displayName = "TimelineDescription"

export { Timeline, TimelineItem, TimelineHeader, TimelineTitle, TimelineTime, TimelineDescription }
