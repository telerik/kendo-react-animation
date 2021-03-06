import React from 'react';
import ReactDOM from 'react-dom';
import AnimationGroup from './AnimationGroup';

import assign from 'object-assign';
import styles from '@telerik/kendo-theme-default/styles/animation/main';
import util from './util';

/*eslint react/forbid-prop-types:0*/

export default class Push extends React.Component {
    static propTypes = {
        animateOnPush: React.PropTypes.bool,
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        className: React.PropTypes.string,
        componentChildClassName: React.PropTypes.string,
        componentDidPushIn: React.PropTypes.func,
        componentWillPushIn: React.PropTypes.func,
        direction: React.PropTypes.oneOf([ 'up', 'down', 'left', 'right' ]),
        duration: React.PropTypes.number,
        fixedContainer: React.PropTypes.bool,
        style: React.PropTypes.object,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                pushIn: React.PropTypes.string,
                pushInActive: React.PropTypes.string,
                pushOut: React.PropTypes.string,
                pushOutActive: React.PropTypes.string
            })
        ])
    }

    static defaultProps = {
        animateOnPush: true,
        direction: "right",
        duration: 300,
        fixedContainer: true
    }

    constructor(props) {
        super(props);

        this.state = { style: null };
    }

    componentDidMount() {
        this.updateContainerDimensions();
    }

    componentWillReceiveProps() {
        this.updateContainerDimensions();
    }

    getDefaultTransitionName() {
        const { direction } = this.props;

        return {
            pushIn: styles[`push-${direction}-enter`],
            pushInActive: styles[`push-${direction}-enter-active`],
            pushOut: styles[`push-${direction}-leave`],
            pushOutActive: styles[`push-${direction}-leave-active`]
        };
    }

    updateContainerDimensions() {
        const { height, width } = this.state;
        const content = ReactDOM.findDOMNode(this).firstChild.firstChild;

        let style = null;

        if (this.props.fixedContainer && content) {
            const newHeight = util.outerHeight(content);
            const newWidth = util.outerWidth(content);

            if (height !== newHeight || width !== newWidth) {
                style = {
                    height: newHeight,
                    width: newWidth
                };
            }
        }

        this.setState({ style: style });
    }

    componentDidEnter = () => {
        const { componentDidPushIn } = this.props;

        if (componentDidPushIn) {
            componentDidPushIn();
        }

        this.updateContainerDimensions();
    }

    getChildProps() {
        const {
            animateOnPush,
            componentChildClassName,
            componentWillPushIn,
            duration,
            transitionName = this.getDefaultTransitionName()
        } = this.props;

        let mappedTransitionName = util.mapTransitionClasses(
            transitionName,
            [ 'pushIn', 'pushOut' ],
            [ 'enter', 'leave' ]
        );

        return {
            componentChildClassName: componentChildClassName,
            componentDidEnter: this.componentDidEnter,
            componentWillEnter: componentWillPushIn,
            transitionAppear: false,
            transitionEnter: animateOnPush,
            transitionEnterTimeout: duration,
            transitionLeave: animateOnPush,
            transitionLeaveTimeout: duration,
            transitionName: mappedTransitionName
        };
    }

    render() {
        const { children, className, style } = this.props;

        const animationProps = {
            childFactory: (child) => React.cloneElement(child, this.getChildProps()),
            className: className,
            style: assign({}, style, this.state.style),
            transitionName: ""
        };

        return (
            <AnimationGroup {...animationProps}>
                {children}
            </AnimationGroup>
        );
    }
}
