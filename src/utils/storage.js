
const storage = {
<<<<<<< HEAD
    set: ( k, v ) => {
        localStorage.setItem ( k, JSON.stringify(v))
    },
    get: (k) => {
        let v = localStorage.getItem ( k);
        try {
            v = JSON.parse (v);
        } catch (e) {
=======
    set: (k, v) => {
        localStorage.setItem (k , JSON.stringify(v));
    },
    get: (k) => {
        let v = localStorage.getItem (k);
        try {
           v = JSON.parse (v);
        }   catch (e) {
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
            v = '';
        }
        return v;
    },
};

<<<<<<< HEAD
export default storage
=======
export default storage;
>>>>>>> 28232b6f53f11223eb75b448231aa5bc6606b0f5
