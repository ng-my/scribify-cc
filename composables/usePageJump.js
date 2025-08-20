export const usePageJump = () => {
  const { locale, defaultLocale } = useI18n();
  const getPrefix = () => {
    return locale.value === defaultLocale ? "" : "/" + locale.value;
  };
  const config = useRuntimeConfig();
  const jumpUrl = config.public.jumpUrl;

  const jumpPage = (target, newTab = false) => {
    if (!target.startsWith("/")) {
      target = "/" + target;
    }
    const targetUrl = getPrefix() + target;
    const url = `${jumpUrl}${targetUrl}`;
    if (newTab) {
<<<<<<< HEAD
      return window.open(url, "_blank");
    }
    window.open(url, "_parent");
=======
      window.open(url, "_blank");
      return;
    }
    window.location.href = url;
>>>>>>> d92b314b31e4b61d06409ac2ffcd3592e0f53dea
  };
  return { jumpPage };
};
