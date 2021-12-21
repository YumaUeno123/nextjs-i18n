import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";

import { FC } from "react";

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});

const Page: FC = () => {
  const { push: routerPush, locale } = useRouter();
  const { t } = useTranslation("common");

  const { t: footerT } = useTranslation("footer");

  const onClick = () => {
    routerPush("/sample", "/sample", { locale: locale === "ja" ? "en" : "ja" });
  };

  return (
    <div>
      <div>
        <h1>{t("TITLE")}</h1>
      </div>

      <div>
        <button onClick={onClick}>{t("BUTTON")}</button>
      </div>

      <div>
        <Link href="/sample" locale={locale === "ja" ? "en" : "ja"}>
          <a>{t("LINK")}</a>
        </Link>
      </div>

      <div>
        <span>{footerT("FOOTER_TEXT")}</span>
      </div>
    </div>
  );
};

export default Page;
