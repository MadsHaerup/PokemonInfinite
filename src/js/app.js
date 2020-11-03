var offset = 0;
var count = 0;
//når vi har en funktion der indeholder en variabel der ændre sig
//kan man sende den med som parameter
function getThePokemons(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var template = document.querySelector("#template");
            var ul = document.querySelector(".pokeList");

            count = data.count;

            data.results.forEach(function(result) {
                var clone = template.content.cloneNode(true);
                clone.querySelector("li").innerText = result.name;
                ul.appendChild(clone);
            });
            //når vi når bunden på listen
            var lastChild = document.querySelector(".pokeList li:last-child");
            //observere sidste li
            observer.observe(lastChild);
        });

}

var observer = new IntersectionObserver(function(entries) {
    if (entries[0].intersectionRatio <= 0) return;

    observer.unobserve(entries[0].target);
    offset = offset + 10;

    if (offset > count) return;

    getThePokemons(offset);
}, {
    threshold: 1
});
getThePokemons(0);