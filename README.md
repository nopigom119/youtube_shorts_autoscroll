# YouTube Shorts Auto Scroll

Automatically scrolls to the next YouTube Short when the current one finishes, enabling a seamless, hands-free viewing experience.

# YouTube Shorts 자동 스크롤

현재 시청 중인 YouTube Shorts 영상이 끝나면 다음 영상으로 자동으로 스크롤하여, 편리하게 연속 시청할 수 있도록 도와주는 크롬 확장 프로그램입니다.

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
    * Use the toggle switch in the popup to enable ("기능 활성화") or disable the auto-scrolling feature.
    * When enabled, navigate to YouTube Shorts. The extension will automatically scroll to the next Short as the current one finishes.

## Permissions Explained

This extension requires the following permissions:

* `storage`: Used to save your preference for whether auto-scroll is enabled or disabled, so it persists across browser sessions.
* `scripting`: Needed to inject the `content.js` script into YouTube pages to enable the auto-scrolling functionality.
* `webNavigation`: Used to detect navigation to YouTube Shorts pages, especially in a Single Page Application (SPA) context like YouTube, ensuring the `content.js` script is correctly injected when you navigate to Shorts.
* `host_permissions` (for `https://*.youtube.com/*`): Allows the extension to run on YouTube pages.

## Known Issues

* No major known issues at the moment. The previous issue where the extension wouldn't activate immediately when navigating from the YouTube homepage to Shorts (requiring a refresh) has been resolved by using `webNavigation` and programmatic script injection.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/nopigom119/youtube_shorts_autoscroll/issues).

## License

This program is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License (CC BY-NC-SA 4.0)**.

* **Attribution:** You must give appropriate credit, provide a link to the license, and indicate if changes were made.
* **Non-Commercial Use:** You may not use this program for commercial purposes.
* **Modification Allowed:** You can modify this program or create derivative works.
* **Same Conditions for Change Permission:** If you modify or create derivative works of this program, you must distribute your contributions under the same license as the original.

You can check the license details on the Creative Commons website: [https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en)

---

## 라이선스 (Korean)

본 프로그램은 **크리에이티브 커먼즈 저작자표시-비영리-동일조건변경허락 4.0 국제 라이선스 (CC BY-NC-SA 4.0)** 에 따라 이용할 수 있습니다.

* **출처 표시:** 본 프로그램의 출처 (작성자 또는 개발팀)를 명시해야 합니다.
* **비상업적 이용:** 본 프로그램을 상업적인 목적으로 이용할 수 없습니다.
* **변경 가능:** 본 프로그램을 수정하거나 2차 저작물을 만들 수 있습니다.
* **동일 조건 변경 허락:** 2차 저작물에 대해서도 동일한 조건으로 이용 허락해야 합니다.

자세한 내용은 크리에이티브 커먼즈 홈페이지에서 확인하실 수 있습니다: [https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.ko)

## Contact

Developer: nopigom119
Email: [rycbabd@gmail.com](mailto:rycbabd@gmail.com)
Project Link: <https://github.com/nopigom119/youtube_shorts_autoscroll>
