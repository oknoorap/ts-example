interface IGreeting {
  message: string;
  optional?: string;
}

// Functions Generics
function Salam<T>(options?: T) {
  return options;
}

const Greet = Salam<IGreeting>();
