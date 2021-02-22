# Services
Services are another big part of Angular's application architecture. Unlike
components, which have a temporary lifecycle and are meant to be reusable,
services are long-living singleton's that can be provided to components
to provide supporting functionality.

We can consider that components (and other services) are dependant upon
the services they require to do their job.  Services themselves have no
view or styling rules - they're strictly logical.  Meaning only a .ts file.

Services are frequently used to isolate code which would otherwise be repeated
in components, to manage connection to backend services (http), and provide
data in an easily reusable and shareable format.

## Usage

Services are provided to components and other services via dependency injection.  Dependency injection is a format of application architecture in which dependencies are automatically provided to consuming resources such that we don't need to manage the creation and lifecycles of these dependencies.