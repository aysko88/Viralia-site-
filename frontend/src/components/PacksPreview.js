import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Check, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Crown,
  Users,
  Bot,
  BarChart3
} from 'lucide-react';

const PacksPreview = () => {
  const packs = [
    {
      id: 'starter',
      name: 'Pack Starter',
      price: 97,
      description: 'Parfait pour débuter sur TikTok avec l\'IA',
      icon: Zap,
      color: 'from-blue-500 to-purple-500',
      features: [
        'Bases de TikTok et algorithme',
        'Introduction à l\'IA pour le contenu',
        'Outils gratuits recommandés',
        'Guide de création de contenu',
        'Support communautaire'
      ],
      popular: false,
      badge: 'Débutant'
    },
    {
      id: 'viral',
      name: 'Pack Viral',
      price: 197,
      description: 'Stratégies concrètes pour devenir viral',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Automatisation IA avancée',
        'Stratégies de contenu viral',
        'Outils premium inclus',
        'Analyse de performance',
        'Templates prêts à l\'emploi',
        'Support prioritaire'
      ],
      popular: true,
      badge: 'Plus Populaire'
    },
    {
      id: 'pro',
      name: 'Pack Pro + Dashboards',
      price: 397,
      description: 'Solution complète avec automatisation',
      icon: Crown,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Tunnels de vente automatisés',
        'Dashboards de performance',
        'Automatisation complète',
        'Coaching personnalisé',
        'Accès aux outils premium',
        'Résultats garantis',
        'Support 24/7'
      ],
      popular: false,
      badge: 'Professionnel'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/10">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
            <Star className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300">Nos Formations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choisissez votre{' '}
            <span className="text-gradient">Pack IA</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des formations concrètes adaptées à votre niveau. 
            Chaque pack contient des stratégies éprouvées pour exploser sur TikTok.
          </p>
        </div>

        {/* Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((pack) => {
            const Icon = pack.icon;
            return (
              <div
                key={pack.id}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover-lift ${
                  pack.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-blue-500/10' 
                    : 'border-purple-500/20 bg-dark-800/50'
                } hover:border-purple-500/70 backdrop-blur-sm`}
              >
                {/* Popular Badge */}
                {pack.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {pack.badge}
                    </div>
                  </div>
                )}

                {/* Pack Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pack.color} flex items-center justify-center mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Pack Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
                  <p className="text-gray-300 mb-4">{pack.description}</p>
                  
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold text-gradient">{pack.price}€</span>
                    <span className="text-gray-400 line-through">
                      {pack.price === 97 ? '197€' : pack.price === 197 ? '397€' : '597€'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pack.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to={`/packs`}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    pack.popular ? 'bg-gradient-to-r from-purple-600 to-pink-600' : ''
                  }`}
                >
                  <span>Choisir ce pack</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">
            Pas sûr de votre choix ? Découvrez en détail chaque pack
          </p>
          <Link
            to="/packs"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <BarChart3 className="w-5 h-5" />
            <span>Comparer tous les packs</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PacksPreview;