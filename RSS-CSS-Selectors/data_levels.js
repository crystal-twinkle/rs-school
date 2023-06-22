const dataLevel = [
  {
    taskDesc: "Select the plates",
    helpTitle: "Type Selector",
    helpSub: "Select elements by their type",
    helpDesc: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples: [
      '<div> selects all <div> elements.',
      '<p> selects all <p> elements.',
    ],
    answer: "plate",
    markup: [
      '<plate/>',
      '<plate/>'
    ],
    syntax: "A",
    tableFill: '<div class = "plate"></div> <div class = "plate" > </div>'
  },
  {
    taskDesc: "Select the bento boxes",
    helpTitle: "Type Selector",
    helpSub: "Select elements by their type",
    helpDesc: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples: [
      '<div> selects all <div> elements.',
      '<p> selects all <p> elements.',
    ],
    answer: "bento",
    markup: [
      '<bento/>',
      '<plate/>',
      '<bento/>'
    ],
    syntax: "A",
    tableFill: '<div class = "bento"></div> <div class = "plate" > </div> <div class = "bento"></div>'
  },
  {
    taskDesc: "Select the fancy plate",
    helpTitle: "ID Selector",
    helpSub: "Select elements with an ID",
    helpDesc: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<#cool> selects any element with <id="cool">',
      '<ul#long> selects <ul id="long">'
    ],
    answer: "#fancy",
    markup: [
      '<plate id="fancy"/>',
      '<plate/>',
      '<bento/>'
    ],
    syntax: "#id",
    tableFill: '<div class = "bento"></div> <div class = "plate" > </div> <div class = "bento"></div> <div class = "bento"></div>'
  },
  {
    taskDesc: "Select the apple on the plate",
    helpTitle: "Descendant Selector",
    helpSub: "Select an element inside another element",
    helpDesc: "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    examples: [
      '<p>  selects all elements that are inside of any <p>',
      '<#fancy> span selects any <span> elements that are inside of the element with <>id="fancy">',
    ],
    answer: "plate apple",
    markup: [
      '<bento/>',
      '<plate>',
      '<apple/>',
      '</plate>',
      '<apple/>'
    ],
    syntax: "A&nbsp;&nbsp;B",
  },
  {
    taskDesc: "Select the pickle on the fancy plate",
    helpSub: "Combine the Descendant & ID Selectors",
    helpDesc: 'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    answer: "#fancy pickle",
    markup: [
      '<bento>',
      '<orange/>',
      '</bento>',
      '<plate id="fancy">',
      '<pickle/>',
      '</plate>',
      '<plate>',
      '<pickle/>',
      '</plate>'
    ],
    syntax: "#id&nbsp;&nbsp;A"
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
    syntax: ".classname",
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
    syntax: "A.className"
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
    syntax: "Put your back into it!"
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
    syntax: "A, B"
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
    syntax: "*",
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
    syntax: "A&nbsp;&nbsp;*",
  }
]

export default dataLevel;

