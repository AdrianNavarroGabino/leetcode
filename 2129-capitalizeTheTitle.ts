function capitalizeTitle(title: string): string {
    return title
        .split(' ')
        .map((word) => word.length < 3 ?
            word.toLowerCase() :
            word[0].toUpperCase() + word.substring(1).toLowerCase()
        )
        .join(' ');
};