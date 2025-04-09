export type Contract = {
    no: string,
    issue_date: string,
}

export type Photo = {
    name: string
    filepath: string
    thumbpath: string
    createdAt: string
}


export type OrganizationType = {
    businessEntity: string
    id: string
    contactId: string
    shortName: string
    name: string
    contract: Contract
    type: string[]
    status: string
    photos: Photo[]
    createdAt: string
    updatedAt: string
}