## typescript란

자바스크립트의 슈퍼셋 (superset)언어
자바스크립트를 기반으로 하여 확장 된 언어

따라서, 자바스크립트 기본 문법 + 코드 작성법 + 객체 사용법 등 그대로 사용

JS와 다르게 정적타입의 특징을 가짐 (JS는 동적 타입 언어 )

java 문법을 JS에서 사용한다고 이해하면 쉬운듯 ?
JAVA처럼 타입을 지정해주고 제네릭문법도 사용이 가능함
올바른 타입이 아니면 오류를 발생함

## 사용하는 이유

대규모 프로젝트 등 수행 시 타입으로 인한 오류 발생의 여지가 있음
런타임에 오류 원인을 찾을 필요 없이 코드 작성 시 또는 컴파일 단계에서 오류가 검증되어 미연에 방지하는 효과가 있음

## 리액트와 타입스크립트

리액트와 다르게 자바스크립트 라이브러리가 아님 >> 자바스크립트 기존 기능을 기반으로 새로운 기능을 만들거나 확장하지 않음 >> BUT JS 주요 문법보다 확장된 문법을 가짐

????

## 설치

특정 프로젝트 설치 시, 해당 프로젝트 경로로 이동하여 `npm i typescript`

전역으로 설치시 `npm i -g typescript`

### React project with typescript

```
npx create-reawct-app learning-typescript --template typescript
```

`--template`란
react-scripts@3.3.0+ 사용 가능하며. --template [template-name]으로 react app의 모든 기능과 함께 생성 될 프로젝트의 템플릿을 지정할 수 있다.

### 컴파일러 사용

`npm tsc`

`npm tsc [파일]` : 컴파일할 파일을 지정할 수 있음

## 타입

### 기본형

    let varName : type;
    varName = val;

    또는

    let varName : type = val;

null과 undefined는 위와 같은 방식으로 사용하지 않음

1.  number
2.  string
3.  boolean
4.  null
5.  undefined

6.  array

        let varName : type[];

7.  object

        let varName : {
            name : string;
            age : number;
        }

    동일 필드에 다른 타입을 사용하거나, 다른 필드를 입력하는 경우 오류가 발생함

        let varName : {
            name : string;
            age : number;
        }[];

    으로 선언하면 객체 배열로 사용할 수 있음

8.  function

    1.  매개변수 및 반환값의 타입

            function add(a,b) { return a + b }
            function add (a:number, b:number) { return a + b }

        이렇게 할 경우 반환 타입은 항상 number가 됨
        이를 통해 반환 값의 타입을 추론함
        매개변수 뿐 아니라 반환값의 타입도 고려해야 함

    2.  void 타입

        아무것도 반환하지 않는 경우 반환 타입은 void 가 됨

            function printSome(a : any) {
                console.log(a);
            }

9.  parameter

10. union

    값과 타입을 좀더 유연하게 정의할 수 있게 함

        let course : string | number = 'React -TypeScript';
        course = 'React';
        course = 10;

    둘다 사용이 가능함

        let userName : string | string[] ;

11. generic

        function newArry<T> (array : T[], value: T) {
            return [value, ...array]
        }

        const newww = newArry([1,2,3], -1) // [-1,1,2,3]

        newww[0].split(''); // number이므로 split 오류가 발생함

## 타입추론

let course = 'React - TypeScript';

위와 같이 변수를 생성하고 초기화하면 해당값의 자료형을 변수 타입으로 자동 설정 됨

위의 예제의 경우 'React - TypeScript'를 통해 course가 string 임을 추론함

let course : string = 'React - TypeScript'; 와 동일함

이렇듯 타입추론을 통해 타입을 지정하는 불필요한 작업을 최소화 하는 방식을 권장함

## 타입 별칭 Type Alias

- TypeScript에만 존재하는 기능

동일한 코드가 반복 될 경우 타입 별칭을 통해 코드를 간결하게 바꿀 수 있음

type Person = {
name : string;
age : number;
}

let prson : Person;

let peopel : Person[];
