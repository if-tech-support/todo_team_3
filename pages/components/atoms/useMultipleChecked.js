import { useState } from "react";
import { useRecoilValue } from "recoil";
import { todosState } from "../../atoms/atom";

const useMultipleChecked = (ids) => {
  const todos = useRecoilValue(todosState);
  const [checked, setChecked] = useState([]);
  const toggleChecked = (target) => {
    // 既にチェックされている時はチェックを外す
    if (checked.includes(target)) {
      setChecked([...checked.filter((id) => id !== target)]);
    } else {
      //  チェックされていなければチェックする
      setChecked([...checked.concat([target])]);
    }
  };
  
  // 全選択＆解除ボタン用
  const toggleCheckAll = () => {
    if (checked.length === todos.length) {
      setChecked([]);
    } else {
      setChecked(ids);
    }};

  return {
    checked,
    toggleChecked,
    toggleCheckAll,
  };
};

export default useMultipleChecked;
