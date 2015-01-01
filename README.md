Velociratchet Meteor Package
============================

# Ratchet UI + VelocityJS page transitions

Velociratchet is a Meteor mobile app prototyping tool built on Ratchet, Velocity, Momentum, and Iron Router. 

## Usage

##### Layout Template

Wrap the Iron Router's `yield` helper with the `momentum` helper:
```
{{#momentum plugin='iron-router' options=transition}}
  {{>yield}}
{{/momentum}}
```

For UI elements that should not be animated during page transitions, like Ratchet's footer menu, you can add extra template below the `yield` helper:
```
{{#momentum plugin='iron-router' options=transition}}
  {{>yield}}
  {{>myFooterTemplateName}}
{{/momentum}}
```
