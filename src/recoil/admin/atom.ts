import { atom } from 'recoil';
import { CURRENT_VIEW_STATES } from './constants/constants';
import { Project } from '../../shared/types/project';
export const adminPageViewState = atom<string>({
  key: 'currentViewState',
  default: CURRENT_VIEW_STATES.NONE,
});

export const adminPageAddProjectState = atom<Project>({
  key: 'addProjectState',
  default: {
    title: '',
    description: '',
    pl: [],
    dev: [],
    tester: [],
    issues: [],
  },
})
