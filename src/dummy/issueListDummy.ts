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
    ]
  },

]