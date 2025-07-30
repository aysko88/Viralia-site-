import React from 'react';
import { TrendingUp, Users, Zap, Star, Eye, Heart } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Étudiants formés',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Eye,
      number: '50M+',
      label: 'Vues générées',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      number: '97%',
      label: 'Taux de réussite',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: Heart,
      number: '10M+',
      label: 'Likes obtenus',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section className="section-padding bg-dark-800/30">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nos étudiants obtiennent des résultats concrets et mesurables grâce à nos méthodes IA.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Achievement badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 glass-card rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Formation Certifiée</h3>
            <p className="text-gray-300 text-sm">
              Contenu validé par des experts en IA et marketing digital
            </p>
          </div>

          <div className="text-center p-6 glass-card rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Résultats Garantis</h3>
            <p className="text-gray-300 text-sm">
              Remboursement si vous n'obtenez pas de résultats en 30 jours
            </p>
          </div>

          <div className="text-center p-6 glass-card rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Communauté Active</h3>
            <p className="text-gray-300 text-sm">
              Rejoignez notre communauté de créateurs qui s'entraident
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;