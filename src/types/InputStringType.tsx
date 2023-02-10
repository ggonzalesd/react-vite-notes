interface InputStringType {
  value: string;
  isEmpty: boolean;
  isWrong: boolean;
  isOk: boolean;
  error: boolean;
  consume: (e: {
      target: {
          value: string;
      };
  }) => void;
  reset: () => void;
  thrower: () => void;
}

interface InputStringCompType {
  type: 'text' | 'password',
  name: string,
  data: InputStringType,
}

export type {
  InputStringType,
  InputStringCompType,
}