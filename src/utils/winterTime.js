import moment from 'moment'

export const winterTime = (element1, element2) => {
        const currentYear = new Date().getFullYear()
        const startDate = moment(new Date(currentYear, 11, 25)).format('YYYY/MM/DD')
        const endDate = moment(new Date(currentYear + 1, 0, 10)).format('YYYY/MM/DD')
        // const today = moment(new Date()).format('YYYY/MM/DD')
        const today = '2023/12/25'
        if (today >= startDate && today <= endDate) {
            return element1
            // console.log('✅ date is between the 2 dates');
        } else {
            return element2
            // console.log('⛔️ date is not in the range');
        }
    }