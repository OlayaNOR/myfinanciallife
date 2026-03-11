"use client"

import { useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ButtonHoldAndReleaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  holdDuration?: number
}

export function ButtonHoldAndRelease({
  className,
  holdDuration = 3000,
  onClick,
  ...props
}: ButtonHoldAndReleaseProps) {

  const [isHolding, setIsHolding] = useState(false)
  const controls = useAnimation()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  function handleHoldStart() {

    setIsHolding(true)

    controls.start({
      width: "100%",
      transition: {
        duration: holdDuration / 1000,
        ease: "linear",
      },
    })

    timeoutRef.current = setTimeout(() => {
      onClick?.({} as any)
    }, holdDuration)
  }

  function handleHoldEnd() {

    setIsHolding(false)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    controls.stop()

    controls.start({
      width: "0%",
      transition: { duration: 0.2 },
    })
  }

  return (
    <Button
      size="default"
      className={cn(
        "h-10 min-w-40 relative overflow-hidden",
        "bg-red-100 dark:bg-red-200",
        "text-red-600 border border-red-200",
        className
      )}
      onMouseDown={handleHoldStart}
      onMouseUp={handleHoldEnd}
      onMouseLeave={handleHoldEnd}
      onTouchStart={handleHoldStart}
      onTouchEnd={handleHoldEnd}
      {...props}
    >
      <motion.div
        initial={{ width: "0%" }}
        animate={controls}
        className="absolute left-0 top-0 h-full bg-red-400/30"
      />

      <span className="relative z-10 flex items-center gap-2">
        <Trash2Icon className="w-4 h-4" />
        {isHolding ? "Keep holding..." : "Hold to delete"}
      </span>
    </Button>
  )
}