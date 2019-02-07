import cc from './ccjs/cc';

cc.setValue('viewport', {width: window.innerWidth, height: window.innerHeight});
window.addEventListener('resize', function () {
    cc.updateValue('viewport', {width: window.innerWidth, height: window.innerHeight});
});

function setupSW() {
    if('serviceWorker' in navigator) {
        console.log('Service worker supported!');
        try {
            navigator.serviceWorker.register('service.js');
            console.log('Service worker registered.')
        } catch (e) {
            console.log('Service worker failed to register. - WTH!?')
        }
    }else{
        console.log('Service worker not supported! - Dude, buy a new phone.')
    }
}


function start() {
    setupSW();
    let root = cc.select('#body');
    

}
start();