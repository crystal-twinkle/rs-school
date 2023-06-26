const dataLevel = [
  {
    taskDesc: "Выбери тарелки",
    helpTitle: "Выбери селекторы по их атрибуту class",
    helpDesc: 'Атрибут class часто используется для указания на имя класса в стилях. А стили нужны для отрисовки тарелок например ) ',
    examples: [
      '.bento выберет все &lt;div class = "bento"> элементы.',
      '.text выберет все &lt;p class = "text"> элементы.',
    ],
    answers: [".plate", "div.plate"],
    markup: [
      '<div class = "plate"> </div>',
      '<div class = "plate"> </div>',
      '<div class = "bento"> </div>',
    ],
    levelName: "Атрибут class",
    tableFill: '<div class="plate move-norm"></div> <div class="plate move-norm"></div> <div class="bento"></div>'
  },
  {
    taskDesc: "Покрась в зелёный",
    helpTitle: "Сделай квадрат зелёного цвета",
    helpDesc: 'Свойства задают цвет, размер и другие интересные вещи. Их следует писать в таком формате: имя свойства &#8594; двоеточие &#8594; значение свойства &#8594; точка с запятой.',
    examples: [
      '<pre>.square {\n' +
      '\u00A0\u00A0background: red;\n' +
      '}</pre>' +
      '(свойство - это background, а \"red\" - это значение) ' +
      'такая запись покрасит в красный цвет',
      'в данном упражнении достаточно написать только свойство и значение'
    ],
    answers: ["background: green;", ".square {background: green;}", ".square { background: green; }"],
    markup: [
      '<div class = "square"> </div>',
    ],
    levelName: "CSS свойства",
    tableFill: '<div class = "square"> </div>'
  },
  {
    taskDesc: "Найди родителей",
    helpTitle: "Родственные связи тегов",
    helpDesc: 'Каждый тег, в зависимости от положения в HTML коде может быть либо родителем, либо потомком, либо и тем и другим одновременно.',
    examples: [
      '<pre>&lt;ul>\n' +
      '\u00A0\u00A0&lt;li> 1 &lt;/li>\n' +
      '\u00A0\u00A0&lt;li> 2 &lt;/li>\n' +
      '\u00A0\u00A0&lt;li> 3 &lt;/i>&lt;/li>\n' +
      '&lt;/ul></pre>  тег ul является родителем тегов li',
      ''
    ],
    answer: [".plate", "div.plate", "table", "div.table"],
    markup: [
      '<div class = "plate">',
      '\u3000<div class = "pineapple">',
      '\u3000</div>',
      '</div>',
      '<div class = "plate">',
      '\u3000<div class = "pineapple">',
      '\u3000</div>',
      '</div>'
    ],
    levelName: "Теги - родители",
    tableFill: '<div class = "plate move-norm"> <div class = "pineapple" > </div> </div> <div class = "plate move-norm"> <div class = "pineapple" > </div> </div>'
  },
  {
    taskDesc: "Найди потомков",
    helpTitle: "Родственные связи тегов",
    helpDesc: "Каждый тег, в зависимости от положения в HTML коде может быть либо родителем, либо потомком, либо и тем и другим одновременно.",
    examples: [
      '<pre>&lt;ul>\n' +
      '\u00A0\u00A0&lt;li> 1 &lt;i>курсив&lt;/i>&lt;/li>\n' +
      '\u00A0\u00A0&lt;li> 2 &lt;i>курсив&lt;/i>&lt;/li>\n' +
      '\u00A0\u00A0&lt;li> 3 &lt;i>курсив&lt;/i>&lt;/li>\n' +
      '&lt;/ul></pre>  теги i являются потомками тегов li и тега ul',
    ],
    answer: [".bento", "div.bento", "cucumber", "div.cucumber"],
    markup: [
      '<div class = "bento">',
      '\u3000<div class = "cucumber">',
      '\u3000</div>',
      '\u3000<div class = "cucumber">',
      '\u3000</div>',
      '</div>'
    ],
    levelName: "Теги - потомки",
    tableFill: '<div class = "bento"> <div class = "cucumber move-norm" style="left: -6px"> </div> <div class = "cucumber move-norm" style="left: 25px; top: -55px"> </div> </div>'
  },
  {
    taskDesc: "Выбери маленькие ананасы, которые лежат на бенто",
    helpTitle: "Дочерний селектор",
    helpDesc: 'Дочерний селектор в CSS используется для выбора элементов, которые являются прямыми потомками родителя. Записывается в таком формате: родитель > потомок',
    examples: [
      '.parent > .children выберет прямых потомков элемента .parent',
      '<pre>&lt;div class = "parent">\n &lt;div class = "children1">\n  &lt;div class = "children2">\n  &lt;/div>\n &lt;/div>\n&lt;/div></pre>' +
      '.parent > div выберет только div с классом children1',
    ],
    answer: ['.pine[style="transform: scale(0.7);"]', '.bento > .small', '.bento > div.small'],
    markup: [
      '<div class = "bento">',
      '\u3000<div class = "pineapple small"> ',
      '\u3000</div>',
      '\u3000<div class = "pineapple small"> ',
      '\u3000</div>',
      '</div>',
      '<div class = "bento">',
      '\u3000<div class = "pineapple"> ',
      '\u3000</div>',
      '\u3000<div class = "pineapple small""> ',
      '</div>',
      '</div>',
      '<div class = "plate">',
      '\u3000<div class = "pineapple small"> ',
      '\u3000</div>',
      '</div>',
    ],
    levelName: "Дочерний селектор",
    tableFill: '<div class = "bento"> <div class="pineapple small move-small" style="left: -5px; top: 5px;"> </div> <div class="pineapple small move-small" style="left: 25px; top: -45px;"> </div> </div> <div class = "bento"> <div class="pineapple" style="left: -3px;"></div> <div class="pineapple small move-small" style="left: 30px; top: -45px;"> </div></div> <div class = "plate"> <div class="pineapple small" style="top: -5px;"> </div></div>  '
  },
  {
    taskDesc: "Выбери огурец, который следуют за арбузам",
    helpTitle: "Селектор для соседних элементов",
    helpDesc: 'Соседний селектор в CSS используется для выбора элемента, который является непосредственным соседом другого элемента. Записывается в таком формате: элемент1 + элемент2',
    examples: [
      'h3 + p выбирает соседний p элемента h3',
      '<pre>&lt;h3>\n  &lt;p class = "p1"&lt;/p>\n  &lt;p class = "p2" &lt;/p>\n &lt;/h3></pre>' +
      'h3 + p, выберет p с классом p1'
    ],
    answer: ['.pineapple + .cucumber', 'cucumber:nth-of-type(2)', 'cucumber:nth-last-child(1)', 'cucumber:last-of-type', 'cucumber:nth-child(4)', 'cucumber:last-child'],
    markup: [
      '<div class="pineapple">',
      '</div>',
      '<div class = "cucumber">',
      '</div>',
      '<div class="watermelon">',
      '</div>',
      '<div class = "cucumber">',
      '</div>',
    ],
    levelName: "Соседний селектор",
    tableFill: '<div class="pineapple"> </div> <div class = "cucumber"></div> <div class="watermelon"> </div> <div class = "cucumber move-norm"></div></div>  '

  },
  {
    taskDesc: "Выбери маленькие огурцы",
    helpTitle: "Псевдокласс :is()",
    helpDesc: ':is() принимает список селекторов в качестве аргумента и выбирает любой элемент, который может быть выбран одним из селекторов в этом списке',
    examples: [
      ':is(header, footer) p - выберет все p, лежащие в header и footer',
      ':is(menu, dir) :is(ol, nav) ul - выберет все ul, лежащие в ol, nav, котовые также лежат в menu или dir'
    ],
    answer: [':is(.bento, .plate) .small', '.bento .small, .plate .small', '.small', ':is(.bento, .plate) cucumber .small', '.cucumber .small'],
    markup: [
      '<div class = "bento">',
      '\u3000<div class = "cucumber small">',
      '\u3000</div>',
      '\u3000<div class = "pineapple">',
      '\u3000</div>',
      '</div>',
      '<div class = "plate">',
      '\u3000<div class = "cucumber small">',
      '\u3000</div>',
      '\u3000<div class = "cucumber">',
      '\u3000</div>',
      '</div>'
    ],
    levelName: ":is()",
    tableFill: '<div class = "bento"> <div class = "cucumber small move-small" style="left: -12px"> </div> <div class = "pineapple" style="left: 20px; top: -65px"> </div> </div>   <div class = "plate"> <div class = "cucumber small move-small" style="left: -6px; top: 5px;"> </div> <div class = "cucumber" style="left: 25px; top: -55px"> </div> </div>'
  },
  {
    taskDesc: "Выбери тарелки в которых лежат ананасы",
    helpTitle: "родитель:has(потомки)",
    helpDesc: 'Селектор :has проверяет, содержит ли родитель хотя бы один конкретный элемент или выполняется ли условие, например, если инпут сфокусирован.',
    examples: [
      'h1:has(h2) - выберет все h1, которые содержат в себе h2',
      'h3:has(p) - выберет все h3, которые содержат в себе p'
    ],
    answer: ['plate:has(pineapple)', 'plate:first-child, plate:nth-of-type(2)', 'plate:first-child, plate:nth-child(2)'],
    markup: [
      '<div class = "plate">',
      '\u3000<div class = "pineapple">',
      '\u3000</div>',
      '</div>',
      '<div class = "plate">',
      '\u3000<div class = "pineapple small">',
      '\u3000</div>',
      '\u3000<div class = "pineapple">',
      '\u3000</div>',
      '</div>',
      '<div class = "plate">',
      '\u3000<div class = "watermelon">',
      '\u3000</div>',
      '</div>'
    ],
    levelName: "родитель:has(потомки)",
    tableFill: '<div class = "plate move-norm"> <div class = "pineapple"> </div> </div>  <div class = "plate move-norm"> <div class = "pineapple small" style="left: -6px; top: 5px;"> </div> <div class = "pineapple" style="left: 25px; top: -55px"> </div> </div> <div class = "plate"> <div class="watermelon"> </div></div>'
  },
  {
    taskDesc: "Выбери бенто в которых лежит 2 огурца",
    helpTitle: "родитель:has(условие)",
    helpDesc: ':has может проверить различные условия, например содержит ли родитель определённое количество потомков.',
    examples: [
      '.wrapper:has(.item:nth-last-child(n + 5)) - проверит содержит ли .wrapper 5 или более элементов',
      'h3:not(:has(+ p)) - проверит, что за h3 не следут p'
    ],
    answer: ['.bento:has(.cucumber:nth-last-child(n + 2)]', '.bento:nth-of-type(n+2)'],
    markup: [
      '<div class = "bento">',
      '<div class = "cucumber">',
      '</div>',
      '</div>',
      '<div class = "bento">',
      '<div class = "cucumber">',
      '</div>',
      '<div class = "cucumber">',
      '</div>',
      '</div>',
      '<div class = "bento">',
      '<div class = "cucumber">',
      '</div>',
      '<div class = "cucumber">',
      '</div>',
      '</div>',
    ],
    levelName: "родитель:has(условие)",
    tableFill: ' <div class = "bento"> <div class = "cucumber"> </div> </div> <div class = "bento move-norm"> <div class = "cucumber" style="left: -7px"> </div> <div class = "cucumber" style="left: 25px; top: -55px"> </div> </div> <div class = "bento move-norm"> <div class = "cucumber" style="left: -7px"> </div> <div class = "cucumber" style="left: 25px; top: -55px"> </div> </div> '
  },
  {
    taskDesc: "Выбери зелёную тарелку",
    helpTitle: "Кобинация селектора и атрибута",
    helpDesc: 'Устанавливает стиль для элемента, если задан специфичный атрибут тега. Записывается в таком формате: [имя аттрибута]: { описание правил стиля } или селектор[атрибут]: { описание правил стиля } ',
    examples: [
      '.element[style="background: blue"] выберет все элементы с синим цветом',
      '.element[data-state: ready] выберет все элементы у которых готовое состояние',
    ],
    answer: ['.plate[style="background: green"]', 'div[style="background: green"]', 'div > .plate[style="background: green"]', '.plate:first-child', '.plate[style*="background: green"]', '.plate[style$="background: n"]', '.plate[style$="background: en"]', '.plate[style^="background: g"]', '.plate[style^="background: gr"]'],
    markup: [
      '<div class = "plate" style="background: green;>',
      '</div>',
      '<div class = "plate">',
      '</div>',
      '<div class = "plate" style="background: blue;>',
      '</div>'
    ],
    levelName: '[атрибут="значение"]',
    tableFill: '<div class = "plate move-norm" style="background: #089f08; border-bottom: solid 5px #37592f;"> </div> <div class = "plate"> </div> <div class = "plate" style="background: #2525bd; border-bottom: solid 5px #162134;"> </div>'
  },
  {
    taskDesc: "Выбери большие тарелки",
    helpTitle: "Кобинация селекторов и атрибутов",
    helpDesc: '* ищет атрибуты у которых в любом месте есть определённые символы',
    examples: [
      '.element[style*="background: b"] выберет все элементы с цветами начинающичся с буквы "b"',
      '.element[class*="cuc"] выберет все элементы у которых класс начинается с "cuc"',
    ],
    answer: ['div[style*="width: 9"]', 'div[style*="width: 90px"]', 'div[style*="width: 90"]', '.plate[style*="width: 9"]', '.plate[style*="width: 90px"]', '.plate[style*="width: 90"]', '.plate[style*="height: 90px"]', '.plate[style*="height: 9"]', '.plate[style*="height: 90"]', '.plate:nth-of-type(odd)'],
    markup: [
      '<div class = "plate" style="width: 90px; height: 90px"> </div>',
      '<div class = "plate" style="width: 70px; height: 70px"> </div>',
      '<div class = "plate" style="width: 90px; height: 90px"> </div>',
    ],
    levelName: '[атрибут*="значение"]',
    tableFill: '<div class = "plate move-norm" style="width: 80px; height: 80px"> </div> <div class = "plate" style="width: 65px; height: 65px"> </div> <div class = "plate move-norm" style="width: 80px; height: 80px"> </div>'
  }
]

export default dataLevel;

