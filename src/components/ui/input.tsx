import * as React from "react"

import { VariantProps, cva } from "class-variance-authority"
import { cn } from "../../lib/utils"


const inputVariants = cva(
  "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent  file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        alert: "border-amber-500",
        error: "border-red-500",
        default: "border-input focus:ring-primary"
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  asChild?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ variant, className }),
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

interface InputWithIconProps {
  icon: React.ReactNode,
  type?: string,
  placeholder?: string,
  className?: string,
  position: 'left' | 'right'
}

const iconplace: any = {
  left: 'pl-10',
  right: 'pr-10'
}

const InputWithIcon = React.forwardRef<HTMLInputElement, InputWithIconProps>(
  ({ icon, type, placeholder, className, position }) => {
    return (
      <div className="relative">
        {position === 'left' && <div className="absolute text-slate-400  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {icon}
        </div>}
        <Input
          type={type}
          placeholder={placeholder}
          className={cn("rounded-md border border-neutral-300 bg-white py-2 pl-4 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
            iconplace[position], className)}
        />
        {position === 'right' && <div className="absolute text-slate-400 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {icon}
        </div>}

      </div>
    )
  }

)

interface InputWithButtonProps {
  icon: React.ReactNode;
  buttonText: string;
  type?: string;
  placeholder?: string;
  className?: string;
  position?: 'left' | 'right';
  btnType?: 'default' | 'primary' | 'secondary';
  btnClassName?: string;
  onButtonClick?: () => void;
}

const buttonStyle: Record<string, string> = {
  default: 'bg-primary hover:bg-primary-dark text-white',
  primary: 'bg-white hover:bg-primary/10 text-primary',
  secondary: ' border-r bg-white hover:text-primary'
}

// focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus:border-neutral-500
const InputWithButton = React.forwardRef<HTMLInputElement, InputWithButtonProps>(
  ({ icon, buttonText, btnClassName, btnType = 'default', type = 'text', placeholder, className, position = 'left', onButtonClick }, ref) => {
    return (
      <div className="relative flex items-center">
        {position === 'left' && (
          <div className="absolute text-slate-400 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={cn(
            "rounded-md border  bg-white py-2 pl-4 pr-20 text-sm focus:outline-none", // Adjust padding for the button
            { 'pl-10': position === 'left' }, // Add space for icon if it's on the left
            className
          )}
        />
        <button
          type="button"
          onClick={onButtonClick}
          className={cn("absolute right-0  top-0 bottom-0 px-3 py-2 my-[1px] uppercase rounded-r-md text-sm font-medium focus:outline-none", buttonStyle[btnType], btnClassName)}
        >
          {buttonText}
        </button>
      </div>
    );
  }
);


export { Input, InputWithButton, InputWithIcon }

