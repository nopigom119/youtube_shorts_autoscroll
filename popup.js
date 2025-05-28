document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggleSwitch');
  
    // 1. 저장된 설정 불러오기 및 스위치 초기 상태 설정
    chrome.storage.local.get(['autoScrollEnabled'], function(result) {
      toggleSwitch.checked = !!result.autoScrollEnabled; // 저장된 값이 없으면 false
    });
  
    // 2. 스위치 상태 변경 시 설정 저장
    toggleSwitch.addEventListener('change', function() {
      chrome.storage.local.set({ autoScrollEnabled: this.checked }, function() {
        console.log('Auto scroll setting saved:', this.checked);
        // (선택사항) 현재 활성화된 YouTube Shorts 탭에 상태 변경 알림 보내기
        // chrome.tabs.query({ active: true, currentWindow: true, url: "*://*.youtube.com/shorts/*" }, function(tabs) {
        //   if (tabs.length > 0) {
        //     chrome.tabs.sendMessage(tabs[0].id, { command: "updateState", enabled: this.checked });
        //   }
        // }.bind(this)); // .bind(this)로 콜백 내에서 this.checked 사용 가능하게 함
      });
    });
  });