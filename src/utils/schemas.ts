import * as yup from 'yup'
import { parseDate } from './dateUtils'

const TIME_REGEX = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

export const validationSchema = [
    yup.object({
        name: yup.string().required('Введите название промокода'),
        title: yup.string().required('Введите заголовок'),
        description: yup.string().max(250, 'Максимум 250 символов'),
        points: yup
            .number()
            .typeError('Введите число')
            .required('Введите количество баллов')
            .positive('Баллы должны быть положительным числом')
            .min(1, 'Минимум 1 балл'),
    }),

    yup.object({
        startDate: yup.string().required('Выберите дату начала'),
        startTime: yup.string().required('Выберите время начала').matches(TIME_REGEX, 'Неверный формат времени'),
        endDate: yup.string().when('withoutEndDate', {
            is: false,
            then: (schema) =>
                schema
                    .required('Выберите дату окончания')
                    .test('is-after-start-date', 'Дата окончания должна быть позже даты начала', function (end) {
                        const { startDate } = this.parent
                        const start = parseDate(startDate)
                        const endParsed = parseDate(end)
                        return !start || !endParsed || endParsed.getTime() >= start.getTime()
                    }),
            otherwise: (schema) => schema.strip(),
        }),
        endTime: yup.string().when('withoutEndDate', {
            is: false,
            then: (schema) =>
                schema
                    .required('Выберите время окончания')
                    .matches(TIME_REGEX, 'Неверный формат времени')
                    .test('end-after-start', 'Время окончания должно быть позже времени начала', function (endTime) {
                        const { startDate, startTime, endDate } = this.parent
                        if (!startDate || !startTime || !endDate || !endTime) return true

                        const startDateObj = parseDate(startDate)
                        const endDateObj = parseDate(endDate)
                        if (!startDateObj || !endDateObj || startDateObj.toDateString() !== endDateObj.toDateString())
                            return true

                        const [sh, sm] = startTime.split(':').map(Number)
                        const [eh, em] = endTime.split(':').map(Number)
                        return eh * 60 + em > sh * 60 + sm
                    }),
            otherwise: (schema) => schema.strip(),
        }),
        activationLimit: yup
            .number()
            .typeError('Введите число')
            .required('Введите лимит активаций')
            .min(1, 'Минимум 1 активация')
            .integer('Лимит должен быть целым числом'),
        receiveType: yup.string().required('Выберите способ получения промокода').oneOf(['create-only', 'send-all']),
        withoutEndDate: yup.boolean().required().default(false),
    }),
]
