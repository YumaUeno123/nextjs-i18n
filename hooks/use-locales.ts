import { useRouter } from "next/router";

type Locales<T> = {
  en: T;
  ja: T;
};

export const useLocales = <T>(locales: Locales<T>) => {
  const { locale } = useRouter();

  const texts = locale === "en" ? locales.en : locales.ja;

  return {
    locale,
    texts,
  };
};
