import React from 'react';

import classnames from 'classnames';
import raf from 'raf';
import util from './util';

const APPEAR_ANIMATION_ID = util.getAnimationField(util.animationType.appear);
const ENTER_ANIMATION_ID = util.getAnimationField(util.animationType.enter);
const LEAVE_ANIMATION_ID = util.getAnimationField(util.animationType.leave);

const APPEAR_TIMEOUT_ID = util.getTimeoutField(util.animationType.appear);
const ENTER_TIMEOUT_ID = util.getTimeoutField(util.animationType.enter);
const LEAVE_TIMEOUT_ID = util.getTimeoutField(util.animationType.leave);

export default class AnimationChild extends React.Component {
    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.node
        ]),
        componentChildClassName: React.PropTypes.string,
        componentDidAppear: React.PropTypes.func,
        componentDidEnter: React.PropTypes.func,
        componentDidLeave: React.PropTypes.func,
        componentWillAppear: React.PropTypes.func,
        componentWillEnter: React.PropTypes.func,
        componentWillLeave: React.PropTypes.func,
        transitionAppear: React.PropTypes.bool,
        transitionAppearTimeout: React.PropTypes.number,
        transitionEnter: React.PropTypes.bool,
        transitionEnterTimeout: React.PropTypes.number,
        transitionLeave: React.PropTypes.bool,
        transitionLeaveTimeout: React.PropTypes.number,
        transitionName: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.shape({
                enter: React.PropTypes.string,
                leave: React.PropTypes.string,
                active: React.PropTypes.string
            }),
            React.PropTypes.shape({
                enter: React.PropTypes.string,
                enterActive: React.PropTypes.string,
                leave: React.PropTypes.string,
                leaveActive: React.PropTypes.string,
                appear: React.PropTypes.string,
                appearActive: React.PropTypes.string
            })
        ])
    }

    constructor(props) {
        super(props);

        this.state = { className: null, style: null };

        this.reset();
    }

    appearCallback = util.noop()
    enterCallback = util.noop()
    leaveCallback = util.noop()

    animate(type) {
        const animationTimeout = this.props[`transition${util.capitilize(type)}Timeout`];
        const animationIdName = util.getAnimationField(type);
        const timeoutIdName = util.getTimeoutField(type);

        const { className, activeClassName } = util.getTransitionClasses(
            this.props.transitionName,
            util.animationType[type]
        );

        if (this[animationIdName] || this[timeoutIdName]) {
            this.stop();
            return;
        }

        this[timeoutIdName] = setTimeout(() => {
            this.stop();
        }, animationTimeout);

        this[animationIdName] = raf(() => this.performAnimation(animationIdName, className, activeClassName));
    }

    performAnimation = (animationIdName, className, activeClassName, activate) => {
        this.setState({
            className: classnames({ [className]: true, [activeClassName]: activate })
        });

        if (!activate) {
            this[animationIdName] = raf(() => this.performAnimation(animationIdName, className, activeClassName, true));
        }
    }

    reset() {
        this[APPEAR_ANIMATION_ID] = null;
        this[ENTER_ANIMATION_ID] = null;
        this[LEAVE_ANIMATION_ID] = null;

        this[APPEAR_TIMEOUT_ID] = null;
        this[ENTER_TIMEOUT_ID] = null;
        this[LEAVE_TIMEOUT_ID] = null;

        this.appearCallback = util.noop;
        this.enterCallback = util.noop;
        this.leaveCallback = util.noop;
    }

    stop(mute) {
        clearTimeout(this[APPEAR_TIMEOUT_ID]);
        clearTimeout(this[ENTER_TIMEOUT_ID]);
        clearTimeout(this[LEAVE_TIMEOUT_ID]);

        this._mute = mute;

        this.appearCallback();
        this.enterCallback();
        this.leaveCallback();

        this._mute = false;

        this.reset();
    }

    resetState() {
        this.setState({ className: null, style: null });
    }

    animateComponent(type, done) {
        if (this.props[`transition${util.capitilize(type)}`]) {
            this[`${type}Callback`] = done;
            this.animate(type);
        } else {
            done();
        }
    }

    callHook(callback) {
        if (this._mute || !callback) {
            return;
        }

        callback();
    }

    componentWillAppear(done) {
        this.callHook(this.props.componentWillAppear);
        this.animateComponent(util.animationType.appear, done);
    }

    componentDidAppear() {
        this.resetState();
        this.callHook(this.props.componentDidAppear);
    }

    componentWillEnter(done) {
        this.callHook(this.props.componentWillEnter);
        this.animateComponent(util.animationType.enter, done);
    }

    componentDidEnter() {
        this.resetState();

        clearTimeout(this.componentDidEnterTimeoutId);

        this.componentDidEnterTimeoutId = setTimeout(() => (
            this.callHook(this.props.componentDidEnter)
        ));
    }

    componentWillLeave(done) {
        this.callHook(this.props.componentWillLeave);
        this.animateComponent(util.animationType.leave, done);
    }

    componentDidLeave() {
        this.resetState();
        this.callHook(this.props.componentDidLeave);
    }

    render() {
        const className = classnames(this.state.className, this.props.componentChildClassName, 'k-child-animation-container');

        return (
            <div className={className}>
                {this.props.children}
            </div>
        );
    }
}
