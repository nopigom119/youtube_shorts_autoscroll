# Contributing to YouTube Shorts Auto Scroll

Thank you for your interest in contributing to YouTube Shorts Auto Scroll (YouTube Shorts 자동 스크롤)! All contributions are welcome.
We appreciate any form of contribution, be it bug fixes, feature additions, documentation improvements, or helping with testing.

## How to Contribute

### 1. Reporting Issues

* Please register new feature suggestions or bug reports on the [YouTube Shorts Auto Scroll Issues page](https://github.com/nopigom119/youtube_shorts_autoscroll/issues).
* Make sure the issue title is concise and clear.
* Provide detailed descriptions of the problem or suggestion in the issue content. Please include:
    * Steps to reproduce the bug.
    * Expected behavior and actual behavior.
    * Your operating system and version (e.g., Windows 11, macOS Sonoma).
    * Your browser name and version (e.g., Chrome 125).
    * The version of the YouTube Shorts Auto Scroll extension you are using.
    * Screenshots or error messages if applicable.

### 2. Contributing Code

1.  Fork the [YouTube Shorts Auto Scroll repository](https://github.com/nopigom119/youtube_shorts_autoscroll).
2.  Create a new branch in your forked repository for your contribution.
    * Branch names should be descriptive. (e.g., `feature/add-speed-control`, `bugfix/fix-scroll-fail-on-live-45`)
3.  Write your code. Please adhere to modern JavaScript coding standards and maintain a consistent style with the existing code.
4.  Test your changes thoroughly, especially with different browser versions and potential variations in YouTube's page structure. If adding new functionality, ensure it does not negatively impact browser performance.
5.  Write concise and clear commit messages. (e.g., `feat: Add option to adjust scroll timing`, `fix: Prevent scrolling on Shorts with live streams (issue #45)`)
6.  Submit a [pull request](https://github.com/nopigom119/youtube_shorts_autoscroll/pulls) to the `main` branch of the original repository.
    * Clearly describe the changes you have made in your pull request.
    * Link to any relevant issues.

### 3. Contributing to Documentation

* You can contribute to improving documentation, such as the README file, comments within the code, code explanations, usage examples, or tips for troubleshooting.
* Make sure the documentation is clear, concise, and easy to understand.

## Code Writing Rules

* Follow modern JavaScript (ES6+) best practices.
* Write clean, readable, and maintainable code.
* Add comments to your code where necessary to explain complex logic.
* Be mindful of how you interact with the DOM and Chrome Extension APIs. Ensure that any event listeners or observers are properly managed to prevent memory leaks. User data should never be collected or handled beyond what is necessary for the extension's core function.

## Commit Message Rules

* Write concise and clear commit messages.
* A good commit message should briefly describe the change.
* Consider using [Conventional Commits](https://www.conventionalcommits.org/) for a structured approach (e.g., `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`).

## Pull Request Procedure

1.  Ensure your code adheres to the project's coding standards and has been tested.
2.  Create a pull request from your feature branch to the `main` branch of the `nopigom119/youtube_shorts_autoscroll` repository.
3.  Provide a clear description of the changes in the pull request.
4.  Be prepared to discuss your changes and make further modifications if requested by the maintainers.

## Inquiries

* For inquiries or discussions about contributing to YouTube Shorts Auto Scroll, please use the [Issues page](https://github.com/nopigom119/youtube_shorts_autoscroll/issues).

## License

By contributing to YouTube Shorts Auto Scroll, you agree that your contributions will be licensed under its CC BY-NC-SA 4.0 License.

---

# YouTube Shorts Auto Scroll에 기여하기

YouTube Shorts Auto Scroll (YouTube Shorts 자동 스크롤)에 관심을 가져주셔서 감사합니다! 모든 기여를 환영합니다.
버그 수정, 기능 추가, 문서 개선, 테스트 지원 등 어떤 형태의 기여든 감사하게 생각합니다.

## 기여 방법

### 1. 이슈 등록

* 새로운 기능 제안이나 버그 보고는 [YouTube Shorts Auto Scroll 이슈 페이지](https://github.com/nopigom119/youtube_shorts_autoscroll/issues)에 등록해주세요.
* 이슈 제목은 간결하고 명확하게 작성해주세요.
* 이슈 내용에는 문제 상황이나 제안 내용을 상세하게 설명해주세요. 다음 정보를 포함해주세요:
    * 버그 재현 단계.
    * 예상되는 동작과 실제 동작.
    * 사용 중인 운영체제 및 버전 (예: Windows 11, macOS Sonoma).
    * 사용 중인 브라우저 이름 및 버전 (예: Chrome 125).
    * 사용 중인 YouTube Shorts Auto Scroll 확장 프로그램 버전.
    * 해당되는 경우 스크린샷 또는 오류 메시지.

### 2. 코드 기여

1.  [YouTube Shorts Auto Scroll 저장소](https://github.com/nopigom119/youtube_shorts_autoscroll)를 포크해주세요.
2.  포크한 저장소에서 기여를 위한 새로운 브랜치를 만들어주세요.
    * 브랜치 이름은 설명적으로 작성해주세요. (예: `feature/속도조절-기능추가`, `bugfix/라이브영상-스크롤-오류-45-수정`)
3.  코드를 작성해주세요. 최신 자바스크립트 코딩 표준을 준수하고 기존 코드와 일관된 스타일을 유지해주세요.
4.  특히 다양한 브라우저 버전 및 YouTube 페이지 구조의 잠재적 변화에 대해 변경 사항을 철저히 테스트해주세요. 새로운 기능을 추가하는 경우 브라우저 성능에 부정적인 영향을 미치지 않는지 확인해주세요.
5.  간결하고 명확한 커밋 메시지를 작성해주세요. (예: `feat: 스크롤 타이밍 조절 옵션 추가`, `fix: 라이브 스트리밍 Shorts 스크롤 방지 (이슈 #45)`)
6.  원본 저장소의 `main` 브랜치로 [풀 리퀘스트](https://github.com/nopigom119/youtube_shorts_autoscroll/pulls)를 보내주세요.
    * 풀 리퀘스트에 변경한 내용을 명확하게 설명해주세요.
    * 관련된 이슈가 있다면 링크해주세요.

### 3. 문서 기여

* README 파일, 코드 내 주석, 코드 설명, 사용 예시, 문제 해결 팁 등 문서 개선에 기여해주실 수 있습니다.
* 문서 내용은 명확하고 간결하며 이해하기 쉽게 작성해주세요.

## 코드 작성 규칙

* 최신 JavaScript (ES6+) 모범 사례를 따라주세요.
* 깨끗하고 읽기 쉬우며 유지보수 가능한 코드를 작성해주세요.
* 복잡한 로직을 설명하기 위해 필요한 경우 코드에 주석을 추가해주세요.
* DOM 및 Chrome 확장 프로그램 API와 상호 작용하는 방식에 유의해주세요. 메모리 누수를 방지하기 위해 모든 이벤트 리스너나 옵저버가 올바르게 관리되는지 확인해야 합니다. 사용자 데이터는 확장 프로그램의 핵심 기능에 필요한 범위를 넘어 수집되거나 처리되어서는 안 됩니다.

## 커밋 메시지 규칙

* 간결하고 명확한 커밋 메시지를 작성해주세요.
* 좋은 커밋 메시지는 변경 사항을 간략하게 설명해야 합니다.
* 구조화된 접근 방식을 위해 [Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/) 사용을 고려해보세요 (예: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`).

## 풀 리퀘스트 절차

1.  코드가 프로젝트의 코딩 표준을 준수하고 테스트를 완료했는지 확인해주세요.
2.  기능 브랜치에서 `nopigom119/youtube_shorts_autoscroll` 저장소의 `main` 브랜치로 풀 리퀘스트를 생성해주세요.
3.  풀 리퀘스트에 변경 사항에 대한 명확한 설명을 제공해주세요.
4.  관리자의 요청이 있을 경우 변경 사항에 대해 논의하고 추가 수정을 할 준비가 되어 있어야 합니다.

## 문의

* YouTube Shorts Auto Scroll 기여에 대한 문의나 논의는 [이슈 페이지](https://github.com/nopigom119/youtube_shorts_autoscroll/issues)를 이용해주세요.

## 라이선스

YouTube Shorts Auto Scroll에 기여함으로써 귀하의 기여물은 해당 프로젝트의 CC BY-NC-SA 4.0 라이선스에 따라 사용이 허가됨에 동의하는 것으로 간주됩니다.
