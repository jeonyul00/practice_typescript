/* 
rest : 매개변수는 나머지 매개변수를 하나의 배열로 수집하는 역할
 */

const rest = (...args: string[]): string[] => args;
rest("s", "t", "r", "i", "n", "g");
