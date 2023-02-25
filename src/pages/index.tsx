import React from "react";
import { ContentElements } from "src/content-elements";

import { useGetData } from "src/data";
import { CustomComponents } from "src/custom";

interface CEConfigByNameMap {
  'text': 'Text Props Config';
}

type CEName = keyof CEConfigByNameMap;

type CEModifiers<Name extends CEName> = string[];
type CETag<Name extends CEName> = string;

type CEPropsByName<Name extends CEName> = CEConfigByNameMap[Name];

type CEConfig<Name extends CEName> = {
  modifiers: CEModifiers<Name>[];
  tag: CETag<Name>;
} & CEPropsByName<Name>

type WithCEConfigByName<Name extends CEName, T> = T & {
  [ceName: Name]: CEConfigByNameMap[Name];
}

type CEProps<Name extends CEName> = WithCEConfigByName<Name, {
  modifiers: CEModifiers<Name>[];
  tag: CETag<Name>;
}>;

const Props: CEProps<'text'> = {
}

const Index = () => {
  const pageData = useGetData("IndexPage");
    return (
    <ContentElements.Page>
      <ContentElements.Text
        modifiers={["header"]}
        tag="h3"
          // TODO WTF
          // @ts-ignore
        text={pageData.title}
      />
      <ContentElements.Text modifiers={["subheader"]}>
        Develop content, structure is done
      </ContentElements.Text>
      <ContentElements.List
        className="option-card-list"
        ceList={{
          items: pageData.options,
          ItemTemplate: CustomComponents.OptionCard,
        }}
      />
    </ContentElements.Page>
  );
};

export default Index;
