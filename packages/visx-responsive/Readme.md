# @visx/responsive

<a title="@visx/responsive npm downloads" href="https://www.npmjs.com/package/@visx/responsive">
  <img src="https://img.shields.io/npm/dm/@visx/responsive.svg?style=flat-square" />
</a>

The `@visx/responsive` package is here to help you make responsive graphs.

**Enhancers**

`withScreenSize`

`withParentSize`

**Components**

`ParentSize`

`ScaleSVG`

### `withScreenSize`

If you would like your graph to adapt to the screen size, you can use `withScreenSize()`. The
resulting component will pass `screenWidth` and `screenHeight` props to the wrapped component
containing the respective screen dimensions.

### Example:

```js
import { withScreenSize } from '@visx/responsive';
// or
// import * as Responsive from '@visx/responsive';
// Responsive.withScreenSize(...);

let chartToRender = withScreenSize(MySuperCoolVisxChart);

// ... Render the chartToRender somewhere
```

## `withParentSize`

If you would like your graph to adapt to it's parent component's size, you can use
`withParentSize()`. The resulting component will pass `parentWidth` and `parentHeight` props to the
wrapped component containing the respective parent's dimensions.

### Example:

```js
import { withParentSize } from '@visx/responsive';
// or
// import * as Responsive from '@visx/responsive';
// Responsive.withParentSize(...);

let chartToRender = withParentSize(MySuperCoolVisxChart);

// ... Render the chartToRender somewhere
```

## `ParentSize`

You might do the same thing using the `ParentSize` component.

### Example:

```js
import { ParentSize } from '@visx/responsive';
// or
// import * as Responsive from '@visx/responsive';
// <Responsive.ParentSize />;

let chartToRender = (
  <ParentSize>
    {(parent) => (
      <MySuperCoolVisxChart
        parentWidth={parent.width}
        parentHeight={parent.height}
        parentTop={parent.top}
        parentLeft={parent.left}
        // this is the referrer to the wrapper component
        parentRef={parent.ref}
        // this function can be called inside MyVisxChart to cause a resize of the wrapper component
        resizeParent={parent.resize}
      />
    )}
  </ParentSize>
);

// ... Render the chartToRender somewhere
```

## `ScaleSVG`

You can also create a responsive chart with a specific viewBox with the `ScaleSVG` component.

### Example:

```js
import { ScaleSVG } from '@visx/responsive';
// or
// import * as Responsive from '@visx/responsive';
// <Responsive.ScaleSVG />

let chartToRender = (
  <ScaleSVG width={400} height={400}>
    <MySuperCoolVXChart />
  </ScaleSVG>
);

// ... Render the chartToRender somewhere
```

### ⚠️ `ResizeObserver` dependency

The `ParentSize` component and `withParentSize` enhancer rely on `ResizeObserver`s for auto-sizing.
If you need a polyfill, you can either polute the `window` object or inject it cleanly through
props:

```tsx
import { ResizeObserver } from 'your-favorite-polyfill';

function App() {
  return (
    <ParentSize resizeObserverPolyfill={ResizeObserver} {...}>
      {() => {...}}
    </ParentSize>
  );
```

## Installation

```
npm install --save @visx/responsive
```
