
const storage = {
    set: ( k, v ) => {
        localStorage.setItem ( k, JSON.stringify(v))
    },
    get: (k) => {
        let v = localStorage.getItem ( k);
        try {
            v = JSON.parse (v);
        } catch (e) {
            v = '';
        }
        return v;
    },
};

export default storage