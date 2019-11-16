// Annotations
const greeting: string = "hello world";

const isCondition: boolean = true;

const array: string[] = ["hello", "world"];

const numbers: number[] = [1, 2, 3, 4];

// Custom type
type MyType = string;

type CustomType = "hello" | "world" | "universe";

type MyBelovedObject = {
  str: string;
  num: number;
  obj: {
    key: string;
    value: string;
  };
};

// Type Inference
let mynumber = 3;

console.log(mynumber);

// variable with custom type
const myVar: MyBelovedObject = {
  str: "i love you",
  num: 3000,
  obj: {
    key: "kunci",
    value: "nilai"
  }
};

// Error
const numero: number[] = ["30", 30];

const mytype: CustomType = "multiverse";
