window.onload = function() {
    const next = document.querySelector('.next');
    const pre = document.querySelector('.pre');
    if (next) {
        next.addEventListener('click', function(evt) {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').appendChild(items[0]);
        });
    } else {
        console.error("Element with class 'next' not found");
    }
    if (pre) {
        pre.addEventListener('click', function(evt) {
            let items = document.querySelectorAll('.item');
            document.querySelector('.slide').prepend(items[items.length-1]);
        });
        } else {
            console.error("Element with class 'pre' not found");
        }
    };
