class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop(): T | undefined {
    if (this.list.length > 0) {
      return this.list.pop();
    }
    return undefined;
  }
}
