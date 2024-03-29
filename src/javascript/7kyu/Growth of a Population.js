/*
In a small town the population is p0 = 1000 at the beginning of a year.
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
*/

function nbYear(startingPopulation, growthPercent, populationChange, targetPopulationSize) {
  let years = 0;
  let populationSize = startingPopulation;

  while (populationSize < targetPopulationSize) {
    populationSize = Math.floor(
      populationSize + populationSize * (growthPercent / 100) + populationChange
    );
    years += 1;
  }

  return years;
}
