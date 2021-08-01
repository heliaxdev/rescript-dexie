// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import Dexie from "dexie";
import * as DexieVersion from "../src/DexieVersion.js";
import FDBFactoryJs from "fake-indexeddb/lib/FDBFactory.js";
import FDBKeyRangeJs from "fake-indexeddb/lib/FDBKeyRange.js";

function p(prim0, prim1) {
  return prim0.then(Curry.__1(prim1));
}

function pt(prim0, prim1) {
  return prim0.then(Curry.__1(prim1));
}

function setup(param) {
  var idb = new FDBFactoryJs();
  var dexie = new Dexie("hello dexie", {
        indexedDB: idb,
        IDBKeyRange: FDBKeyRangeJs
      });
  var schema = [
    [
      "friends",
      "++id,name,birthdate,color"
    ],
    [
      "pets",
      "++id,name,kind"
    ]
  ];
  DexieVersion.upgrade(DexieVersion.stores(dexie.version(1), schema), (function (_tx) {
          
        }));
  dexie.open();
  return dexie;
}

export {
  p ,
  pt ,
  setup ,
  
}
/* dexie Not a pure module */
