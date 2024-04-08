const express = require('express');
const app = express();

const supa = require('@supabase/supabase-js');
const supaUrl = 'https://wckdbmdbjieldkwcdaxa.supabase.co';
const supaAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indja2RibWRiamllbGRrd2NkYXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NDk5MDMsImV4cCI6MjAyNDQyNTkwM30.JMdCVD5cw04YKWY8Moi2phb1N25hthzVw7X574-w7KE';
const supabase = supa.createClient(supaUrl, supaAnonKey);

const port = 8080;
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});


/**
 * Fetches data from a specified table in Supabase database based on provided columns and parameters.
 * @param {string} table - The name of the table from which data is to be fetched.
 * @param {Array<string>} columns - An array of column names to be selected from the table.
 * @param {Array<Param>} params - An array of parameters defining conditions for the query.
 * @returns {Promise<Array<Object>|Object>} - A promise that resolves to an array of fetched data objects if successful, 
 * or an object containing an error message if an error occurs.
 */
const fetchData = async (table, columns, params) => {
    try {
        let query = supabase.from(table).select(columns.join(', '));
        if (params) {
            query = resolveParams(query, params);
        }

        const { data, error } = await query;

        if (error) {
            throw new Error(error.message);
        }

        if (!data || data.length == 0) {
            throw new Error(`No data found for the specified condition in ${table}.`);
        }

        return data;
    }
    catch (error) {
        return { error: error.message };
    }
};

/**
 * Resolves query parameters and modifies the query accordingly.
 * @param {Object} query - The Supabase query object.
 * @param {Array<Param>} params - An array of parameters defining conditions for the query.
 * @returns {Object} - The modified Supabase query object.
 */
const resolveParams = (query, params) => {
    params.forEach(param => {
        if (param.condition == 'ilike') {
            query = query.ilike(param.column, param.value);
        }
        else if (param.condition == 'eq') {
            query = query.eq(param.column, param.value);
        }
        else if (param.condition == 'order') {
            query = query.order(param.column, param.value);
        }
        else if (param.condition == 'in') {
            query = query.in(param.column, param.value);
        }
        else if (param.condition == 'prefix') {
            query = query.ilike(param.column, `${param.value}%`);
        }
        else if (param.condition == 'lte') {
            query = query.lte(param.column, `${param.value}`);
        }
        else if (param.condition == 'gte') {
            query = query.gte(param.column, `${param.value}`);
        }
    });

    return query;
}

/**
 * Represents a parameter for a query condition.
 */
class Param {
    /**
      * Creates a new Param instance.
      * @param {string} condition - The condition for the parameter (e.g., 'ilike', 'eq', 'order', 'in', 'prefix', 'lte', 'gte').
      * @param {string} column - The name of the column to which the condition applies.
      * @param {string} value - The value to be compared against the column.
    */
    constructor(condition, column, value) {
        this.condition = condition;
        this.column = column;
        this.value = value;
    }
}

/**
 * Various route handlers.
 * 
 * Details:
 * Reference/ID parameter - pushed onto 'params' array in fetchData call.
 * ilike condition used for string, eq for exact int, lte/gte for int ranges.
 * 
 * Queries referencing relations - columns array modified from default of select
 * all (e.g., fields related to foreign key substituted in place of foreign key).
 * 
 * Queries requiring SQL join - accomplished through multiple fetchData calls.
 * 1. Fetch relevant data from other tables.
 * 2. If successful, map this data as an array of foreign keys.
 * 3. Repeat if necessary, until all relevant foreign key arrays are acquired.
 * 4. Acquire data by pushing '.in(<foreign key array>)' command to 'params' array.
 * 
 */
app.get('/api/seasons', async (req, res) => {
    const data = await fetchData('seasons', [], []);
    res.send(data);
});

app.get('/api/circuits', async (req, res) => {
    const data = await fetchData('circuits', [], []);
    res.send(data);
});

app.get('/api/circuits/:ref', async (req, res) => {
    const params = [];
    params.push(new Param('ilike', 'circuitRef', req.params.ref));

    const data = await fetchData('circuits', [], params);
    res.send(data);
});

