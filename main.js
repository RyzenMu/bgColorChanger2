

var color = ["#222f3e","#ab2f3e","#22aa3e","#20003e","#222aca","#123f3e","#25251e","#934121",]

var i = 0;

document.querySelector("button").addEventListener("click", function(){
    i = i < color.length ? ++i : 0;
    document.querySelector('body').style.background = color[i];
});


