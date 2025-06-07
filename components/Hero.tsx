import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          //  Fallback image se o vídeo não carregar
          poster="/fallback.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/video-hero.mp4" type="video/mp4" />
          {/* Fallback image se o vídeo não carregar */}
          Seu Navegador não suporta esse vídeo.😢
        </video>
        {/* Overlay para melhorar legibilidade do texto */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="items-center">
            {/* Left Column - Welcome Message */}
            <div className="relative flex items-center justify-center px-10 pt-48">
              <Image
                src="/logo-black.png"
                alt="Foursquare Logo"
                width={500}
                height={500}
                priority
                className="w-48 h-auto md:w-64 lg:w-80"
                quality={100}
              />
            </div>
            <div className="flex flex-col items-center justify-center mt-10 space-y-8">
              <div className="space-y-4">
                <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight drop-shadow-lg">
                  Estamos felizes em ter você aqui
                </h1>
              </div>
              <div className="mx-auto mt-8">
                <Link
                  href="#about"
                  // onClick={handleSmoothScroll}
                  className="bg-blue-600 hover:bg-blue-400 text-white font-light py-3 px-6 rounded-full cursor-pointer relative z-30 text-base md:text-lg"
                >
                  Saiba mais
                </Link>
              </div>
            </div>

            <div className=" relative flex items-center justify-center gap-2 pt-48 md:pt-24 mb-10">
              <h1 className="text-base md:text-lg lg:text-xl text-white">
                Member of
              </h1>
              <Image
                src="/logo-council.webp"
                alt="Foursquare Logo"
                width={200}
                height={200}
                className="w-48 h-auto md:w-36  "
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
