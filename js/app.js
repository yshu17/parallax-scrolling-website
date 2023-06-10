window.addEventListener('scroll', () => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content'
    });
}