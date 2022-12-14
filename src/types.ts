export type StudentType = {
    id: number | null,
    ref: string,
    lastname: string,
    firstname: string | null,
    sex: string,
    birthDate: string,
    address: string | null,
    phone: string | null,
    email: string | null,
    entranceDate: string,
    groups: GroupType | null,
    username: string | null,
    password: string | null
    role: string
}

export type GroupType = {
    id: number | null,
    name: string,
    description: string | null
}

export type FeeType = {
    id: number | null,
    type: string,
    description: string | null,
    totalAmount: number,
    remainingAmount: number,
    student: StudentType | null,
    schoolYear: SchoolYearType | null
}

export type SchoolYearType = {
    id: number | null,
    startYear: string,
    endYear: string
}

export type TransactionType = {
    id: number | null,
    amount: number,
    date: string,
    description: string | null,
    fee: FeeType | null
}


export type BasicAuthType = {
    username: string | null,
    password: string | null
}
