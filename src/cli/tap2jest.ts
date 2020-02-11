import { executeTransformations } from './transformers';

executeTransformations({
  files: process.argv.slice(2),
  flags: { dry: false },
  parser: 'ts',
  transformers: ['tape'],
  transformerArgs: [],
})
