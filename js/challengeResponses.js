export default [
  {
    "id": 0,
    "name": "Problem #1",
    "sections": [
      {
        "id": 1000,
        "name": "You're looking at it!",
        "sections": [{
          "id": 1001,
          "name": "But tell me about the design choices you made.",
          "sections": [
          ]
        }]
      }
    ]
  },
  {
    "id": 1,
    "name": "Problem #2",
    "sections": [
      {
        "id": 2,
        "name": "Part 1: The Problem",
        "sections": [
          {
            "id": 3,
            "name": "Show me the race condition!",
            "sections": [
              {
                "id":4,
                "name": "The race condition in the code is located in lines 62—64.",
                "sections": [
                  {
                    "id": 5,
                    "name": "But what does that look like?",
                    sections: [
                      {
                        "id":6,
                        "name": "this.account.fetch();",
                        "sections": []
                      },
                      {
                        "id":7,
                        "name": "this.profile.set('id', this.account.get('profile_id'));",
                        "sections": []
                      },
                      {
                        "id":8,
                        "name": "this.profile.fetch();",
                        "sections": []
                      }
                    ]
                  }

                ]
              }
            ]

          },
          {
            "id": 8,
            "name": "So what's going on here?",
            "sections": [
              {
                "id": 9,
                "name": "Well, the first line of code is an asynchronous call to fetch data for the account model from the server. The second line sets the profile model's id to the account model's profile_id. And the third line then fetches the profile using that newly assigned id.",
                "sections": [{
                  "id": 10,
                  "name": "Doesn't seem like a problem to me.",
                  "sections": [
                    {
                      "id": 11,
                      "name": "You're wrong! A race condition surfaces, because it is extremely likely that this.account.fetch() won't complete before the second line is run. So the profile's id won't be set properly. And finally, because the profile's id won't be set, this.profile.fetch() won't know which profile it's supposed to be grabbing. It's easy to overlook asynchrony, thinking that these lines of code will execute in their lexical order. Luckily, there's a fix in Part 2.",
                      "sections": []
                    }
                  ]
                }]
              }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "Part 2: The Fix",
        "sections": [
          {
            "id": 12,
            "name": "So how do we fix this monstrosity?",
            "sections": [
              {
                "id": 13,
                "name": "To put it simply, we need to wait to call the second and third lines of code until the first line of code has run to completion. Backbone's fetch() function helpfully returns a jqXHR object, which implements Promises—I would take advantage of that!",
                "sections": [
                  {
                    "id": 14,
                    "name": "But what the heck would that look like?",
                    "sections": [
                      {
                        "id": 15,
                        "name": "A simplified, poorly indented version of the fixed code (using an ES6 bound arrow function) might look like this:",
                        "sections": [
                          {
                            "id": 16,
                            "name": "this.account.fetch()",
                            "sections": []
                          },
                          {
                            "id": 17,
                            "name": "  .then(() =>",
                            "sections": []
                          },
                          {
                            "id": 18,
                            "name": "this.profile.set('id', this.account.get('profile_id'));",
                            "sections": []
                          },
                          {
                            "id": 19,
                            "name": "  this.profile.fetch();",
                            "sections": []
                          },
                          {
                            "id":20,
                            "name": "  );",
                            "sections": []
                          }
                        ]

                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Problem #3",
    "sections": [
      { id: "21",
        name: "How would you determine which browsers to support?",
        sections: [
          {
            id: "22",
            name: "In an ideal situation, we would have access to analytics about the real-life usage of our app—how many people are using each browser to access it? Because we are building this app out from scratch, we don't have that luxury in this case. Nevertheless, it might still be useful to look at the usage of VenueBook's other apps, provided they serve a similar function and have a similar target demographic. Those stats might give us a partial jumping-off point, especially because we might be able to make the assumption that some of the users of VenueBook's other apps would find themselves using the new one because of the brand association.",
            sections: [
              {
                id: "23",
                name: "In addition, the prompt helpfully gives a few bits of information to consider—the app needs to look good on desktop computers and mobile devices, and it's public-facing. As far as the first part goes, this means we need to look at the numbers of active users of traditional desktop browsers (Chrome, Safari, IE) as well as for users of mobile browsers (e.g. the Android browser). And because it's public-facing, we can't make the shortcut of assuming all of our users are using fully updated versions of techie-beloved browsers like Chrome. This might be a consideration we could make if it were an internal tool for the devs, but we have to cater to a much wider base here.",
                sections: [
                  {
                    id: "24",
                    name: "Another reasonable place to winnow down the choices is geography. Because VenueBook only operates in four cities right now, it could be argued that we could narrow our choices down to the top browsers used in just those cities or regions. However, this could be seen as gambling against the possibility of VenueBook expanding to other places. If VenueBook wanted to set up shop in China all of a sudden, we might find ourselves wishing we had given the older IEs a bit more TLC.",
                    sections: [
                      {
                        id: "25",
                        name: "    In sum, I would choose browsers by looking at a combination of these considerations and talking with the team about which considerations matter the most to the product's success. It's paramount to support at least the last handful of versions of the major browsers, and in this case we need to throw in the major mobile browsers as well. The rest of the list would be populated by carefully weighing the urgency of reaching certain demographics against the time it takes to support additional browsers and the ramifications it leads to regarding how we can style things.",
                        sections: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]

      },
      {
        id: 26,
        name: "How would you distinguish HTML/CSS code that is tailored for mobile versus desktop?",
        sections: [
          {
            id: 27,
            name: "For the CSS, I'd use three main stylesheets: one that acts as a sort of global stylesheet, one that addresses only desktop styles, and another that addresses only mobile styles. Any of these stylesheets could be modularized out into smaller parts if necessary. The main thrust of the approach is that the global stylesheet contributes the stylings that apply to the site no matter what the device is (things like colors and fonts come to mind), whereas the desktop and mobile stylesheets govern the more specific stylistic needs of their respective domains. This might mean moving a sidebar on desktop to the top of the page on mobile to save precious horizontal space, for example. Styling would be applied to the correct devices by the saving graces of CSS3 media queries, which would be used to target the correct range of screen sizes.",
            sections: [
              {
                id: 28,
                name: "As far as HTML goes, if we happened to have HTML elements that are only meant to be shown on mobile, I would add a prefix to the class names to reflect that. Something like `class=\"m-header-bar\"` or `class=\"d-side-bar\"` for mobile and desktop, respectively. That way, it would remain clear which device the element is meant for.",
                sections: [
                  {
                    id: 29,
                    name: "The goal of the separation and namespacing is to make sure that we know exactly where to find our mobile code versus our desktop code, and we know at a glance which type of code we're looking at. This helps us avoid encroaching on the wrong territory when writing new styling.",
                    sections: []
                  }
                ]

              }
            ]
          }
        ]
      },
      {
        id: 30,
        name: "How would you describe the pros and cons of your solution to the CTO and product manager?",
        sections: [
          {
            id: 31,
            name: "For the most part, the tradeoffs when making decisions about browser support are pretty similar no matter the project. The cons of my solution come from the fact that it's a compromise between full support for all browsers and ease of production. On one end, supporting more browsers might allow you to reach a larger audience. But it also might not prove useful if your target demographics don't even use certain browsers. On the other other end, only supporting the most current browsers is going to be a lot simpler from a production standpoint, but will cut a lot of potential users out of the picture. I believe that my solution finds a happy mean between the two extremes, because it leverages data and insight about VenueBook's target demographics, current users, and geography to find a point on the spectrum where the most users are supported by the least number of browsers.",
            sections: []
          }
        ]
      }
    ]
  }
];
