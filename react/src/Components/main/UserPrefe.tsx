import React, { useState } from 'react';

const CyberSecurityWireframes = () => {
  const [currentScreen, setCurrentScreen] = useState('preferences');
  const [selectedPreference, setSelectedPreference] = useState('CyberSécurité');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  
  const preferenceOptions = [
    "CyberSécurité",
    "Réseautique",
    "Data et CyberSécurité",
    "IA et CyberSécurité", 
    "Sécurité du Cloud",
    "Hacking Éthique",
  ];

  const handlePreferenceChange = (option: React.SetStateAction<string>) => {
    setSelectedPreference(option);
  };

  const handleValidate = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
      setCurrentScreen('dashboard');
    }, 1500);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('preferences');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('login');
  };

  const handleSubscribe = () => {
    alert("Abonnement réussi!");
  };

  const renderHeader = () => (
    <div className="bg-gray-900 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-xl">CyberSec Portal</div>
      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <button className="text-blue-400 hover:text-blue-300">Mon Profil</button>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
      ) : (
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
          onClick={() => setCurrentScreen('login')}
        >
          Connexion
        </button>
      )}
    </div>
  );

  const renderFooter = () => (
    <div className="bg-gray-900 text-white p-8">
      <div className="flex justify-between">
        <div className="w-1/4">
          <h3 className="font-bold mb-4">À propos</h3>
          <p className="text-gray-400 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-4">
            <p className="text-sm">Email: contact@cybersec.com</p>
            <p className="text-sm">Tél: +33 01 23 45 67 89</p>
          </div>
        </div>
        
        <div className="w-1/4">
          <h3 className="font-bold mb-4">Liens Rapides</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-blue-400 cursor-pointer">Accueil</li>
            <li className="hover:text-blue-400 cursor-pointer">À propos</li>
            <li className="hover:text-blue-400 cursor-pointer">Blog</li>
            <li className="hover:text-blue-400 cursor-pointer">Archives</li>
            <li className="hover:text-blue-400 cursor-pointer">Contact</li>
          </ul>
        </div>
        
        <div className="w-1/4">
          <h3 className="font-bold mb-4">Catégories</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {preferenceOptions.map(option => (
              <li key={option} className="hover:text-blue-400 cursor-pointer">{option}</li>
            ))}
          </ul>
        </div>
        
        <div className="w-1/4">
          <h3 className="font-bold mb-4">Article Hebdomadaire</h3>
          <p className="text-gray-400 text-sm mb-4">
            Recevez des articles de blog et des offres par e-mail.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Votre Email" 
              className="bg-gray-800 px-3 py-2 text-white text-sm rounded-l w-full"
            />
            <button 
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r text-sm"
              onClick={handleSubscribe}
            >
              S'abonner
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-8 space-x-4">
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
          <span className="text-sm">f</span>
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
          <span className="text-sm">t</span>
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
          <span className="text-sm">in</span>
        </div>
        <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600">
          <span className="text-sm">yt</span>
        </div>
      </div>
    </div>
  );

  const renderPreferencesScreen = () => (
    <div className="max-w-lg mx-auto my-16 bg-gray-800 rounded-lg p-8 shadow-lg">
      {showSuccessMessage ? (
        <div className="bg-green-500 text-white p-4 rounded mb-4 text-center">
          Préférences sauvegardées avec succès!
        </div>
      ) : null}
      
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Choisir Votre Préférences:</h2>
      
      <div className="space-y-4 mb-8">
        {preferenceOptions.map((option) => (
          <div key={option} className="flex items-center">
            <div 
              className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center border-2 cursor-pointer ${
                selectedPreference === option ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
              }`}
              onClick={() => handlePreferenceChange(option)}
            >
              {selectedPreference === option && (
                <div className="w-2 h-2 bg-white rounded-full"></div>
              )}
            </div>
            <label className="text-white cursor-pointer" onClick={() => handlePreferenceChange(option)}>
              {option}
            </label>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end space-x-4">
        <button 
          className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded"
          onClick={() => setCurrentScreen('dashboard')}
        >
          Annuler
        </button>
        <button 
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
          onClick={handleValidate}
          disabled={!selectedPreference}
        >
          Valider
        </button>
      </div>
    </div>
  );

  const renderLoginScreen = () => (
    <div className="max-w-md mx-auto my-16 bg-gray-800 rounded-lg p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Connexion</h2>
      
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-white mb-2">Email</label>
          <input 
            type="email" 
            className="w-full bg-gray-700 text-white px-4 py-2 rounded"
            placeholder="votre@email.com"
          />
        </div>
        
        <div>
          <label className="block text-white mb-2">Mot de passe</label>
          <input 
            type="password" 
            className="w-full bg-gray-700 text-white px-4 py-2 rounded"
            placeholder="••••••••"
          />
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-gray-300 text-sm">Se souvenir de moi</label>
        </div>
        
        <a href="#" className="text-blue-400 text-sm hover:underline">Mot de passe oublié?</a>
      </div>
      
      <button 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
        onClick={handleLogin}
      >
        Se connecter
      </button>
      
      <div className="mt-6 text-center">
        <p className="text-gray-400">
          Pas encore de compte? <a href="#" className="text-blue-400 hover:underline">S'inscrire</a>
        </p>
      </div>
    </div>
  );

  const renderDashboardScreen = () => (
    <div className="container mx-auto my-8 px-4">
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-white mb-4">Bienvenue sur votre tableau de bord</h1>
        <p className="text-gray-300">
          Votre préférence: <span className="text-blue-400 font-medium">{selectedPreference}</span>
        </p>
        <button 
          className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm"
          onClick={() => setCurrentScreen('preferences')}
        >
          Modifier mes préférences
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 bg-gray-700"></div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-blue-400 text-sm">{selectedPreference}</span>
                <span className="text-gray-400 text-sm">Mai 03, 2025</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Article sur {selectedPreference}</h3>
              <p className="text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
              </p>
              <button className="text-blue-400 hover:underline text-sm">Lire plus →</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Charger plus d'articles
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentScreen) {
      case 'preferences':
        return renderPreferencesScreen();
      case 'login':
        return renderLoginScreen();
      case 'dashboard':
        return renderDashboardScreen();
      default:
        return renderPreferencesScreen();
    }
  };

  const renderScreenSelector = () => (
    <div className="bg-gray-900 p-4 flex justify-center space-x-6 border-t border-gray-700">
      <button 
        className={`px-4 py-2 rounded ${currentScreen === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        onClick={() => setCurrentScreen('login')}
      >
        Écran de connexion
      </button>
      <button 
        className={`px-4 py-2 rounded ${currentScreen === 'preferences' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        onClick={() => setCurrentScreen('preferences')}
      >
        Écran de préférences
      </button>
      <button 
        className={`px-4 py-2 rounded ${currentScreen === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
        onClick={() => setCurrentScreen('dashboard')}
      >
        Tableau de bord
      </button>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {renderHeader()}
      <div className="flex-grow">
        {renderContent()}
      </div>
      {renderScreenSelector()}
      {renderFooter()}
    </div>
  );
};

export default CyberSecurityWireframes;