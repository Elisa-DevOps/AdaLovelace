let view = document.getElementById('firstComputer');
let first = document.getElementById('firstCompWrapper');

let open = function() {
    first.style.display = 'block';
};

let hide = function() {
    first.style.display = 'none';
};

view.addEventListener('click', open);
view.addEventListener('click', hide);