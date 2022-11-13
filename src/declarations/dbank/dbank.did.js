export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkValue' : IDL.Func([], [IDL.Float64], ['query']),
    'compound' : IDL.Func([], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
    'withdrawal' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
