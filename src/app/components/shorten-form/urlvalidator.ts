import * as validUrl from 'valid-url';

export function isValidURL(control): {[key: string]: boolean}|null {
  return control.value.length > 1 && !validUrl.isHttpUri(control.value) ? {isValid: true} : null;
}
