# Client Example

This repository contains a cut down example of the National Heavy Vehicle Regulator (NHVR) web application.

The web application when complete will render a data table and load data using an apollo graphql query to a public graphql endpoint.

# Missing code

## Graphql query
Missing fields in query.

`src/containers/Home/api/queries/UsefulContacts.gql`

## Typescript
Missing type definition for component props.

`src/utils/datatable/useDatatable.ts`

## Layout
Missing header and footer components.

`??? find layout and add header and footer`

# Repository layout

The source files can be found under `src/`.  The folder layout is as follows:

* `app/` contains the web application start up files including the apollo client configuration and theme configuration.  The theme is based on the material-ui styles package.
* `common/` contains JSON schema files representing domain entities. In this example, the `pbsContact` JSON schema is used to define the labels for a data table displaying data from the pbsContact data source.
* `components/` contains common reusable react components which are generally stateless functional components.
* `containers/` contains page content and other sub-containers (e.g. tab panes, forms). These pages sit within the main page section of layouts. Containers define the user interface and flow.  Therefore, containers also manage user and API events usinig react hooks as the mechanism for managing side effects and the interface to the apollo client cache. 
* `layouts/` contains overall page layouts including the use and position of headers, menus, footers and the main page content.
* `typeDefs/` contains typescript type definitions.
* `utils/` contains utility functions and types.