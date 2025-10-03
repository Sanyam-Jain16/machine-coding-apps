import React, { useState } from "react";
import usePokemonDetail from "./usePokemonDetails";
import useApi from "./useApi";

export default function PokemonDropdown() {
  const { data: listData, loading: listLoading } = useApi(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const [selected, setSelected] = useState(null);

  const { data: detailData, loading: detailLoading } =
    usePokemonDetail(selected);

  return (
    <div>
      <h2>Pokémon Dropdown</h2>

      {listLoading && <p>Loading list...</p>}
      {listData && (
        <select onChange={(e) => setSelected(e.target.value)} defaultValue="">
          <option value="" disabled>
            Select a Pokémon
          </option>
          {listData.results.map((poke) => (
            <option key={poke.name} value={poke.name}>
              {poke.name}
            </option>
          ))}
        </select>
      )}

      {detailLoading && selected && <p>Loading details...</p>}
      {detailData && (
        <div style={{ marginTop: "20px" }}>
          <h3>{detailData.name}</h3>
          <img src={detailData.sprites.front_default} alt={detailData.name} />
          <p>ID: {detailData.id}</p>
          <p>Height: {detailData.height}</p>
          <p>Weight: {detailData.weight}</p>
        </div>
      )}
    </div>
  );
}
