type EventHorizon = "began" | "ended";

interface IUniverse {
  isVirtual: boolean;
  blackholeStatus?: EventHorizon;
}

interface IMultiverse {
  isVirtual: boolean;
  hasAtom?: boolean;
  dimensionNumber?: number;
}

class Science<T> {
  options: T;
  constructor(options: T) {
    this.options = options;
  }
  // Your class methods here...
}

// Generics is useful and reusable
const sci = new Science<IUniverse>({
  isVirtual: false,
  blackholeStatus: "ended"
});
// sci.options.isVirtual

const ence = new Science<IMultiverse>({ isVirtual: true });
// ence.options.dimensionNumber
