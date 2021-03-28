const isMobile = () => {
  try {
    return window.innerWidth < window.innerHeight;
  } catch {}
};

export default isMobile;
