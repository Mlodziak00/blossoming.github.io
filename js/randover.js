var arrayImg = new Array();
arrayImg[0] = "1";
arrayImg[1] = "2";
//arrayImg[2] = "3";
//arrayImg[3] = "4";
//arrayImg[4] = "5";


getRandomImage(arrayImg, "");

function getRandomImage(imgAr, path) {
    path = path || 'assets/img/overlay/';
    var num = Math.floor( Math.random() * imgAr.length);
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path +"sov"+ img +".png"+'" alt = "">';
    document.write(imgStr); document.close();
}