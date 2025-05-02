"use client"

import { useState } from "react"; //useStateをインポート

export default function Counter() {
    const [count , setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
 //状態管理：export defaultは他のファイルでこの関数を呼び出しやすくする。次にconstが二つ。constで定数宣言がされて、その中にcountとsetCountの二つの要素が入った配列がある。useStateは関数。初期値として0を渡してる。この関数はcountとsetCountの二つを返す。
    return (
        <div>
            <p>現在のカウント：{count}</p>
            <button onClick={incrementCount}>カウントを増やす</button>
        </div>
    );
 //下の方はイベント処理：onClick（クリックされたら）でincrementCountという処理を実行する
}