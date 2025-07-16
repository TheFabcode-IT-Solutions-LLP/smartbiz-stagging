import Anchor from "@/components/ui/Anchor/Anchor";


export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary-100 via-primary-100 to-gray-800 text-white p-6">
      <div className="relative w-full max-w-3xl text-center">
        {/* Big 404 Text */}
        <h1 className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-accent-100 to-accent-200 drop-shadow-2xl">
          404
        </h1>

        {/* Floating Astronaut SVG (fun element) */}
        <div className="absolute left-1/2 top-[20%] transform -translate-x-1/2 -translate-y-1/2 w-32 animate-bounce">
          
        </div>

        <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-wide">
          Neural Link Lost
        </h2>

        <p className="my-4 text-lg sm:text-xl text-gray-300 max-w-[450px] mx-auto">
          Oops! The page you&apos;re searching for doesn&apos;t exist in this dimension — or any known dataset.

        </p>
<div className="flex justify-center">
      <Anchor href="/" label="Reconnect to Home" />
      
      </div>
      </div>

      {/* Optional: Some stars or visual effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute animate-pulse left-[10%] top-[20%] w-2 h-2 bg-white rounded-full opacity-30" />
        <div className="absolute animate-pulse left-[80%] top-[30%] w-1.5 h-1.5 bg-white rounded-full opacity-40" />
        <div className="absolute animate-ping left-[50%] bottom-[10%] w-2.5 h-2.5 bg-purple-400 rounded-full opacity-20" />
        <div className="absolute animate-ping right-[15%] top-[10%] w-3 h-3 bg-pink-500 rounded-full opacity-30" />
      </div>
    </div>
  );
}