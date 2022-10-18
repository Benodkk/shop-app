import iphone110 from './photos/iphone-11.jpg'
import iphone112 from './photos/iphone-11-2.jpg'
import iphone120 from './photos/iphone-12.jpg'
import iphone122 from './photos/iphone-12-2.jpg'
import iphone130 from './photos/iphone13.jpg'
import iphone132 from './photos/iphone13-1.jpg'
import iphone133 from './photos/iphone-13-2.jpg'
import iphoneX from './photos/iphone-X.jpg'
import iphoneX2 from './photos/iphone-X-2.jpg'
import dell from './photos/laptop-dell.jpg'
import dell2 from './photos/laptop-dell-2.jpg'
import Macbookpro from './photos/macbook-pro.jpg'
import Macbookpro2 from './photos/macbook-pro-2.jpg'
import Macbookair from './photos/macbook-air.jpg'
import Macbookair2 from './photos/macbook-air-2.jpg'

let currencies = [
    {
      "label": "USD",
      "symbol": "$"
    },
    {
      "label": "GBP",
      "symbol": "£"
    },
    {
      "label": "AUD",
      "symbol": "A$"
    },
    {
      "label": "JPY",
      "symbol": "¥"
    },
    {
      "label": "RUB",
      "symbol": "₽"
    }
]



