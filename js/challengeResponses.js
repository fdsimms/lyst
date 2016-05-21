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
    ]
  }
];
