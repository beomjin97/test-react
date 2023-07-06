TDD (Test-Driven-Development)

- 코드 작성 전에 test코드를 작성
- 테스트에 따라서 코드를 작성
- red-green testing
  - 코드 작성 전에는 테스트가 실패하게
  - 코드 작성 후에는 테스트 통과하도록
- 테스트 코드가 코드 작성의 일부분으로 느끼도록
- 테스트 코드는 맨 마지막에 하는 따분한 어떤 것이 아님

<br>

React-testing-library

- 테스트를 위한 vitural DOM 생성
- 브라우저 없어도 됨

Jest

- test code runner

<br>

Unit-test

- 고립된 하나의 컴포넌트 테스트
- 실제 사용자가 소프트웨어랑 상호작용하는 것보다는 코드 그 자체를 테스트하는 것에 가까움
- 최대한 고립시켜야 하기때문에 의존성들을 mocking해서 사용

E2E test

- 실제 브라우저와 서버를 사용해서 test (Cypress 등)

Integration test

- 많은 유닛들이 얼마나 잘 협력하는가 테스트

Functional test

- 소프트웨어의 특정 기능 테스트
- 실제 사용자가 소프트웨어랑 잘 상호작용하는 것이 중요함

<br>

---

<br>

요소를 찾는 접근 우선순위

- https://testing-library.com/docs/guide-which-query/

역할의 정의

- https://www.w3.org/TR/wai-aria/#role_definitions
