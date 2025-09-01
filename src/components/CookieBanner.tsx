"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Prüfen ob Cookie-Einstellungen bereits gesetzt wurden
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now()
    }));
    setShowBanner(false);
  };

  const saveSettings = (settings: any) => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      ...settings,
      necessary: true, // Notwendige Cookies sind immer aktiv
      timestamp: Date.now()
    }));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-burgundy shadow-lg z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-burgundy mb-2">
                🍪 Wir verwenden Cookies
              </h3>
              <p className="text-sm body-text">
                Wir nutzen Cookies auf unserer Website. Einige von ihnen sind essenziell, 
                während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. 
                Weitere Informationen finden Sie in unserer{" "}
                <Link href="/datenschutz" className="text-burgundy hover:text-coral underline">
                  Datenschutzerklärung
                </Link>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowSettings(true)}
                className="px-4 py-2 text-sm border border-burgundy text-burgundy rounded hover:bg-burgundy hover:text-white transition-colors"
              >
                Einstellungen
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-2 text-sm border border-burgundy text-burgundy rounded hover:bg-burgundy hover:text-white transition-colors"
              >
                Nur Notwendige
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm bg-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie-Einstellungen Modal */}
      {showSettings && (
        <CookieSettingsModal 
          onClose={() => setShowSettings(false)}
          onSave={saveSettings}
        />
      )}
    </>
  );
}

function CookieSettingsModal({ onClose, onSave }: { onClose: () => void; onSave: (settings: any) => void }) {
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-burgundy">Cookie-Einstellungen</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-burgundy text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-6">
            {/* Notwendige Cookies */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-burgundy">Notwendige Cookies</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Immer aktiv</span>
              </div>
              <p className="text-sm body-text">
                Diese Cookies sind für das Funktionieren der Website erforderlich und können nicht deaktiviert werden. 
                Sie werden normalerweise nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-burgundy">Analyse-Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.analytics}
                    onChange={(e) => setSettings({...settings, analytics: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burgundy"></div>
                </label>
              </div>
              <p className="text-sm body-text">
                Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                indem sie Informationen anonym sammeln und weitergeben.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="pb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-burgundy">Marketing-Cookies</h3>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.marketing}
                    onChange={(e) => setSettings({...settings, marketing: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-burgundy"></div>
                </label>
              </div>
              <p className="text-sm body-text">
                Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen. 
                Sie können auch verwendet werden, um die Anzahl der Anzeigen zu begrenzen.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors"
            >
              Abbrechen
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 text-sm bg-burgundy text-white rounded hover:bg-opacity-90 transition-colors"
            >
              Einstellungen speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
