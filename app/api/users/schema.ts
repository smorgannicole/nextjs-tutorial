import { z } from "zod";

const schema = z.object({
  // when this obj method is called, it returns schema
  name: z.string().min(3),
  // zod is validating that the name prop of obj is string with min 3 chars
});

export default schema;
