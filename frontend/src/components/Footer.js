import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Instagram, 
  Youtube,
  Star,
  Bot,
  TrendingUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-purple-500/20 mt-20">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">ViralIA</h3>
                <p className="text-xs text-gray-400">L'IA qui rend TikTok rentable</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformez votre présence TikTok grâce à l'intelligence artificielle. 
              Des stratégies concrètes pour devenir viral et monétiser votre audience.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/viralia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/viralia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com/viralia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Accueil</span>
                </Link>
              </li>
              <li>
                <Link to="/packs" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Packs de Formation</span>
                </Link>
              </li>
              <li>
                <Link to="/why-ai" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2">
                  <Bot className="w-4 h-4" />
                  <span>Pourquoi l'IA ?</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboards" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Dashboards</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Packs */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Nos Packs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/packs" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Pack Starter - 97€
                </Link>
              </li>
              <li>
                <Link to="/packs" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Pack Viral - 197€
                </Link>
              </li>
              <li>
                <Link to="/packs" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Pack Pro + Dashboards - 397€
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>contact@viralia.fr</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </li>
            </ul>
            <div className="mt-4">
              <Link to="/contact" className="btn-secondary text-sm py-2 px-4">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-purple-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ViralIA. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Mentions légales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;