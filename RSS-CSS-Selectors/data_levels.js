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
    tableFill: '<div class = "plate"> </div> <div class = "plate"> </div> <div class = "bento">'
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
    taskDesc: "Найди родителя",
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
      '\u3000<div class = "pine">',
      '\u3000</div>',
      '</div>'
    ],
    levelName: "Теги - родители",
    tableFill: '<div class = "plate"> <div class = "pineapple" > </div> </div>'
  },
  {
    taskDesc: "Найди потомка",
    helpTitle: "Родственные связи тегов",
    helpDesc: "Каждый тег, в зависимости от положения в HTML коде может быть либо родителем, либо потомком, либо и тем и другим одновременно.",
    examples: [
      '<pre>&lt;ul>\n' +
      '\u00A0\u00A0&lt;li> 1 &lt;i>курсив&lt;/i>&lt;/li>\n' +
      '\u00A0\u00A0&lt;li> 2 &lt;i>курсив&lt;/i>&lt;/li>\n' +
      '\u00A0\u00A0&lt;li> 3 &lt;i>курсив&lt;/i>&lt;/li>\n' +
      '&lt;/ul></pre>  теги i являются потомками тегов li и тега ul',
      ''
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
    tableFill: '<div class = "bento"> <div class = "cucumber"> </div> <div class = "cucumber"> </div> </div>'
  },
  {
    taskDesc: "Select the pickle on the fancy plate",
    helpDesc: 'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    answer: [".bento", "div.bento", "cucumber", "div.cucumber"],
    markup: [
      '<div class = "plate">',
      '\u3000<div class = "cucumber">',
      '\u3000</div>',
      '\u3000<div class = "cucumber">',
      '\u3000</div>',
      '</div>'
    ],
    levelName: "#id&nbsp;&nbsp;A"
  },
  {
    taskDesc: "Select the small apples",
    helpTitle: "Class Selector",
    helpSub: "Select elements by their class",
    helpDesc: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
    examples: [
      '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>'
    ],
    answer: ".small",
    markup: [
      '<apple/>',
      '<apple class="small"/>',
      '<plate>',
      '<apple class="small"/>',
      '</plate>',
      '<plate/>',
    ],
    levelName: ".classname",
  },
  {
    taskDesc: "Select the small oranges",
    helpSub: "Combine the Class Selector",
    helpDesc: 'You can combine the class selector with other selectors, like the type selector.',
    examples: [
      '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>'
    ],
    answer: "orange.small",
    markup: [
      '<apple/>',
      '<apple class="small"/>',
      '<bento>',
      '<orange class="small"/>',
      '</bento>',
      '<plate>',
      '<orange/>',
      '</plate>',
      '<plate>',
      '<orange class="small"/>',
      '</plate>'
    ],
    levelName: "A.className"
  },
  {
    taskDesc: "Select the small oranges in the bentos",
    helpSub: "You can do it...",
    helpDesc: 'Combine what you learned in the last few helps to solve this one!',
    answer: "bento orange.small",
    markup: [
      '<bento>',
      '<orange/>',
      '</bento>',
      '<orange class="small"/>',
      '<bento>',
      '<orange class="small"/>',
      '</bento>',
      '<bento>',
      '<apple class="small"/>',
      '</bento>',
      '<bento>',
      '<orange class="small"/>',
      '</bento>'
    ],
    levelName: "Put your back into it!"
  },
  {
    taskDesc: "Select all the plates and bentos",
    helpTitle: "Comma Combinator",
    helpSub: "Combine, selectors, with... commas!",
    helpDesc: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
    examples: [
      '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
      '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements'
    ],
    answer: "plate, bento",
    boardMarkup: [
      '<pickle class="small"/>',
      '<pickle/>',
      '<plate>',
      '<pickle/>',
      '</plate>',
      '<bento>',
      '<pickle/>',
      '</bento>',
      '<plate>',
      '<pickle/>',
      '</plate>',
      '<pickle/>',
      '<pickle class="small"/>'
    ],
    levelName: "A, B"
  },
  {
    taskDesc: "Select all the things!",
    helpTitle: "The Universal Selector",
    helpSub: "You can select everything!",
    helpDesc: 'You can select all elements with the universal selector! ',
    examples: [
      '<strong>p *</strong> selects any element inside all <tag>p</tag> elements.',
    ],
    answer: "*",
    boardMarkup: [
      '<apple/>',
      '<plate>',
      '<orange className="small"/>',
      '</plate>',
      '<bento/>',
      '<bento>',
      '<orange/>',
      '</bento>',
      '<plate id="fancy"/>'
    ],
    levelName: "*",
  },
  {
    taskDesc: "Select everything on a plate",
    helpSub: "Combine the Universal Selector",
    helpDesc: 'This selects all elements inside of <strong>A</strong>.',
    examples: [
      '<strong>p *</strong> selects every element inside all <tag>p</tag> elements.',
      '<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.'
    ],
    answer: "plate *",
    boardMarkup: [
      '<plate id="fancy">',
      '<orange class="small"/>',
      '</plate>',
      '<plate>',
      '<pickle/>',
      '</plate>',
      '<apple class="small"/>',
      '<plate>',
      '<apple/>',
      '</plate>'
    ],
    levelName: "A&nbsp;&nbsp;*",
  }
]

export default dataLevel;

