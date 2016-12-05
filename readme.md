#PsdToJson

PsdToJson is a cli application that will produce a Json from a open psd

## Install
You must have nodeJs and npm and photoshop >15

execute this command on a shell :
``
npm i psdtojson -g
``

on photoshop :

```
Go to Edit>Preference>Plugin

check Activate distance connection

write in name service : Serveur Photoshop
write in password : password
```

## Usage

1. open a psd on photoshop
2. execute this command on a shell :
``
  psdtojson
``

you got a export.json file on the cwd folder


## Output exemple
```
{
  "doc": {
    "version": "1.4.0",
    "timeStamp": 0,
    "count": 0,
    "id": 458,
    "file": "C:\\Users\\florian\\Desktop\\florian.psd",
    "bounds": {
      "top": 0,
      "left": 0,
      "bottom": 1080,
      "right": 1920
    },
    "selection": [
      0
    ],
    "resolution": 72,
    "globalLight": {
      "angle": 90,
      "altitude": 30
    },
    "generatorSettings": false,
    "profile": "RVB sans description",
    "mode": "RGBColor",
    "depth": 8,
    "layers": [
      {
        "id": 6,
        "index": 8,
        "type": "layerSection",
        "name": "shapes",
        "bounds": {
          "top": 218,
          "left": 235,
          "bottom": 831,
          "right": 1429
        },
        "visible": true,
        "clipped": false,
        "blendOptions": {
          "mode": "passThrough"
        },
        "generatorSettings": false,
        "layers": [
          {
            "id": 11,
            "index": 7,
            "type": "shapeLayer",
            "name": "circle",
            "bounds": {
              "top": 269,
              "left": 654,
              "bottom": 371,
              "right": 756
            },
            "visible": true,
            "clipped": false,
            "fill": {
              "color": {
                "red": 41.0033,
                "green": 87.9987,
                "blue": 147.002
              },
              "class": "solidColorLayer"
            },
            "strokeStyle": {
              "strokeStyleVersion": 2,
              "strokeEnabled": false,
              "fillEnabled": true,
              "strokeStyleLineWidth": 4,
              "strokeStyleLineDashOffset": {
                "value": 0,
                "units": "pointsUnit"
              },
              "strokeStyleMiterLimit": 100,
              "strokeStyleLineCapType": "strokeStyleButtCap",
              "strokeStyleLineJoinType": "strokeStyleMiterJoin",
              "strokeStyleLineAlignment": "strokeStyleAlignInside",
              "strokeStyleScaleLock": false,
              "strokeStyleStrokeAdjust": false,
              "strokeStyleBlendMode": "normal",
              "strokeStyleOpacity": {
                "value": 100,
                "units": "percentUnit"
              },
              "strokeStyleContent": {
                "color": {
                  "red": 219.001,
                  "green": 121.002,
                  "blue": 111.002
                }
              },
              "strokeStyleResolution": 72
            },
            "generatorSettings": false,
            "path": {
              "pathComponents": [
                {
                  "origin": {
                    "type": "ellipse",
                    "bounds": {
                      "top": 269,
                      "left": 654,
                      "bottom": 371,
                      "right": 756
                    }
                  }
                }
              ],
              "bounds": {
                "top": 269,
                "left": 654,
                "bottom": 371,
                "right": 756
              },
              "defaultFill": false
            }
          },
          {
            "id": 14,
            "index": 6,
            "type": "layerSection",
            "name": "rects",
            "bounds": {
              "top": 218,
              "left": 235,
              "bottom": 831,
              "right": 1429
            },
            "visible": true,
            "clipped": false,
            "blendOptions": {
              "mode": "passThrough"
            },
            "generatorSettings": false,
            "layers": [
              {
                "id": 8,
                "index": 5,
                "type": "shapeLayer",
                "name": "rect",
                "bounds": {
                  "top": 540,
                  "left": 235,
                  "bottom": 831,
                  "right": 688
                },
                "visible": true,
                "clipped": false,
                "fill": {
                  "color": {
                    "red": 219,
                    "green": 121.004,
                    "blue": 111.004
                  },
                  "class": "solidColorLayer"
                },
                "strokeStyle": {
                  "strokeStyleVersion": 2,
                  "strokeEnabled": true,
                  "fillEnabled": true,
                  "strokeStyleLineWidth": 4,
                  "strokeStyleLineDashOffset": {
                    "value": 0,
                    "units": "pointsUnit"
                  },
                  "strokeStyleMiterLimit": 100,
                  "strokeStyleLineCapType": "strokeStyleButtCap",
                  "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                  "strokeStyleLineAlignment": "strokeStyleAlignInside",
                  "strokeStyleScaleLock": false,
                  "strokeStyleStrokeAdjust": false,
                  "strokeStyleBlendMode": "normal",
                  "strokeStyleOpacity": {
                    "value": 100,
                    "units": "percentUnit"
                  },
                  "strokeStyleContent": {
                    "color": {
                      "red": 93.9986,
                      "green": 157.998,
                      "blue": 121.002
                    }
                  },
                  "strokeStyleResolution": 72
                },
                "generatorSettings": false,
                "path": {
                  "pathComponents": [
                    {
                      "origin": {
                        "radii": [
                          16,
                          16,
                          16,
                          16
                        ],
                        "type": "roundedRect",
                        "bounds": {
                          "top": 540,
                          "left": 235,
                          "bottom": 831,
                          "right": 688
                        }
                      }
                    }
                  ],
                  "bounds": {
                    "top": 540,
                    "left": 235,
                    "bottom": 831,
                    "right": 688
                  },
                  "defaultFill": false
                }
              },
              {
                "id": 5,
                "index": 4,
                "type": "shapeLayer",
                "name": "rect",
                "bounds": {
                  "top": 228,
                  "left": 966,
                  "bottom": 519,
                  "right": 1419
                },
                "boundsWithFX": {
                  "top": 218,
                  "left": 956,
                  "bottom": 529,
                  "right": 1429
                },
                "visible": true,
                "clipped": false,
                "fill": {
                  "color": {
                    "red": 249.996,
                    "green": 127.002,
                    "blue": 33.0034
                  },
                  "class": "solidColorLayer"
                },
                "strokeStyle": {
                  "strokeStyleVersion": 2,
                  "strokeEnabled": false,
                  "fillEnabled": false,
                  "strokeStyleLineWidth": 4,
                  "strokeStyleLineDashOffset": {
                    "value": 0,
                    "units": "pointsUnit"
                  },
                  "strokeStyleMiterLimit": 100,
                  "strokeStyleLineCapType": "strokeStyleButtCap",
                  "strokeStyleLineJoinType": "strokeStyleMiterJoin",
                  "strokeStyleLineAlignment": "strokeStyleAlignInside",
                  "strokeStyleScaleLock": false,
                  "strokeStyleStrokeAdjust": false,
                  "strokeStyleBlendMode": "normal",
                  "strokeStyleOpacity": {
                    "value": 100,
                    "units": "percentUnit"
                  },
                  "strokeStyleContent": {
                    "color": {
                      "red": 219.001,
                      "green": 121.002,
                      "blue": 111.002
                    }
                  },
                  "strokeStyleResolution": 72
                },
                "generatorSettings": false,
                "layerEffects": {
                  "frameFX": {
                    "enabled": true,
                    "style": "outsetFrame",
                    "size": 8,
                    "color": {
                      "red": 99.9985,
                      "green": 73.9989,
                      "blue": 49.0031
                    }
                  }
                },
                "path": {
                  "pathComponents": [
                    {
                      "origin": {
                        "radii": [
                          16,
                          16,
                          16,
                          16
                        ],
                        "type": "roundedRect",
                        "bounds": {
                          "top": 228,
                          "left": 966,
                          "bottom": 519,
                          "right": 1419
                        }
                      }
                    }
                  ],
                  "bounds": {
                    "top": 228,
                    "left": 966,
                    "bottom": 519,
                    "right": 1419
                  },
                  "defaultFill": false
                }
              }
            ]
          }
        ]
      },
      {
        "id": 10,
        "index": 1,
        "type": "layer",
        "name": "draw",
        "bounds": {
          "top": 585,
          "left": 1215,
          "bottom": 1008,
          "right": 1572
        },
        "visible": true,
        "clipped": false,
        "pixels": true,
        "generatorSettings": false
      },
      {
        "id": 9,
        "index": 0,
        "type": "textLayer",
        "name": "text",
        "bounds": {
          "top": 96,
          "left": 786,
          "bottom": 168,
          "right": 1415
        },
        "visible": true,
        "clipped": false,
        "generatorSettings": false,
        "text": {
          "textKey": "this is a super Text",
          "textClickPoint": {
            "horizontal": {
              "value": 57.2396,
              "units": "percentUnit"
            },
            "vertical": {
              "value": 13.9352,
              "units": "percentUnit"
            }
          },
          "boundingBox": {
            "left": -312.822,
            "top": -54.2656,
            "right": 315.256,
            "bottom": 16.7656
          },
          "bounds": {
            "left": -314.041,
            "top": -56.1279,
            "right": 320.441,
            "bottom": 16.8965
          },
          "textShape": [
            {
              "char": "paint",
              "orientation": "horizontal",
              "transform": {
                "xx": 1,
                "xy": 0,
                "yx": 0,
                "yy": 1,
                "tx": 0,
                "ty": 0
              },
              "rowCount": 1,
              "columnCount": 1,
              "rowMajorOrder": true,
              "rowGutter": 0,
              "columnGutter": 0,
              "spacing": 0,
              "frameBaselineAlignment": "alignByAscent",
              "firstBaselineMinimum": 0,
              "base": {
                "horizontal": 0,
                "vertical": 0
              }
            }
          ],
          "textStyleRange": [
            {
              "from": 0,
              "to": 21,
              "textStyle": {
                "fontName": "Futura LT",
                "fontStyleName": "Heavy",
                "size": 64,
                "color": {
                  "red": 41.004,
                  "green": 87.998,
                  "blue": 147.002
                },
                "tracking": 100
              }
            }
          ],
          "paragraphStyleRange": [
            {
              "from": 0,
              "to": 21,
              "paragraphStyle": {
                "align": "center"
              }
            }
          ]
        }
      }
    ]
  }
}
```
