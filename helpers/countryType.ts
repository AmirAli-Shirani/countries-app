export interface CountryType {
    cca3: string;
    name: {
        common: string;
        official: string;
    };
    flags: {
        svg: string;
    };
    flag: string;
    region: string;
    capital?: string[];
    population: number;
    area: number;
    languages?: {
        [key: string]: string;
    };
    maps: {
        googleMaps: string;
    };
    subregion : string;
    independent : boolean;
    timezones : Array<string>;
    currencies : object
}
