const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`bg-primary hover:bg-secondary transition-colors text-white rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer font-bold ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button

