//babel doesn't transpile fetch 
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default (url) => 
    fetch(url)
        .then(response => response.json());
    