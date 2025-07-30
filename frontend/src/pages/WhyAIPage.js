import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  TrendingUp, 
  Clock, 
  Target, 
  Zap, 
  Star,
  ArrowRight,
  CheckCircle,
  Brain,
  Rocket,
  BarChart3
} from 'lucide-react';

const WhyAIPage = () => {
  const advantages = [
    {
      icon: Clock,
      title: 'Gain de Temps Massif',
      description: 'L\'IA génère du contenu 10x plus rapidement qu\'un humain. Créez des vidéos virales en quelques minutes au lieu de plusieurs heures.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx0ZWNobm9sb2d5fGVufDB8fHx8MTc1Mzg3NDA3OHww&ixlib=rb-4.1.0&q=85',
      stats: ['90% de temps économisé', '10x plus de contenu', 'Automatisation complète']
    },
    {
      icon: Target,
      title: 'Ciblage Ultra-Précis',
      description: 'L\'IA analyse les tendances en temps réel et identifie exactement ce que votre audience veut voir pour maximiser l\'engagement.',
      image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1Mzg3NDA3Mnww&ixlib=rb-4.1.0&q=85',
      stats: ['97% précision ciblage', '5x plus d\'engagement', 'Analyse temps réel']
    },
    {
      icon: TrendingUp,
      title: 'Croissance Exponentielle',
      description: 'Les créateurs utilisant l\'IA obtiennent une croissance 5x plus rapide grâce à des stratégies optimisées par machine learning.',
      image: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1Mzg3NDA3Mnww&ixlib=rb-4.1.0&q=85',
      stats: ['5x croissance plus rapide', '300% ROI moyen', 'Résultats mesurables']
    }
  ];

  const reasons = [
    {
      icon: Brain,
      title: 'L\'IA comprend l\'algorithme TikTok',
      description: 'Notre IA est entraînée sur millions de vidéos virales pour comprendre exactement ce qui fonctionne sur TikTok.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Automatisation intelligente',
      description: 'Planification, création, publication - tout est automatisé intelligemment pour maximiser votre reach.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Optimisation continue',
      description: 'L\'IA apprend de vos performances et s\'améliore constamment pour de meilleurs résultats.',
      color: 'from-purple-600 to-pink-500'
    },
    {
      icon: Target,
      title: 'Personnalisation avancée',
      description: 'Chaque stratégie est personnalisée selon votre niche, audience et objectifs spécifiques.',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  const beforeAfter = {
    before: {
      title: 'Sans IA',
      points: [
        'Création manuelle chronophage',
        'Tendances ratées',
        'Contenu aléatoire',
        'Croissance lente',
        'Burnout créatif',
        'ROI imprévisible'
      ]
    },
    after: {
      title: 'Avec ViralIA',
      points: [
        'Contenu généré instantanément',
        'Tendances captées en temps réel',
        'Stratégie data-driven',
        'Croissance exponentielle',
        'Créativité augmentée',
        'ROI garanti'
      ]
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Intelligence Artificielle</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Pourquoi l'
              <span className="text-gradient">IA</span> change tout ?
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'Intelligence Artificielle révolutionne la création de contenu TikTok. 
              Découvrez comment elle peut transformer votre approche et multiplier vos résultats.
            </p>
          </div>

          {/* Main image */}
          <div className="relative max-w-4xl mx-auto">
            <img
              src="https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg"
              alt="Intelligence Artificielle"
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Bot className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">L'IA au service de votre créativité</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Les avantages de l'<span className="text-gradient">IA</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez les 3 avantages majeurs qui font de l'IA un game-changer pour TikTok
            </p>
          </div>

          <div className="space-y-16">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4">{advantage.title}</h3>
                    <p className="text-lg text-gray-300 mb-6">{advantage.description}</p>
                    
                    {/* Stats */}
                    <div className="space-y-3">
                      {advantage.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">{stat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="relative">
                      <img
                        src={advantage.image}
                        alt={advantage.title}
                        className="w-full h-80 object-cover rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-2xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="section-padding bg-dark-800/50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              4 raisons d'adopter l'<span className="text-gradient">IA maintenant</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="glass-card p-8 rounded-2xl hover-lift">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Avant vs Après l'<span className="text-gradient">IA</span>
            </h2>
            <p className="text-xl text-gray-300">
              Voyez la différence entre une approche traditionnelle et une approche IA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❌</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{beforeAfter.before.title}</h3>
              </div>
              
              <div className="space-y-4">
                {beforeAfter.before.points.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* After */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{beforeAfter.after.title}</h3>
              </div>
              
              <div className="space-y-4">
                {beforeAfter.after.points.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-purple-900/20 via-dark-800 to-blue-900/20">
        <div className="container-max">
          <div className="text-center">
            <div className="glass-card p-12 rounded-3xl border border-purple-500/30 max-w-4xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Prêt à révolutionner votre TikTok ?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez les créateurs qui ont déjà adopté l'IA et transformé leur présence sur TikTok. 
                Résultats garantis en 30 jours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/packs"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Star className="w-5 h-5" />
                  <span>Découvrir nos Packs IA</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/dashboards"
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <BarChart3 className="w-5 h-5" />
                  <span>Voir les Résultats</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAIPage;