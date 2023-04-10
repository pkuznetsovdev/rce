export function getContentDataByKey<ContentData extends Record<string, any>, ContentDataKey extends keyof ContentData>(
  contentData: ContentData,
  contentDataKey: ContentDataKey,
) {
  return contentData[contentDataKey];
}
