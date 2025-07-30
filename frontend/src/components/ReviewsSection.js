import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Données de démonstration (seront remplacées par l'API)
  const demoReviews = [
    {
      id: 1,
      name: 'Marie L.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b09bd8c8?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Pack Viral incroyable ! J\'ai gagné 50K followers en 3 semaines 🚀',
      pack: 'viral',
      verified: true
    },
    {
      id: 2,
      name: 'Thomas K.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'L\'IA a transformé mon contenu. Mes vues ont explosé ! 💯',
      pack: 'pro',
      verified: true
    },
    {
      id: 3,
      name: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Pack Starter parfait pour débuter. Très bien expliqué !',
      pack: 'starter',
      verified: true
    },
    {
      id: 4,
      name: 'Alex R.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Automatisation dingue ! Je gagne en dormant maintenant 💰',
      pack: 'pro',
      verified: true
    },
    {
      id: 5,
      name: 'Emma D.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Résultats fous ! 2M de vues sur ma première vidéo IA 🔥',
      pack: 'viral',
      verified: true
    },
    {
      id: 6,
      name: 'Lucas B.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Dashboard incroyable ! Je vois mes profits en temps réel',
      pack: 'pro',
      verified: true
    },
    {
      id: 7,
      name: 'Chloé P.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'Formation complète et concrète. Merci ViralIA ! 🙏',
      pack: 'viral',
      verified: true
    },
    {
      id: 8,
      name: 'Julien M.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      comment: 'De 0 à 100K followers en 2 mois. Incroyable ! 📈',
      pack: 'pro',
      verified: true
    }
  ];

  useEffect(() => {
    // Simuler le chargement des avis
    setTimeout(() => {
      setReviews(demoReviews);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    // Auto-slide
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(reviews.length / 3)) % Math.ceil(reviews.length / 3));
  };

  const getPackColor = (pack) => {
    switch (pack) {
      case 'starter': return 'from-blue-500 to-purple-500';
      case 'viral': return 'from-purple-500 to-pink-500';
      case 'pro': return 'from-purple-600 to-blue-600';
      default: return 'from-purple-500 to-blue-500';
    }
  };

  if (isLoading) {
    return (
      <section className="section-padding bg-dark-800/50">
        <div className="container-max">
          <div className="text-center">
            <div className="loading-dots">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-dark-800/50">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">Témoignages</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ils ont explosé grâce à{' '}
            <span className="text-gradient">ViralIA</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les résultats concrets de nos étudiants qui ont transformé 
            leur présence TikTok avec nos formations IA.
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.slice(slideIndex * 3, slideIndex * 3 + 3).map((review) => (
                      <div key={review.id} className="testimonial-card p-6 rounded-xl">
                        {/* Header */}
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={review.avatar}
                            alt={review.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-purple-400/30"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h4 className="font-semibold text-white">{review.name}</h4>
                              {review.verified && (
                                <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                                  <Star className="w-2 h-2 text-white" />
                                </div>
                              )}
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Comment */}
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          "{review.comment}"
                        </p>

                        {/* Pack Badge */}
                        <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${getPackColor(review.pack)} rounded-full px-3 py-1 text-xs text-white font-medium`}>
                          <span>Pack {review.pack === 'starter' ? 'Starter' : review.pack === 'viral' ? 'Viral' : 'Pro'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-purple-500/20 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-dark-800/80 border border-purple-500/30 rounded-full flex items-center justify-center text-white hover:bg-purple-500/20 transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-purple-500' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-purple-500/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">500+</div>
            <div className="text-gray-400 text-sm">Étudiants satisfaits</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4.9/5</div>
            <div className="text-gray-400 text-sm">Note moyenne</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">50M+</div>
            <div className="text-gray-400 text-sm">Vues générées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">97%</div>
            <div className="text-gray-400 text-sm">Taux de réussite</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;