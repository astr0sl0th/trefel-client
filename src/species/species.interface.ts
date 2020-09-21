declare module namespace {

    export interface Flower {
        id: number;
        image_url: string;
        copyright: string;
    }

    export interface Leaf {
        id: number;
        image_url: string;
        copyright: string;
    }

    export interface Habit {
        id: number;
        image_url: string;
        copyright: string;
    }

    export interface Fruit {
        id: number;
        image_url: string;
        copyright: string;
    }

    export interface Bark {
        id: number;
        image_url: string;
        copyright: string;
    }

    export interface Other {
        id: number;
        image_url: string;
        copyright: string;
    }

    export interface Images {
        flower: Flower[];
        leaf: Leaf[];
        habit: Habit[];
        fruit: Fruit[];
        bark: Bark[];
        other: Other[];
    }

    export interface CommonNames {
        en: string[];
        ar: string[];
        an: string[];
        hy: string[];
        az: string[];
        eu: string[];
        be: string[];
        bg: string[];
        ca: string[];
        cv: string[];
        hr: string[];
        cs: string[];
        da: string[];
        nl: string[];
        eo: string[];
        et: string[];
        fi: string[];
        fr: string[];
        gl: string[];
        ka: string[];
        de: string[];
        he: string[];
        hu: string[];
        is: string[];
        it: string[];
        kk: string[];
        lv: string[];
        lt: string[];
        mk: string[];
        gv: string[];
        se: string[];
        no: string[];
        nb: string[];
        nn: string[];
        oc: string[];
        fa: string[];
        pl: string[];
        pt: string[];
        ru: string[];
        sr: string[];
        sk: string[];
        sl: string[];
        es: string[];
        sv: string[];
        tr: string[];
        uk: string[];
        wa: string[];
        cy: string[];
        fin: string[];
        swe: string[];
        dan: string[];
        deu: string[];
        eng: string[];
        nno: string[];
        nob: string[];
        fra: string[];
        por: string[];
        nld: string[];
    }

    export interface Distribution {
        native: string[];
        introduced: string[];
    }

    export interface Links {
        self: string;
        plants: string;
        species: string;
    }

    export interface Native {
        id: number;
        name: string;
        slug: string;
        tdwg_code: string;
        tdwg_level: number;
        species_count: number;
        links: Links;
    }

    export interface Links2 {
        self: string;
        plants: string;
        species: string;
    }

    export interface Introduced {
        id: number;
        name: string;
        slug: string;
        tdwg_code: string;
        tdwg_level: number;
        species_count: number;
        links: Links2;
    }

    export interface Distributions {
        native: Native[];
        introduced: Introduced[];
    }

    export interface Flower2 {
        color?: any;
        conspicuous: boolean;
    }

    export interface Foliage {
        texture: string;
        color?: any;
        leaf_retention: boolean;
    }

    export interface FruitOrSeed {
        conspicuous: boolean;
        color?: any;
        shape?: any;
        seed_persistence: boolean;
    }

    export interface AverageHeight {
        cm: number;
    }

    export interface MaximumHeight {
        cm: number;
    }

    export interface Specifications {
        ligneous_type: string;
        growth_form: string;
        growth_habit: string;
        growth_rate: string;
        average_height: AverageHeight;
        maximum_height: MaximumHeight;
        nitrogen_fixation: string;
        shape_and_orientation: string;
        toxicity: string;
    }

    export interface RowSpacing {
        cm?: any;
    }

    export interface Spread {
        cm?: any;
    }

    export interface MinimumPrecipitation {
        mm: number;
    }

    export interface MaximumPrecipitation {
        mm: number;
    }

    export interface MinimumRootDepth {
        cm: number;
    }

    export interface MinimumTemperature {
        deg_f: number;
        deg_c: number;
    }

    export interface MaximumTemperature {
        deg_f?: any;
        deg_c?: any;
    }

    export interface Growth {
        description?: any;
        sowing?: any;
        days_to_harvest?: any;
        row_spacing: RowSpacing;
        spread: Spread;
        ph_maximum: number;
        ph_minimum: number;
        light: number;
        atmospheric_humidity: number;
        growth_months?: any;
        bloom_months?: any;
        fruit_months?: any;
        minimum_precipitation: MinimumPrecipitation;
        maximum_precipitation: MaximumPrecipitation;
        minimum_root_depth: MinimumRootDepth;
        minimum_temperature: MinimumTemperature;
        maximum_temperature: MaximumTemperature;
        soil_nutriments: number;
        soil_salinity: number;
        soil_texture: number;
        soil_humidity?: any;
    }

    export interface Links3 {
        self: string;
        plant: string;
        genus: string;
    }

    export interface Synonym {
        id: number;
        name: string;
        author: string;
        sources: any[];
    }

    export interface Source {
        last_update: Date;
        id: string;
        name: string;
        url: string;
        citation: string;
    }

    export interface Data {
        id: number;
        common_name: string;
        slug: string;
        scientific_name: string;
        year: number;
        bibliography: string;
        author: string;
        status: string;
        rank: string;
        family_common_name: string;
        genus_id: number;
        observations: string;
        vegetable: boolean;
        image_url: string;
        genus: string;
        family: string;
        duration?: any;
        edible_part?: any;
        edible: boolean;
        images: Images;
        common_names: CommonNames;
        distribution: Distribution;
        distributions: Distributions;
        flower: Flower2;
        foliage: Foliage;
        fruit_or_seed: FruitOrSeed;
        specifications: Specifications;
        growth: Growth;
        links: Links3;
        synonyms: Synonym[];
        sources: Source[];
    }

    export interface Meta {
        images_count: number;
        sources_count: number;
        synonyms_count: number;
        last_modified: Date;
    }

    export interface Specie {
        data: Data;
        meta: Meta;
    }

}
