type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date) {
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toLocaleLowerCase());
  } else {
    console.log(value.getDay());
  }
}

function func2(value: string | Date | Person) {
  if (value instanceof Date) {
    console.log(value.getDate());
  } else if (typeof value === "string") {
    console.log(value.toLocaleLowerCase());
  } else if (value && "age" in value) {
    console.log(value.name);
  }
}
