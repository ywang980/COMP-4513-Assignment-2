import { fetchData, Param } from "./fetchData";

export const fetchRacesSeason = async (year) => {
    const params = [];
    params.push(new Param('eq', 'year', year));
    params.push(new Param('order', 'round', { ascending: true }));

    const raceData = await fetchData('races', [], params);

    const circuitData = await fetchData('circuits', ['circuitId', 'name'], []);

    const raceDataWithCircuitName = raceData.map(race => {
        const circuit = circuitData.find(circuit => Number(circuit.circuitId) === Number(race.circuitId));
        const circuitName = circuit ? circuit.name : 'Unknown';
        return { ...race, circuitName };
    });

    return raceDataWithCircuitName;

    // return raceData;
};