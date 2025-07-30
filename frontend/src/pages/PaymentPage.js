import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CreditCard, 
  Upload, 
  CheckCircle, 
  Star,
  Lock,
  Clock,
  ArrowLeft,
  FileText,
  Shield,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

const PaymentPage = () => {
  const location = useLocation();
  const [selectedPack, setSelectedPack] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pack: '',
    amount: 0
  });
  const [proofFile, setProofFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState('');

  const ribInfo = {
    titulaire: 'ViralIA SARL',
    iban: 'FR76 1234 5678 9012 3456 7890 123',
    bic: 'AGRIFRPP',
    banque: 'Crédit Agricole',
    reference: 'VIRALIA-'
  };

  // Pack par défaut si aucun n'est sélectionné
  const defaultPacks = [
    {
      id: 'starter',
      name: 'Pack Starter',
      price: 97,
      description: 'Parfait pour débuter sur TikTok avec l\'IA'
    },
    {
      id: 'viral',
      name: 'Pack Viral',
      price: 197,
      description: 'Stratégies concrètes pour devenir viral'
    },
    {
      id: 'pro',
      name: 'Pack Pro + Dashboards',
      price: 397,
      description: 'Solution complète avec automatisation'
    }
  ];

  useEffect(() => {
    if (location.state?.selectedPack) {
      const pack = location.state.selectedPack;
      setSelectedPack(pack);
      setFormData(prev => ({
        ...prev,
        pack: pack.name,
        amount: pack.price
      }));
    } else {
      // Pack Viral par défaut (le plus populaire)
      const defaultPack = defaultPacks[1];
      setSelectedPack(defaultPack);
      setFormData(prev => ({
        ...prev,
        pack: defaultPack.name,
        amount: defaultPack.price
      }));
    }
  }, [location.state]);

  const handlePackChange = (pack) => {
    setSelectedPack(pack);
    setFormData(prev => ({
      ...prev,
      pack: pack.name,
      amount: pack.price
    }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB max
      setProofFile(file);
    } else {
      alert('Le fichier doit faire moins de 10MB');
    }
  };

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    } catch (err) {
      // Fallback pour les navigateurs plus anciens
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!proofFile) {
      alert('Veuillez joindre votre preuve de virement');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('pack', formData.pack);
      formDataToSend.append('amount', formData.amount);
      formDataToSend.append('file', proofFile);

      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/payment/proof`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de l\'envoi. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateReference = () => {
    return ribInfo.reference + formData.name.replace(/\s+/g, '').toUpperCase().slice(0, 10) + Date.now().toString().slice(-4);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="glass-card p-12 rounded-3xl">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
              
              <h1 className="text-4xl font-bold text-white mb-6">
                Preuve reçue avec succès !
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Merci ! Nous avons bien reçu votre preuve de virement. 
                Votre accès sera activé dans les 24h suivant la réception du virement.
              </p>
              
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-white mb-2">Prochaines étapes :</h3>
                <ul className="text-left text-gray-300 space-y-2">
                  <li>✅ Preuve de paiement reçue</li>
                  <li>⏳ Vérification du virement (24-48h)</li>
                  <li>📧 Email d'activation avec vos accès</li>
                  <li>🚀 Début de votre formation !</li>
                </ul>
              </div>
              
              <Link to="/" className="btn-primary inline-flex items-center space-x-2">
                <span>Retour à l'accueil</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-purple-900/20">
        <div className="container-max">
          <div className="text-center mb-12">
            <Link to="/packs" className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour aux packs</span>
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm mb-6">
              <CreditCard className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Paiement Sécurisé</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Finaliser votre{' '}
              <span className="text-gradient">Commande</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sélection du pack */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Votre Pack</h2>
              
              {!location.state?.selectedPack && (
                <div className="mb-6">
                  <p className="text-gray-300 mb-4">Choisissez votre pack :</p>
                  <div className="space-y-3">
                    {defaultPacks.map((pack) => (
                      <div
                        key={pack.id}
                        onClick={() => handlePackChange(pack)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all ${
                          selectedPack?.id === pack.id
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-gray-600 hover:border-purple-400 bg-dark-800/50'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-bold text-white">{pack.name}</h3>
                            <p className="text-sm text-gray-400">{pack.description}</p>
                          </div>
                          <div className="text-2xl font-bold text-gradient">{pack.price}€</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pack sélectionné */}
              {selectedPack && (
                <div className="glass-card p-6 rounded-xl mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedPack.name}</h3>
                      <p className="text-gray-300">{selectedPack.description}</p>
                    </div>
                    <div className="text-3xl font-bold text-gradient">{selectedPack.price}€</div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                    <span className="text-gray-300">Total à payer</span>
                    <span className="text-2xl font-bold text-gradient">{selectedPack.price}€</span>
                  </div>
                </div>
              )}

              {/* Informations RIB */}
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center space-x-2 mb-6">
                  <Shield className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Coordonnées Bancaires</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-dark-800/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-400">Bénéficiaire</div>
                        <div className="font-medium text-white">{ribInfo.titulaire}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(ribInfo.titulaire, 'titulaire')}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {copiedField === 'titulaire' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-dark-800/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-400">IBAN</div>
                        <div className="font-medium text-white font-mono">{ribInfo.iban}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(ribInfo.iban, 'iban')}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {copiedField === 'iban' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-dark-800/50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-400">BIC</div>
                        <div className="font-medium text-white font-mono">{ribInfo.bic}</div>
                      </div>
                      <button
                        onClick={() => copyToClipboard(ribInfo.bic, 'bic')}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        {copiedField === 'bic' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <div className="text-white font-medium mb-1">Référence à indiquer :</div>
                        <div className="text-purple-300 font-mono">
                          {formData.name ? generateReference() : ribInfo.reference + 'VOTRENOM1234'}
                        </div>
                        <div className="text-gray-400 mt-1">
                          Cette référence nous permettra d'identifier votre paiement rapidement.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de preuve */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Envoi de la preuve de virement</h2>
              
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
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="votre@email.com"
                  />
                  <div className="text-sm text-gray-400 mt-1">
                    Vos accès seront envoyés sur cette adresse
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="proof" className="form-label">
                    Preuve de virement *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="proof"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                    />
                    <label
                      htmlFor="proof"
                      className="form-input cursor-pointer flex items-center justify-center space-x-2 h-32 border-2 border-dashed"
                    >
                      {proofFile ? (
                        <div className="text-center">
                          <FileText className="w-8 h-8 text-green-400 mx-auto mb-2" />
                          <div className="text-white">{proofFile.name}</div>
                          <div className="text-sm text-gray-400">Cliquez pour changer</div>
                        </div>
                      ) : (
                        <div className="text-center">
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <div className="text-white">Cliquez pour ajouter votre preuve</div>
                          <div className="text-sm text-gray-400">PDF, JPG, PNG (max 10MB)</div>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                {/* Instructions */}
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Instructions :</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>1. Effectuez le virement avec les coordonnées ci-dessus</li>
                    <li>2. Indiquez la référence dans le motif du virement</li>
                    <li>3. Prenez une capture d'écran de la confirmation</li>
                    <li>4. Joignez cette preuve et envoyez le formulaire</li>
                  </ul>
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
                      <Upload className="w-5 h-5" />
                      <span>Envoyer la preuve de virement</span>
                    </>
                  )}
                </button>
              </form>

              {/* Sécurité */}
              <div className="mt-8 glass-card p-4 rounded-lg">
                <div className="flex items-center space-x-2 text-green-400 mb-2">
                  <Lock className="w-4 h-4" />
                  <span className="text-sm font-medium">Paiement 100% sécurisé</span>
                </div>
                <div className="text-xs text-gray-400">
                  Vos données sont protégées et votre accès sera activé sous 24h après réception du virement.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;