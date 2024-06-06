let log = new Log(document.querySelector('.log'));
let player1 = new Knight('José');
let player2 = new LittleMonster();

const stage = new Stage (
    player1,
    player2,
    document.querySelector('#player1'),
    document.querySelector('#player2'),
    log
);

stage.start()