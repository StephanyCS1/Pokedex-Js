const pokedex =() =>{
    const name = document.querySelector('.pokemon-name');
    let poName = name.value;
    console.log(poName);
    poName = poName.toLowerCase();

    const find = `https://pokeapi.co/api/v2/pokemon/${poName}`;

    fetch(find)
    .then((resp) =>{
        if(resp.status != "200"){
            imgPok('../img/error.gif')
            ability();
            namePoke();
        }else{
            return resp.json();
        }
    })
    .then((data) =>{
        if(data){
        let img = data.sprites.front_default;
        imgPok(img);
        let abili = data.abilities;
        ability(abili);
        let name = data.name;
        namePoke(name);
        }
    });
}

const namePoke = (name) =>{
    const namePokemon = document.getElementById("namePoke");
    namePokemon.innerHTML = name;
}

const imgPok = (find) =>{
    const imgPoke = document.getElementById("contein-img");
    imgPoke.src = find;
}
const ability = (abilities) =>{
    const abiPoke = document.getElementById("ability");
    const name = abilities.map( item => item.ability.name);
    abiPoke.innerHTML = name
}