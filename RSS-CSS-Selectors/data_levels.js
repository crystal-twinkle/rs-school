const dataLevels = [
  {
    taskDesc: "Select the plates",
    levelTitle: "Type Selector",
    levelSub: "Select elements by their type",
    levelDesc: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    answer: "plate",
    markup: [
      '<plate/>',
      '<plate/>'
    ]

  },
  {
    taskDesc: "Select the bento boxes",
    levelTitle: "Type Selector",
    levelSub: "Select elements by their type",
    levelDesc: "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    examples: [
      '<strong>div</strong> selects all <tag>div</tag> elements.',
      '<strong>p</strong> selects all <tag>p</tag> elements.',
    ],
    answer: "bento",
    markup: [
      '<bento/>',
      '<plate/>',
      '<bento/>'
    ]
  },
  {
    taskDesc: "Select the fancy plate",
    levelTitle: "ID Selector",
    levelSub: "Select elements with an ID",
    levelDesc: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.',
    examples: [
      '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      '<strong>ul#long</strong> selects <tag>ul id="long"</tag>'
    ],
    answer: "#fancy",
    markup: [
      '<plate id="fancy"/>',
      '<plate/>',
      '<bento/>'
    ]
  },
  {
    taskDesc: "Select the apple on the plate",
    levelTitle: "Descendant Selector",
    levelSub: "Select an element inside another element",
    syntax: "A&nbsp;&nbsp;B",
    levelDesc: "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    examples: [
      '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
    ],
    answer: "plate apple",
    markup: [
      '<bento/>',
      '<plate>',
      '<apple/>',
      '</plate>',
      '<apple/>']
  },
  {
    taskDesc: "Select the pickle on the fancy plate",
    levelSub: "Combine the Descendant & ID Selectors",
    levelDesc: 'You can combine any selector with the descendent selector.',
    examples: [
      '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>'
    ],
    answer: "#fancy pickle",
    markup: ['<bento>', '<orange/>', '</bento>', '<plate id="fancy">', '<pickle/>', '</plate>', '<plate>', '<pickle/>', '</plate>']
  },
  {
    taskDesc: "Select the small apples",
    levelTitle: "Class Selector",
    levelSub: "Select elements by their class",
    levelDesc: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
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
      '<plate/>',]
  },
  {
    taskDesc: "Select the small oranges",
    levelSub: "Combine the Class Selector",
    syntax: "A.className",
    levelDesc: 'You can combine the class selector with other selectors, like the type selector.',
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
      '</plate>']
  },
  {
    taskDesc: "Select the small oranges in the bentos",
    syntax: "Put your back into it!",
    levelSub: "You can do it...",
    levelDesc: 'Combine what you learned in the last few levels to solve this one!',
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
    ]
  },
  {
    taskDesc: "Select all the plates and bentos",
    levelTitle: "Comma Combinator",
    levelSub: "Combine, selectors, with... commas!",
    levelDesc: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
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
    ]
  },
  {
    taskDesc: "Select all the things!",
    levelTitle: "The Universal Selector",
    levelSub: "You can select everything!",
    levelDesc: 'You can select all elements with the universal selector! ',
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
    ]
  },
  {
    taskDesc: "Select everything on a plate",
    levelSub: "Combine the Universal Selector",
    levelDesc: 'This selects all elements inside of <strong>A</strong>.',
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
    ]
  }
]

export default dataLevels;
