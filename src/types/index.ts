export type SearchType = {
    city: string;
    country: string;
}


export type Country = {
    code: string;
    name: string;
}

// para formatear la respuesta de la api
export type Weather = {
    name: string
    main: {
        temp : number
        temp_max :  number
        temp_min : number
    }
}