import { atom } from 'recoil';
import { ADD_PROJECT_STATE, CURRENT_VIEW_STATES } from './constants/constants';
import { Project } from '../../shared/types/project';
export const adminPageViewState = atom<string>({
  key: 'currentViewState',
  default: CURRENT_VIEW_STATES.VIEW_PROJECTS,
});

export const adminPageAddProjectState = atom<Project>({
  key: 'addProjectState',
  default: ADD_PROJECT_STATE,
})
