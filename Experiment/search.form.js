((window, $) => {
    'use strict';

    function Search(o) {
        let location = o.location;
        let checkIn = o.checkIn;
        let checkOut = o.checkOut;
        let people = {
            adult: o.adult,
            child: o.child,
            baby: o.baby
        };
        validation(location, checkIn, checkOut, people);
    }
    function validation(loc, cin, cout, p){
        
    }


    const submit = {
        location: 'Seoul',
        checkIn: '2015-09-20',
        checkOut: '2015-09-25',
        people: {
            adult: 2,
            child: 1,
            baby: 0
        }
    }

    Search(submit);

})(window, window.jQuery)