// content.js - YouTube Shorts 자동 넘김 스크립트 (SPA 지원 및 로그 정리 버전)

// 스크립트 중복 실행 방지 플래그
if (typeof window.youtubeShortsAutoScrollInjected === 'undefined') {
  window.youtubeShortsAutoScrollInjected = true;
  console.log("유튜브 쇼츠 자동 넘김 확장 프로그램 실행됨! (content.js)");

  let autoScrollEnabled = false; // 자동 넘김 활성화 상태 (팝업과 연동)
  let currentVideoElement = null; // 현재 'timeupdate' 이벤트를 감시 중인 비디오 요소
  let observer = null; // 페이지 변화 감지용 MutationObserver
  let hasScrolledForCurrentVideo = false; // 현재 비디오에 대해 이미 스크롤 했는지 여부 플래그

  // --- 1. 비디오 종료 시점 근처에서 호출될 스크롤 함수 ---
  const scrollToNextShort = () => {
    console.log("Video nearing end or ended, attempting to scroll...");

    if (hasScrolledForCurrentVideo) {
      console.log("Already attempted scroll for this video.");
      return;
    }
    hasScrolledForCurrentVideo = true;

    const nextButton = document.querySelector(
      '#navigation-button-down button, button[aria-label="Next video"], button[aria-label="다음 동영상"]'
    );

    let scrollInitiated = false;

    if (nextButton) {
      nextButton.click();
      console.log("Clicked next button.");
      scrollInitiated = true;
    } else {
      console.warn("Next button not found. Trying generic scroll.");
      window.scrollBy(0, window.innerHeight);
      scrollInitiated = true;
    }

    if (scrollInitiated) {
      currentVideoElement = null; // 다음 비디오를 위해 현재 비디오 추적 해제
    }
  };

  // --- 2. 'timeupdate' 이벤트 발생 시 호출될 함수 ---
  const checkVideoProgress = (event) => {
    const videoElement = event.target;
    if (videoElement && typeof videoElement.duration === 'number' && typeof videoElement.currentTime === 'number' && !isNaN(videoElement.duration) && videoElement.duration > 0) {
      if ((videoElement.duration - videoElement.currentTime) < 0.5 && !hasScrolledForCurrentVideo) {
        console.log(`Video nearing end: currentTime=${videoElement.currentTime.toFixed(2)}, duration=${videoElement.duration.toFixed(2)}`);
        scrollToNextShort();
      }
    }
  };

  // --- 3. 특정 비디오 요소에 'timeupdate' 이벤트 리스너를 추가하는 함수 ---
  const addTimeUpdateListener = (videoElement) => {
    if (!videoElement) return;
    removeTimeUpdateListener(videoElement); // 기존 리스너 제거 (중복 방지)
    videoElement.addEventListener('timeupdate', checkVideoProgress);
    currentVideoElement = videoElement;
    hasScrolledForCurrentVideo = false; // 새 비디오이므로 스크롤 플래그 초기화
    console.log("Added timeupdate listener to:", videoElement);
  };

  // --- 4. 특정 비디오 요소에서 'timeupdate' 이벤트 리스너를 제거하는 함수 ---
  const removeTimeUpdateListener = (videoElementParam) => {
    let videoEl = videoElementParam;
    if (!videoEl) videoEl = currentVideoElement;
    if (videoEl) {
      videoEl.removeEventListener('timeupdate', checkVideoProgress);
      console.log("Removed timeupdate listener from:", videoEl);
      if (videoEl === currentVideoElement) {
        currentVideoElement = null;
      }
    }
  };

  // --- 5. 현재 활성화된 Shorts 비디오를 찾아 리스너를 관리하는 함수 ---
  const manageVideoListener = () => {
    // YouTube Shorts 비디오 선택자 개선 (더 구체적으로)
    // ytd-shorts 플레이어 내부의 video 태그를 찾도록 시도
    const shortsPlayer = document.querySelector('ytd-shorts');
    let newlyFoundVideo = null;
    if (shortsPlayer) {
        newlyFoundVideo = shortsPlayer.querySelector('video.video-stream.html5-main-video[src]');
    }
    // 대체 선택자 (기존 방식)
    if (!newlyFoundVideo) {
        newlyFoundVideo = document.querySelector('video.video-stream.html5-main-video[src]');
    }


    if (newlyFoundVideo && newlyFoundVideo !== currentVideoElement) {
      console.log("New video detected:", newlyFoundVideo);
      if (currentVideoElement) {
        removeTimeUpdateListener(currentVideoElement);
      }
      if (autoScrollEnabled) {
        addTimeUpdateListener(newlyFoundVideo);
      }
    } else if (newlyFoundVideo && newlyFoundVideo === currentVideoElement) {
      // 동일 비디오, autoScrollEnabled 상태에 따라 리스너 재확인
      if (autoScrollEnabled && !newlyFoundVideo.ontimeupdate) { // 리스너가 없는 경우 대비
          console.log("Re-adding listener to same video as autoScroll is enabled:", newlyFoundVideo);
          addTimeUpdateListener(newlyFoundVideo);
      } else if (!autoScrollEnabled && newlyFoundVideo.ontimeupdate) {
          console.log("Removing listener from same video as autoScroll is disabled:", newlyFoundVideo);
          removeTimeUpdateListener(newlyFoundVideo);
      }
    } else if (!newlyFoundVideo && currentVideoElement) {
      console.log("No active video found, removing listener from old video:", currentVideoElement);
      removeTimeUpdateListener(currentVideoElement);
    }
  };

  // --- 6. Shorts 컨테이너의 변화를 감지하는 Mutation Observer 설정 ---
  const observeShortsContainer = () => {
    if (observer) {
      observer.disconnect();
      console.log("Disconnected existing MutationObserver.");
    }
    // YouTube 페이지 구조에 더 적합한 대상 노드 선택
    const targetNode = document.querySelector('ytd-app') || document.body;

    if (!targetNode) {
      console.warn("Target node for MutationObserver not found. Retrying in 2 seconds.");
      setTimeout(observeShortsContainer, 2000);
      return;
    }
    console.log("Setting up MutationObserver on:", targetNode);

    const callback = (mutationsList, obs) => {
      // console.log("MutationObserver detected change."); // 너무 자주 발생하므로 필요한 경우에만 활성화
      // URL이 shorts인지 한 번 더 확인하여 불필요한 manageVideoListener 호출 방지
      if (window.location.href.includes("/shorts/")) {
        manageVideoListener();
      } else {
        // Shorts 페이지가 아니면, 기존 리스너 제거 및 observer 중지 시도
        if (currentVideoElement) {
            removeTimeUpdateListener(currentVideoElement);
        }
        // observer.disconnect(); // SPA 전체를 감시하므로 disconnect는 신중해야 함
        // console.log("Not on a shorts page. Listener removed if any.");
      }
    };
    const config = { childList: true, subtree: true };
    observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    // 초기 실행 시 URL 확인
    if (window.location.href.includes("/shorts/")) {
        manageVideoListener(); // 초기 실행
    }
  };

  // --- 7. 초기화 및 설정 변경 감지 ---
  const initialize = () => {
    console.log("Initializing YouTube Shorts Auto Scroll content script...");
    chrome.storage.local.get(['autoScrollEnabled'], function(result) {
      autoScrollEnabled = !!result.autoScrollEnabled;
      console.log('Initial auto scroll state loaded:', autoScrollEnabled);
      
      // URL이 shorts 페이지일 때만 observer 시작
      if (window.location.href.includes("/shorts/")) {
        observeShortsContainer();
        manageVideoListener(); // 초기 비디오 리스너 설정
      } else {
        console.log("Not on a shorts page. Observer not started.");
      }
    });

    chrome.storage.onChanged.addListener(function(changes, namespace) {
      if (namespace === 'local' && changes.autoScrollEnabled) {
        const newState = !!changes.autoScrollEnabled.newValue;
        console.log('Auto scroll state changed to:', newState);
        autoScrollEnabled = newState;
        // 현재 Shorts 페이지에 있을 때만 리스너 관리
        if (window.location.href.includes("/shorts/")) {
            if (autoScrollEnabled) {
                // Observer가 없으면 시작
                if (!observer || !observer.takeRecords().length) { // observer가 활성 상태인지 확인하는 더 나은 방법 필요
                    observeShortsContainer();
                }
                manageVideoListener(); // 비디오 리스너 즉시 업데이트
            } else {
                removeTimeUpdateListener(currentVideoElement);
                // observer.disconnect(); // 자동 스크롤 비활성화 시 observer 중지 고려
                // console.log("Auto scroll disabled, observer disconnected.");
            }
        }
      }
    });
  };

  // 스크립트 주입 시 초기화 함수 호출
  initialize();

} else {
  console.log("유튜브 쇼츠 자동 넘김 확장 프로그램 이미 실행 중 (content.js)");
}