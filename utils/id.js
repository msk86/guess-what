var ID = {
    next: function(ns) {
        ns = ns || '';
        return ns + new Date().getTime() + Math.floor(Math.random() * 100000);
    }
};

module.exports = ID;