import Ajv from "ajv";
import schema from "./schema.json";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
const ajv = new Ajv({
  allErrors: true,
  useDefaults: true
});
// const schema = {
//     title: 'Guest',
//     type: 'object',
//     properties: {
//         firstName: {
//             type: 'string'
//         },
//         lastName: {
//             type: 'string'
//         },
//         workExperience: {
//             description: 'Work experience in years',
//             type: 'integer',
//             minimum: 0,
//             maximum: 100
//         }
//     },
//     required: ['firstName', 'lastName']
// };

function createValidator(schema) {
  const validator = ajv.compile(schema);
  return model => {
    validator(model);
    if (validator.errors && validator.errors.length) {
      // eslint-disable-next-line no-throw-literal
      throw {
        details: validator.errors
      };
    }
  };
}
const schemaValidator = createValidator(schema);
const bridge = new JSONSchemaBridge(schema, schemaValidator);
export default bridge;
