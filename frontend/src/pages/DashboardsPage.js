import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Heart, 
  Share2,
  DollarSign,
  Users,
  Clock,
  Star,
  ArrowRight,
  Play,
  Pause,
  Calendar,
  Filter
} from 'lucide-react';

const DashboardsPage = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedStudent, setSelectedStudent] = useState(0);

  const timeframes = [
    { value: '7d', label: '7 jours' },
    { value: '30d', label: '30 jours' },
    { value: '90d', label: '3 mois' },
    { value: '1y', label: '1 an' }
  ];

  const studentResults = [
    {
      name: 'Marie L.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b09bd8c8?w=150&h=150&fit=crop&crop=face',
      pack: 'Pack Viral',
      startDate: 'Mars 2024',
      metrics: {
        followers: { before: 1200, after: 87500, growth: '+7192%' },
        views: { before: 15000, after: 2800000, growth: '+18567%' },
        likes: { before: 800, after: 420000, growth: '+52400%' },
        revenue: { before: 0, after: 8500, growth: '+∞' }
      },
      topVideos: [
        { title: 'IA Content Hack #1', views: '2.1M', likes: '145K' },
        { title: 'Viral Formula Revealed', views: '1.8M', likes: '132K' },
        { title: 'TikTok Algorithm 2024', views: '1.2M', likes: '98K' }
      ]
    },
    {
      name: 'Thomas K.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      pack: 'Pack Pro',
      startDate: 'Février 2024',
      metrics: {
        followers: { before: 2500, after: 156000, growth: '+6140%' },
        views: { before: 28000, after: 5200000, growth: '+18471%' },
        likes: { before: 1200, after: 680000, growth: '+56567%' },
        revenue: { before: 0, after: 12800, growth: '+∞' }
      },
      topVideos: [
        { title: 'AI Automation Secrets', views: '3.2M', likes: '201K' },
        { title: 'Making Money While Sleeping', views: '2.9M', likes: '187K' },
        { title: 'Dashboard Tutorial', views: '2.1M', likes: '156K' }
      ]
    },
    {
      name: 'Sarah M.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      pack: 'Pack Starter',
      startDate: 'Avril 2024',
      metrics: {
        followers: { before: 450, after: 28500, growth: '+6233%' },
        views: { before: 5200, after: 980000, growth: '+18746%' },
        likes: { before: 320, after: 125000, growth: '+39063%' },
        revenue: { before: 0, after: 3200, growth: '+∞' }
      },
      topVideos: [
        { title: 'My First Viral Video', views: '1.1M', likes: '89K' },
        { title: 'Beginner\'s AI Guide', views: '875K', likes: '67K' },
        { title: 'From 0 to 10K Followers', views: '643K', likes: '52K' }
      ]
    }
  ];

  const globalStats = [
    {
      icon: Users,
      label: 'Total Followers Générés',
      value: '2.5M+',
      change: '+147%',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Eye,
      label: 'Vues Totales',
      value: '50M+',
      change: '+289%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      label: 'Likes Obtenus',
      value: '8.2M+',
      change: '+312%',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: DollarSign,
      label: 'Revenus Générés',
      value: '125K€+',
      change: '+∞',
      color: 'from-green-500 to-blue-500'
    }
  ];

  const dashboardImages = [
    {
      title: 'Analytics Dashboard',
      description: 'Vue d\'ensemble des performances en temps réel',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODc0MDk1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Revenue Tracking',
      description: 'Suivi des revenus et conversions',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODc0MDk1fDA&ixlib=rb-4.1.0&q=85'
    },
    {
      title: 'Content Performance',
      description: 'Analyse détaillée de vos contenus',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxkYXNoYm9hcmR8ZW58MHx8fHwxNzUzODc0MDk1fDA&ixlib=rb-4.1.0&q=85'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
              <BarChart3 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Résultats Réels</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Dashboards de{' '}
              <span className="text-gradient">Performance</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez les résultats concrets de nos étudiants avec des dashboards en temps réel. 
              Des données transparentes, des résultats mesurables.
            </p>
          </div>

          {/* Global Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {globalStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover-lift">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                  <div className="text-xs text-green-400 font-medium">{stat.change} ce mois</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Images */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos <span className="text-gradient">Dashboards</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des outils de visualisation avancés pour suivre vos performances en temps réel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dashboardImages.map((dashboard, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden hover-lift">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dashboard.image}
                    alt={dashboard.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{dashboard.title}</h3>
                  <p className="text-gray-300 text-sm">{dashboard.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Results */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Résultats de nos <span className="text-gradient">Étudiants</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Des transformations réelles avec des données vérifiées
            </p>
          </div>

          {/* Student Selector */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-dark-800/50 rounded-full p-2">
              {studentResults.map((student, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedStudent(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    selectedStudent === index
                      ? 'bg-purple-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <img
                    src={student.avatar}
                    alt={student.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-sm font-medium">{student.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Selected Student Results */}
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Student Info */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={studentResults[selectedStudent].avatar}
                    alt={studentResults[selectedStudent].name}
                    className="w-16 h-16 rounded-full border-2 border-purple-400"
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{studentResults[selectedStudent].name}</h3>
                    <p className="text-gray-400">{studentResults[selectedStudent].pack}</p>
                    <p className="text-sm text-gray-500">Démarré en {studentResults[selectedStudent].startDate}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(studentResults[selectedStudent].metrics).map(([key, metric]) => (
                    <div key={key} className="bg-dark-800/50 p-4 rounded-xl">
                      <div className="flex items-center space-x-2 mb-2">
                        {key === 'followers' && <Users className="w-4 h-4 text-blue-400" />}
                        {key === 'views' && <Eye className="w-4 h-4 text-purple-400" />}
                        {key === 'likes' && <Heart className="w-4 h-4 text-pink-400" />}
                        {key === 'revenue' && <DollarSign className="w-4 h-4 text-green-400" />}
                        <span className="text-sm text-gray-400 capitalize">
                          {key === 'revenue' ? 'Revenus' : key}
                        </span>
                      </div>
                      <div className="text-xl font-bold text-white">
                        {key === 'revenue' ? `${metric.after}€` : metric.after.toLocaleString()}
                      </div>
                      <div className="flex items-center space-x-2 text-xs">
                        <span className="text-gray-500">
                          Avant: {key === 'revenue' ? `${metric.before}€` : metric.before.toLocaleString()}
                        </span>
                        <span className="text-green-400 font-medium">{metric.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Videos */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6">Top Vidéos Virales</h4>
                <div className="space-y-4">
                  {studentResults[selectedStudent].topVideos.map((video, index) => (
                    <div key={index} className="bg-dark-800/50 p-4 rounded-xl flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Play className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{video.title}</div>
                          <div className="text-sm text-gray-400">
                            {video.views} vues • {video.likes} likes
                          </div>
                        </div>
                      </div>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                  ))}
                </div>
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
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6">
                Vos résultats vous attendent
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez nos étudiants qui obtiennent des résultats concrets et mesurables. 
                Votre dashboard de performance vous attend !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/packs"
                  className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Star className="w-5 h-5" />
                  <span>Commencer maintenant</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  to="/contact"
                  className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
                >
                  <Clock className="w-5 h-5" />
                  <span>Demander une démo</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardsPage;