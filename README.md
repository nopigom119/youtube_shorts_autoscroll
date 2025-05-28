# YouTube Shorts Auto Scroll

Automatically scrolls to the next YouTube Short when the current one finishes, enabling a seamless, hands-free viewing experience.

## Overview

This Chrome extension enhances your YouTube Shorts viewing experience by automatically advancing to the next video. No more manual scrolling needed when you're engrossed in a series of Shorts! It provides a simple toggle switch in the extension popup to enable or disable the auto-scroll feature at any time.

## Features

* **Automatic Scrolling:** Automatically scrolls to the next Short when the current video is about to end.
* **Toggle On/Off:** Easily enable or disable the auto-scroll feature via a switch in the extension's popup.
* **SPA Support:** Works seamlessly even when navigating within YouTube (e.g., from the YouTube homepage to Shorts) without requiring a page refresh.
* **State Persistence:** Remembers your on/off preference even after closing and reopening the browser.
* **Lightweight:** Designed to be unobtrusive and efficient.

## How to Install and Use

There are two main ways to install this extension:

**A. From the Chrome Web Store (Recommended - *Link to be added once published*)**

1.  (Once published) Go to the YouTube Shorts Auto Scroll page on the Chrome Web Store.
2.  Click "Add to Chrome."
3.  Confirm the installation.
4.  The extension icon will appear in your browser's toolbar. Click it to open the popup and toggle the auto-scroll feature.

**B. Manual Installation (For development or direct use from source)**

1.  **Download the Source Code:**
    * Go to the GitHub repository: <https://github.com/nopigom119/youtube_shorts_autoscroll>
    * Click on "Code" and then "Download ZIP".
    * Extract the ZIP file to a folder on your computer.
2.  **Load the Extension in Chrome:**
    * Open Google Chrome and navigate to `chrome://extensions`.
    * Enable "Developer mode" using the toggle switch in the top-right corner.
    * Click on the "Load unpacked" button.
    * Select the folder where you extracted the extension files (the folder containing `manifest.json`).
3.  **Using the Extension:**
    * The "YouTube Shorts Auto Scroll" extension icon will appear in your browser's toolbar.
    * Click the icon to open a small popup.
    * Use the toggle switch in the popup to enable or disable the auto-scrolling feature.
    * When enabled, navigate to YouTube Shorts. The extension will automatically scroll to the next Short as the current one finishes.

## Permissions Explained

This extension requires the following permissions:

* `storage`: Used to save your preference for whether auto-scroll is enabled or disabled, so it persists across browser sessions.
* `scripting`: Needed to inject the `content.js` script into YouTube pages to enable the auto-scrolling functionality.
* `webNavigation`: Used to detect navigation to YouTube Shorts pages, especially in a Single Page Application (SPA) context like YouTube, ensuring the `content.js` script is correctly injected when you navigate to Shorts.
* `host_permissions` (for `https://*.youtube.com/*`): Allows the extension to run on YouTube pages.

## License

This program is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)**.

* **Attribution:** You must give appropriate credit, provide a link to the license, and indicate if changes were made.
* **Non-Commercial Use:** You may not use this program for commercial purposes.
* **Modification Allowed:** You can modify this program or create derivative works.
* **Same Conditions for Change Permission:** If you modify or create derivative works of this program, you must distribute your contributions under the same license as the original.

You can check the license details on the Creative Commons website: <https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en>

## Contact

Developer: nopigom119
Email: [rycbabd@gmail.com](mailto:rycbabd@gmail.com)
Project Link: <https://github.com/nopigom119/youtube_shorts_autoscroll>

---

# YouTube Shorts 자동 스크롤

현재 시청 중인 YouTube Shorts 영상이 끝나면 다음 영상으로 자동으로 스크롤하여, 편리하게 연속 시청할 수 있도록 도와주는 크롬 확장 프로그램입니다.

## 개요

이 크롬 확장 프로그램은 현재 영상이 끝날 때 다음 영상으로 자동으로 이동하여 YouTube Shorts 시청 환경을 개선합니다. Shorts 영상에 몰입해 있을 때 더 이상 직접 스크롤할 필요가 없습니다! 확장 프로그램 팝업의 간단한 토글 스위치를 통해 언제든지 자동 스크롤 기능을 활성화하거나 비활성화할 수 있습니다.

## 주요 기능

