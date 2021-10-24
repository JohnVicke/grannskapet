import { getConnection } from "typeorm";

export const purgeDb = async () => {
  const entities = getConnection().entityMetadatas;
  for (const { name } of entities) {
    const repo = getConnection().getRepository(name);
    await repo.clear();
  }
};
