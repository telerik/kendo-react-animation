---
title: API
page_title: API | Kendo UI Zoom for React
description: "Configure the Kendo UI Zoom for React through its API reference."
slug: api_zoom_kendouiforreact
position: 2
---

# Zoom API

Represents the Kendo UI Zoom Animation component for React.

## Define Direction

#### direction `String`*(default: "out")*

Specifies the direction of the `zoom` animation.

> The `direction` property is ignored if a custom `transitionName` configuration is defined. In such cases, change the animation direction with the custom CSS classes that are used.

The supported directions are:
- (Default) The `out` direction&mdash;Zooms in the entering element and fades out leaving one.
- The `in` direction&mdash;Fades in the entering element and zooms out the leaving one.

## Set Duration

#### duration `Number`*(default: 300)*

Specifies the duration of the `zoom` animation. After the time runs out, the animation will be terminated.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

## Apply Effects

#### transitionName `String|Object`*(default: "k-zoom")*

Specifies the CSS classes used to animate the elements.

> The `duration` value should be synchronized with the duration of the CSS transition animation.

#### transitionName.zoomIn `String`

Specifies the CSS class that is added to the entering element on initial render.

#### transitionName.zoomInActive `String`

Specifies the CSS class that is added to the entering element after the `zoomIn` class to start the animation.

> The `zoomInActive` CSS class should perform the CSS transition effect.

#### transitionName.zoomOut `String`

Specifies the CSS class that is added to the leaving element on initial render.

#### transitionName.zoomOutActive `String`

Specifies the CSS class that is added to the leaving element after the `zoomOut` class to start the animation.

> The `zoomOutActive` CSS class should perform the CSS transition effect.

## Disable Animation

#### animateOnZoom `Boolean`*(default: true)*

Specifies whether to animate the entering (showing) element and leaving (hiding) elements.

## Wire Life-cycle hooks

### componentWillZoomIn

Called when a component is added to an existing Zoom component and the animation has not started yet.

### componentDidZoomIn

Called when a component is added to an existing Zoom component and the animation is now finished.

## Class Name Decoration

#### className `String`

Specifies CSS class names, set to the animation component

#### componentChildClassName `String`

Specifies CSS class names, set to each of the animated children components
