var Bottle = (function(window){
    'use strict';

    var document = window.document;

    function Bottle(arg){
        // Prevent using 'new' keyword        
        if( !(this instanceof Bottle) ){
            return new Bottle(arg);
        }
    }

    // Static methods attached to function Bottle
    Bottle.include = function(){};
    
    // Declaring prototype and assign it to .fn
    Bottle.fn = Bottle.prototype = {
        constructor: Bottle,
        sum: function(){}        
    };

    // Attach extend method to prototype
    Bottle.fn.extend = function(){}


    window.$ = Bottle;

    return Bottle;

})(window);

// You can create a Bottle instance by calling Bottle();
// And you can call static method 'include' from anywhere in the document