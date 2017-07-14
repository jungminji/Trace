let element = document.getElementsByClassName('example')[0];
let activeBtn = document.getElementById('active');
let closeBtn = document.getElementById('deactive');

activeBtn.addEventListener('click', function(){
    element.style.display = "block";
    this.tabIndex = -1;
    
    let links = document.getElementsByClassName('trap');
    
    
    [].forEach.call(links, function(item, index){
        item.tabIndex = -1;
        console.log(item);
    });

});

closeBtn.addEventListener('click', function(){
   let context = this.parentNode;
   context.style.display = "none";
});


// You will have to check if element is last child in body, then back to the first one
// so That focus doesn't go Tab on Address bar