import React, { useMemo } from 'react';
import { ContentElementProps } from '../../content-element/types';
import { ContentConditions, processContentConditionByGroups, processContentConditionBySchedule } from './utils';

export type ContentConditionParams = Partial<{
  contentConditions: ContentConditions;
  shouldSatisfyEveryCondition: boolean;
}>;

const getContentConditions = (
  contentConditions: ContentConditions | undefined,
  { shouldSatisfyEveryCondition }: ContentConditionParams,
) => {
  if (!contentConditions) {
    return true;
  }

  // TODO: move to f params
  const groupsToVerifyByCondition: never[] = []; // useSelector(getUserGroups)

  const contentConditionResults = contentConditions.map((condition) => {
    switch (condition.type) {
      case 'groups':
        return processContentConditionByGroups(condition, {
          currentGroups: groupsToVerifyByCondition,
        });
      case 'schedule':
        return processContentConditionBySchedule(condition);
      default:
        return true;
    }
  });

  return shouldSatisfyEveryCondition ? contentConditionResults.every(Boolean) : contentConditionResults.some(Boolean);
};

export const useContentConditions = getContentConditions;

const ContentElementCondition = ({
  showMultipleResults: shouldShowMultipleResults = false,
  satisfyEveryCondition = true,
  children,
}: ContentElementProps<'condition'>) => {
  const isFirstResultProvided = React.useRef(false);

  const elementsToRender = useMemo(
    () =>
      (
        React.Children.map(children, (item) => {
          if (
            getContentConditions(item?.props.contentConditions, {
              shouldSatisfyEveryCondition: item?.props.satisfyEveryCondition || satisfyEveryCondition,
            })
          ) {
            if (isFirstResultProvided.current) {
              return shouldShowMultipleResults ? item : null;
            }

            isFirstResultProvided.current = true;
            return item;
          }

          return null;
        }) || []
      ).filter(Boolean),
    [children, shouldShowMultipleResults, satisfyEveryCondition],
  );

  isFirstResultProvided.current = false;

  return elementsToRender.length ? <>{elementsToRender}</> : null;
};

export default ContentElementCondition;
