export default function listenForOutsideClicks(
  listening: boolean,
  setListening: (listening: boolean) => void,
  menuRef: any,
  setOpenMobileMenu: (setOpenMobileMenu: boolean) => void
) {
  return () => {
    if (listening) return;
    setListening(true);
    [`click`, `touchstart`].forEach(() => {
      document.addEventListener(`click`, (evt) => {
        const cur = menuRef.current;
        const node = evt.target;
        if (cur.contains(node)) return;
        setOpenMobileMenu(false);
      });
    });
  };
}
