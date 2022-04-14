export enum AuthType {
    Google = "google",
    Normal = "normal"
}

export enum SourceType {
    To = -1,
    From = 1,
    Available = 0
}

export enum Status {
    Initiated = 0,
    Pending = 1,
    Compleleted = 2,
    Failed = -1,
}

export enum HttpMethod {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Head = "HEAD",
    Delete = "DELETE",
}

export enum InstitutionType {
    Domestic = "Domestic",
    Foreign = "Foreign"
}

export enum InstitutionTypeShort {
    Domestic = "DII",
    Foreign = "FII"
}
