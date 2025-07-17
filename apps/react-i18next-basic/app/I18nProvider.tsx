'use client';

import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n, { setupI18n } from '../i18n';

const I18nProviderComponent = ({ children }: { children: React.ReactNode }) => {
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    setupI18n();
    setIsI18nInitialized(true);
  }, []);

  if (!isI18nInitialized) {
    return null; // Or a loading spinner
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProviderComponent;
