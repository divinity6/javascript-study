/**
 * 프로그람 설명문서 주석
 * 2022.04. 13 수업
 *
 *           ===== 바이너리 데이터 처리 =====
 *
 *      - 지금부터 4개 섹션으로 나누어
 *      --> 바이너리( Binary ) 데이터 처리를 다룬다
 *
 *      - 4개 섹션
 *      --> 비트 연산자
 *      --> ArrayBuffer
 *      --> TypedArray
 *      --> DataView
 *
 *      - 비트 연산자는 ES5 범위이지만
 *      --> 비기너에게 어려운 점도 있고
 *      --> 바이너리 처리와 관련이 있어 본 과정에서 다룬다
 *
 *
 *          ===== 비트, 바이트 =====
 *
 *      - 값 표현의 기본 단위는 바이트( Byte )
 *      --> 1 바이트는 8비트( Bit )이며
 *      --> 1 비트 값은 0 아니면 1
 *
 *      - 이것이 1바이트이다
 *      -----------------------------------------------------------
 *      - 비트            7   6   5   4   3   2   1   0
 *      - On/Off         0   0   0   0   0   0   1   1
 *      -----------------------------------------------------------
 *      ----> 각 비트의 값은 1 아니면 0 이다
 *      ----> 0 과 1 이 컴퓨터에서 데이터를 저장하는 기본 값이다.
 *      ----> 0 과 1 을 조합해서 값을 사용하게 되는 것이다.
 *
 *      - 비트 연산은 연산 속도가 빠르다
 *
 *      - 정수 연산만 가능, 소수 연산은 불가능하다
 *
 *      - 자바스크립트의 비트 연산 범위
 *      --> 4 바이트, 32 비트
 *      --> -2의 32 승 ~ 2의 32 승 - 1
 *
 *      ----> 자바스크립트는 64 비트 연산을 한다.
 *            그런데 64 비트에는 소수도 포함되어 있고, 지수도 포함되어 있다.
 */
console.log("=====================================");
// console.log 사용
const { log } = window.console;
/**
 *           ===== 2 진수 연산 =====
 *
 *      - 아래는 사인 부호가 없는 형태이다
 *      --> 비트 값은 비트가 1일 때의 값, 2n 승
 *      --> 누적 값은 0번 비트에서
 *          해당 비트까지 전부 1일 때의 값
 *
 *      -----------------------------------------------------------
 *      - 비트            7   6   5   4   3   2   1   0
 *      - On/Off         1   1   1   1   1   1   1   1
 *      - 비트 값         128 64  32  16   8   4   2   1
 *      - 누적 값         255 127 63  31   15  7   3   1
 *      -----------------------------------------------------------
 *
 *      ----> 비트값은 비트가 1일때의 값이다
 *            예) 0 번 비트가 1이면 값은 1이다
 *               반면 7번 비트가 1이면 값은 128 이다
 *               또한, 5번 비트의 값이 1이면 그것은 32 가 된다
 *
 *      ----> 누적 값은 0 번 비트에서 해당 비트까지 전부 1일때의 값이다
 *            예) 0 번 비트에서 7 번 비트까지 전부 1이면
 *               그 값은 255라는 것이다.
 *               또한 0번 비트와 1번 비트만 1이다!
 *               그럼 0번 비트 값과 1번 비트값을 더해 3이 되는 것이다.
 *
 *      ----> 11 의 1바이트 값 - 00001011
 *
 *
 *
 *          ===== 사인 비트 =====
 *
 *      - 사인( Sign )비트란
 *      --> 양수, 음수 부호를 나타내는 비트이다
 *      --> 7 번 비트가 0이면 양수이고, 1이면 음수
 *      --> 4 바이트는 31번 비트가 사인 비트
 *      --> MSB : Most Significant Bit
 *
 *      - 양수 표현 형태와 값
 *      --> 7 번(MSB) 비트가 0이며, 최댓값은 127
 *
 *      -----------------------------------------------------------
 *      - 비트            7   6   5   4   3   2   1   0
 *      - On/Off         0   1   1   1   1   1   1   1
 *      - 비트 값          0  64  32  16   8   4   2   1
 *      - 누적 값         127 127 63  31   15  7   3   1
 *      -----------------------------------------------------------
 *      ----> 지금 이것은 1바이트이다.
 *            4 바이트를 사용하게 되면, 31번이 사인비트이고,
 *            0 에서 30번까지를 값으로 사용하게 된다
 *            가장 왼쪽을 (MSB) 비트라고 부름.
 *
 *
 *
 *
 *         ===== 음수 표현 =====
 *
 *      - MSB 인 7번 비트 값이 1이다
 *
 *      - 누적 값은 6 번 비트의 누적 값 -127에
 *        -1을 더한다
 *
 *      - 1 바이트 값 표현 범위
 *      --> 사인을 사용하지 않음 : 255
 *      --> 사인 사용 : -128 ~ +127
 *      ----> 예) css 에서 color 를 표현할때 255를 사용한다
 *               그것은 음수가 필요없기 때문에 8비트 모두 사용
 *               그러나 숫자 1은 +1 이 될 수도 있고 -1이 될 수도 있다.
 *
 *               그럴때는 사인(MSB) 을사용해야 한다
 *               음수 -128 에서 양수 127 까지 사용가능
 *
 *      -----------------------------------------------------------
 *      - 비트            7   6   5   4   3   2   1   0
 *      - On/Off         1   1   1   1   1   1   1   1
 *      - 비트 값          1  64  32  16   8   4   2   1
 *      - 누적 값        -128-127-63 -31  -15 -7  -3  -1
 *      -----------------------------------------------------------
 */
{
    log('------------ async/await ---------------');
    debugger;
}