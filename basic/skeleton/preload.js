window.addEventListener('DOMContentLoaded', () => {

  //renderMain이 존재할때만 함수 실행.
  globalThis.renderMain && renderMain({process:process});
  
})
