import styled from 'styled-components';

import Layout from '../components/layout/layout';

const Welcome = styled.h1`
  text-align: center;
  margin: 3rem 0;
`;

const About = () => (
  <Layout title="Hello world!">
    <Welcome>Hello world from about!</Welcome>
  </Layout>
);

export default About;
