export type appProps = {
    getAll: Function,
    episodeList: []
}

export type episodeType = {
    id: string,
    name: string,
    air_date: string,
    episode: string,
    characters: [],
    url: string,
    created: string,
}

export type actionType = {
    type: string;
    payload: episodeType
}

export type stateType = {
    rootReducer: []
}
