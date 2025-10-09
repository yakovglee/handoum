export type WordType = 'Inflect' | 'Compound' | 'Preanalysis' | '*';

export interface BodyReadRootPost {
  text: string;
}

export interface MecabKoDicWord {
  surface: string;
  pos: string;
  semantic_class: string;
  has_final_consonant: boolean;
  reading: string;
  entry_type: WordType;
  first_pos: string;
  last_pos: string;
  expression: string;
}

export interface ParsedExpression {
  lemma: string;
  pos: string;
}

export interface Data {
  word: MecabKoDicWord;
  parsed_expression?: ParsedExpression[] | null;
}

export interface ValidationError {
  loc: Array<string | number>;
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}