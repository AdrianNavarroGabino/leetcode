/**
 * Definition for Employee.
 * class Employee {
 *     id: number
 *     importance: number
 *     subordinates: number[]
 *     constructor(id: number, importance: number, subordinates: number[]) {
 *         this.id = (id === undefined) ? 0 : id;
 *         this.importance = (importance === undefined) ? 0 : importance;
 *         this.subordinates = (subordinates === undefined) ? [] : subordinates;
 *     }
 * }
 */

function getImportance(employees: Employee[], id: number): number {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      let importance = employees[i].importance;
      
      for (let j= 0; j < employees[i].subordinates.length; j++) {
        importance += getImportance(employees, employees[i].subordinates[j]);
      }

      return importance;
    }
  }

  return 0;
};