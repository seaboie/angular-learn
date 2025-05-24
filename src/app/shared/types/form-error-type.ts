import { AbstractControl } from "@angular/forms";

// form-error-types.ts
export interface MinLengthError {
  minlength: {
    requiredLength: number;
    actualLength: number;
  };
}

export interface MaxLengthError {
  maxlength: {
    requiredLength: number;
    actualLength: number;
  };
}

export interface PatternError {
  pattern: {
    requiredPattern: string;
    actualValue: string;
  };
}

export type FormErrors = MinLengthError | MaxLengthError | PatternError;
