//main.js
const customTag = {
  tagName: "div", //value: 태그 이름
  textContent: "", //value: 태그에 들어갈 텍스트
  styles: {
    color: "black", //글자의 색
    fontSize: "14px", //글자 크기
  },
  id: "", //태그의 id
  class: [], //태그의 클래스들
  changeTagName(newTagName) {
    this.tagName = newTagName;
  }, //태그의 tagName을 바꾸는 함수
  changeTextContent(newText) {
    this.textContent = newText;
  }, //태그의 textContent를 바꾸는 함수
  changeStyles(styleKey, styleValue) {
    this.styles[styleKey] = styleValue;
  }, //태그의 스타일을 바꾸는 함수
  setId(newId) {
    this.id = newId;
  }, //태그의 아이디를 바꾸는 함수
  addClassName(className) {
    if (!this.class.includes(className)) {
      this.class.push(className);
    }
  }, //태그의 클래스 이름를 추가하는 함수
  removeClassName(className) {
    this.class = this.class.filter((c) => c !== className);
  }, //태그의 특정 클래스 이름를 제거하는 함수

  // 여기 아래 부분은 수정하지 마시오.
  toHTML() {
    // 클래스 문자열 생성
    const classString =
      this.class.length > 0 ? ` class="${this.class.join(" ")}"` : "";

    // ID 문자열 생성
    const idString = this.id ? ` id="${this.id}"` : "";

    // 스타일 문자열 생성
    let styleString = "";
    for (const property in this.styles) {
      styleString += `${property == "fontSize" ? "font-size" : property}: ${
        this.styles[property]
      }; `;
    }
    styleString = styleString ? ` style="${styleString.trim()}"` : "";

    // 완성된 HTML 태그 반환
    return `<${this.tagName}${idString}${classString}${styleString}>${this.textContent}</${this.tagName}>`;
  },
  // DOM에 렌더링
  render(containerId) {
    const container = document.getElementById(containerId);
    if (container) {
      // 기존 내용을 지우고 새로 렌더링
      container.innerHTML = "";
      // 새 HTML 태그 추가
      container.innerHTML += this.toHTML();
    } else {
      console.error(`Container with ID "${containerId}" not found.`);
    }
  },
};
