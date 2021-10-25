# Generic Functions(제네릭 함수)

```tsx
function firstElement(arr: any[]) {
  return arr[0];
}
//위 함수는 제 역학을 하지만 반환유형이 any 임. 함수가 배열 요소의 유형을 반환하도록 하면 더 좋음

//아래 함수는 함수가 배열 요소의 유형을 반환하도록 한 함수임
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}

//Ts에서 generic은 두 값간의 대응 관계를 설명할 때 사용됨. 함수 시그니쳐에서 유형 매개변수를 선언하여
//이를 수행함.

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
// 이런식으로 배열 요소의 유형대로 반환됨.
```

# Inference(추론)

```tsx
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}
//위 함수에서는 Type을 지정해 줄 필요가 없다.
//Type은 Ts에 의해 자동으로 추론되고 선택되었습니다.
```

# Constraints(제약)

```tsx
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length > b.length) return a;
  else return b;
}
// 이 함수는 숫자인 length 속성이 필요합니다. extends 절을 사용하면 유형 매개변수를 해당
// 유형으로 제한합니다.
```

# Working with Constrained Values(제한된 값 작업)

```tsx
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };
  }
}
// 위 함수는 멀쩡한 것처럼 보일 수 있지만, 문제는 제약 조건과 일치하는 일부 개체가 아니라 전달된 것과
// 동일한 종류의 개체를 반환한다고 약속한다.
```

# Specifying Type Arguments(유형 인수 지정)

```tsx
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr.concat(arr2);
}
// Ts는 일반적으로 일반호출에서 의도한 형식 인수를 유추할 수 있지만 항상 그런것은 아니다.

const arr = combine([1, 2, 3], ["hello"]);
// 일반적으로 일치하지 않는 배열을 이 함수를 호출하려면 오류가 뜬다.

const arr = combine<string | number>([1, 2, 3], ["hello"]);
// 하지만 이렇게 유형을 수동으로 지정할 수 있다.
```
