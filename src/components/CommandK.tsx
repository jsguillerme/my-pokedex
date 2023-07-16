import { Command } from 'cmdk'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type pokemonListType = {
  name: string
  url: string
}

type habitatsType = {
  name: string
  url: string
}

async function getAllPokemons() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3000')

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}

async function getAllHabitats() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon-habitat/')

  if (!res.ok) throw new Error('Failed to fetch data')

  return res.json()
}

export function CommandK() {
  const [open, setOpen] = useState(false)
  const [pokemonList, setPokemonList] = useState<pokemonListType[]>([])
  const [habitats, setHabitats] = useState<habitatsType[]>([])

  async function getPokemons() {
    const data = await getAllPokemons()

    setPokemonList([...data.results])
  }

  async function getPokemonsHabitat() {
    const data = await getAllHabitats()
    setHabitats([...data.results])
  }

  useEffect(() => {
    Promise.all([getPokemons(), getPokemonsHabitat()])
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-h-[475px] max-w-[650px] rounded-xl dark:bg-[#1c1c1c] bg-opacity-90 backdrop-blur-lg drop-shadow-lg border border-zinc-700"
    >
      <Command.Input
        className="w-[640px] h-14 px-2 py-4 dark:text-zinc-200 dark:placeholder:text-zinc-400 placeholder:text-zinc-800 dark:bg-[#1c1c1c] rounded-t-xl outline-none border-b border-b-zinc-700 mb-4"
        placeholder="Search for pokemons or things about pokemons"
      />
      <Command.List className="transition duration-100 min-h-[400px] max-h-[430px] dark:text-zinc-200 text-zinc-900 px-4">
        <Command.Empty className="text-center text-sm text-zinc-300">
          No results found.
        </Command.Empty>

        <Command.Group
          className="pr-2 pb-2 flex flex-col items-start gap-3 max-h-[200px] overflow-auto"
          heading="pokemons"
        >
          {pokemonList.length > 0 &&
            pokemonList.map((poke) => {
              return (
                <Command.Item key={uuidv4()} className="mb-2">
                  <Link href={`/pokemon/${poke.name}`}>{poke.name}</Link>
                </Command.Item>
              )
            })}
        </Command.Group>
        <Command.Separator className="h-[1px] bg-zinc-700 my-2" />

        <Command.Group
          className="pr-2 pb-2 flex flex-col items-start gap-2 max-h-[200px] overflow-auto"
          heading="habitats"
        >
          {habitats.length > 0 &&
            habitats.map((habit) => {
              return (
                <Command.Item key={uuidv4()} className="mb-2">
                  <button>{habit.name}</button>
                </Command.Item>
              )
            })}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  )
}
