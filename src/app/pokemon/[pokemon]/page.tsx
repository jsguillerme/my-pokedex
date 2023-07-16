import Image from 'next/image'
import { pokemonType } from '@/interfaces/IPokemon'
import { TypesPokemons } from '@/helpers/TypesPokemons'
import Link from 'next/link'

async function getPokemon(pokemon: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}

export default async function Pokemon({
  params,
}: {
  params: { pokemon: string }
}) {
  const pokemonInfo: pokemonType = await getPokemon(params.pokemon)

  return (
    <div className="w-full min-w-[550px] h-screen grid place-content-center dark:bg-gradient-to-r from-red-300 to-orange-700">
      <div className="bg-red-500 w-[500px] max-w-[500px] rounded-lg shadow-2xl drop-shadow-2xl">
        <div className="flex items-start justify-start w-full h-[140px] gap-3 p-4 drop-shadow-2xl border-b-2 border-b-zinc-900 mb-4">
          <div className="bg-blue-500 h-24 w-24 rounded-full border-4 border-zinc-300 shadow-2xl drop-shadow-2xl flex items-center justify-center text-white font-bold">
            <Link href={'/'}>Retornar</Link>
          </div>
          <div className="bg-red-800 rounded-full h-6 w-6 border-2 border-zinc-300"></div>
          <div className="bg-yellow-400 rounded-full h-6 w-6 border-2 border-zinc-300"></div>
          <div className="bg-green-800 rounded-full h-6 w-6 border-2 border-zinc-300"></div>
        </div>
        <div className="w-[420px] h-[260px] border-[16px] border-zinc-400 m-auto rounded-bl-3xl">
          <div className="w-full h-full bg-blue-300 flex flex-col items-center gap-3">
            <Image
              src={pokemonInfo.sprites.other.home.front_default}
              alt="pokemon"
              width={160}
              height={160}
            />
            <div className="text-3xl font-bold italic text-zinc-800">
              {pokemonInfo.name}
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] flex items-center justify-start gap-8 m-6">
          <div className="bg-zinc-800 w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl drop-shadow-2xl bg">
            A
          </div>
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-6 rounded-full bg-red-900 shadow-2xl"></div>
              <div className="w-20 h-6 rounded-full bg-blue-900 shadow-2xl"></div>
            </div>
            <div className="bg-blue-300 flex flex-col items-start p-2 gap-3 h-40 w-72 border-2 border-zinc-900 shadow-2xl drop-shadow-2xl">
              <div className="w-full flex items-center justify-start gap-2">
                <Image
                  src={TypesPokemons[pokemonInfo.types[0].type.name].urlImg}
                  alt=""
                  height={32}
                  width={32}
                />
                <p className="font-bold text-lg text-zinc-700">
                  {TypesPokemons[pokemonInfo.types[0].type.name].name}
                </p>
              </div>
              <div className="w-full flex items-center justify-start gap-2">
                <p className="font-semibold text-lg text-zinc-700">
                  Peso: <strong>{pokemonInfo.weight}</strong>
                </p>
                <p className="font-semibold text-lg text-zinc-700">
                  Altura: <strong>{pokemonInfo.height}</strong>
                </p>
              </div>
              <div className="w-full flex items-center justify-start gap-2 flex-wrap max-h-10 overflow-auto">
                {pokemonInfo.abilities.map((abilities) => {
                  return (
                    <div
                      key={abilities.slot}
                      className="text-xs w-fit h-10 px-2 rounded-full bg-zinc-600 text-white font-semibold flex items-center justify-center"
                    >
                      {abilities.ability.name}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
