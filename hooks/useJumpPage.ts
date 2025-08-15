export const useJumpPage = () => {
  const jumpToPage = (to: string, newTab: boolean = false) => {
    const url = getUrl(to)
    if (newTab) {
      window.open(url, '_blank');
      return;
    }
    window.location.href = getUrl(to);
  };

  const getUrl = (to: string) => {
    let url;
    if (process.env.NODE_ENV === 'development') {
      url = `http://localhost:4000${to}`;
    }  else {
      url = `https://${process.env.NUXT_PUBLIC_REDIRECT_URL}${to}`;
    }

    return url;

  }

  return {
    jumpToPage,
    getUrl
  };
};
