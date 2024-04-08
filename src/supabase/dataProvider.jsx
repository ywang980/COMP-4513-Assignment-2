import { fetchData, Param } from "./fetchData";

export const fetchRacesCircuitsBySeason = async (year) => {
    const params = [];
    params.push(new Param('eq', 'year', year));
    params.push(new Param('order', 'round', { ascending: true }));

    const racesData = await fetchData('races', [], params);
    const circuitsData = await fetchData('circuits', ['circuitId', 'name'], []);

    if (racesData.length == 0 || circuitsData.length == 0)
        return [];

    const racesDataWithCircuitName = racesData.map(race => {
        const circuit = circuitsData.find(circuit => circuit.circuitId === race.circuitId);
        const circuitName = circuit ? circuit.name : 'Unknown';
        return { ...race, circuitName };
    });

    return racesDataWithCircuitName;
};

export const fetchRaceByID = async (raceId) => {
    const params = [];
    params.push(new Param('eq', 'raceId', raceId));
    const racesData = await fetchData('races', [], params);

    return racesData.length > 0 ? racesData[0] : null;
}

export const fetchQualifyingByRaceID = async (raceId) => {
    const params = []
    params.push(new Param('eq', 'raceId', raceId));

    const qualifyingData = await fetchData('qualifying', [], params);
    const driversData = await fetchData('drivers', ['driverId', 'forename', 'surname'], []);
    const constructorsData = await fetchData('constructors', ['constructorId', 'name'], []);

    if (qualifyingData.length == 0 || driversData.length == 0 || constructorsData.length == 0)
        return [];

    const qualifyingDataWithNames = qualifyingData.map(qualify => {
        const driver = driversData.find(driver => driver.driverId === qualify.driverId);
        const constructor = constructorsData.find(constructor => constructor.constructorId === qualify.constructorId);

        const driverName = driver ? driver.forename + ' ' + driver.surname : 'Unknown';
        const constructorName = constructor ? constructor.name : 'Unknown';

        return { ...qualify, driverName, constructorName };
    });

    return qualifyingDataWithNames;
};

export const fetchResultsByRaceID = async (raceId) => {
    const params = []
    params.push(new Param('eq', 'raceId', raceId));

    const resultsData = await fetchData('results', [], params);
    const driversData = await fetchData('drivers', ['driverId', 'forename', 'surname'], []);
    const constructorsData = await fetchData('constructors', ['constructorId', 'name'], []);

    if (resultsData.length == 0 || driversData.length == 0 || constructorsData.length == 0)
        return [];

    const resultsDataWithNames = resultsData.map(result => {
        const driver = driversData.find(driver => driver.driverId === result.driverId);
        const constructor = constructorsData.find(constructor => constructor.constructorId === result.constructorId);

        const driverName = driver ? driver.forename + ' ' + driver.surname : 'Unknown';
        const constructorName = constructor ? constructor.name : 'Unknown';

        return { ...result, driverName, constructorName };
    });

    return resultsDataWithNames;
};

export const fetchDriverStandingsByRaceID = async (raceId) => {
    const params = []
    params.push(new Param('eq', 'raceId', raceId));
    params.push(new Param('order', 'position', { ascending: true }));

    const driverStandingsData = await fetchData('driverStandings', [], params);
    const driversData = await fetchData('drivers', ['driverId', 'forename', 'surname'], []);

    if (driverStandingsData.length == 0 || driversData.length == 0)
        return [];

    const driverStandingsDataWithNames = driverStandingsData.map(driverStanding => {
        const driver = driversData.find(driver => driver.driverId === driverStanding.driverId);
        const driverName = driver ? driver.forename + ' ' + driver.surname : 'Unknown';

        return { ...driverStanding, driverName };
    });

    return driverStandingsDataWithNames;
};

export const fetchConstructorStandingsByRaceID = async (raceId) => {
    const params = []
    params.push(new Param('eq', 'raceId', raceId));
    params.push(new Param('order', 'position', { ascending: true }));

    const constructorStandingsData = await fetchData('constructorStandings', [], params);
    const constructorsData = await fetchData('constructors', ['constructorId', 'name'], []);

    if (constructorStandingsData.length == 0 || constructorsData.length == 0)
        return [];

    const constructorStandingsDataWithNames = constructorStandingsData.map(constructorStanding => {
        const constructor = constructorsData.find(constructor => constructor.constructorId === constructorStanding.constructorId);
        const constructorName = constructor ? constructor.name : 'Unknown';

        return { ...constructorStanding, constructorName };
    });

    return constructorStandingsDataWithNames;
};
