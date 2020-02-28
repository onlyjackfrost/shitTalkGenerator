const Occupations = {
  developer: "工程師",
  designer: "設計師",
  founder: "創業家"
};

const tasks = {
  developer: ["加個按鈕", "加新功能", "切個版", "改一點 code", "抓個蟲"],
  designer: ["畫一張圖", "改個 logo", "順便幫忙設計一下", "隨便換個設計"],
  founder: ["週末加班", "要能賺錢", "想個 business model", "找 VC 募錢"]
};

const phrases = ["很簡單吧?", "很容易吧?", "很快吧", "很正常", "只要一秒鐘吧?"];

const targets = [
  {
    title: "工程師",
    name: "developer",
    image: "/images/developer.jpg",
    checked: null
  },
  {
    title: "設計師",
    name: "designer",
    image: "/images/designer.jpg",
    checked: null
  },
  {
    title: "創業家",
    name: "founder",
    image: "/images/founder.jpg",
    checked: null
  }
];

module.exports = { Occupations, tasks, phrases, targets };
