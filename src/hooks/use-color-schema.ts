import { LocalStorageKeys } from '@enums/local-storage-keys.enum';
import { ColorSchema } from '@models/color-shema.type';
import LocalStorageHelper from '@utils/local-storage-helper';
import { useState } from 'react';

const localStorageHelper = LocalStorageHelper;

function checkSchemaPreffered(): ColorSchema {
  if (
    localStorageHelper.getItem(LocalStorageKeys.Schema) === 'dark' ||
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    document.documentElement.classList.add('dark');
    localStorageHelper.setItem(LocalStorageKeys.Schema, 'dark');
    return 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorageHelper.setItem(LocalStorageKeys.Schema, 'light');
    return 'light';
  }
}

const useColorSchema = (): readonly [ColorSchema, (schema?: ColorSchema) => void] => {
  const [currentSchema, setCurrentSchema] = useState<ColorSchema>(() => checkSchemaPreffered());

  const updateSchema = (schema?: ColorSchema): void => {
    document.documentElement.classList.remove(schema === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(schema);
    localStorageHelper.setItem(LocalStorageKeys.Schema, schema);

    setCurrentSchema(schema);
  };

  return [currentSchema, updateSchema] as const;
};

export default useColorSchema;
