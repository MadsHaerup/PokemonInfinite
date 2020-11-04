//function to fetch image
function getimage(url) {
    return fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data.sprites.front_default;
        });
}