import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public colors: string[] = ["Unknown", "Red", "Orange", "Yellow", "Green", "Blue", "Purple", "White", "Black", "Gray", "Brown", "Tan", "Spotted", "Stripped", "Pink"];
  public sexes: string[] = ["Unknown", "Male", "Female"];
  public types: string[] = ["Unknown", "Dog", "Cat", "Bird", "Rodent", "Fish", "Reptile", "Amphibian", "Other"];
  public fixed: string[] = ["unknown", "Yes", "No"];
  public status: string[] = ["not viewed", "viewed"];
  public statusNotViewed = 0;
  public statusViewed = 1;

  //these are passed to a component
  //ideally we should be using LocalStorage or SessionStorage so they presist if user refreshes the page
  //but due to time constraints, they are in the service
  createAppListingId : number = 0;
  newTemplateId: number = 0;
  reviewAppsListingId: number = 0;
  withCred: boolean = true;

  //JL
  public dogColors = [
    {
      name: 'Black',
      description: 'Potential enhancement'
    },
    {
        name: 'Brindle',
        description: 'Potential enhancement'
    },
    {
        name: 'Brown/Chocolate',
        description: 'Potential enhancement'
    },
    {
        name: 'Gray/Blue/Silver/Salt & Pepper',
        description: 'Potential enhancement'
    },
    {
        name: 'Merle',
        description: 'Potential enhancement'
    },
    {
        name: 'Red/Golden/Orange/Chestnut',
        description: 'Potential enhancement'
    },
    {
        name: 'Silver & Tan (Yorkie colors)',
        description: 'Potential enhancement'
    },
    {
        name: 'Tan/Yellow/Fawn',
        description: 'Potential enhancement'
    },
    {
        name: 'Tricolor (Tan/Brown & Black & White)',
        description: 'Potential enhancement'
    },
    {
        name: 'White',
        description: 'Potential enhancement'
    }
  ];

public catColors = [
    {
      name: 'Black',
      description: 'Potential enhancement'
    },
    {
        name: 'Black & White or Tuxedo',
        description: 'Potential enhancement'
    },
    {
        name: 'Brown or Chocolate',
        description: 'Potential enhancement'
    },
    {
        name: 'Brown Tabby',
        description: 'Potential enhancement'
    },
    {
        name: 'Calico or Dilute Calico',
        description: 'Potential enhancement'
    },
    {
        name: 'Cream or Ivory',
        description: 'Potential enhancement'
    },
    {
        name: 'Gray, Blue or Silver Tabby',
        description: 'Potential enhancement'
    },
    {
        name: 'Gray or Blue',
        description: 'Potential enhancement'
    },
    {
        name: 'Orange or Red',
        description: 'Potential enhancement'
    },
    {
        name: 'Orange or Red Tabby',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Spotted Tabby/Leopard Spotted',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tabby',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tan or Fawn',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tan or Fawn Tabby',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tiger Striped',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'Tortoiseshell',
        description: 'Potential enhancement'
    }
    ,
    {
        name: 'White',
        description: 'Potential enhancement'
    }
  ];

  constructor() { }

  public colorToNumber(color: string): number {

    for (let i = 0; i < this.colors.length; i++) {

      if (color === this.colors[i]) {
        return i;
      }
    }
    //return unknown
    return 0;
  }

  public fixedToNumber(fixed: string): number {

    for (let i = 0; i < this.fixed.length; i++) {

      if (fixed === this.fixed[i]) {
        return i;
      }
    }
    //return unknown
    return 0;
  }

  public sexToNumber(sex: string): number {

    for (let i = 0; i < this.sexes.length; i++) {

      if (sex === this.sexes[i]) {
        return i;
      }
    }
    //return unknown
    return 0;
  }

  //this converts the type String to the Number value used in Java
  public typeToNumber(type: string): number {

    for (let i = 0; i < this.types.length; i++) {

      if (type === this.types[i]) {
        return i;
      }
    }
    //return unknown
    return 0;
  }
  
  public states = [ //with the help of mshafrir
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
  ];
}
