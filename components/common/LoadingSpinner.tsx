interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'black';
  text?: string;
}

const LoadingSpinner = ({ 
  size = 'md', 
  color = 'primary',
  text
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };
  
  const colorClasses = {
    primary: 'border-primary/20 border-t-primary',
    white: 'border-white/20 border-t-white',
    black: 'border-black/20 border-t-black'
  };
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        className={`rounded-full animate-spin ${sizeClasses[size]} ${colorClasses[color]}`}
      />
      {text && (
        <p className="mt-2 text-sm text-gray-400">{text}</p>
      )}
    </div>
  );
};

export default LoadingSpinner;