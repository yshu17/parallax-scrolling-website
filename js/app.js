window.addEventListener('scroll', () => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
ScrollSmoother.create({
    wrapper:'.wrapper',
    content:'.content'
});