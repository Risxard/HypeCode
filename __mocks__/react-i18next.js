
export const useTranslation = () => {
    return {
      t: (key) => key,
      i18n: {
        changeLanguage: jest.fn(),
      },
    };
  };