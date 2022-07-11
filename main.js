let view = document.getElementById('firstComputer');
let first = document.getElementById('firstCompWrapper');

let open = function() {
    first.style.display = 'block';
};

let hide = function() {
    first.style.display = 'none';
};

function toggleNav() {
    //first.style.display = 'block';
    if (first.style.display == 'block') {
        first.style.display = 'none';
    } else {
        first.style.display = 'block';
    }
};

view.addEventListener('click', toggleNav);
first.addEventListener('click', hide);

//
let view2 = document.getElementById('theEngine');
let engine = document.getElementById('engineWrapper');

let open2 = function() {
    engine.style.display = 'block';
};

let close = function() {
    engine.style.display = 'none';
};

view2.addEventListener('click', open2);
engine.addEventListener('click', close);

//
let view3 = document.getElementById('Ada');
let adaBox = document.getElementById('adaWrapper');

let open3 = function() {
    adaBox.style.display = 'block';
};

let close1 = function() {
    adaBox.style.display = 'none';
};

view3.addEventListener('click', open3);
adaBox.addEventListener('click', close1);

//
let returnMain = document.getElementById('title');

