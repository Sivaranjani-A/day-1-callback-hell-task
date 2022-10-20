//HTML tag creation using DOM
var div = document.createElement("div");
div.setAttribute("id","screen");

var h = document.createElement("h1");
h.setAttribute("id","counts");
h.innerHTML = 10;

div.append(h);
document.body.append(div);

// Call Back Hell

var countdown = document.getElementById("counts").innerText;

setTimeout(()=> {
    countdown = countdown-1;
    h.innerHTML = countdown;
    setTimeout(()=> {
        countdown = countdown-1;
        h.innerHTML = countdown;
        setTimeout(()=> {
            countdown = countdown-1;
            h.innerHTML = countdown;
            setTimeout(()=> {
                countdown = countdown-1;
                h.innerHTML = countdown;
                setTimeout(()=> {
                    countdown = countdown-1;
                    h.innerHTML = countdown;
                    setTimeout(()=> {
                        countdown = countdown-1;
                        h.innerHTML = countdown;
                        setTimeout(()=> {
                            countdown = countdown-1;
                            h.innerHTML = countdown;
                            setTimeout(()=> {
                                countdown = countdown-1;
                                h.innerHTML = countdown;
                                setTimeout(()=> {
                                    countdown = countdown-1;
                                    h.innerHTML = countdown;
                                    setTimeout(()=> {
                                        h.innerHTML = `<p id="display">Happy Independance Day</p>`;
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)    
},1000)


