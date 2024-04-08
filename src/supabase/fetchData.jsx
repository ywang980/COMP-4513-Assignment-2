import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wckdbmdbjieldkwcdaxa.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indja2RibWRiamllbGRrd2NkYXhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NDk5MDMsImV4cCI6MjAyNDQyNTkwM30.JMdCVD5cw04YKWY8Moi2phb1N25hthzVw7X574-w7KE';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetches data from a specified table in Supabase database based on provided columns and parameters.
 * @param {string} table - The name of the table from which data is to be fetched.
 * @param {Array<string>} columns - An array of column names to be selected from the table.
 * @param {Array<Param>} params - An array of parameters defining conditions for the query.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of fetched data objects if successful, 
 * or an empty array if an error occurs or no matches are found.
 */
export const fetchData = async (table, columns, params) => {
    try {
        let query = supabase.from(table).select(columns.join(', '));
        if (params) {
            query = resolveParams(query, params);
        }

        const { data, error } = await query;

        if (error) {
            console.error(error.message);
            return [];
        }

        if (!data || data.length == 0) {
            console.error(`No data found for the specified condition in ${table}.`);
            return [];
        }

        return data;
    }
    catch (error) {
        console.error(error.message);
        return [];
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
export class Param {
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