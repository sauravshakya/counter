// function Counter(){
//     var count = 0;
//     this.incrementCounter = function(){
//         count++;
//         console.log(count);
//     }
//     this.decrementCounter = function(){
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1 = document.getElementById('#app');


let button = document.getElementById("btn");
console.log("button");
button.onclick = () => {
    let init = 0;
    let h2 = document.createElement('h2');
    h2.textContent = 0;
    
    let plus = document.createElement('button');
    plus.textContent = "+";

    let minus = document.createElement('button');
    minus.textContent = "-";
    
    let cross = document.createElement('button');
    cross.textContent = "*";

    plus.onclick = () => {
        console.log("add");
        init++;
        h2.textContent = init;
    }

    minus.onclick = () => {
        console.log('sub');
        init--;
        h2.textContent = init;
    }

    cross.onclick = () => {
        button.parentNode.removeChild(counter);
    }

    let counter = document.createElement("div");
    counter.classList.add('counter');

    counter.appendChild(h2);
    counter.appendChild(plus);
    counter.appendChild(minus);
    counter.appendChild(cross);

    button.parentNode.appendChild(counter);
}

