export const countEndangeredSpecies = (fish) => {
  if (fish === null || !Array.isArray(fish)) {
    return 0
  }
  return fish.filter((item) => item.onCaresList).length
}
