function busyStudent(startTime: number[], endTime: number[], queryTime: number): number {
  return startTime.filter((start, i) => queryTime >= start && queryTime <= endTime[i]).length;
};