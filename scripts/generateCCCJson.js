const { v4: uuidv4 } = require('uuid')

const nespressos = [
  { name: 'Capriccio', size: 'S' },
  { name: 'Volluto', size: 'S' },
  { name: 'Cosi', size: 'S' },

  { name: 'Caramel Creme Brulee', size: 'S' },
  { name: 'Vanilla Eclair', size: 'S' },
  { name: 'Cocoa Truffle', size: 'S' },
  { name: 'Scuro', size: 'L' },
  { name: 'Chiaro', size: 'L' },
  { name: 'Corto', size: 'R' },

  { name: 'Istambul', size: 'S' },
  { name: 'Paris', size: 'S' },
  { name: 'Rio de Janeiro', size: 'S' },
  { name: 'Cape Town Envivo Lungo', size: 'L' },
  { name: 'Stockholm Fortissio Lungo', size: 'L' },
  { name: 'Tokyo Vivalto Lungo', size: 'L' },
  { name: 'Buenos Aires Lungo', size: 'L' },
  { name: 'Shanghai Lungo', size: 'L' },

  { name: 'Ispirazione Napoli', size: 'S' },
  { name: 'Ispirazione Palermo', size: 'S' },
  { name: 'Ispirazione Ristretto Italiano', size: 'S' },
  { name: 'Ispirazione Firenze', size: 'S' },
  { name: 'Ispirazione Roma', size: 'S' },
  { name: 'Ispirazione Venezia', size: 'S' },
  { name: 'Ispirazione Genova', size: 'S' },

  { name: 'India', size: 'L' },
  { name: 'Indonesia', size: 'L' },
  { name: 'Colombia', size: 'L' },
  { name: 'Nicaragua', size: 'L' },
  { name: 'Ethiopia', size: 'L' },
]

const brandNames = ['Nespresso', "L'Or"]

function getBrands() {
  const brands = []
  for (const name of brandNames) {
    brands.push({ id: uuidv4(), name: name })
  }
  return brands
}

function explodeSizes(sizesKey) {
  const sizes = []
  for (const c of sizesKey) {
    sizes.push(c)
  }
  return sizes
}

function getCapsules(brandId, capsulesList) {
  const capsules = []
  for (const item of capsulesList) {
    capsules.push({
      id: uuidv4(),
      brandId: brandId,
      name: item.name,
      sizes: explodeSizes(item.size),
    })
  }
  return capsules
}

const brands = getBrands()
const nespressoCapsules = getCapsules(brands[0].id, nespressos)
console.log(brands)
console.log(nespressoCapsules)
