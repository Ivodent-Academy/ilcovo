
export function initAspectRatio() {
  const elements = document.querySelectorAll('.aspect-w-16.aspect-h-9');
  
  elements.forEach(element => {
    const parent = element as HTMLElement;
    const child = parent.firstElementChild as HTMLElement;
    
    if (parent && child) {
      parent.style.position = 'relative';
      parent.style.paddingBottom = `${(9 / 16) * 100}%`;
      
      child.style.position = 'absolute';
      child.style.top = '0';
      child.style.right = '0';
      child.style.bottom = '0';
      child.style.left = '0';
      child.style.width = '100%';
      child.style.height = '100%';
    }
  });
}
