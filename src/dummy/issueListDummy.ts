import { Issue } from '../shared/types/issue';
import { ISSUE_STATUS_STATE } from '../feature/issue/issueStatusConstants';
import assignedDevItem from '../feature/pl/components/AssignedDevItem';

export const issueListDummy: Issue[] = [
  {
    id: 0,
    title: '첫 번째 이슈, 두둥탁',
    description: '이 이슈는 미ㅏ얼;마ㅓㄴ;이ㅓㅏㄹ;ㅣㅏㅓㅁㄴ',
    status: 'NEW',
    priority: 'MAJOR',
    reporter: {
        id: 12,
        name: '민수수',
        password: 'garbage',
        email: 'alskdjemail',
        role: 'ROLE_TESTER',
    },
    devs: [
      {
        id: 12,
        name: '민수수',
        password: 'garbage',
        email: 'alskdjemail',
        role: 'ROLE_DEVELOPER',
      },
    ],
    assignedDev: {
      id: 0,
      name: '',
      password: '',
      email: '',
      role: 'ROLE_DEVELOPER',
    },
    comments: [
      {
        author: '댓글 작성자 1',
        text: '이슈이슈이슈',
        createdAt: '2024.05.25. pm 10:10',
      },
      {
        author: '댓글 작성자 2',
        text: '빨리 고쳐라~',
        createdAt: '2024.05.24. pm 11:11',
      },
    ]
  },
  {
    id: 1,
    title: '두 번째 이슈, 두둥탁',
    description: '이 이슈는 미ㅏ얼;마ㅓㄴ;이ㅓㅏㄹ;ㅣㅏㅓㅁㄴ',
    status: 'ASSIGNED',
    priority: 'BLOCKER',
    reporter: {
      id: 12,
      name: '민수수',
      password: 'garbage',
      email: 'alskdjemail',
      role: 'ROLE_TESTER',
    },
    devs: [
      {
        id: 12,
        name: '민수수',
        password: 'garbage',
        email: 'alskdjemail',
        role: 'ROLE_DEVELOPER',
      },
    ],
    assignedDev: {
      id: 0,
      name: '',
      password: '',
      email: '',
      role: 'ROLE_DEVELOPER',
    },
    comments: [
      {
        author: '댓글 작성자 1',
        text: '이슈이슈이슈',
        createdAt: '2024.05.25. pm 10:10',
      },
      {
        author: '댓글 작성자 2',
        text: '빨리 고쳐라~',
        createdAt: '2024.05.24. pm 11:11',
      },
    ]
  },
  {
    id: 2,
    title: '세 번째, 이슈입니다',
    description: '이 이슈는 미ㅏ얼;마ㅓㄴ;이ㅓㅏㄹ;ㅣㅏㅓㅁㄴ',
    status: 'RESOLVED',
    priority: 'TRIVIAL',
    reporter: {
      id: 12,
      name: '민수수',
      password: 'garbage',
      email: 'alskdjemail',
      role: 'ROLE_TESTER',
    },
    devs: [
      {
        id: 12,
        name: '민수수',
        password: 'garbage',
        email: 'alskdjemail',
        role: 'ROLE_DEVELOPER',
      },
    ],
    assignedDev: {
      id: 0,
      name: '',
      password: '',
      email: '',
      role: 'ROLE_DEVELOPER',
    },
    comments: [
      {
        author: '댓글 작성자 1',
        text: '이슈이슈이슈',
        createdAt: '2024.05.25. pm 10:10',
      },
      {
        author: '댓글 작성자 2',
        text: '빨리 고쳐라~',
        createdAt: '2024.05.24. pm 11:11',
      },
    ],
  },
];
