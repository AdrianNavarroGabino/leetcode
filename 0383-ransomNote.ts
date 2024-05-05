function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineArr: string[] = magazine.split('');

    for (let i = 0; i < ransomNote.length; i++) {
        const index = magazineArr.indexOf(ransomNote[i]);

        if (index === -1) {
            return false;
        }
        delete magazineArr[index];
    }

    return true;
};