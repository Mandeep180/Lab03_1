// IIFe- Immediately Invoked function Expression
/*Mandeep Kaur 301225713*/
(function(){
    function start(){
        console.log("App started...");
        let deleteButtons = document.querySelectorAll('.btn-danger')
        for(button of deleteButtons){
            button.addEventListener('click',(event)=>{
            if(!confirm("Are you sure?")){
                event.preventDefault();
                window.location.assign('/infor');
            }
            });
        }
    }
    window.addEventListener("load", start);

})