import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Check, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Crown,
  X,
  Play
} from 'lucide-react';

const PacksPage = () => {
  const [selectedPack, setSelectedPack] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const packs = [
    {
      id: 'starter',
      name: 'Pack Starter',
      price: 97,
      originalPrice: 197,
      description: 'Parfait pour débuter sur TikTok avec l\'IA',
      longDescription: 'Ce pack est idéal pour les débutants qui veulent comprendre les bases de TikTok et découvrir comment l\'IA peut transformer leur contenu. Vous apprendrez les fondamentaux et obtiendrez vos premiers résultats rapidement.',
      icon: Zap,
      color: 'from-blue-500 to-purple-500',
      features: [
        'Bases de TikTok et algorithme (2h de formation)',
        'Introduction à l\'IA pour le contenu (1h30)',
        'Outils gratuits recommandés + tutoriels',
        'Guide de création de contenu étape par étape',
        'Templates de scripts pour débuter',
        'Support communautaire Discord',
        'Accès aux mises à jour gratuites'
      ],
      popular: false,
      badge: 'Débutant',
      duration: '4 semaines',
      support: 'Communauté Discord',
      guarantee: '30 jours'
    },
    {
      id: 'viral',
      name: 'Pack Viral',
      price: 197,
      originalPrice: 397,
      description: 'Stratégies concrètes pour devenir viral',
      longDescription: 'Notre pack le plus populaire ! Conçu pour ceux qui veulent passer au niveau supérieur et obtenir des résultats viraux. Vous maîtriserez les stratégies avancées et l\'automatisation IA.',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Tout du Pack Starter inclus',
        'Automatisation IA avancée (3h de formation)',
        'Stratégies de contenu viral révélées',
        'Outils premium inclus (valeur 200€)',
        'Analyse de performance détaillée',
        'Templates prêts à l\'emploi (50+ scripts)',
        'Formations bonus : Hooks viraux',
        'Support prioritaire par email',
        'Coaching de groupe mensuel'
      ],
      popular: true,
      badge: 'Plus Populaire',
      duration: '8 semaines',
      support: 'Email + Coaching groupe',
      guarantee: '60 jours'
    },
    {
      id: 'pro',
      name: 'Pack Pro + Dashboards',
      price: 397,
      originalPrice: 797,
      description: 'Solution complète avec automatisation',
      longDescription: 'La solution ultime pour les créateurs sérieux. Obtenez une automatisation complète, des dashboards en temps réel et un accompagnement personnalisé pour maximiser vos revenus.',
      icon: Crown,
      color: 'from-purple-600 to-blue-600',
      features: [
        'Tout des Packs précédents inclus',
        'Tunnels de vente automatisés',
        'Dashboards de performance en temps réel',
        'Automatisation complète (CRM inclus)',
        'Coaching personnalisé 1-to-1 (2h)',
        'Accès aux outils premium à vie',
        'Formation monétisation avancée',
        'Templates de vente (landing pages)',
        'Support prioritaire 24/7',
        'Résultats garantis ou remboursé',
        'Accès exclusif aux nouvelles stratégies'
      ],
      popular: false,
      badge: 'Professionnel',
      duration: '12 semaines',
      support: 'Support 24/7 + Coaching 1-to-1',
      guarantee: '90 jours'
    }
  ];

  const comparisonFeatures = [
    'Formation de base TikTok',
    'Introduction IA',
    'Outils gratuits',
    'Support communautaire',
    'Automatisation avancée',
    'Outils premium',
    'Coaching groupe',
    'Support prioritaire',
    'Dashboards temps réel',
    'Coaching personnalisé',
    'Support 24/7',
    'Garantie étendue'
  ];

  const getFeatureStatus = (packId, featureIndex) => {
    const statusMap = {
      'starter': [true, true, true, true, false, false, false, false, false, false, false, false],
      'viral': [true, true, true, true, true, true, true, true, false, false, false, false],
      'pro': [true, true, true, true, true, true, true, true, true, true, true, true]
    };
    return statusMap[packId][featureIndex];
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Nos Formations</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Choisissez votre{' '}
              <span className="text-gradient">Formation IA</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Des formations concrètes adaptées à votre niveau. Chaque pack contient des stratégies éprouvées pour exploser sur TikTok grâce à l'Intelligence Artificielle.
            </p>

            <button
              onClick={() => setShowComparison(!showComparison)}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Comparer les packs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      {showComparison && (
        <section className="section-padding bg-dark-800/50">
          <div className="container-max">
            <div className="glass-card p-8 rounded-2xl overflow-x-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Comparaison des Packs</h2>
                <button
                  onClick={() => setShowComparison(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="min-w-full">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-purple-500/20">
                      <th className="text-left py-4 text-white font-semibold">Fonctionnalités</th>
                      {packs.map(pack => (
                        <th key={pack.id} className="text-center py-4 text-white font-semibold">
                          {pack.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-purple-500/10">
                        <td className="py-4 text-gray-300">{feature}</td>
                        {packs.map(pack => (
                          <td key={pack.id} className="text-center py-4">
                            {getFeatureStatus(pack.id, index) ? (
                              <Check className="w-5 h-5 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-500 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Packs Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packs.map((pack) => {
              const Icon = pack.icon;
              return (
                <div
                  key={pack.id}
                  className={`relative p-8 rounded-2xl border transition-all duration-300 hover-lift ${
                    pack.popular 
                      ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-blue-500/10 scale-105' 
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
                    
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-4xl font-bold text-gradient">{pack.price}€</span>
                      <span className="text-gray-400 line-through">{pack.originalPrice}€</span>
                      <span className="text-green-400 text-sm font-medium">
                        -{Math.round((1 - pack.price / pack.originalPrice) * 100)}%
                      </span>
                    </div>

                    {/* Pack details */}
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mb-6">
                      <div>
                        <span className="font-medium">Durée :</span>
                        <div>{pack.duration}</div>
                      </div>
                      <div>
                        <span className="font-medium">Support :</span>
                        <div>{pack.support}</div>
                      </div>
                      <div>
                        <span className="font-medium">Garantie :</span>
                        <div>{pack.guarantee}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-3 mb-8">
                    {pack.features.slice(0, 5).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                    {pack.features.length > 5 && (
                      <button
                        onClick={() => setSelectedPack(pack)}
                        className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                      >
                        Voir toutes les fonctionnalités ({pack.features.length})
                      </button>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/payment"
                    state={{ 
                      selectedPack: {
                        id: pack.id,
                        name: pack.name,
                        price: pack.price,
                        description: pack.description,
                        features: pack.features,
                        popular: pack.popular,
                        badge: pack.badge,
                        duration: pack.duration,
                        support: pack.support,
                        guarantee: pack.guarantee
                      }
                    }}
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
        </div>
      </section>

      {/* Pack Details Modal */}
      {selectedPack && (
        <div className="modal-overlay" onClick={() => setSelectedPack(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedPack.name}</h2>
                <p className="text-gray-300 mt-2">{selectedPack.longDescription}</p>
              </div>
              <button
                onClick={() => setSelectedPack(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Contenu détaillé</h3>
                <div className="space-y-3">
                  {selectedPack.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Informations</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400">Prix :</span>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-2xl font-bold text-gradient">{selectedPack.price}€</span>
                      <span className="text-gray-400 line-through">{selectedPack.originalPrice}€</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Durée :</span>
                    <div className="text-white mt-1">{selectedPack.duration}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Support :</span>
                    <div className="text-white mt-1">{selectedPack.support}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Garantie :</span>
                    <div className="text-white mt-1">{selectedPack.guarantee}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/payment"
                    state={{ selectedPack }}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <span>Choisir ce pack</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PacksPage;