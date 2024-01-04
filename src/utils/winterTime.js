import moment from 'moment';

export const winterTime = (element1, element2) => {
    const currentYear = new Date().getFullYear();
    // First condition
    const startDate1 = moment(new Date(currentYear, 11, 25)).format('YYYY/MM/DD');
    const endDate1 = moment(new Date(currentYear, 11, 31)).format('YYYY/MM/DD');
    // Second condition
    const startDate2 = moment(new Date(currentYear, 0, 1)).format('YYYY/MM/DD');
    const endDate2 = moment(new Date(currentYear, 0, 10)).format('YYYY/MM/DD');
    const today = moment(new Date()).format('YYYY/MM/DD');
    // const today = '2023/12/25'

    if ((today >= startDate1 && today <= endDate1) || (today >= startDate2 && today <= endDate2)) {
        // console.log('✅ date is between the 2 dates');
        return element1;
    } else {
        // console.log('⛔️ date is not in the range');
        return element2;
    }
};
