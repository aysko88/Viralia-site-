import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Zap, TrendingUp, Users, Star } from 'lucide-react';

const HeroSection = () => {
  const sphereRef = useRef(null);

  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let animationId;
    let rotation = 0;

    const animate = () => {
      rotation += 0.01;
      sphere.style.transform = `rotate3d(1, 1, 0, ${rotation}rad)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/20">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            >
              <div className="w-1 h-1 bg-purple-400 rounded-full opacity-60" />
            </div>
          ))}
        </div>
      </div>

      {/* 3D Sphere */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div
          ref={sphereRef}
          className="w-80 h-80 relative"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {/* Sphere faces */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-full rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30"
              style={{
                transform: `rotateY(${i * 60}deg) translateZ(150px)`,
                backfaceVisibility: 'hidden',
              }}
            />
          ))}
          
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-purple-500/10 to-transparent animate-pulse" />
          
          {/* Orbit rings */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-8 rounded-full border border-purple-400/20" />
            <div className="absolute inset-16 rounded-full border border-blue-400/20" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-max text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Nouveau : Formation IA 2024</span>
            </div>

            {/* Title */}
            <h1 className="text-hero font-display leading-tight">
              Percer sur{' '}
              <span className="text-gradient">TikTok</span>
              <br />
              grâce à l'
              <span className="text-gradient">IA</span>
            </h1>

            {/* Subtitle */}
            <p className="text-subtitle text-gray-300 max-w-2xl">
              3 Packs Concrets. Résultats Réels.
              <br />
              <span className="text-gradient font-semibold">
                TikTok × Intelligence Artificielle
              </span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">50K+</div>
                <div className="text-sm text-gray-400">Followers générés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">2M+</div>
                <div className="text-sm text-gray-400">Vues obtenues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">97%</div>
                <div className="text-sm text-gray-400">Taux de réussite</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/packs"
                className="btn-primary inline-flex items-center space-x-2 justify-center"
              >
                <Star className="w-5 h-5" />
                <span>Découvrir les Packs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <button className="btn-secondary inline-flex items-center space-x-2 justify-center">
                <Play className="w-4 h-4" />
                <span>Voir la Démo</span>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Croissance garantie</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-sm text-gray-300">Communauté active</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-sm text-gray-300">Résultats rapides</span>
              </div>
            </div>
          </div>

          {/* Mobile sphere */}
          <div className="lg:hidden flex justify-center">
            <div
              ref={sphereRef}
              className="w-60 h-60 relative"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Simplified sphere for mobile */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border border-purple-400/40 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-400/30 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-700/10 to-blue-700/10 border border-purple-400/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;