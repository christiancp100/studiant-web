import React from 'react';
import PropTypes from 'prop-types';
import { ERROR, LOADING, SUCCESS } from 'src/api/status';
import Loading from './Loading';
import { useRouter } from 'next/router';


const SafeRequest = ({ status, children }) => {
  const router = useRouter()
  if (status === ERROR) {
    router.push("/");
  }
  return <>
    {status === LOADING && <Loading />}
    {status === SUCCESS && <>{children}</>}
  </>;
};

SafeRequest.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default SafeRequest;
