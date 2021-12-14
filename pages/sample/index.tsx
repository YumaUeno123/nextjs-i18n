import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { useLocales } from "../../hooks/use-locales";
import { en, ja } from "./locales";

const Page: FC = () => {
  const { locale, texts } = useLocales({ en, ja });
  const { pathname } = useRouter();

  return (
    <div>
      <h1>{texts.TITLE}</h1>
      <Link href={pathname} locale={locale === "en" ? "ja" : "en"}>
        <a> {texts.BUTTON_TEXT}</a>
      </Link>
    </div>
  );
};

export default Page;
