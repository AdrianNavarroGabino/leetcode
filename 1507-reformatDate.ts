const months = {
    'Jan': '01',
    'Feb': '02',
    'Mar': '03',
    'Apr': '04',
    'May': '05',
    'Jun': '06',
    'Jul': '07',
    'Aug': '08',
    'Sep': '09',
    'Oct': '10',
    'Nov': '11',
    'Dec': '12'
};

function reformatDate(date: string): string {
    const splittedDate = date.split(' ');
    const day = splittedDate[0].match(/\d+/)![0].padStart(2, '0');
    const month = months[splittedDate[1]];
    const year = splittedDate[2];

    return `${year}-${month}-${day}`;
};