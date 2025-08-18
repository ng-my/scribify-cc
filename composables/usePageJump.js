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
      window.open(url, "_blank");
      return;
    }
    window.location.href = url;
  };
  return { jumpPage };
};
