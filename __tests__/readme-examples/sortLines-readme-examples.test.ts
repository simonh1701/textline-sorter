import { sortLines } from "../../src/index";
import { SortOptions } from "../../src/sortLines";

describe("sortLines", () => {
  // A unordered list of superheros
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

  // A ordered list of superheros with empty lines removed
  const superherosSorted: string = `Aquaman
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
Wolverine`;

  test("sorts superheros alphabetically and removes empty lines", () => {
    const result = sortLines(superheros, {
      order: "alphabetical",
      direction: "asc",
      removeEmptyLines: true,
      removeDuplicateLines: true,
    } as SortOptions);

    expect(result).toBe(superherosSorted);
  });

  // A unordered list of iPhones and their release dates
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

  // A ordered list of iPhones and their release dates
  const iPhonesSorted: string = `2007-01 iPhone
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
2024-09 iPhone 16 Pro Max`;

  test("sorts iPhones with release date alphanumerically", () => {
    const result = sortLines(iPhones, {
      order: "alphanumerical",
      direction: "asc",
    } as SortOptions);

    expect(result).toBe(iPhonesSorted);
  });

  // A unordered list of cities
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

  // A ordered list of cities with whitespace removed
  const citiesSorted: string = `Rio de Janeiro
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
Rome`;

  test("sorts city names by length and removes leading and trailing whitespace", () => {
    const result = sortLines(cities, {
      order: "length",
      direction: "desc",
      trimWhitespace: true,
    } as SortOptions);

    expect(result).toBe(citiesSorted);
  });
});
