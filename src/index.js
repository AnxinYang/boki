import cc from './ccjs/cc';

cc.setValue('viewport', {width: window.innerWidth, height: window.innerHeight});
window.addEventListener('resize', function () {
    cc.updateValue('viewport', {width: window.innerWidth, height: window.innerHeight});
});


start();






//==== functions
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
    let app = root.appendChild(cc.createElement('div', 'app'));
    app.css({
        background: 'rgb(32, 32, 32)',
        width: '100vw',
        height: '100vh',
        padding: '32px 16px',
        display: 'flex',
        flexDirection: 'column'
    });
    renderBar(app);
    renderRecords(app);
    renderFooter(app);
}

function renderBar(app){
    let graphContainer = app.add('div')
        .css({
            position: 'relative',
            width: '100%',
            height: '64px',
            padding: '8px',
            background: 'rgb(64, 64, 64)',
            color: 'rgba(255,255,255, 0.8)',
            fontSize: '10px',
            boxShadow: 'rgb(16, 16, 16) 4px 4px 12px'
        });
    graphContainer.add('span')
        .content('Spend vs. Income');
    let barContainer = graphContainer.add('div').css({
        position: 'relative',
        height: '24px',
        width: '100%',
        background: 'black',
        marginTop: '4px',
        borderRadius: '25px',
        overflow:'hidden'
    });

    barContainer.add('div', 'incomeBar')
        .css({
            position: 'absolute',
            height: '24px',
            width: '100%',
            background: '#4cd137',
            top: '0',
            left: '0'
        });
    barContainer.add('div', 'spendBar')
        .css({
            position: 'absolute',
            height: '24px',
            width: '50%',
            background: '#e84118',
            top: '0',
            left: '0'
        });
}

function renderRecords(app){
    let container = app.add('div')
        .css({
            position: 'relative',
            width: '100%',
            padding: '8px',
            background: 'rgb(64, 64, 64)',
            color: 'rgba(255,255,255, 0.8)',
            fontSize: '10px',
            boxShadow: 'rgb(16, 16, 16) 4px 4px 12px',
            marginTop: '8px',
            flexGrow:1,
            overflow: 'auto'
        });
    container.add('span')
        .content('History');
    container.add('div')
        .css({
            marginTop: '4px'
        })
        .bind('history', function (d = []) {
            let self = this;
            self.removeAllChildren();
            d.forEach(function (d) {
                self.addElement(renderRecord(d))
            });
        });
    cc.setValue('history', [
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},
        {type: 1, category: 'Salary', amount: 1000, date: new Date()},


        ])
}

function renderRecord(d) {
    let {type, category, amount, date, comment} = d;
    let block = cc.createElement('div')
        .addClass(type)
        .addClass(category)
        .addClass(date.getMonth())
        .addClass(date.getYear())
        .css({
            position: 'relative',
            width: '100%',
            padding: '8px',
            background: 'rgb(32, 32, 32)',
            color: 'rgba(255,255,255, 0.8)',
            fontSize: '12px',
            marginBottom: '4px',
        });
    block.add('span')
        .css({
            display: 'inline-block',
        })
        .content(category);

    block.add('strong')
        .css({
            display: 'inline-block',
            color: type === 0 ?'red':'green',
            float: 'right'
        })
        .content(amount);

    block.add('br');
    block.add('span')
        .css({
            display: 'inline-block',
            fontSize: '8px',
            color: 'rgb(128, 128, 128)'
        })
        .content(date.toString().substring(0, date.toString().indexOf('GMT')-1));

    block.add('span')
        .css({
            display: 'inline-block',
            fontSize: '8px',
            color: 'rgb(128, 128, 128)',
            float: 'right',
            paddingTop: '4px'
        })
        .content(comment || 'No Comment');

    return block
}

function renderFooter(app){
    let container = app.add('div')
        .css({
            position: 'relative',
            width: '100%',
            height: '64px',
            padding: '8px',
            background: 'rgb(64, 64, 64)',
            color: 'rgba(255,255,255, 0.8)',
            fontSize: '10px',
            boxShadow: 'rgb(16, 16, 16) 4px 4px 12px',
            marginTop: '8px'
        });
}