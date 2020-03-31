import styled from 'styled-components';
import Layout from '../components/layout/layout';
import { inject, observer } from 'mobx-react';
import { DataStore } from '../../stores/DataStore';

type Props = {
  dataStore?: DataStore;
};

const Welcome = styled.h1`
  text-align: center;
  margin: 3rem 0;
`;
const P = styled.p`
  text-align: center;
  margin: 3rem 0;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IndexPage = inject('dataStore')(
  observer((props: Props) => {
    const dataStore = props.dataStore!;

    return (
      <Layout title="Home | Next.js Starter Kit">
        <Welcome>Heyyo world! 🔥</Welcome>
        <Box>
          <P>{dataStore.title} 🤘 MobX update</P>

          <input
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dataStore.changeTitle(e.target.value)
            }
          />
        </Box>
      </Layout>
    );
  })
);
export default IndexPage;
