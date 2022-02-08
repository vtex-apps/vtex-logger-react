📢 Use this project, [contribute](https://github.com/vtex-apps/product-context) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# VTEX Logger React

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

The VTEX Logger React app will help to make log entries in the VTEX IO Logging Service on React Apps.

## Configuration

1. Add the `vtex-logger-react` app as a dependency in you theme's `manifest.json` file:

```diff
  "dependencies": {
+   "vtex.vtex-logger-react": "1.x"
  }
```

Now, you can import any of the exported components and hooks from the app. Here's an example of a component that use the `useLog` hook from the `useLoggerVtex` to log some relevant info:

```tsx
// Notice that this is TypeScript, and this code should be in a .tsx file
import React, { FC } from 'react'
import { useLoggerVtex } from 'vtexarg.vtex-logger-react'
import { Button } from 'vtex.styleguide'

const MyComponent: FC = () => {
  const { useLog } = useLoggerVtex()
  const exampleDetail = {
    id: '1',
    name: 'Test Name',
    description: 'Test Description',
    price: '100',
    quantity: '1',
    brand: 'Test Brand',
    category: 'Test Category',
  }

  const handleClickLog = async () => {
    const appName = 'my-app'
    const message = 'Test log'
    await useLog({ app: appName, message: message, detail: exampleDetail })
  }

  return (
    <Fragment>
      <Button onClick={handleClickLog} />
    </Fragment>
  )
}

export default MyComponent
```

:warning: _Be sure to run `vtex setup --typings` in your project to install the correct TypeScript types exported by this app._

### Hooks

#### `useLog`

This is the most useful export from this app. The `useLog` hook can be used to log messages to the VTEX IO Logging Service.

It needs to recieve:

- `app`: The app name that want to log the message.
- `message`: The message to be logged.
- `detail`: An object with the details of the log. It can be any JSON-serializable object.

```ts
interface VtexLoggerProps {
  app: string
  message: string
  detail: any
}
```

You should expect an object that looks like this:

```json
{
  "logger": {
    "status": 200
  }
}
```

Always check the `status` property to know if the log was successful.

:information*source: \_To have the full type definition in your development environment, be sure to run `vtex setup` in your project to install all TypeScript types exported by this app.*

<!-- DOCS-IGNORE:start -->

## Review the Logs (Splunk)

With this query you can retrieve the logs from Splunk, filtering by `app`:

```
index=io_vtex_logs app="vtex.vtex-logger-graphql@0.2.0" account={account} workspace={workspace} | spath "data.app" | search "data.app"={app}
```

Example:

```
index=io_vtex_logs app="vtex.vtex-logger-graphql@0.2.0" account=gbonacchi workspace=customstockexport | spath "data.app" | search "data.app"="my-app"
```

![image](https://user-images.githubusercontent.com/55905671/146546432-2a1df845-5d46-4f5d-8ba5-049fed2b0efc.png)

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/germanBonacchi"><img src="https://avatars.githubusercontent.com/u/55905671?v=4" width="100px;" alt=""/><br /><sub><b>Germán Bonacchi</b></sub></a><br /><a href="https://github.com/vtex-apps/vtex-logger-react/commits?author=germanBonacchi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/tomymehdi"><img src="https://avatars.githubusercontent.com/u/774112?v=4" width="100px;" alt=""/><br /><sub><b>Tomás Alfredo Mehdi</b></sub></a><br /><a href="https://github.com/vtex-apps/vtex-logger-react/commits?author=tomymehdi" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<!-- DOCS-IGNORE:end -->
