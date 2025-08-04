export interface TabOneData {
    name: string
    title: string
    description?: string
    points?: number
}

export interface TabTwoData {
    startDate: string
    startTime: string
    endDate: string
    endTime: string
    withoutEndDate: boolean
    activationLimit?: number
    receiveType: string
}
