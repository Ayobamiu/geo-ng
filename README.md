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

### Get Areas/Sub-Areas of an LGA

```shell
import { getLgaSubAreas } from 'geo-ng';

const subAreas = getLgaSubAreas("AB", "ABA NORTH");
console.log(subAreas);


```

## API

The **geo-ng** package provides the following API:

- **getNigeriaStates()**: Returns a list of Nigerian states with their codes.
- **getLGAs(stateCode: string)**: Returns the Local Government Areas (LGAs) of a specified state.
- **getLgaSubAreas(stateCode: string, lga: string)**: Returns the areas/sub-areas of a specified LGA.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [**GitHub repository**](https://github.com/Ayobamiu/geo-ng).

## Attribution

The states, local government areas (LGAs), and sub-areas data in this package are sourced from https://govote.ng/, a website providing information related to geographic locations in Nigeria. This data was used to update and enhance the geographic data in the `geo-ng` package. Visit https://govote.ng/ for more details.

<!-- ## License

This project is licensed under the MIT License - see the LICENSE file for details.

```shell

Please make sure to replace `'your-username'` in the GitHub repository URL with your actual GitHub username and update the `LICENSE` file link accordingly. Feel free to customize the content and formatting of the README to suit your preferences and provide more information about your `geo-ng` package.

``` -->
