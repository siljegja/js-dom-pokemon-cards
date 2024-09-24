


function renderPokemonCards() {
    const container = document.querySelector('.cards');
    container.innerHTML = '';

    
    data.forEach(pokemon => {
        const li = document.createElement('li');

        const games = pokemon.game_indices.map(g => ` ${(g.version.name).charAt(0).toUpperCase() + (g.version.name).slice(1)}`)

        li.innerHTML = `
            <li class="card card:hover">
            <h2 class="card--title">${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
            <img
                width="256" 
                class="card--img"
                src=${pokemon.sprites.other["official-artwork"].front_default}
            />
            <ul class="card--text">
                <li>HP: ${pokemon.stats[0].base_stat}</li>
                <li>ATTACK: ${pokemon.stats[1].base_stat}</li>
                <li>DEFENSE: ${pokemon.stats[2].base_stat}</li>
                <li>SPECIAL-ATTACK: ${pokemon.stats[3].base_stat}</li>
                <li>SPECIAL-DEFENSE: ${pokemon.stats[4].base_stat}</li>
                <li>SPEED: ${pokemon.stats[5].base_stat}</li>

                <li><b>POKEMON APPEARS IN:</b> ${games}</li>
            </ul>
            </li>   
            `
        container.appendChild(li);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    renderPokemonCards()
})

