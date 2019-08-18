import React from 'react';
import PropTypes from 'prop-types';

const WithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;

  return (
    <Layout>
      <Component {...rest} />
    </Layout>

  );
};

WithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
};

export default WithLayout;
