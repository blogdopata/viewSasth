
/* Links activos */

var btnContainer = document.getElementById("menu");


var btns = document.getElementsByClassName("menu-link");
console.log(btns);


for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

/* End  Links activos */

/*  upload y replace de image -  validar lado backend */

var input = document.querySelector('input[type=file]');
    
input.onchange = function () {
    var file = input.files[0];

    drawOnCanvas(file);   
    displayAsImage(file); 
};

function drawOnCanvas(file) {
    var reader = new FileReader();

    reader.onload = function (e) {
        var dataURL = e.target.result,
            c = document.querySelector('canvas'), 
            ctx = c.getContext('2d'),
            img = new Image();

        img.onload = function () {
            c.width = img.width;
            c.height = img.height;
            ctx.drawImage(img, 0, 0);
        };

        img.src = dataURL;
    };

   
}

function displayAsImage(file) {
    var imgURL = URL.createObjectURL(file),
        img = document.createElement('img'),
        imgchange = document.getElementById("upfile1");
        console.log(imgchange);

    img.onload = function () {
        URL.revokeObjectURL(imgURL);
    };

    imgchange.src = imgURL;
    
}

$("#upfile1").click(function () {
    $("#file1").trigger('click');
});

/*  End  upload y replace de image */

