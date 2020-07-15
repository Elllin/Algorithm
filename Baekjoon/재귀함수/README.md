# 팩토리얼
n 팩토리얼은 n!로 표현하며 1부터 n까지 정수를 곱하는 연산이다.
예) 5! => 1 * 2 * 3 * 4 * 5

## 팩토리얼의 사용 예
1. 사물의 순서를 정할 때 얼마나 많은 방법이 있는지, 어떤 것들을 조합할 때 얼마나 다양한 방법이 있는지
    - 예 : n개의 물건을 배열하는 방법은 몇 개나 될까?
    - 첫번째 물건은 n가지 두번째 물건은 n - 1가지 즉 n * (n-1) * (n-2) ... 2 * 1가지이다.
    - 하나씩 증가하면서 곱하는 것이 아니라 n부터 1까지 감소하면서 곱한다.

2. 여러 개 중에서 몇 개만 선택하는 경우의 수
    - 예 : n개의 티셔츠중 k개만 가져갈 수 있을때 고를 수 있는 경우의 수는?
    - n! / (k! * (n - k)!)


## 0!
0!은 1보다 크거나 같고 0보다 작거나 같은 모든 정수들의 곱이다.
그렇지만 그런 정수는 존재하지 않기 떄문에 곱셈의 항등원인 1과 같다고 정의한다
즉 0!의 값은 1이다. (n = 0일 때는 1이다.)

[참고]
[https://ko.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/the-factorial-function](https://ko.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/the-factorial-function)