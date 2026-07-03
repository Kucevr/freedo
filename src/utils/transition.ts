export const navigateWithTransition = (targetPath: string, label: string) => {
  if (window.location.pathname === targetPath || (window.location.pathname === '/' && targetPath === '/')) return;
  window.dispatchEvent(new CustomEvent('page-transition', { detail: { targetPath, label } }));
};
