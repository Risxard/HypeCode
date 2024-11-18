import { scrollTo } from './scrollTo';

describe('scrollTo', () => {
  let scrollIntoViewMock;

  beforeEach(() => {

    scrollIntoViewMock = jest.fn();

    global.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should scroll to the element when ref is passed', () => {
    const mockRef = { current: { scrollIntoView: scrollIntoViewMock } };

    scrollTo(mockRef);

    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
  });

  it('should scroll to the element when id is passed', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'testElement';
    document.body.appendChild(mockElement);

    scrollTo('testElement');

    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });

    document.body.removeChild(mockElement);
  });

  it('should do nothing if element is not found', () => {
    scrollTo('nonExistentElement');

    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
