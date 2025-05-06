// Q1 배열 다루기
console.log("Q1 배열다루기");
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [1, [2, 3, [4, 5, 6], 7], [8, 9]];

// Q1-1. arr에서 3출력 (Hint:인덱싱은 0부터 시작!)
console.log(arr[2]);
// Q1-2. arr에서 [1,2,3]출력 (Hint:Array.js에서 slice함수를 사용해볼까요?)
console.log(arr.slice(0, 3));
// Q1-3. arr2에서 [8, 9]출력 (Hint:배열 안에 원소가 배열일 뿐!)
console.log(arr2[2]);
// Q1-4. arr2에서 [4, 5, 6]출력 (Hint:원소안 원소!)
console.log(arr2[1][2]);
console.log("======= 문제 구분선 =======");

// Q2
console.log("Q2 객체(JSON)다루기");
const obj = {
  name: "멋쨍이사자",
  age: 20,
  isPerson: true,
  hobby: ["JS 공부하기", "프로젝트하기", "코드 리뷰받기", "잠자기"],
  gpa: {
    Computer: "A+",
    Math: "A-",
    English: "B+",
  },
  friends: [
    {
      name: "아기사자",
      age: 21,
      lecture: [
        ["프로그래밍 기초", "어드벤처디자인"],
        ["웹프로그래밍", "멋사 기디 강좌", "멋사 프론트 강좌"],
      ],
    }, //아기사자 닫기
    {
      name: "코딩사자",
      age: 22,
      lecture: [
        ["산업시스템의 이해", "어드벤처디자인"],
        ["응용통계학", "정치학개론", "비즈니스디자인"],
      ],
    }, //코딩사자 닫기
  ], //friends 닫기
};

// Q2-1. 멋쨍이사자의 나이를 obj객체로부터 출력하기 (Hint:obj.~~)
console.log(obj.age);
// Q2-2. 멋쨍이사자의 Computer 학점(A+)을 obj객체로부터 출력하기
console.log(obj.gpa.Computer);
// Q2-3. 아기사자 나이(21)를 obj객체로부터 출력하기 (Hint:obj안에 배열)
console.log(obj.friends[0].age);
// Q2-4. 코딩사자가 수강한 강의 중에서 "비즈니스디자인"를 obj객체로부터 출력하기
console.log(obj.friends[1].lecture[1][2]);
console.log("======= 문제 구분선 =======");

// Q3 map함수, filter함수 활용 (Hint: map, filter함수 구글링!)
console.log("Q3 map함수, filter함수 문제");

const arr3 = [1, 2, 3, 4, 5, 6];
// Q3-1. map함수와 arr3을 활용하여 [10,20,30,40,50,60]을 출력하시오.
const mapArr = arr3.map((num) => num * 10);
console.log(mapArr);
// Q3-2. filter함수와 arr3을 활용하여 [1,3,5]출력하기 (Hint:홀수와 짝수 구분은 "%2"를 활용)
const filterArr = arr3.filter((num) => num % 2 === 1);
console.log(filterArr);
console.log("======= 문제 구분선 =======");

// Q4 함수 & 논리연산자 문제
console.log("Q4 함수 & 조건문 문제");
/*
[문제]
윤년의 조건은 다음과 같다.
1. 연수가 4로 나누어 떨어지는 해는 윤년임
2. 100으로 나누어 떨어지는 해는 윤년이 아님
3. 400으로 나누어 떨어지는 해는 윤년임
인자로 연도를 받으면, 해당 연도가 윤년인지 아닌지 출력하는 isLeap함수를 만들어라.

[출력 예시]
console.log(isLeap(2020));  -> 윤년이 맞습니다.
console.log(isLeap(2021));  -> 윤년이 아닙니다.
*/
const isLeap = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return "윤년이 맞습니다.";
  } else {
    return "윤년이 아닙니다.";
  }
};

console.log(isLeap(2020));
console.log(isLeap(2021));

console.log("======= 문제 구분선 =======");

// Q5 반복문 연습1
console.log("Q5 반복문 연습문제1");
/*
다음을 출력하시오
*
**
***
****
*****
(Hint:for문 or while문 사용 + console.log("*")사용)
*/

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

console.log("======= 문제 구분선 =======");

// Q6 반복문 연습2
console.log("Q6 반복문 연습문제2");
/*
다음을 출력하시오
    *
   ** 
  ***
 ****
*****     
(Hint:console.log(" ")로 빈칸 표현)
*/

for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(i);
  console.log(spaces + stars);
}

console.log("======= 문제 구분선 =======");

// Q7 반복문 연습3
console.log("Q7 반복문 연습문제3");
/*
다음을 출력하시오
    *       4b1*   즉 2n-1
   ***      3b3*
  *****     2b5* 
 *******    1b7*
*********   0b9*
(Hint:이중for문 활용)
*/

for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}

console.log("고생하셨습니다!!");

// viewport
const widthSpan = document.getElementById("width");

function updateViewporterWidth() {
  widthSpan.textContent = window.innerWidth;
}

window.addEventListener("resize", updateViewporterWidth);
window.addEventListener("load", updateViewporterWidth);
