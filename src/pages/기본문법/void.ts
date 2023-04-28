/*
    void : 값이 없음
*/

// undefined는 됨 그러나 void와 undefined는 다르다
function voidEx(): void {
  return undefined;
}

function voidEx2(callback: () => void): void {} // 여기서 void는 리턴값을 사용하지 않겠다 라는 뜻
voidEx2(() => {
  return "123";
});

const valueEx = voidEx2(() => {
  return "123";
});
// 때문에 valueEx는 123이 아니고 void가 됨

interface VoidEx {
  fuc: () => void; // 여기서 void는 리턴값을 사용하지 않겠다 라는 뜻
}

const VOIDEX: VoidEx = {
  fuc() {
    return "abc";
  },
};

/*
  매개 변수에서 void : 사용하지 않겠다
  반환형 void : 없다.
  메서드의 void : 사용하지 않겠다.
*/
