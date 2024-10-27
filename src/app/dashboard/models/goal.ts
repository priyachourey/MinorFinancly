export interface Goal {
    amount : number|null
    summary : String|null
    expiry : String|Date
    username : String|null
}

export interface GoalRes{
    _id : string
    amount : number|null
    summary : String|null
    expiry : String|Date
    username : String|null
    totalincome: number
    remainingamount : number
    goalprogress : number

}
