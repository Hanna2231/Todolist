// toggleDarkMode.js
import React, { useState, useEffect } from 'react';

const ToggleDarkMode = () => {
  // 다크 모드 상태 (초기값은 localStorage에서 가져옴)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false; // 기본값은 false (라이트 모드)
  });

  // 다크 모드 변경 시, localStorage와 body 클래스 업데이트
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', JSON.stringify(true));
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', JSON.stringify(false));
    }
  }, [isDarkMode]);

  // 토글 버튼 클릭 시 다크 모드 전환
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode}>
      {/* 이모티콘을 추가한 버튼 텍스트 */}
      {isDarkMode ? '🌙 Switch to Light Mode' : '🌞 Switch to Dark Mode'}
    </button>
  );
};

export default ToggleDarkMode;
