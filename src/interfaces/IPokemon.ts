export interface pokemonType {
  name: string
  id: number
  height: number
  weight: number
  order: number
  species: {
    name: string
    url: string
  }
  abilities: {
    ability: {
      name: string
      url: string
    }
    id_hidden: boolean
    slot: number
  }[]
  sprites: {
    other: {
      dream_world: {
        front_default: string
      }
      home: {
        front_default: string
      }
    }
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
}
