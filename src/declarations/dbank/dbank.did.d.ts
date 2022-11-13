import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkValue' : () => Promise<number>,
  'compound' : () => Promise<undefined>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'withdrawal' : (arg_0: number) => Promise<undefined>,
}
