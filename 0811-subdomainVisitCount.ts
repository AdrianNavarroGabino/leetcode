function subdomainVisits(cpdomains: string[]): string[] {
    const structuredDomains: {[key: string]: number} = cpdomains.reduce((acc, curr) => {
        const times: number = +curr.split(' ')[0];
        let subdomain: string = curr.split(' ')[1];
        const subdomains: string[] = [subdomain];
        let index: number = subdomain.indexOf('.');

        while (index > -1) {
            subdomain = subdomain.substring(index + 1)
            subdomains.push(subdomain);
            index = subdomain.indexOf('.');
        }

        for (let sd of subdomains) {
            if (!acc[sd]) {
                acc[sd] = times;
            } else {
                acc[sd] += times;
            }
        }

        return acc;
    }, {} as {[key: string]: number});

    let result: string[] = [];

    for (const [subdomain, times] of Object.entries(structuredDomains)) {
        result.push(`${times} ${subdomain}`);
    }

    return result;
};