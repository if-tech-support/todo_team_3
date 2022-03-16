import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const todosState = atom({
  key:"todos",
  //ダミーデータ
  default:[
    {
      id: 1,
      title: 'test sample 1',
      text: '最近、忙しくてアニメを見る時間がないのでここらでひたすらアニメを見る時間が必要だと思う。',
      status: '着手前',
      priority: '高',
      createDate: '2022-2-1',
      updateDate: '2022-3-1',
    },
    {
      id: 2,
      title: 'test sample 2',
      text: '眠むたなっても大丈夫なようにmosterと眠眠打破を用意する。',
      status: '進行中',
      priority: '中',
      createDate: '2022-2-10',
      updateDate: '2022-3-10',
    },
    {
      id: 3,
      title: 'test sample 3',
      text: 'もし、寝落ちしてしまったら、もう一度初めから見直す。',
      status: '完了',
      priority: '低',
      createDate: '2022-2-20',
      updateDate: '2022-3-4',
    }
  ],
})

export const idState = atom({
  key:"id",
  default: 4,
})

