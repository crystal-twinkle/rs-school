import { generateLevel } from '../../src/ts/generate';

describe('generateLevel', () => {
  let mockTaskDesc;
  let mockNumberLevel;
  let mockHelpTitle;
  let mockHelpText;

  beforeEach(() => {
    mockTaskDesc = document.createElement('div');
    mockNumberLevel = document.createElement('div');
    mockHelpTitle = document.createElement('div');
    mockHelpText = document.createElement('div');

    jest.spyOn(document, 'querySelector').mockImplementation((selector) => {
      if (selector === '#task-desc') {
        return mockTaskDesc;
      }
      if (selector === '#level-now') {
        return mockNumberLevel;
      }
      if (selector === '.help-title') {
        return mockHelpTitle;
      }
      if (selector === '.help-text') {
        return mockHelpText;
      }
      return null;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should generate a level with correct elements and data', () => {
    generateLevel(0);

    expect(mockTaskDesc.innerHTML).toBe('Выбери тарелки');
    expect(mockNumberLevel.innerHTML).toBe('1');
    expect(mockHelpTitle.innerHTML).toBe('Выбери селекторы по их атрибуту class');
    expect(mockHelpText.innerHTML).toBe(
      'Атрибут class часто используется для указания на имя класса в стилях. А стили нужны для отрисовки тарелок например )'
    );
  });
});
