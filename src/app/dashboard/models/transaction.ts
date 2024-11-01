export interface Transaction {
    username : string | null,
    amount ?: Number | null,
    description ?: string | null,
    category ?: string | null,
    type ?: string | null
}

export interface TransactionRes{
    _id : String | null
    amount ?: Number | null,
    description ?: string | null,
    category ?: string | null,
    type ?: string | null,
    createdAt?: string | null
}
