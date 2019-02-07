import cc from './ccjs/cc';

const WHITE = 'rgba(255,255,255, 0.7)';
const BLACK = 'rgba(0,0,0, 0.9)';
const BLACK_SOLID = 'rgb(25, 25, 25)';
const RED = '#d63031';

cc.setValue('viewport', {width: window.innerWidth, height: window.innerHeight});
window.addEventListener('resize', function () {
    cc.updateValue('viewport', {width: window.innerWidth, height: window.innerHeight});
});
function index() {
    let root = cc.select('#body');

}
index();