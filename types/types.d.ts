declare global {
  var _mongoClientPromise: string;
  var clientPromise: Promise<MongoClient>;
  function sum(a: number, b: number): number;
}

export {};
