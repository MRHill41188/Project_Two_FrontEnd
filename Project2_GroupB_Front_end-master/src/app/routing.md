# Routing

Routing is the process of updating the view to display different content based on the user's actions.  We can think of this similar to how a non-SPA would use links to navigate users to different parts of the website.  In a SPA, we want to route the users to different views within the web app.

3 tasks must be completed to use routing

1. We must define a <router-outlet>. The router-outlet is an Angular component which represents a location to render the routed component.

2. We must provide controls for routing.  Controls can be provided in the template using the Link="/resource" attribute to provide simple, one click routing.  You can also route programmatically, by injecting the Router service. This can be useful when the choice to route is a function on some programmatic behavior. 

3. We must have a router-module which provides an array of routes.  Routes are essentially a map of URL contexts to components to render for those URL contexts.  For instance, /cats might render the CatComponent, whereas /dogs might render the DogComponent.