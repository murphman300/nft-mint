const metadata_description = 'This is a POAP for MTD users who attended one of our events in Q1 2024. These will be redeemable for subsequent perks, drops or benefits.'

const Licensors = {
    tmp: 'Todd McFarlane Productions',
    dc: 'Warner Brothers',
}

export const collections = {
    'trivia_night_1': '0xC059BB266F825E2C29C860689ee5ED9597Ab0bBD',
    'trivia_night_2': '0x3818f05D6e3202848C073C76F5Cb202C1d2C55F8',
    'ama_1': '0xa26A919550Dc30E4122947B531CaA9FF1d56378f',
}

const base_descriptions = {
    trivia_night_1: { 
        metadata_name: 'Live Trivia Night 2024 #1',
        metadata_external_url: 'mcfarlanetoys.digital/',
        metadata_description,
        attribute_character: 'Spawn',
        attribute_event_type: 'Live Trivia Night 2024',
        attribute_date: '2024-01-24',
        attribute_licensor: Licensors.tmp,
        attribute_host: 'McFarlane Toys Digital',
        attribute_location: 'discord.gg/mtd'
    },
    trivia_night_2: { 
        metadata_name: 'Live Trivia Night 2024 #2',
        metadata_external_url: 'mcfarlanetoys.digital/',
        metadata_description,
        attribute_character: 'Spawn',
        attribute_event_type: 'Live Trivia Night 2024',
        attribute_date: '2024-01-31',
        attribute_licensor: Licensors.tmp,
        attribute_host: 'McFarlane Toys Digital',
        attribute_location: 'discord.gg/mtd'
    },
    ama_1: { 
        metadata_name: 'Live AMA 2024 #1',
        metadata_external_url: 'mcfarlanetoys.digital/',
        metadata_description,
        attribute_character: 'Spawn',
        attribute_event_type: 'Live AMA 2024',
        attribute_date: '2024-02-07',
        attribute_licensor: Licensors.tmp,
        attribute_host: 'McFarlane Toys Digital',
        attribute_location: 'discord.gg/mtd'
    }
}

const options = {
    'trivia_night_1': [
        {
            weight: 40,
            value: {
                attribute_rarity: 'Common',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/common.png',
                ...base_descriptions.trivia_night_1
            }
        },
        {
            weight: 25,
            value: {
                attribute_rarity: 'Rare',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/rare.png',
                ...base_descriptions.trivia_night_1,
                attribute_character: 'Gunslinger Spawn',
            }
        },
        {
            weight: 17.5,
            value: {
                attribute_rarity: 'Epic',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/epic.png',
                ...base_descriptions.trivia_night_1,
                attribute_character: 'She Spawn',
            }
        },
        {
            weight: 12.5,
            value: {
                attribute_rarity: 'Legendary',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/legendary.png',
                ...base_descriptions.trivia_night_1,
                attribute_character: 'Spawn and Cygor',
            }
        },
        {
            weight: 7,
            value: {
                attribute_rarity: 'Exotic',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/exotic.png',
                ...base_descriptions.trivia_night_1,
                attribute_character: 'Spawn Wings of Redemption',
            }
        },
    ],
    'trivia_night_2': [
        {
            weight: 40,
            value: {
                attribute_rarity: 'Common',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/common.png',
                ...base_descriptions.trivia_night_2,
                attribute_character: 'Spawn',
            }
        },
        {
            weight: 25,
            value: {
                attribute_rarity: 'Rare',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/rare.png',
                ...base_descriptions.trivia_night_2,
                attribute_character: 'Gunslinger Spawn',
            }
        },
        {
            weight: 17.5,
            value: {
                attribute_rarity: 'Epic',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/epic.png',
                ...base_descriptions.trivia_night_2,
                attribute_character: 'She Spawn',
            }
        },
        {
            weight: 12.5,
            value: {
                attribute_rarity: 'Legendary',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/legendary.png',
                ...base_descriptions.trivia_night_2,
                attribute_character: 'Spawn and Cygor',
            }
        },
        {
            weight: 7,
            value: {
                attribute_rarity: 'Exotic',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/exotic.png',
                ...base_descriptions.trivia_night_2,
                attribute_character: 'Spawn Wings of Redemption',
            }
        },
    ],
    'ama_1': [
        {
            weight: 40,
            value: {
                attribute_rarity: 'Common',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/common.png',
                ...base_descriptions.ama_1,
                attribute_character: 'Spawn',
            }
        },
        {
            weight: 25,
            value: {
                attribute_rarity: 'Rare',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/rare.png',
                ...base_descriptions.ama_1,
                attribute_character: 'Gunslinger Spawn',
            }
        },
        {
            weight: 17.5,
            value: {
                attribute_rarity: 'Epic',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/epic.png',
                ...base_descriptions.ama_1,
                attribute_character: 'She Spawn',
            }
        },
        {
            weight: 12.5,
            value: {
                attribute_rarity: 'Legendary',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/legendary.png',
                ...base_descriptions.ama_1,
                attribute_character: 'Spawn and Cygor',
            }
        },
        {
            weight: 7,
            value: {
                attribute_rarity: 'Exotic',
                metadata_image: 'https://d391b93f5f62d9c15f67142e43841acc.ipfscdn.io/ipfs/bafybeifx4g2pbjgtdni55a7m3uj7u2gvf6dfmqld2uusyn4nmzuwhrboz4/exotic.png',
                ...base_descriptions.ama_1,
                attribute_character: 'Spawn Wings of Redemption',
            }
        },
    ]
}

function selectNumber(numbers: {
    weight: number;
    value: any;
}[]) {
    const totalWeight = numbers.reduce((acc, { weight }) => acc + weight, 0);

    // Generate a random number in the range [0, totalWeight)
    const randomNum = Math.random() * totalWeight;
  
    // Determine the item that corresponds to the random number
    let cumulativeWeight = 0;
    for (const { value, weight } of numbers) {
      cumulativeWeight += weight;
      if (randomNum < cumulativeWeight) {
        return value;
      }
    }
  }


/**
 * 
 * What is returned depends on the probability of the key being selected, the probability is determined by element "weight" of each object in the array
 */
export function randomSelection(id: string) {
    // @ts-ignore
    const options2 = options[id];
    if (!options2) throw new Error('Invalid id');
    
    return selectNumber(options2);
}

/**
 * Write a test file which tests the function 1000 times and logs the total results of each weight to the console
 */
function testRandomSelection(id: string) {
    const results = {
        'Live Trivia Night 2024 #1': {
            Common: 0,
            Rare: 0,
            Epic: 0,
            Legendary: 0,
            Exotic: 0
        }
    }

    for (let i = 0; i < 1000; i++) {
        const selected = randomSelection(id);
        // @ts-ignore
        results[selected.metadata_name][selected.attribute_rarity]++;
    }

    console.log(results);
}