app.get('/api/circuits/season/:year', async (req, res) => {
    const params = [];
    params.push(new Param('eq', 'year', req.params.year));
    params.push(new Param('order', 'round', { ascending: true }));

    const raceData = await fetchData('races', [], params);
    if (Array.isArray(raceData)) {
        const circuitIds = raceData.map(race => race.circuitId);

        const params2 = [];
        params2.push(new Param('in', 'circuitId', circuitIds));

        let data = await fetchData('circuits', [], params2);
        data = circuitIds.map(id => data.find(circuit => circuit.circuitId == id));
        res.send(data);
    }
    else {
        res.send(raceData);
    }
});

app.get('/api/constructors', async (req, res) => {
    const data = await fetchData('constructors', [], []);
    res.send(data);
});

app.get('/api/constructors/:ref', async (req, res) => {
    const params = [];
    params.push(new Param('ilike', 'constructorRef', req.params.ref));

    const data = await fetchData('constructors', [], params);
    res.send(data);
});

app.get('/api/drivers', async (req, res) => {
    const data = await fetchData('drivers', [], []);
    res.send(data);
});

app.get('/api/drivers/:ref', async (req, res) => {
    const params = [];
    params.push(new Param('ilike', 'driverRef', req.params.ref));

    const data = await fetchData('drivers', [], params);
    res.send(data);
});

app.get('/api/drivers/search/:substring', async (req, res) => {
    const params = [];
    params.push(new Param('prefix', 'surname', req.params.substring));

    const data = await fetchData('drivers', [], params);
    res.send(data);

});

app.get('/api/drivers/race/:raceId', async (req, res) => {
    const params = [];
    params.push(new Param('eq', 'raceId', req.params.raceId));

    const qualifyingData = await fetchData('qualifying', [], params);
    if (Array.isArray(qualifyingData)) {
        const driverIds = qualifyingData.map(qualify => qualify.driverId);

        const params2 = [];
        params2.push(new Param('in', 'driverId', driverIds));

        const data = await fetchData('drivers', [], params2);
        res.send(data);
    }
    else {
        res.send(qualifyingData);
    }
});

app.get('/api/races/:raceId', async (req, res) => {
    const columns = ['raceId', 'year', 'round',
        'circuitId(name, location, country)',
        'name', 'date', 'time', 'url',
        'fp1_date', 'fp1_time', 'fp2_date', 'fp2_time', 'fp3_date', 'fp3_time',
        'quali_date', 'quali_time', 'sprint_date', 'sprint_time'];

    const params = [];
    params.push(new Param('eq', 'raceId', req.params.raceId));

    const data = await fetchData('races', columns, params);
    res.send(data);
});

app.get('/api/races/season/:year', async (req, res) => {
    const params = [];
    params.push(new Param('eq', 'year', req.params.year));
    params.push(new Param('order', 'round', { ascending: true }));

    const data = await fetchData('races', [], params);
    res.send(data);
});

app.get('/api/races/season/:year/:round', async (req, res) => {
    const params = [];
    params.push(new Param('eq', 'year', req.params.year));
    params.push(new Param('eq', 'round', req.params.round));

    const data = await fetchData('races', [], params);
    res.send(data);
});

app.get('/api/races/circuits/:ref', async (req, res) => {
    const params = [];
    params.push(new Param('ilike', 'circuitRef', req.params.ref));

    const circuitData = await fetchData('circuits', [], params);
    if (Array.isArray(circuitData)) {
        const circuitId = circuitData[0].circuitId;
        const params2 = [];
        params2.push(new Param('eq', 'circuitId', circuitId));

        const data = await fetchData('races', [], params2);
        res.send(data);
    }
    else {
        res.send(circuitData);
    }
});

