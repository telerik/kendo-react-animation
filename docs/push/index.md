---
title: Overview
page_title: Overview | Kendo UI Push Animation for React
description: "Use the Kendo UI Push Animation component in a React project."
slug: overview_push_kendouiforreact
position: 1
---

# Push Overview

> Check the [Fundamentals]({% fundamentals_animation_kendouiforreact %}) help topic to get a better understanding of the Animation basics.

The Kendo UI Push for React shows a new component with a push transition effect. The new element pushes out the old one from the animation container.

The Push uses the [ReactTransitionGroup](https://facebook.github.io/react/docs/animation.html) component to detect whether the content is entering or leaving.

When using the Push, the entering element slides in pushing the old one out. The push direction can be up, down, left or right.

> In order for the Push to work, it must always be present in the rendering tree.

The Push is part of the [kendo-react-animation npm package](https://www.npmjs.com/package/@telerik/kendo-react-animation).

## Demos

### Default Setup

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
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

### Define Direction

The component enables you to control the push direction of the entering element through the [`direction`]({% slug api_push_kendouiforreact %}#direction-stringdefault-right) property.

The supported directions are:
- (Default) The `right` direction&mdash;Pushes the content from left to right.
- The `left` direction&mdash;Pushes the content from right to left.
- The `up` direction&mdash;Pushes the content from bottom to top.
- The `down` direction&mdash;Pushes the content from top to bottom.

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { direction: "right", index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    onChange = (e) => {
        this.setState({
            direction: e.target.value
        });
    }

    render() {
        const { direction, index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Direction:
                    </dt>
                    <dd>
                        <select onChange={this.onChange} value={direction}>
                            <option value="up">Up</option>
                            <option value="right">Right</option>
                            <option value="down">Down</option>
                            <option value="left">Left</option>
                        </select>
                    </dd>
                </dl>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push direction={direction}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Set Push Duration

The component enables you to control the animation duration of the entering and leaving components. To modify the push duration, update the [`duration`]({% slug api_push_kendouiforreact %}#duration-numberdefault-300) property and update the duration in the corresponding CSS class.

> Sync up the `duration` property with the transition duration defined in the static `k-push-{direction}-enter-active` and `k-push-{direction}-leave-active` CSS classes.

```html
  <style>
    .k-push-right-enter-active {
        transition: transform 800ms ease-in-out;
    }

    .k-push-right-leave-active {
        transition: transform 800ms ease-in-out;
    }

    .content {
        width: 100px;
        padding: 10px;
        color: #787878;
        background-color: #fcf7f8;
        font-size: 13px;
        font-family: Helvetica, Arial, sans-serif;
        letter-spacing: 1px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.05);
    }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        const pushProps = {
            duration: 800
        };

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push {...pushProps}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Disable Push Animation

The Push component allows you to disable the animation, which results in an instant element display. To disable the push animation, set the [`animateOnPush`]({% slug api_push_kendouiforreact %}#animateonpush-booleandefault-true) option to `false`.

```html
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        return (
            <div>
                <dl>
                    <dt>
                        Push:
                    </dt>
                    <dd>
                        <button onClick={this.onClick}>Animate</button>
                    </dd>
                </dl>

                <KendoReactAnimation.Push animateOnPush={false}>
                    <div className="content" key={index}>{index}</div>
                </KendoReactAnimation.Push>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Wire Life-Cycle Hooks

The Push calls special hooks when children are declaratively added.

### Before Animation Starts

The [`componentWillPushIn`]({% slug api_push_kendouiforreact %}#componentwillpushin) hook is called when a component is added to an existing Push component and the animation has not started yet.

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }

  .example > div {
    width: 200px;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { callbackCalls: [], index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    onComponentWillPushIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component will push in");

        this.setState({
            callbackCalls: calls
        });
    }

    renderCallbackCalls() {
        return this.state.callbackCalls.map((call) => (
            <li>{call}</li>
        ));
    }

    render() {
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push componentWillPushIn={this.onComponentWillPushIn}>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>

                <div>
                    <h4>Log:</h4>
                    <ul>
                        {this.renderCallbackCalls()}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### After Animation Finishes

The [`componentDidPushIn`]({% slug api_push_kendouiforreact %}#componentdidpushin) hook is called when a component is added to an existing Push component and the animation is now finished.

```html-preview
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }

  .example > div {
    width: 200px;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { callbackCalls: [], index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    onComponentDidPushIn = () => {
        const calls = this.state.callbackCalls.slice();

        calls.push("component did push in");

        this.setState({
            callbackCalls: calls
        });
    }

    renderCallbackCalls() {
        return this.state.callbackCalls.map((call) => (
            <li>{call}</li>
        ));
    }

    render() {
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push componentDidPushIn={this.onComponentDidPushIn}>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>

                <div>
                    <h4>Log:</h4>
                    <ul>
                        {this.renderCallbackCalls()}
                    </ul>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

## Style the Appearance

Custom CSS classes can be set to the Push and to its children components.

### Decorate the Push

To set a CSS class to the Push component, use the [`className`]({% slug api_push_kendouiforreact %}#classname-string) property.

```html
  <style>
  .content {
    width: 100px;
    padding: 10px;
    color: #787878;
    background-color: #fcf7f8;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }

  .wrapper {
    border: 1px solid red;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push className="wrapper">
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

### Decorate the Children

#### Set CSS Classes

To set a CSS class to the Push children components and to style the animated content, use the [`componentChildClassName`]({% slug api_push_kendouiforreact %}#componentchildclassname-string) property. 

```html
  <style>
  .child {
    color: black;
    background-color: orange;
  }

  .content {
    width: 100px;
    padding: 10px;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push componentChildClassName="child">
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
```

#### Use Default Child CSS Classes

By default, the child component renders a `k-child-animation-container` CSS class. It can be used to style the element without the need of specifying a separate CSS class.

```html
  <style>
  .k-animation-container > .k-child-animation-container {
    color: black;
    background-color: orange;
  }

  .content {
    width: 100px;
    padding: 10px;
    font-size: 13px;
    font-family: Helvetica, Arial, sans-serif;
    letter-spacing: 1px;
    text-align: center;
    border: 1px solid rgba(0,0,0,.05);
  }
  .example {
    display: flex;
  }
  </style>
  <div id="app"></div>
```
```jsx
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { index: 1 };
    }

    onClick = () => {
        this.setState({
            index: this.state.index + 1
        });
    }

    render() {
        const { index } = this.state;

        return (
            <div className="example">
                <div>
                    <dl>
                        <dt>
                            Push:
                        </dt>
                        <dd>
                            <button onClick={this.onClick}>Animate</button>
                        </dd>
                    </dl>

                    <KendoReactAnimation.Push>
                        <div className="content" key={index}>{index}</div>
                    </KendoReactAnimation.Push>
                </div>
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

* [API Reference of the Push]({% slug api_push_kendouiforreact %})
