# Usage

## Example 1: Sorting Superheroes

```typescript
import { sortLines, SortOptions } from "textline-sorter";

const superheros: string = `Thor
Aquaman
Captain America
Scarlet Witch
Black Panther
Aquaman

Scarlet Witch

Cyborg

Black Widow

Captain America
Deadpool
The Flash
Spider-Man

Batman
Green Arrow
Wolverine
Green Arrow
The Flash`;

const options: SortOptions = {
  order: "alphabetical",
  direction: "asc",
  removeEmptyLines: true,
  removeDuplicateLines: true,
};

const sortedSuperheros = sortLines(superheros, options);
console.log(sortedSuperheros);
```

Output:

```
Aquaman
Batman
Black Panther
Black Widow
Captain America
Cyborg
Deadpool
Green Arrow
Scarlet Witch
Spider-Man
The Flash
Thor
Wolverine
```

## Example 2: Sorting iPhones by Release Date

```typescript
import { sortLines, SortOptions } from "textline-sorter";

const iPhones: string = `2019-09 iPhone 11 Pro Max
2017-09 iPhone X
2015-09 iPhone 6s
2023-09 iPhone 15
2016-09 iPhone 7 Plus
2022-03 iPhone SE (3rd generation)
2010-06 iPhone 4
2024-09 iPhone 16 Pro
2022-09 iPhone 14
2018-09 iPhone XS Max
2024-09 iPhone 16 Pro Max
2007-01 iPhone
2009-06 iPhone 3GS
2014-09 iPhone 6
2019-09 iPhone 11
2013-09 iPhone 5c
2021-09 iPhone 13
2013-09 iPhone 5s
2020-04 iPhone SE (2nd generation)
2020-10 iPhone 12 Mini
2020-10 iPhone 12 Pro
2017-09 iPhone 8
2020-10 iPhone 12 Pro Max
2021-09 iPhone 13 Pro Max
2008-06 iPhone 3G
2021-09 iPhone 13 Pro
2011-10 iPhone 4s
2016-03 iPhone SE (1st generation)
2023-09 iPhone 15 Plus
2022-09 iPhone 14 Plus
2019-09 iPhone 11 Pro
2018-09 iPhone XS
2022-09 iPhone 14 Pro Max
2014-09 iPhone 6 Plus
2024-09 iPhone 16
2015-09 iPhone 6s Plus
2018-09 iPhone XR
2012-09 iPhone 5
2017-09 iPhone 8 Plus
2023-09 iPhone 15 Pro Max
2024-09 iPhone 16 Plus
2021-09 iPhone 13 Mini
2022-09 iPhone 14 Pro
2016-09 iPhone 7
2020-10 iPhone 12
2023-09 iPhone 15 Pro`;

const options: SortOptions = {
  order: "alphanumerical",
  direction: "asc",
};

const sortediPhones = sortLines(iPhones, options);
console.log(sortediPhones);
```

Output:

```
2007-01 iPhone
2008-06 iPhone 3G
2009-06 iPhone 3GS
2010-06 iPhone 4
2011-10 iPhone 4s
2012-09 iPhone 5
2013-09 iPhone 5c
2013-09 iPhone 5s
2014-09 iPhone 6
2014-09 iPhone 6 Plus
2015-09 iPhone 6s
2015-09 iPhone 6s Plus
2016-03 iPhone SE (1st generation)
2016-09 iPhone 7
2016-09 iPhone 7 Plus
2017-09 iPhone 8
2017-09 iPhone 8 Plus
2017-09 iPhone X
2018-09 iPhone XR
2018-09 iPhone XS
2018-09 iPhone XS Max
2019-09 iPhone 11
2019-09 iPhone 11 Pro
2019-09 iPhone 11 Pro Max
2020-04 iPhone SE (2nd generation)
2020-10 iPhone 12
2020-10 iPhone 12 Mini
2020-10 iPhone 12 Pro
2020-10 iPhone 12 Pro Max
2021-09 iPhone 13
2021-09 iPhone 13 Mini
2021-09 iPhone 13 Pro
2021-09 iPhone 13 Pro Max
2022-03 iPhone SE (3rd generation)
2022-09 iPhone 14
2022-09 iPhone 14 Plus
2022-09 iPhone 14 Pro
2022-09 iPhone 14 Pro Max
2023-09 iPhone 15
2023-09 iPhone 15 Plus
2023-09 iPhone 15 Pro
2023-09 iPhone 15 Pro Max
2024-09 iPhone 16
2024-09 iPhone 16 Plus
2024-09 iPhone 16 Pro
2024-09 iPhone 16 Pro Max
```

## Example 3: Sorting City Names by Length

```typescript
import { sortLines, SortOptions } from "textline-sorter";

const cities: string = `New York City    
                  London            
      Tokyo                     
             Paris         
  Sydney      
           Mumbai        
      Rio de Janeiro
Cairo      
      Moscow
                     Berlin      
        Rome         
              Amsterdam       
            Istanbul
Dubai     
                Singapore 
                     Bangkok      
      Seoul      
            Mexico City                            
Toronto                 
    Vancouver             
         San Francisco     
                                     Los Angeles    
                    Chicago        
          Boston        
Miami
                Seattle     
      Barcelona
                              Madrid      
 Lisbon         
        Vienna         `;

const options: SortOptions = {
  order: "length",
  direction: "desc",
  trimWhitespace: true,
};

const sortedCities = sortLines(cities, options);
console.log(sortedCities);
```

Output:

```
Rio de Janeiro
San Francisco
New York City
Mexico City
Los Angeles
Vancouver
Singapore
Barcelona
Amsterdam
Istanbul
Toronto
Seattle
Chicago
Bangkok
Vienna
Sydney
Mumbai
Moscow
Madrid
London
Lisbon
Boston
Berlin
Tokyo
Seoul
Paris
Miami
Dubai
Cairo
Rome
```