app.get('/api/races/circuits/:ref/season/:start/:end', async (req, res) => {
    if (req.params.end < req.params.start) {
        res.send({ error: "End year less than start year." });
    }
    else {
        const params = [];
        params.push(new Param('ilike', 'circuitRef', req.params.ref));

        const circuitData = await fetchData('circuits', [], params);
        if (Array.isArray(circuitData)) {
            const circuitId = circuitData[0].circuitId;
            const params2 = [];
            params2.push(new Param('eq', 'circuitId', circuitId));
            params2.push(new Param('gte', 'year', req.params.start));
            params2.push(new Param('lte', 'year', req.params.end));

            const data = await fetchData('races', [], params2);
            res.send(data);
        }
        else {
            res.send(circuitData);
        }
    }
});

app.get('/api/results/:raceId', async (req, res) => {
    const columns = ['resultId',
        'driverId(driverRef, code, forename, surname)',
        'raceId(name, round, year, date)',
        'constructorId(name, constructorRef, nationality)',
        'number', 'grid', 'position', 'positionText', 'positionOrder',
        'points', 'laps', 'time', 'milliseconds', 'fastestLap',
        'rank', 'fastestLapTime', 'fastestLapSpeed', 'statusId'];

    const params = [];
    params.push(new Param('eq', 'raceId', req.params.raceId));
    params.push(new Param('order', 'grid', { ascending: true }));

    const data = await fetchData('results', columns, params);
    res.send(data);
});

app.get('/api/results/driver/:ref', async (req, res) => {
    const params = [];
    params.push(new Param('ilike', 'driverRef', req.params.ref));

    const driverData = await fetchData('drivers', [], params);
    if (Array.isArray(driverData)) {
        const driverId = driverData[0].driverId;
        const params2 = [];
        params2.push(new Param('eq', 'driverId', driverId));

        const data = await fetchData('results', [], params2);
        res.send(data);
    }
    else {
        res.send(driverData);
    }
});

app.get('/api/results/driver/:ref/seasons/:start/:end', async (req, res) => {
    if (req.params.end < req.params.start) {
        res.send({ error: "End year less than start year." });
    }
    else {
        const params = [];
        params.push(new Param('ilike', 'driverRef', req.params.ref));

        const driverData = await fetchData('drivers', [], params);
        if (Array.isArray(driverData)) {
            const driverId = driverData[0].driverId;

            const params2 = [];
            params2.push(new Param('gte', 'year', req.params.start));
            params2.push(new Param('lte', 'year', req.params.end));

            const raceData = await fetchData('races', [], params2);
            if (Array.isArray(raceData)) {
                const raceIds = raceData.map(race => race.raceId);

                const params3 = [];
                params3.push(new Param('eq', 'driverId', driverId));
                params3.push(new Param('in', 'raceId', raceIds));

                const data = await fetchData('results', [], params3);
                res.send(data);
            }
            else {
                res.send(raceData);
            }
        }
        else {
            res.send(driverData);
        }
    }
});

app.get('/api/qualifying/:raceId', async (req, res) => {
    const columns = ['qualifyId',
        'driverId(driverRef, code, forename, surname)',
        'raceId(name, round, year, date)',
        'constructorId(name, constructorRef, nationality)',
        'number', 'position', 'q1', 'q2', 'q3'];

    const params = [];
    params.push(new Param('eq', 'raceId', req.params.raceId));
    params.push(new Param('order', 'position', { ascending: true }));

    const data = await fetchData('qualifying', columns, params);
    res.send(data);
});

app.get('/api/standings/:raceId/drivers', async (req, res) => {
    const columns = ['driverStandingsId',
        'driverId(driverRef, code, forename, surname)',
        'raceId(name, round, year, date)',
        'points', 'position', 'positionText', 'wins'];

    const params = [];
    params.push(new Param('eq', 'raceId', req.params.raceId));
    params.push(new Param('order', 'position', { ascending: true }));

    const data = await fetchData('driverStandings', columns, params);
    res.send(data);
});

app.get('/api/standings/:raceId/constructors', async (req, res) => {
    const columns = ['constructorStandingsId',
        'constructorId(name, constructorRef, nationality)',
        'raceId(name, round, year, date)',
        'points', 'position', 'positionText', 'wins'];

    const params = [];
    params.push(new Param('eq', 'raceId', req.params.raceId));
    params.push(new Param('order', 'position', { ascending: true }));

    const data = await fetchData('constructorStandings', columns, params);
    res.send(data);
});