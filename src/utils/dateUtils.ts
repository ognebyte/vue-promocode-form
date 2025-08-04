export const formatDate = (date: Date): string =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

export const parseDate = (str: string): Date | null => {
    if (!str) return null
    const [yyyy, mm, dd] = str.split('-').map(Number)
    if (!yyyy || !mm || !dd) return null
    return new Date(yyyy, mm - 1, dd)
}

export const getDateTime = (offsetDays = 0) => {
    const date = new Date()
    date.setDate(date.getDate() + offsetDays)
    const time = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    return { date: formatDate(date), time }
}
