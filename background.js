// background.js

// YouTube Shorts 페이지 URL 패턴
const shortsUrlPattern = "youtube.com/shorts/";

// 페이지 URL 변경 감지 리스너
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  // URL이 YouTube Shorts 페이지이고, 프레임 ID가 0 (메인 프레임)인 경우
  if (details.url && details.url.includes(shortsUrlPattern) && details.frameId === 0) {
    console.log('Navigated to YouTube Shorts:', details.url);
    // content.js를 현재 탭에 주입
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["content.js"]
    }).then(() => {
      console.log("Injected content.js into tab:", details.tabId);
    }).catch(err => {
      console.error("Failed to inject content.js:", err);
    });
  }
});

// 탭 업데이트 시 (예: 페이지 새로고침)에도 content.js 주입 시도
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.url && tab.url.includes(shortsUrlPattern)) {
        console.log('Tab updated to YouTube Shorts:', tab.url);
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["content.js"]
        }).then(() => {
            console.log("Injected content.js into tab (onUpdated):", tabId);
        }).catch(err => {
            // 이미 주입된 경우 오류가 발생할 수 있으나, content.js 내부에서 중복 실행을 방지하므로 무시 가능
            // console.warn("Failed to inject content.js (onUpdated, might be already injected):", err);
        });
    }
});