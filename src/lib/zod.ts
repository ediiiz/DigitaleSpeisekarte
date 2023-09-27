import { z as ZodOriginal } from "zod";
import i18next from "i18next";
import { zodI18nMap } from "zod-i18n-map";
import translation from "zod-i18n-map/locales/de/zod.json";

i18next.init({
  lng: "de",
  resources: {
    de: { zod: translation },
  },
});

ZodOriginal.setErrorMap(zodI18nMap)

const z = {
  ...ZodOriginal,
};

export { z };