* **자동 스크롤:** 현재 비디오가 거의 끝나갈 때 다음 Short로 자동으로 스크롤합니다.
* **토글 기능:** 확장 프로그램 팝업의 스위치를 통해 자동 스크롤 기능을 쉽게 켜고 끌 수 있습니다.
* **SPA 지원:** 페이지 새로고침 없이 YouTube 내에서 다른 페이지(예: YouTube 홈페이지 → Shorts)로 이동하는 경우에도 원활하게 작동합니다.
* **상태 유지:** 브라우저를 닫았다가 다시 열어도 켜짐/꺼짐 설정을 기억합니다.
* **가벼운 성능:** 눈에 띄지 않고 효율적으로 작동하도록 설계되었습니다.

## 설치 및 사용 방법

이 확장 프로그램을 설치하는 방법에는 두 가지가 있습니다.

**A. 크롬 웹 스토어에서 설치 (권장 - *게시 후 링크 추가 예정*)**

1.  (게시 후) 크롬 웹 스토어의 'YouTube Shorts 자동 스크롤' 페이지로 이동합니다.
2.  "Chrome에 추가"를 클릭합니다.
3.  설치를 확인합니다.
4.  브라우저 툴바에 확장 프로그램 아이콘이 나타납니다. 아이콘을 클릭하여 팝업을 열고 자동 스크롤 기능을 켜거나 끌 수 있습니다.

**B. 수동 설치 (개발 또는 소스에서 직접 사용)**

1.  **소스 코드 다운로드:**
    * GitHub 저장소로 이동합니다: <https://github.com/nopigom119/youtube_shorts_autoscroll>
    * "Code"를 클릭한 다음 "Download ZIP"을 클릭합니다.
    * ZIP 파일의 압축을 컴퓨터의 특정 폴더에 해제합니다.
2.  **Chrome에 확장 프로그램 로드:**
    * Google Chrome을 열고 `chrome://extensions` 주소로 이동합니다.
    * 오른쪽 상단의 토글 스위치를 사용하여 "개발자 모드"를 활성화합니다.
    * "압축해제된 확장 프로그램을 로드합니다" 버튼을 클릭합니다.
    * 압축을 해제한 확장 프로그램 파일이 있는 폴더(`manifest.json` 파일이 포함된 폴더)를 선택합니다.
3.  **확장 프로그램 사용:**
    * "YouTube Shorts 자동 스크롤" 확장 프로그램 아이콘이 브라우저 툴바에 나타납니다.
    * 아이콘을 클릭하여 작은 팝업창을 엽니다.
    * 팝업창의 토글 스위치를 사용하여 자동 스크롤 기능을 활성화("기능 활성화") 또는 비활성화합니다.
    * 기능이 활성화되면 YouTube Shorts로 이동합니다. 현재 영상이 끝나면 확장 프로그램이 자동으로 다음 Short로 스크롤합니다.

## 권한 설명

이 확장 프로그램은 다음 권한을 요구합니다:

* `storage`: 자동 스크롤 활성화 여부 설정을 저장하여 브라우저 세션 간에 유지하는 데 사용됩니다.
* `scripting`: 자동 스크롤 기능을 활성화하기 위해 `content.js` 스크립트를 YouTube 페이지에 주입하는 데 필요합니다.
* `webNavigation`: YouTube와 같은 단일 페이지 애플리케이션(SPA) 환경에서 YouTube Shorts 페이지로의 이동을 감지하여 `content.js` 스크립트가 올바르게 주입되도록 하는 데 사용됩니다.
* `host_permissions` (`https://*.youtube.com/*`): 확장 프로그램이 YouTube 페이지에서 실행되도록 허용합니다.

## 라이선스

본 프로그램은 **크리에이티브 커먼즈 저작자표시-비영리-동일조건변경허락 4.0 국제 라이선스 (CC BY-NC-SA 4.0)** 에 따라 이용할 수 있습니다.

* **출처 표시:** 본 프로그램의 출처 (작성자 또는 개발팀)를 명시해야 합니다.
* **비상업적 이용:** 본 프로그램을 상업적인 목적으로 이용할 수 없습니다.
* **변경 가능:** 본 프로그램을 수정하거나 2차 저작물을 만들 수 있습니다.
* **동일 조건 변경 허락:** 2차 저작물에 대해서도 동일한 조건으로 이용 허락해야 합니다.

자세한 내용은 크리에이티브 커먼즈 홈페이지에서 확인하실 수 있습니다: <https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko>

## 문의

개발자: nopigom119
이메일: [rycbabd@gmail.com](mailto:rycbabd@gmail.com)
프로젝트 링크: <https://github.com/nopigom119/youtube_shorts_autoscroll>
