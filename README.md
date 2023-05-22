# geo-ng

**geo-ng** is an npm package that provides data related to geographic locations in Nigeria.

## Installation

You can install **geo-ng** via npm or yarn:

```shell
npm install geo-ng
```

or

```shell
yarn add geo-ng
```

## Usage

### Get List of Nigerian States

```shell
import { getNigeriaStates } from 'geo-ng';

const nigeriaStates = getNigeriaStates();
console.log(nigeriaStates);

```

### Get Local Government Areas (LGAs) of a State

```shell
import { getLGAs } from 'geo-ng';

const lgas = getLGAs('AB');
console.log(lgas);

```

## API

The **geo-ng** package provides the following API:

- **getNigeriaStates()**: Returns a list of Nigerian states with their codes.
- **getLGAs(stateCode: string)**: Returns the Local Government Areas (LGAs) of a specified state.

<!-- ## Contributing -->

<!-- Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the **GitHub repository**. -->

<!-- ## License

This project is licensed under the MIT License - see the LICENSE file for details.

```shell

Please make sure to replace `'your-username'` in the GitHub repository URL with your actual GitHub username and update the `LICENSE` file link accordingly. Feel free to customize the content and formatting of the README to suit your preferences and provide more information about your `geo-ng` package.

``` -->
