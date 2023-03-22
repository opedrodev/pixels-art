interface Options {
  border: number;
  spacing: number;
}

function calculateArea(window: Window, options: Options) {
  const { innerWidth, innerHeight } = window;
  const { border, spacing } = options;

  const PIXEL_SIZE = 32 + (border * 2);
  const GAP_SIZE = spacing;

  const windowWidth = innerWidth,
        windowHeight = innerHeight;

  const availableWidth = ((windowWidth - 226) * .9),
        availableHeight = windowHeight * .9;

  const maxColumns = Math.floor(availableWidth / PIXEL_SIZE),
        maxRows = Math.floor(availableHeight / PIXEL_SIZE);

  const columns = Math.floor((availableWidth - ((maxColumns - 1) * GAP_SIZE)) / PIXEL_SIZE),
        rows = Math.floor((availableHeight - ((maxRows - 1) * GAP_SIZE)) / PIXEL_SIZE);

  return { columns, rows };
}

export default calculateArea;
