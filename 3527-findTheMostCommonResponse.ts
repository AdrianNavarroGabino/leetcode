function findCommonResponse(responses: string[][]): string {
  const mostCommonResponses = {} as { [key: string]: number; };

  for (let i = 0; i < responses.length; i++) {
    const filteredResp = [...new Set(responses[i])];

    for (let j = 0; j < filteredResp.length; j++) {
      if (!mostCommonResponses[filteredResp[j]]) {
        mostCommonResponses[filteredResp[j]] = 0;
      }

      mostCommonResponses[filteredResp[j]]++;
    }
  }

  const maxValue = Math.max(...Object.values(mostCommonResponses));

  return Object.keys(mostCommonResponses)
    .filter((key) => mostCommonResponses[key] === maxValue)
    .sort()[0];
};