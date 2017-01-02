import { Parameter } from './parameter';

export interface Endpoint {
  url: string;
  description: string;
  fileContents?: string;
  parameters?: Parameter[];
}
