export const scrollTo = (ref) => {
  const elementToScroll = ref?.current || document.getElementById(ref);
  if (elementToScroll) {
    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};