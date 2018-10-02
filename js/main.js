document.addEventListener('DOMContentLoaded', () => {
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if (wrapper.className.indexOf('skewed') !== -1) {
        skew = 990;
    }

    wrapper.addEventListener('mousemove', event => {
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        handle.style.left = event.clientX + delta + 'px';

        console.log(handle.style.left)

        topLayer.style.width = event.clientX + delta + skew + 'px';
    })

    wrapper.addEventListener('mouseout', e => {
        e.preventDefault();

        handle.style.left = '50%';

        topLayer.style.width = 'calc(50vw + 990px)';

    })  

})

