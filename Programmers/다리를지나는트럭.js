function solution(bridgeLength, weight, truckWeights) {
  let answer = 0;
  let times = [];
  const crossingTruckWeights = [];

  while (crossingTruckWeights.length || !answer) {
    const firstTruckTime = times[0];

    if (firstTruckTime > bridgeLength) {
      crossingTruckWeights.shift();
      times.shift();
    }

    const totalWeight = sumWeight();
    if (totalWeight <= weight) {
      times.push(1);
      crossingTruckWeights.push(truckWeights.shift());
    }

    times = times.map((value) => value + 1);

    answer++;
  }

  function sumWeight() {
    const firstTruckWeight = truckWeights[0];
    if (!firstTruckWeight) return;

    return crossingTruckWeights.reduce((acc, weight) => {
      return acc + weight;
    }, firstTruckWeight);
  }

  return answer;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
