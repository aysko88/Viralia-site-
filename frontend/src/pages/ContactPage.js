import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  MessageCircle,
  Star,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@viralia.fr',
      description: 'Réponse sous 2h en moyenne'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      description: 'Lun-Ven 9h-18h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Paris, France',
      description: 'Siège social'
    }
  ];

  const faq = [
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer: 'La plupart de nos étudiants voient leurs premiers résultats dans les 7 premiers jours, avec des résultats significatifs en 30 jours.'
    },
    {
      question: 'Les formations sont-elles adaptées aux débutants ?',
      answer: 'Absolument ! Notre Pack Starter est spécialement conçu pour les débutants complets sur TikTok et l\'IA.'
    },
    {
      question: 'Y a-t-il une garantie de remboursement ?',
      answer: 'Oui, nous offrons une garantie satisfait ou remboursé de 30 à 90 jours selon le pack choisi.'
    },
    {
      question: 'Comment fonctionne le support ?',
      answer: 'Selon votre pack, vous avez accès à notre communauté Discord, support email, ou coaching personnalisé.'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
              <MessageCircle className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Nous Contacter</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Parlons de votre{' '}
              <span className="text-gradient">Projet</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre équipe est là pour répondre à toutes vos questions et vous accompagner 
              dans votre transformation TikTok avec l'IA.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="glass-card p-6 rounded-xl text-center hover-lift">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                  <div className="text-purple-400 font-medium mb-1">{info.value}</div>
                  <div className="text-sm text-gray-400">{info.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & TikTok */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="glass-card p-8 rounded-2xl text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-300">
                    Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Votre nom et prénom"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="Question générale">Question générale</option>
                      <option value="Support technique">Support technique</option>
                      <option value="Choix de pack">Aide pour choisir un pack</option>
                      <option value="Partenariat">Proposition de partenariat</option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="form-input form-textarea"
                      placeholder="Décrivez votre question ou votre projet..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-dots">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* TikTok & FAQ */}
            <div className="space-y-8">
              {/* TikTok Section */}
              <div className="glass-card p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Suivez-nous sur TikTok</h3>
                  <p className="text-gray-300 mb-6">
                    Découvrez nos derniers conseils et astuces IA directement sur TikTok !
                  </p>
                  
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>🎵</span>
                    <span>Voir notre TikTok</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  <p className="text-sm text-gray-400 mt-4">
                    <strong>@viralia_official</strong> - Plus de 100K abonnés nous font confiance
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Questions Fréquentes</h3>
                <div className="space-y-4">
                  {faq.map((item, index) => (
                    <div key={index} className="border-b border-purple-500/20 pb-4">
                      <h4 className="font-semibold text-white mb-2">{item.question}</h4>
                      <p className="text-gray-300 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <div>
                    <div className="font-semibold text-white">Temps de réponse</div>
                    <div className="text-sm text-gray-300">Moins de 2h en moyenne</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-dark-800/30">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ils nous font confiance</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">500+</div>
                <div className="text-sm text-gray-400">Étudiants formés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">4.9/5</div>
                <div className="text-sm text-gray-400">Note satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">24h</div>
                <div className="text-sm text-gray-400">Support réactif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">97%</div>
                <div className="text-sm text-gray-400">Taux de réussite</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;