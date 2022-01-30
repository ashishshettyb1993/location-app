const tripdata = {
  type: "FeatureCollection",
  crs: {
    type: "name",
    properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" }
  },
  features: [
    {
      type: "Feature",
      properties: {
        ID: 1,
        NAME_EN: "Sensō-ji",
        NAME_JP: "浅草寺",
        ADDRESS: "〒111-0032 東京都台東区浅草２丁目３−1",
        CATEGORY: "holiday",
        FROM_DATE: new Date("2022-02-01"),
        END_DATE: new Date("2022-02-28")
      },
      geometry: {
        type: "Point",
        coordinates: [139.7944666, 35.7147694]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 2,
        NAME_EN: "Niigata Prefectural Museum of Modern Art",
        NAME_JP: "新潟県立近代美術館",
        ADDRESS: "〒940-2083 新潟県長岡市千秋３丁目278-14",
        CATEGORY: "business",
        FROM_DATE: new Date("2022-03-01"),
        END_DATE: new Date("2022-03-30")
      },
      geometry: {
        type: "Point",
        coordinates: [138.6949329, 37.4564186]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 3,
        NAME_EN: "Tokyo Dome City",
        NAME_JP: "東京ドームシティ",
        ADDRESS: "〒112-8575 東京都文京区後楽１丁目３−61",
        CATEGORY: "school",
        FROM_DATE: new Date("2022-04-01"),
        END_DATE: new Date("2022-04-30")
      },
      geometry: {
        type: "Point",
        coordinates: [139.7244456, 35.690639]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 4,
        NAME_EN: "Jōren Falls",
        NAME_JP: "浄蓮の滝",
        ADDRESS: "〒410-3206 静岡県伊豆市湯ケ島892-14",
        CATEGORY: "holiday",
        FROM_DATE: new Date("2022-05-01"),
        END_DATE: new Date("2022-05-30")
      },
      geometry: {
        type: "Point",
        coordinates: [138.9679682, 34.962242]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 5,
        NAME_EN: "Osaka Castle",
        NAME_JP: "大阪城",
        ADDRESS: "〒540-0002 大阪府大阪市中央区大阪城１−1",
        CATEGORY: "business",
        FROM_DATE: new Date("2022-06-01"),
        END_DATE: new Date("2022-06-30")
      },
      geometry: {
        type: "Point",
        coordinates: [135.5204609, 34.6703893]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 6,
        NAME_EN: "Mount Hiko",
        NAME_JP: "英彦山",
        ADDRESS: "〒871-0701 大分県中津市山国町槻木",
        CATEGORY: "business",
        FROM_DATE: new Date("2022-07-01"),
        END_DATE: new Date("2022-07-30")
      },
      geometry: {
        type: "Point",
        coordinates: [130.6778463, 33.4009457]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 7,
        NAME_EN: "Towada-Hachimantai National Park",
        NAME_JP: "十和田八幡平国立公園",
        ADDRESS: "〒018-5501 青森県十和田市奥瀬",
        CATEGORY: "holiday",
        FROM_DATE: new Date("2022-08-01"),
        END_DATE: new Date("2022-08-30")
      },
      geometry: {
        type: "Point",
        coordinates: [140.1794884, 40.1823817]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 8,
        NAME_EN: "Daisetsuzan National Park",
        NAME_JP: "大雪山国立公園",
        ADDRESS: "〒078-1701 北海道上川郡上川町層雲峡",
        CATEGORY: "school",
        FROM_DATE: new Date("2022-09-01"),
        END_DATE: new Date("2022-09-30")
      },
      geometry: {
        type: "Point",
        coordinates: [141.8426366, 43.1809166]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 9,
        NAME_EN: "Sapporo Odori Park",
        NAME_JP: "大通公園",
        ADDRESS: "〒060-0042 北海道札幌市中央区大通西７丁目",
        CATEGORY: "business",
        FROM_DATE: new Date("2022-10-01"),
        END_DATE: new Date("2022-10-30")
      },
      geometry: {
        type: "Point",
        coordinates: [141.2866838, 43.0397291]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 10,
        NAME_EN: "Mt. Niseko-Annupuri",
        NAME_JP: "ニセコアンヌプリ",
        ADDRESS: "〒044-0082 北海道虻田郡倶知安町岩尾別",
        CATEGORY: "school",
        FROM_DATE: new Date("2022-11-01"),
        END_DATE: new Date("2022-11-30")
      },
      geometry: {
        type: "Point",
        coordinates: [140.6983685, 42.8704486]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 11,
        NAME_EN: "Sendai Castle",
        NAME_JP: "青葉城本丸会館",
        ADDRESS: "〒980-0862 宮城県仙台市青葉区川内1",
        CATEGORY: "school",
        FROM_DATE: new Date("2022-12-01"),
        END_DATE: new Date("2022-12-30")
      },
      geometry: {
        type: "Point",
        coordinates: [140.8537388, 38.2520962]
      }
    },
    {
      type: "Feature",
      properties: {
        ID: 12,
        NAME_EN: "Fukushima Prefectural Museum of Art",
        NAME_JP: "福島県立美術館",
        ADDRESS: "〒960-8003 福島県福島市森合西養山 １番地",
        CATEGORY: "holiday",
        FROM_DATE: new Date("2023-01-01"),
        END_DATE: new Date("2023-01-30")
      },
      geometry: {
        type: "Point",
        coordinates: [140.2602706, 37.8007735]
      }
    }
  ]
};

export default tripdata;
