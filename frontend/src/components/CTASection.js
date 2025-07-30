import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Clock } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-purple-900/20 via-dark-800 to-blue-900/20">
      <div className="container-max">
        <div className="relative">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
          
          {/* Content */}
          <div className="relative glass-card p-12 rounded-3xl border border-purple-500/30">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 text-sm font-medium text-white mb-8">
                <Clock className="w-4 h-4" />
                <span>Offre limitée - Plus que 48h</span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à exploser sur{' '}
                <span className="text-gradient">TikTok</span> ?
              </h2>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez plus de 500 créateurs qui ont transformé leur présence TikTok 
                grâce à nos formations IA. Résultats garantis en 30 jours.
              </p>

              {/* Features list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">Formation immédiate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">Stratégies éprouvées</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">Résultats rapides</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/packs"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Star className="w-5 h-5" />
                  <span>Choisir mon pack</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/why-ai"
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Zap className="w-5 h-5" />
                  <span>Pourquoi l'IA ?</span>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-purple-500/20">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex -space-x-2">
                      <img
                        src="https://images.unsplash.com/photo-1494790108755-2616b09bd8c8?w=40&h=40&fit=crop&crop=face"
                        alt="Étudiant"
                        className="w-8 h-8 rounded-full border-2 border-purple-500"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                        alt="Étudiant"
                        className="w-8 h-8 rounded-full border-2 border-purple-500"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                        alt="Étudiant"
                        className="w-8 h-8 rounded-full border-2 border-purple-500"
                      />
                    </div>
                    <span className="text-gray-300 text-sm">500+ étudiants satisfaits</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-300 text-sm">4.9/5 étoiles</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                    <span className="text-gray-300 text-sm">Garantie 30 jours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;