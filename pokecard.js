// This will be where I will make the pokecard component

function Pokecard ({id, name, type, base_experience}) {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="PokeCard">
            <h3>{name}</h3>
            <img src={imgSrc} alt={name} />
            <p>Type: {type}</p>
            <p>EXP: {base_experience}</p>
        </div>
    );
}

