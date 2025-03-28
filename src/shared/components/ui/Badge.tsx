import { type VariantProps, cva } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

import { cn } from '@/shared/utils'

const badgeVariants = cva(
    'inline-flex items-center rounded-full border-20 px-2.5 py-0.5 !text-label-lg  pt-[2px] font-medium transition-colors focus:outline-none',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
                secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
                destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
                outline: 'text-foreground'
            }
        },
        defaultVariants: {
            variant: 'default'
        }
    }
)

export interface BadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
