const observer = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
        //Added new Element
        if(mutation.addedNodes.length) {
            console.log('Add new element', mutation.addedNodes[0]);
        }
        //Deleted element
        if(mutation.removedNodes.length) {
            console.log('Removed element', mutation.removedNodes[0]);
        }
        console.log(mutation.type)
    });
});

// Target for listening
const teams = document.querySelector('ul.teams');
const observerOptions = {
    attributes: true, //Change some atribbute
    childList: true, //Listen when elements are added or removed from dom
    subtree: false //Listen children of parent element
};

observer.observe(teams, observerOptions);