# react-croppy [![Build status for React Croppy](https://img.shields.io/circleci/project/sholladay/react-croppy/master.svg "Build Status")](https://circleci.com/gh/sholladay/react-croppy "Builds")

> Display cropped images in [React](https://reactjs.org/)

## Why?

 - Uses an `<img>` for semantic markup.
 - Maintains image aspect ratio at all times.
 - Ensures images are centered.

## Install

```sh
npm install react-croppy --save
```

## Usage

Get it into your program.

```jsx
import React from 'react';
import { Image } from 'react-croppy';

const App = () => {
    const crop = {
        x      : 10,
        y      : 10,
        width  : 40,
        height : 40
    };
    return <Image src="/cute-puppy.png" crop={crop} alt="A cute puppy">
};
```

## API

### `<Image>`

React component that renders an image using an [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img) element. You may optionally pass a `crop` object as a prop to control which part of the image is displayed.

## Contributing

See our [contributing guidelines](https://github.com/sholladay/react-croppy/blob/master/CONTRIBUTING.md "Guidelines for participating in this project") for more details.

1. [Fork it](https://github.com/sholladay/react-croppy/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/react-croppy/compare "Submit code to this project for review").

## License

[MPL-2.0](https://github.com/sholladay/react-croppy/blob/master/LICENSE "License for react-croppy") © [Seth Holladay](https://seth-holladay.com "Author of react-croppy")

Go make something, dang it.
