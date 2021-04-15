function demo(){
    document.getElementById("btnstart").style.display = 'none';
    document.getElementById("btnstop").style.display = 'block';
    interv = 1200000;
    
    setInterval(function() {
        document.getElementById("audio").play();
        
        
    },interv);
   
    

}
function additive_func(){
    document.getElementById("additive").style.display = 'block';
}

function stop(){
    window.location.reload()
}
