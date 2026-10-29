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

## Data accuracy

This package targets the constitutional set of **36 states + FCT**, **768 LGAs + 6 FCT area councils (774 total)**, and INEC-style wards/sub-areas.

Corrections in this release:

- Removed misplaced LGAs (`CHIBOK` from Cross River, `OBUDU` from Delta)
- Fixed Kano to the official **44** LGAs (wards that were listed as LGAs were folded into `NASARAWA`)
- Corrected truncated/misspelled LGA names across several states
- Aligned published JS with the TypeScript source

Ward/sub-area lists may still be incomplete for some LGAs.

## Sources

- [1999 Constitution of Nigeria, s.3(6) / First Schedule](https://sccr.gov.ng/chapter-1-part-1/) — 36 states, 768 LGAs, 6 FCT area councils
- [INEC state offices & LGA directory](https://www.inecnigeria.org/about/state-offices/) — LGA counts per state (incl. FCT)
- [INEC Cross River LGA list (PDF)](https://wp1.inecnigeria.org/wp-content/uploads/2024/04/CROSS-RIVER-STATE.pdf)
- [Kano State Government — 44 LGAs](https://kanostate.gov.ng/lgas/)
- [OpenAdmin Nigeria admin divisions](https://openadmindata.org/ng/) — 37 states/territories, 774 LGAs, ~8,799 wards
- Original ward scrape: [govote.ng](https://govote.ng/)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [**GitHub repository**](https://github.com/Ayobamiu/geo-ng).
