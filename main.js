let view = document.getElementById('firstComputer');
let first = document.getElementById('firstCompWrapper');

let open = function() {
    first.style.display = 'block';
};

let hide = function() {
    first.style.display = 'none';
};

view.addEventListener('click', open);
first.addEventListener('click', hide);

//
let view1 = document.getElementById('theEngine');
let engine = document.getElementById('engineWrapper');

let open1 = function() {
    engine.style.display = 'block';
};

let close = function() {
    engine.style.display = 'none';
};

view1.addEventListener('click', open1);
engine.addEventListener('click', close);