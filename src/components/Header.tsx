import wideLogo from '@/assets/widthlogo.png';

export function Header() {
  return (
    <header className="w-full py-4 px-4 md:py-6">
      <div className="container mx-auto flex justify-center">
        <img 
          src={wideLogo} 
          alt="Lenden Probashi" 
          className="h-12 md:h-16 lg:h-20 object-contain animate-fade-in-up"
        />
      </div>
    </header>
  );
}
