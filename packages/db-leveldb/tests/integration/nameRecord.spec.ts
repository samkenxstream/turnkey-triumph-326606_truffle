// @ts-nocheck
import { Storage } from "../../src/storage";
import { expect } from "chai";
const os = require("os");

describe("Name Record", () => {
  const tmpDir = os.tmpdir();

  let databaseName = "truffledbTest";
  let databaseEngine = "memory";
  let databaseDirectory = tmpDir;

  let levelDB;
  let models: object;
  let NameRecord;

  beforeEach(() => {
    const DB = Storage.createStorage({
      databaseEngine,
      databaseDirectory,
      databaseName
    });

    levelDB = DB.levelDB;
    models = DB.models;

    NameRecord = models.NameRecord;
  });
  afterEach(() => {
    levelDB.close();
  });

  it("generates an id from the content addressable fields", () => {
    expect(typeof NameRecord).to.equal("function");
  });
  it("save");
  it("query");
  it("all");
});