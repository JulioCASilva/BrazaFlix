let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    ProximaImagem();
},9000)

function ProximaImagem(){
    count++;
    if(count>5){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}