function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}    


docReady(function() {
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    
    
    if(isMobileDevice()) {
       let desktop = document.querySelector(".tm-header");

       desktop.parentNode.removeChild(desktop);
    } else {
        let mobile = document.querySelector(".tm-header-mobile");

        mobile.parentNode.removeChild(mobile);
    }
});

   


