import { atom } from 'recoil';

export const projectCreateIdState = atom<number>({
  key: 'projectCreateIdState',
  default: 0,
})

export const projectCreateState = atom<number>({
  key: 'projectCreateState',
  default: 1,
})
