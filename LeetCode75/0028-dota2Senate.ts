function predictPartyVictory(senate: string): string {
    const validSenators: { radiant: boolean, valid: boolean }[] =
        senate.split('').map((el) => ({
            radiant: el === 'R',
            valid: true,
        }));
    let validRadiants: number = validSenators.reduce((acc, curr) => acc + (curr.radiant ? 1 : 0), 0);
    let validDires: number = validSenators.reduce((acc, curr) => acc + (curr.radiant ? 0 : 1), 0);

    while(validDires !== 0 && validRadiants !== 0) {
        for (let i = 0; i < validSenators.length; i++) {
            const validSenator: { radiant: boolean, valid: boolean } = validSenators[i];
            if(validSenator.valid) {
                const denied: { radiant: boolean, valid: boolean } | undefined =
                    validSenators.find((el, j) => j > i && el.radiant !== validSenator.radiant && el.valid);

                if (denied) {
                    denied.valid = false;
                    if (denied.radiant) {
                        validRadiants--;
                    } else {
                        validDires--;
                    }
                } else {
                    const denied2: { radiant: boolean, valid: boolean } | undefined =
                        validSenators.find((el, j) => j < i && el.radiant !== validSenator.radiant && el.valid);
                    if (denied2) {
                        denied2.valid = false;
                        if (denied2.radiant) {
                            validRadiants--;
                        } else {
                            validDires--;
                        }
                    }
                }
            }
        }
    }

    return validDires ? 'Dire' : 'Radiant';
};