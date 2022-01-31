// Sounds
let f = document.getElementById("fnote");
let fkey = document.getElementById("f");
// let fbut = document.getElementById(KeyQ);

let fsharp = document.getElementById("fsharpnote");
let fsharpkey = document.getElementById("fsharp");

let g = document.getElementById("gnote");
let gkey = document.getElementById("g");

let gsharp = document.getElementById("gsharpnote");
let gsharpkey = document.getElementById("gsharp");

let a = document.getElementById("anote");
let akey = document.getElementById("a");

let asharp = document.getElementById("asharpnote");
let asharpkey = document.getElementById("asharp");

let b = document.getElementById("bnote");
let bkey = document.getElementById("b");

let c = document.getElementById("cnote");
let ckey = document.getElementById("c");

let csharp = document.getElementById("csharpnote");
let csharpkey = document.getElementById("csharp");

let d = document.getElementById("dnote");
let dkey = document.getElementById("d");

let dsharp = document.getElementById("dsharpnote");
let dsharpkey = document.getElementById("dsharp");

let e = document.getElementById("enote");
let ekey = document.getElementById("e");

let ff = document.getElementById("ffnote");
let ffkey = document.getElementById("ff");

let ffsharp = document.getElementById("ffsharpnote");
let ffsharpkey = document.getElementById("ffsharp");

let gg = document.getElementById("ggnote");
let ggkey = document.getElementById("gg");

let ggsharp = document.getElementById("ggsharpnote");
let ggsharpkey = document.getElementById("ggsharp");

let aa = document.getElementById("aanote");
let aakey = document.getElementById("aa");

let aasharp = document.getElementById("aasharpnote");
let aasharpkey = document.getElementById("aasharp");

let bb = document.getElementById("bbnote");
let bbkey = document.getElementById("bb");

let cc = document.getElementById("ccnote");
let cckey = document.getElementById("cc");

let ccsharp = document.getElementById("ccsharpnote");
let ccsharpkey = document.getElementById("ccsharp");

let dd = document.getElementById("ddnote");
let ddkey = document.getElementById("dd");

let ddsharp = document.getElementById("ddsharpnote");
let ddsharpkey = document.getElementById("ddsharp");

let ee = document.getElementById("eenote");
let eekey = document.getElementById("ee");

//Animations
document.addEventListener("keypress", (i) => {
    console.log(i);    
    keys.textContent = i.key;
    even.textContent = i.code;
    whic.textContent = i.keyCode;
    head.textContent = i.keyCode;

});




fkey.addEventListener("click", () => {
    f.pause();
    f.currentTime = 0;
    f.play()
});

// fbut.addEventListener("keypress", () => {})
//     f.pause();
//     f.currentTime = 0;
//     f.play()
// });


fsharpkey.addEventListener("click", () => {
    fsharp.pause();
    fsharp.currentTime = 0;
    fsharp.play()
});

gkey.addEventListener("click", () => {
    g.pause();
    g.currentTime = 0;
    g.play()
});

gsharpkey.addEventListener("click", () => {
    gsharp.pause();
    gsharp.currentTime = 0;
    gsharp.play()
});

akey.addEventListener("click", () => {
    a.pause();
    a.currentTime = 0;
    a.play()
});

asharpkey.addEventListener("click", () => {
    asharp.pause();
    asharp.currentTime = 0;
    asharp.play()
});

bkey.addEventListener("click", () => {
    b.pause();
    b.currentTime = 0;
    b.play()
});

ckey.addEventListener("click", () => {
    c.pause();
    c.currentTime = 0;
    c.play()
});


csharpkey.addEventListener("click", () => {
    csharp.pause();
    csharp.currentTime = 0;
    csharp.play()
});


dkey.addEventListener("click", () => {
    d.pause();
    d.currentTime = 0;
    d.play()
});

dsharpkey.addEventListener("click", () => {
    dsharp.pause();
    dsharp.currentTime = 0;
    dsharp.play()
});

ekey.addEventListener("click", () => {
    e.pause();
    e.currentTime = 0;
    e.play()
});


ffkey.addEventListener("click", () => {
    ff.pause();
    ff.currentTime = 0;
    ff.play()
});

ffsharpkey.addEventListener("click", () => {
    ffsharp.pause();
    ffsharp.currentTime = 0;
    ffsharp.play()
});

ggkey.addEventListener("click", () => {
    gg.pause();
    gg.currentTime = 0;
    gg.play()
});

ggsharpkey.addEventListener("click", () => {
    ggsharp.pause();
    ggsharp.currentTime = 0;
    ggsharp.play()
});

aakey.addEventListener("click", () => {
    aa.pause();
    aa.currentTime = 0;
    aa.play()
});

aasharpkey.addEventListener("click", () => {
    aasharp.pause();
    aasharp.currentTime = 0;
    aasharp.play()
});

bbkey.addEventListener("click", () => {
    bb.pause();
    bb.currentTime = 0;
    bb.play()
});

cckey.addEventListener("click", () => {
    cc.pause();
    cc.currentTime = 0;
    cc
    .play()
});

ccsharpkey.addEventListener("click", () => {
    ccsharp.pause();
    ccsharp.currentTime = 0;
    ccsharp.play()
});


ddkey.addEventListener("click", () => {
    dd.pause();
    dd.currentTime = 0;
    dd.play()
});

ddsharpkey.addEventListener("click", () => {
    ddsharp.pause();
    ddsharp.currentTime = 0;
    ddsharp.play()
});

eekey.addEventListener("click", () => {
    ee.pause();
    ee.currentTime = 0;
    ee.play()
});





//     if (f.click == "f") {
//         f.pause();
//         f.currentTime = 0;
//         f.onplay("fnote")
//     }
// })



