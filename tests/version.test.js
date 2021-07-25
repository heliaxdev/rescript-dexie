// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Zora from "@dusty-phillips/rescript-zora/src/Zora.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as Table from "../src/Table.js";
import Dexie from "dexie";
import * as DexieVersion from "../src/DexieVersion.js";
import FDBFactoryJs from "fake-indexeddb/lib/FDBFactory.js";
import FDBKeyRangeJs from "fake-indexeddb/lib/FDBKeyRange.js";

function p(prim0, prim1) {
  return prim0.then(Curry.__1(prim1));
}

function $$default(t) {
  t.test("Initialize version and upgrade", (function (t) {
          var idb = new FDBFactoryJs();
          var dexie = new Dexie("hello dexie", {
                indexedDB: idb,
                IDBKeyRange: FDBKeyRangeJs
              });
          var schema = [
            [
              "friends",
              "++id,name,birthdate,sex"
            ],
            [
              "pets",
              "++id,name,kind"
            ]
          ];
          DexieVersion.upgrade(DexieVersion.stores(dexie.version(1), schema), (function (_tx) {
                  
                }));
          dexie.open();
          var friends = dexie.table("friends");
          t.equal(friends.name, "friends", "Table name should be `friends`");
          var prim0 = Table.add(friends, {
                id: undefined,
                name: "Chris",
                sex: "Nonbinary"
              });
          var prim0$1 = prim0.then(function (id) {
                t.equal(id, 1, "Id should be 1");
                return Zora.done(undefined);
              });
          var prim0$2 = prim0$1.then(function (param) {
                return Table.getById(friends, 1);
              });
          var prim0$3 = prim0$2.then(function (result) {
                Zora.optionSome(t, result, (function (t, friend) {
                        t.equal(friend.name, "Chris", "Returned friend should have same name");
                        t.equal(friend.sex, "Nonbinary", "Returned friend should have same sex");
                        
                      }));
                return Table.getByCriteria(friends, {
                            name: "Chris"
                          });
              });
          var prim0$4 = prim0$3.then(function (result) {
                Zora.optionSome(t, result, (function (t, friend) {
                        t.equal(friend.name, "Chris", "Returned friend should have same name");
                        t.equal(friend.sex, "Nonbinary", "Returned friend should have same sex");
                        
                      }));
                return Table.getById(friends, 5);
              });
          var prim0$5 = prim0$4.then(function (result) {
                Zora.optionNone(t, result, "result should be none");
                return Table.getByCriteria(friends, {
                            name: "nobody"
                          });
              });
          var prim0$6 = prim0$5.then(function (result) {
                Zora.optionNone(t, result, "result should be none");
                return Table.bulkAdd(friends, [
                            {
                              id: undefined,
                              name: "Samuel",
                              sex: "Male"
                            },
                            {
                              id: undefined,
                              name: "Samantha",
                              sex: "Female"
                            }
                          ]);
              });
          var prim0$7 = prim0$6.then(function (ids) {
                t.equal(ids.length, 2, "Should have added two ids");
                return Table.count(friends);
              });
          var prim0$8 = prim0$7.then(function (count) {
                t.equal(count, 3, "Should now have three entries");
                return Table.put(friends, {
                            id: 3,
                            name: "Jess",
                            sex: "Female"
                          });
              });
          var prim0$9 = prim0$8.then(function (id) {
                t.equal(id, 3, "Should have updated the third object");
                return Table.getById(friends, 3);
              });
          var prim0$10 = prim0$9.then(function (result) {
                Zora.optionSome(t, result, (function (t, friend) {
                        t.equal(friend.name, "Jess", "Name should have changed");
                        t.equal(friend.sex, "Female", "Sex should be what was set");
                        
                      }));
                return Table.$$delete(friends, 1);
              });
          var prim0$11 = prim0$10.then(function (param) {
                return Table.count(friends);
              });
          var prim0$12 = prim0$11.then(function (count) {
                t.equal(count, 2, "Should now have three entries");
                return Table.bulkDelete(friends, [
                            2,
                            3,
                            99
                          ]);
              });
          var prim0$13 = prim0$12.then(function (param) {
                return Table.count(friends);
              });
          return prim0$13.then(function (count) {
                      t.equal(count, 0, "Should have deleted remaining entries");
                      return Zora.done(undefined);
                    });
        }));
  
}

export {
  p ,
  $$default ,
  $$default as default,
  
}
/* dexie Not a pure module */