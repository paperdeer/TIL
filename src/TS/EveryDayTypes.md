# 변수 타입

```tsx
변수 뒤에 :string :number 등의 형태로 사용 :string | number | boolean 등의 형태로도 사용 가능
배열의 타입을 지정 할 때는 number[] string[] 의 형태 또는 Array<number> Array<string>의 형태
반환 타입 표기는 매개변수 목록 뒤에 작성
```

# 옵셔널 프로퍼티

```tsx
프로퍼티 이름 뒤에 ?를 붙이면 된다.
function printName(obj: { first: string; last?: string }) {
  // ...
}의 형태라면
매개변수가 first만 들어와도 런타임 오류가 발생하지 않고 last에는 undefined를 얻게 된다.
```

# 타입 단언

```docker
Ts보다 내가 어떤값의 타입에 대한 정보를 더 잘 알 때 사용
```

### 예시

```tsx
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
또는;
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

const x = "hello" as number;
```

# Null 아님 단언 연산자(접미사 !)

```docker
TypeScript에서는 명시적인 검사를 하지 않고도 타입에서 null과 undefined를 제거할 수 있는 특별한
구문을 제공합니다. 표현식 뒤에 !를 작성하면 해당 값이 null 또는 undefined가 아니라고
타입 단언하는 것입니다.
```

x! : x가 undefined 또는 null이 아니라고 단언

# 열거형

```tsx
열거형은 TypeScript가 JavaScript에 추가하는 기능으로, 어떤 값이 _a value to be one of the
values belonging to a set of named constants_에 속한 값 중 하나일 수 있도록 제한하는 기능
그 사용법을 명확하게 파악하지 않았다면 실제 사용은 보류하는 것이 좋습니다.
```

## bigint

```tsx
ES2020 이후, 아주 큰 정수를 다루기 위한 원시 타입이 JavaScript에 추가되었습니다. 바로 bigint입니다.

// BigInt 함수를 통하여 bigint 값을 생성
const oneHundred: bigint = BigInt(100);

// 리터럴 구문을 통하여 bigint 값을 생성
const anotherHundred: bigint = 100n;
```

## symbol

```tsx
const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
This condition will always return 'false' since the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // 절대로 일어날 수 없습니다
}
```

never

```tsx
에러를 반환하거나 영원히 끝나지 않는 함수에는
function name():never{
   ~~
}
```

의 형태로 쓴다

# Interface에서 Generics사용하기

```tsx
interface Items<T> {
  list: T[];
}

const items: Items<string> = {
  list: ["a", "b", "c"],
};
```

# Type에서 Generics 사용하기

```tsx
type Items<T> = {
  list: T[];
};

const items: Items<string> = {
  list: ["a", "b", "c"],
};
```
