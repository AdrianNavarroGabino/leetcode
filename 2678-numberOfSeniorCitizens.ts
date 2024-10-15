function countSeniors(details: string[]): number {
    return details.filter((c) => +c.substring(11, 13) > 60).length;
};