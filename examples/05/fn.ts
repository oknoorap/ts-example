interface IGreeting {
  message: string;
  optional?: string;
}

// Functions Generics
function YourFunc<T>(options?: T) {
  return options;
}

// Accessible and reusable
const myfunc = YourFunc<IGreeting>();
// myFunc.message
// myFunc.optional

const myfunc2 = YourFunc<string>();
// myfunc2.length
// myfunc2.replace
