import type { Data } from "./types";

export const example_data: Data[] = [
  {
    "word": {
      "surface": "아버지",
      "pos": "NNG",
      "pos_trans": "일반 명사",
      "semantic_class": "*",
      "has_final_consonant": false,
      "reading": "아버지",
      "entry_type": "*",
      "first_pos": "*",
      "last_pos": "*",
      "expression": "*"
    },
    "parsed_expression": null
  },
  {
    "word": {
      "surface": "가",
      "pos": "JKS",
      "pos_trans": "주격 조사",
      "semantic_class": "*",
      "has_final_consonant": false,
      "reading": "가",
      "entry_type": "*",
      "first_pos": "*",
      "last_pos": "*",
      "expression": "*"
    },
    "parsed_expression": null
  },
  {
    "word": {
      "surface": "방",
      "pos": "NNG",
      "pos_trans": "일반 명사",
      "semantic_class": "*",
      "has_final_consonant": true,
      "reading": "방",
      "entry_type": "*",
      "first_pos": "*",
      "last_pos": "*",
      "expression": "*"
    },
    "parsed_expression": null
  },
  {
    "word": {
      "surface": "에",
      "pos": "JKB",
      "pos_trans": "부사격 조사",
      "semantic_class": "*",
      "has_final_consonant": false,
      "reading": "에",
      "entry_type": "*",
      "first_pos": "*",
      "last_pos": "*",
      "expression": "*"
    },
    "parsed_expression": null
  },
  {
    "word": {
      "surface": "들어가",
      "pos": "VV",
      "pos_trans": "동사",
      "semantic_class": "*",
      "has_final_consonant": false,
      "reading": "들어가",
      "entry_type": "*",
      "first_pos": "*",
      "last_pos": "*",
      "expression": "*"
    },
    "parsed_expression": null
  },
  {
    "word": {
      "surface": "신다",
      "pos": "EP+EC",
      "pos_trans": "선어말 어미+연결 어미",
      "semantic_class": "*",
      "has_final_consonant": false,
      "reading": "신다",
      "entry_type": "Inflect",
      "first_pos": "EP",
      "last_pos": "EC",
      "expression": "시/EP/*+ㄴ다/EC/*"
    },
    "parsed_expression": [
      {
        "lemma": "시",
        "pos": "EP",
        "pos_trans": "선어말 어미"
      },
      {
        "lemma": "ㄴ다",
        "pos": "EC",
        "pos_trans": "연결 어미"
      }
    ]
  }
]