import React from 'react';

export function useValueFromList<ListOfValues extends Array<unknown> | ReadonlyArray<unknown>>(
  listOfValues: ListOfValues,
) {
  const [activeValue, setActiveValue] = React.useState<ListOfValues[number]>(listOfValues[0]);

  return [activeValue, setActiveValue] as const;
}
