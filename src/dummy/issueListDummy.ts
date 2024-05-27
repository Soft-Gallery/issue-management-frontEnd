import { Issue } from '../shared/types/issue';
import { ISSUE_STATUS_STATE } from '../recoil/issue/constants/constants';

export const issueListDummy: Issue[] = [
  {
    title: '첫 번째 이슈, 두둥탁',
    description: '이 이슈는 미ㅏ얼;마ㅓㄴ;이ㅓㅏㄹ;ㅣㅏㅓㅁㄴ',
    status: ISSUE_STATUS_STATE.NEW,
    priority: 'MAJOR',
    reporter: 'tester 민수',
    assignee: [
      {
        id: 12,
        name: '민수수',
        password: 'garbage',
        email: 'alskdjemail',
        role: 'ROLE_DEV',
      },
    ],
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
  {
    title: '두 번째 이슈, 문제 발생',
    description: '이슈 설명이 들어갑니다. 문제의 상세 설명입니다.',
    status: ISSUE_STATUS_STATE.IN_PROGRESS,
    priority: 'CRITICAL',
    reporter: 'tester 철수',
    assignee: [
      {
        id: 13,
        name: '영희',
        password: 'securepassword',
        email: 'younghee@example.com',
        role: 'ROLE_DEV',
      },
    ],
    comments: [
      {
        author: '댓글 작성자 3',
        text: '긴급 수정 필요!',
        createdAt: '2024.05.26. am 09:00',
      },
    ],
  },
  {
    title: '세 번째 이슈, 기능 개선',
    description: '기능을 개선해야 합니다. 여기에는 개선해야 할 사항이 적혀있습니다.',
    status: ISSUE_STATUS_STATE.RESOLVED,
    priority: 'MINOR',
    reporter: 'tester 유리',
    assignee: [
      {
        id: 14,
        name: '철수',
        password: 'anotherpassword',
        email: 'chulsoo@example.com',
        role: 'ROLE_DEV',
      },
    ],
    comments: [
      {
        author: '댓글 작성자 4',
        text: '기능이 잘 작동합니다.',
        createdAt: '2024.05.27. pm 02:30',
      },
    ],
  },
  {
    title: '네 번째 이슈, 성능 문제',
    description: '성능에 문제가 있습니다. 시스템이 느립니다.',
    status: ISSUE_STATUS_STATE.IN_PROGRESS,
    priority: 'CRITICAL',
    reporter: 'tester 영희',
    assignee: [
      {
        id: 15,
        name: '유리',
        password: 'mypassword',
        email: 'yuri@example.com',
        role: 'ROLE_DEV',
      },
    ],
    comments: [
      {
        author: '댓글 작성자 5',
        text: '최대한 빨리 해결해주세요.',
        createdAt: '2024.05.28. am 11:45',
      },
    ],
  },
  {
    title: '다섯 번째 이슈, UI 버그',
    description: 'UI에 버그가 있습니다. 버튼이 정상적으로 작동하지 않습니다.',
    status: ISSUE_STATUS_STATE.NEW,
    priority: 'BLOCKER',
    reporter: 'tester 민호',
    assignee: [
      {
        id: 16,
        name: '민호',
        password: 'superpassword',
        email: 'minho@example.com',
        role: 'ROLE_DEV',
      },
    ],
    comments: [
      {
        author: '댓글 작성자 6',
        text: '버그가 심각합니다.',
        createdAt: '2024.05.28. pm 01:15',
      },
      {
        author: '댓글 작성자 7',
        text: '빠른 수정 부탁드립니다.',
        createdAt: '2024.05.28. pm 03:20',
      },
    ],
  },
];
