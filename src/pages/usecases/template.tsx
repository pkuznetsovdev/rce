import React from 'react';
import CE from 'react-content-elements';

import { DailyCardList } from 'src/components';
import { Layout } from 'src/layout';
import { CustomTable } from '../../components/custom-table';

const mainClass = 'usecases';

const headers = ['tag', 'modifiers', 'content', 'config'];
const firstRowData = ['string', 'string[]', 'string', 'Record<string, any>'];
const rowsData = [firstRowData];
const headerCellModifiers = ['bold'];

const Usecases = () => {
  return (
    <Layout className={mainClass} title='Usecases'>
      <CE.Block modifiers={['section', 'container']}>
        <CE.List className='usecases-list'>
          <Usecase title='Custom table'>
            <CE.Custom
              CustomTemplate={CustomTable}
              cellHeaders={headers}
              rowsData={rowsData}
              headerCellModifiers={headerCellModifiers}
            />
          </Usecase>
          <Usecase title='Daily Card list'>
            <DailyCardList />
          </Usecase>
        </CE.List>
      </CE.Block>
    </Layout>
  );
};

export default Usecases;

const Usecase = ({ title, children }: React.PropsWithChildren<{ title: string }>) => {
  return (
    <>
      <CE.Text content={title} modifiers={['title', 'i']} />
      {children}
    </>
  );
};