let datas = [
  {
    "name": "Iphone X",
    "type": "smartphone",
    "id":1,
    "description":"Rem a numquam non accusantium porro. Enim qui labore ullam. Soluta sint ut voluptatem consequatur sed ipsam. Adipisci necessitatibus rerum eum placeat et provident nesciunt.",
    "gallery":[ iphoneX,
      iphoneX2

    ],
    "attributes": [
      {
        "id": "Color",
        "name": "Color",
        "type": "swatch",
        "items": [
          {
            "displayValue": "Green",
            "value": "#44FF03",
            "id": "Green"
          },
          {
            "displayValue": "Cyan",
            "value": "#03FFF7",
            "id": "Cyan"
          },
          {
            "displayValue": "Blue",
            "value": "#030BFF",
            "id": "Blue"
          },
          {
            "displayValue": "Black",
            "value": "#000000",
            "id": "Black"
          },
          {
            "displayValue": "White",
            "value": "#FFFFFF",
            "id": "White"
          }
        ]
      },
      {
        "id": "Capacity",
        "name": "Capacity",
        "type": "text",
        "items": [
          {
            "displayValue": "512G",
            "value": "512G",
            "id": "512G"
          },
          {
            "displayValue": "1T",
            "value": "1T",
            "id": "1T"
          }
        ]
      }
    ],
    "prices": [
      {
        "currency": {
          "label": "USD",
          "symbol": "$"
        },
        "amount": 844.02
      },
      {
        "currency": {
          "label": "GBP",
          "symbol": "£"
        },
        "amount": 606.67
      },
      {
        "currency": {
          "label": "AUD",
          "symbol": "A$"
        },
        "amount": 1088.79
      },
      {
        "currency": {
          "label": "JPY",
          "symbol": "¥"
        },
        "amount": 91147.25
      },
      {
        "currency": {
          "label": "RUB",
          "symbol": "₽"
        },
        "amount": 63826.91
      }
    ],
  },
  {
    "name": "Iphone 11",
    "type": "smartphone",
    "id":2,
    "description":"Dignissimos minus minus. Qui ea autem explicabo laudantium et esse autem cupiditate. Architecto veniam rerum rerum consequatur quia odit qui. Quia necessitatibus nobis.",
    "gallery":[iphone110,
      iphone112

    ],
    "attributes": [
      {
        "id": "Color",
        "name": "Color",
        "type": "swatch",
        "items": [
          {
            "displayValue": "Green",
            "value": "#44FF03",
            "id": "Green"
          },
          {
            "displayValue": "Cyan",
            "value": "#03FFF7",
            "id": "Cyan"
          },
          {
            "displayValue": "Blue",
            "value": "#030BFF",
            "id": "Blue"
          },
          {
            "displayValue": "Black",
            "value": "#000000",
            "id": "Black"
          },
          {
            "displayValue": "White",
            "value": "#FFFFFF",
            "id": "White"
          }
        ]
      },
      {
        "id": "Capacity",
        "name": "Capacity",
        "type": "text",
        "items": [
          {
            "displayValue": "512G",
            "value": "512G",
            "id": "512G"
          },
          {
            "displayValue": "1T",
            "value": "1T",
            "id": "1T"
          }
        ]
      }
    ],
    "prices": [
      {
        "currency": {
          "label": "USD",
          "symbol": "$"
        },
        "amount": 10000
      },
      {
        "currency": {
          "label": "GBP",
          "symbol": "£"
        },
        "amount": 900
      },
      {
        "currency": {
          "label": "AUD",
          "symbol": "A$"
        },
        "amount": 1400
      },
      {
        "currency": {
          "label": "JPY",
          "symbol": "¥"
        },
        "amount": 100341.21
      },
      {
        "currency": {
          "label": "RUB",
          "symbol": "₽"
        },
        "amount": 80000.00
      }
    ],
  },
  {
    "name": "Iphone 12",
    "type": "smartphone",
    "id":3,
    "description":"Ipsum quia expedita dolorum exercitationem rerum fugiat ut aut repudiandae. At temporibus et ipsam autem pariatur animi consectetur est. Hic omnis excepturi sequi quia aut accusantium quos molestiae. Quaerat ipsum labore ullam et aut tempora itaque.",
    "gallery":[iphone122,
      iphone120

    ],
    "attributes": [
      {
        "id": "Color",
        "name": "Color",
        "type": "swatch",
        "items": [
          {
            "displayValue": "Green",
            "value": "#44FF03",
            "id": "Green"
          },
          {
            "displayValue": "Cyan",
            "value": "#03FFF7",
            "id": "Cyan"
          },
          {
            "displayValue": "Yellow",
            "value": "yellow",
            "id": "Yellow"
          },
          {
            "displayValue": "Black",
            "value": "#000000",
            "id": "Black"
          },
          {
            "displayValue": "White",
            "value": "#FFFFFF",
            "id": "White"
          }
        ]
      },
      {
        "id": "Capacity",
        "name": "Capacity",
        "type": "text",
        "items": [
          {
            "displayValue": "512G",
            "value": "512G",
            "id": "512G"
          },
          {
            "displayValue": "1T",
            "value": "1T",
            "id": "1T"
          }
        ]
      }
    ],
    "prices": [
      {
        "currency": {
          "label": "USD",
          "symbol": "$"
        },
        "amount": 700.02
      },
      {
        "currency": {
          "label": "GBP",
          "symbol": "£"
        },
        "amount": 600.67
      },
      {
        "currency": {
          "label": "AUD",
          "symbol": "A$"
        },
        "amount": 900.79
      },
      {
        "currency": {
          "label": "JPY",
          "symbol": "¥"
        },
        "amount": 61147.25
      },
      {
        "currency": {
          "label": "RUB",
          "symbol": "₽"
        },
        "amount": 43826.91
      }
    ],
  },
  {
    "name": "Iphone 13",
    "type": "smartphone",
    "id":4,
    "description":"Et aliquid sed. Nam voluptas dolores quia eos et. Sapiente omnis tempora laboriosam similique libero enim temporibus eius. Natus cupiditate quam corporis animi totam ipsam optio qui perspiciatis.",
    "gallery":[iphone130,
      iphone132,
      iphone133

    ],
    "attributes": [
      {
        "id": "Color",
        "name": "Color",
        "type": "swatch",
        "items": [
          {
            "displayValue": "Green",
            "value": "#44FF03",
            "id": "Green"
          },
          {
            "displayValue": "Cyan",
            "value": "#03FFF7",
            "id": "Cyan"
          },
          {
            "displayValue": "Yellow",
            "value": "yellow",
            "id": "Yellow"
          },
          {
            "displayValue": "Black",
            "value": "#000000",
            "id": "Black"
          },
          {
            "displayValue": "White",
            "value": "#FFFFFF",
            "id": "White"
          }
        ]
      },
      {
        "id": "Capacity",
        "name": "Capacity",
        "type": "text",
        "items": [
          {
            "displayValue": "512G",
            "value": "512G",
            "id": "512G"
          },
          {
            "displayValue": "1T",
            "value": "1T",
            "id": "1T"
          }
        ]
      }
    ],
    "prices": [
      {
        "currency": {
          "label": "USD",
          "symbol": "$"
        },
        "amount": 333.99
      },
      {
        "currency": {
          "label": "GBP",
          "symbol": "£"
        },
        "amount": 240.07
      },
      {
        "currency": {
          "label": "AUD",
          "symbol": "A$"
        },
        "amount": 430.85
      },
      {
        "currency": {
          "label": "JPY",
          "symbol": "¥"
        },
        "amount": 36068.27
      },
      {
        "currency": {
          "label": "RUB",
          "symbol": "₽"
        },
        "amount": 25257.22
      }
    ],
  },
  {
    "name": "Laptop Dell",
    "type": "laptop",
    "id":5,
    "description":"Dolorem ea deleniti est saepe est itaque sit laudantium. Sunt fugiat qui expedita quas omnis quam odio fugiat nemo. Assumenda vel expedita mollitia dolor et earum natus expedita. Laborum et doloribus ad unde id.",
    "gallery":[dell,
      dell2

    ],
    "attributes": [
      {
        "id": "Color",
        "name": "Color",
        "type": "swatch",
        "items": [
          {
            "displayValue": "Green",
            "value": "#44FF03",
            "id": "Green"
          },
          {
            "displayValue": "Cyan",
            "value": "#03FFF7",
            "id": "Cyan"
          },
          {
            "displayValue": "Blue",
            "value": "#030BFF",
            "id": "Blue"
          },
          {
            "displayValue": "Black",
            "value": "#000000",
            "id": "Black"
          },
          {
            "displayValue": "White",
            "value": "#FFFFFF",
            "id": "White"
          }
        ]
      },
      {
        "id": "Capacity",
        "name": "Capacity",
        "type": "text",
        "items": [
          {
            "displayValue": "512G",
            "value": "512G",
            "id": "512G"
          },
          {
            "displayValue": "1T",
            "value": "1T",
            "id": "1T"
          }
        ]
      }
    ],
    "prices": [
      {
        "currency": {
          "label": "USD",
          "symbol": "$"
        },
        "amount": 1688.03
      },
      {
        "currency": {
          "label": "GBP",
          "symbol": "£"
        },
        "amount": 1213.34
      },
      {
        "currency": {
          "label": "AUD",
          "symbol": "A$"
        },
        "amount": 2177.57
      },
      {
        "currency": {
          "label": "JPY",
          "symbol": "¥"
        },
        "amount": 182294.51
      },
      {
        "currency": {
          "label": "RUB",
          "symbol": "₽"
        },
        "amount": 127653.82
      }
    ],
  },
  {
    "name": "Macbook air",
    "type": "laptop",
    "id":6,
    "description":"Illum numquam ipsum facilis autem aliquid. Dignissimos quae nobis est doloremque esse ea. Omnis deserunt incidunt sunt voluptate consequuntur illum ut commodi dolores. Ut suscipit et incidunt.",
    "gallery":[Macbookair,
      Macbookair2

    ],
    "attributes": [
      {
        "id": "Color",
        "name": "Color",
        "type": "swatch",
        "items": [
          {
            "displayValue": "Green",
            "value": "#44FF03",
            "id": "Green"
          },
          {
            "displayValue": "Cyan",
            "value": "#03FFF7",
            "id": "Cyan"
          },
          {
            "displayValue": "Blue",
            "value": "#030BFF",
            "id": "Blue"
          },
          {
            "displayValue": "Black",
            "value": "#000000",
            "id": "Black"
          },
          {
            "displayValue": "White",
            "value": "#FFFFFF",
            "id": "White"
          }
        ]
      },
      {
        "id": "Capacity",
        "name": "Capacity",
        "type": "text",
        "items": [
          {
            "displayValue": "512G",
            "value": "512G",
            "id": "512G"
          },
          {
            "displayValue": "1T",
            "value": "1T",
            "id": "1T"
          }
        ]
      }
    ],
    "prices": [
      {
        "currency": {
          "label": "USD",
          "symbol": "$"
        },
        "amount": 1000.76
      },
      {
        "currency": {
          "label": "GBP",
          "symbol": "£"
        },
        "amount": 719.34
      },
      {
        "currency": {
          "label": "AUD",
          "symbol": "A$"
        },
        "amount": 1290.99
      },
      {
        "currency": {
          "label": "JPY",
          "symbol": "¥"
        },
        "amount": 108074.6
      },
      {
        "currency": {
          "label": "RUB",
          "symbol": "₽"
        },
        "amount": 75680.48
      }
    ],
  },
  {
    "name": "Macbook pro",
    "type": "laptop",
    "id":7,
    "description":"Accusantium aperiam aut minus rerum soluta. Et in ut omnis blanditiis inventore corporis qui. Sunt nihil quo perferendis rerum dolores architecto facere facere. Et minima est assumenda cum veritatis aut voluptates fugit.",
    "gallery":[Macbookpro,
      Macbookpro2

    ],
    "attributes": [
      {
        "id": "Color",
        "name": "Color",
        "type": "swatch",
        "items": [
          {
            "displayValue": "Green",
            "value": "#44FF03",
            "id": "Green"
          },
          {
            "displayValue": "Cyan",
            "value": "#03FFF7",
            "id": "Cyan"
          },
          {
            "displayValue": "Blue",
            "value": "#030BFF",
            "id": "Blue"
          },
          {
            "displayValue": "Black",
            "value": "#000000",
            "id": "Black"
          },
          {
            "displayValue": "White",
            "value": "#FFFFFF",
            "id": "White"
          }
        ]
      },
      {
        "id": "Capacity",
        "name": "Capacity",
        "type": "text",
        "items": [
          {
            "displayValue": "512G",
            "value": "512G",
            "id": "512G"
          },
          {
            "displayValue": "1T",
            "value": "1T",
            "id": "1T"
          }
        ]
      }
    ],
    "prices": [
      {
        "currency": {
          "label": "USD",
          "symbol": "$"
        },
        "amount": 300.23
      },
      {
        "currency": {
          "label": "GBP",
          "symbol": "£"
        },
        "amount": 215.8
      },
      {
        "currency": {
          "label": "AUD",
          "symbol": "A$"
        },
        "amount": 387.3
      },
      {
        "currency": {
          "label": "JPY",
          "symbol": "¥"
        },
        "amount": 32422.38
      },
      {
        "currency": {
          "label": "RUB",
          "symbol": "₽"
        },
        "amount": 22704.14
      }
    ],
  }]
    



 export { currencies, datas }