---
title: Expand Overview
page_title: Expand Overview | Kendo UI Expand Animation for React
description: "Use the Kendo UI Expand Animation component in a React project."
slug: overview_expand_kendouiforreact
position: 1
---

# Expand Overview

The Kendo UI Expand component for React shows/hides a single element animating the height of the container element. The component utilizes [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) to detect which children is entering or leaving.
**Note that only entering or leaving from the DOM elements will be animated**. The entering element will be shown with a gradual `height` transition from 0% to 100%. Conversely, the leaving element will be hidden with a gradual `height` transition from 100% to 0%.

> The Kendo UI Expand component should be always present in the virtual DOM in order to work

## Demos

### Default Setup

The example below demonstrates the default setup of a Kendo UI Expand Animation for React.

```html-preview
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { expand: true };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div>Content</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Animate:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Expand>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Configuration

### Expand duration

The Expand component can control the duration of the expand (showing) effect. To configure the expand duration you will need to define the `expandDuration` property

```html-preview
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { expand: false };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div>Content</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Animate:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Expand expandDuration={800}>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Collapse duration

The Expand component can control the duration of the collapse (hiding) effect. To configure the collapse duration you will need to define the `collapseDuration` property

```html-preview
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { expand: true };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div>Content</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Animate:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Expand collapseDuration={800}>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable expand animation

The Expand allows to disable the showing animation, which will result in instant element display. To disable animation, you will need to define the `animateOnExpand` option to `false`.

```html-preview
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { expand: false };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div>Content</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Animate:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Expand animateOnExpand={false}>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable collapse animation

The Expand allows to disable the hiding animation, which will result in instant element hiding. To disable animation, you will need to define the `animateOnCollapse` option to `false`.

```html-preview
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { expand: true };
    }

    onClick = () => {
        this.setState({
            expand: !this.state.expand
        });
    }

    render() {
        const { expand } = this.state;

        const children = expand ? (<div>Content</div>) : null;

        return (
            <div>
                <dl>
                    <dt>
                        Animate:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Expand animateOnCollapse={false}>
                    {children}
                </KendoReactAnimation.Expand>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Suggested Links

* [Client-Side API Reference for the Kendo UI Expand Component](https://github.com/telerik/kendo-react-animation/blob/master/docs/expand/api.md)