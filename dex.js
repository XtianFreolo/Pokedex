// This is where I will put the pokedex or Dex function

function Pokedex({ pokemon }) {
    return (
        // The .map goes to all the data 
        <div className="Pokedex">
            {pokemon.map((p) => {
                <Pokecard
                key={p.id}
                id={p.id}
                name={p.name}
                type={p.type}
                base_experience={p.base_experience}
                />
            })}
        </div>
    );
}