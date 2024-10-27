export interface Budget {
    username: String | null
    amount: Number | null
    name: String | null
    description: String | null
    expiry: String |null
    category: String| null
}

export interface BudgetRes {
    _id : string
    username: String | null
    amount: Number | null
    name: String | null
    description: String | null
    expiry: String |null
    category: String| null
    totalexpense : number|null
    remainingAmount : number|null
    remainingbudgetPercent : number|null
}
