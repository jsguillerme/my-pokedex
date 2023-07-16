interface PokemonObjectLiterals {
  [key: string]: {
    name: string
    urlImg: string
  }
}

export const TypesPokemons: PokemonObjectLiterals = {
  normal: {
    name: 'Normal',
    urlImg:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/512px-Pok%C3%A9mon_Normal_Type_Icon.svg.png?20230404224439',
  },
  fighting: {
    name: 'Luta',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/1/1b/Battrio_Fighting_type.png',
  },
  flying: {
    name: 'Voador',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/9/97/Battrio_Flying_type.png',
  },
  poison: {
    name: 'Veneno',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/2/20/Battrio_Poison_type.png',
  },
  ground: {
    name: 'Terra',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/f/f1/Battrio_Ground_type.png',
  },
  rock: {
    name: 'Pedra',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/7/77/Battrio_Rock_type.png',
  },
  bug: {
    name: 'Inseto',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/5/57/Battrio_Bug_type.png',
  },
  ghost: {
    name: 'Fantasma',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/2/28/Battrio_Ghost_type.png',
  },
  steel: {
    name: 'Aço',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/5/59/Battrio_Steel_type.png',
  },
  fire: {
    name: 'Fogo',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/8/8a/Battrio_Fire_type.png',
  },
  water: {
    name: 'Água',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/2/29/Battrio_Water_type.png',
  },
  grass: {
    name: 'Grama',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/0/08/Battrio_Grass_type.png',
  },
  electric: {
    name: 'Elétrico',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/0/02/Battrio_Electric_type.png',
  },
  psychic: {
    name: 'Psíquico',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/6/61/Battrio_Psychic_type.png',
  },
  ice: {
    name: 'Gelo',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/0/01/Battrio_Ice_type.png',
  },
  dragon: {
    name: '',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/5/51/Battrio_Dragon_type.png',
  },
  dark: {
    name: '',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/0/0f/Battrio_Dark_type.png',
  },
  fairy: {
    name: '',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/c/c6/Fairy_icon_SwSh.png',
  },
  unknown: {
    name: 'Desconhecido',
    urlImg:
      'https://archives.bulbagarden.net/media/upload/a/ac/UnknownIC_XD.png',
  },
  shadow: {
    name: 'Sombra',
    urlImg:
      'https://cdn.pixabay.com/photo/2018/05/18/15/43/pokemon-3411387_1280.png',
  },
} as const
