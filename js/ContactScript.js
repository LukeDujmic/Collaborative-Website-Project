

function init()
{
    //checks the current site
    if(document.body.firstElementChild.firstElementChild.textContent == "Contact Us")
    {
        
    }
    console.log(document.body.firstElementChild.firstElementChild.textContent == "Contact Us");
}
setTimeout(() => {
    init();
}, 1000);
