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
            console.log(data);

            count = data.count;

            data.results.forEach(function(result) {
                var clone = template.content.cloneNode(true);
                var name = clone.querySelector(".pokeName");
                var img = clone.querySelector(".pokeImg");
                name.innerText = result.name;

                getimage(result.url)
                    .then(function(imageURL) {
                        img.dataset.src = imageURL;
                        imageObserver.observe(img);
                    });
                ul.appendChild(clone);

            });
            //når vi når bunden på listen
            var lastChild = document.querySelector(".pokeList li:last-child");
            //observere sidste li
            observer.observe(lastChild);
        });

}