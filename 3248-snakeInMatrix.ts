function finalPositionOfSnake(n: number, commands: string[]): number {
    const [i, j] = commands.reduce((acc, curr) => {
      switch (curr) {
        case 'RIGHT':
          acc[1]++;
          break;
        case 'LEFT':
          acc[1]--;
          break;
        case 'UP':
          acc[0]--;
          break;
        case 'DOWN':
          acc[0]++;
          break;
      }

      return acc;
    }, [0, 0]);

    return (i * n) + j;
};