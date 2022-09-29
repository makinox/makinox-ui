# @makinox/makinox-ui

A little UI library with basic components and near zero dependencies and hard configurations.


## Used

- Stiches
- Storyboard `Only for development`
- React `Only for storybook visualization, you can use any framework you like`

Link to [makinox-ui!](https://makinox-ui.jesusbossa.dev/)

## Usage

Just install with
```sh
npm i @makinox/makinox-ui
----
yarn add @makinox/makinox-ui
```

Add this to your code if you want the base colors
```ts
import '@makinox/makinox-ui/dist/colors.css';
```
If you want to use custom colors, just copy the format of the file and replace the colors, then import the content of the file to your code

Also, you can add the base layout classes like this if you want, this is optional

```ts
import '@makinox/makinox-ui/dist/index.css';
```

## Documentation

You can see the current components available in this web https://makinox-ui.jesusbossa.dev
Also, you can see these components locally running this command
```sh
yarn storybook
```

## Contributing

If you're interested in contributing to project, please read our [contributing docs](https://github.com/makinox/makinox-ui/blob/main/.github/CONTRIBUTING.md) **before submitting a pull request**.