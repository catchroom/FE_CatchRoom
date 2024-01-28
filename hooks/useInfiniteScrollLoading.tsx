'use client';

import { Spinner } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { useToastAlert } from './useToastAlert';

// eslint-disable-next-line
const useInfiniteScrollLoading = (watchData: any) => {
  const { alertOpenHandler } = useToastAlert('로딩중...');
  const [loaderVisible, setLoaderVisible] = React.useState(true);

  useEffect(() => {
    // Show the loader initially
    setLoaderVisible(true);
    alertOpenHandler();

    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setLoaderVisible(false);
    }, 30000);

    // Clear the timeout when the component is unmounted or when a new page is loaded
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line
  }, [watchData]);

  const LoaderComponent = () =>
    loaderVisible && (
      <div>
        {' '}
        <div className="fixed w-full max-w-[480px] flex flex-col items-center justify-center w z-[200000]">
          <Spinner color="pink" className="mt-5" />
          <p className="mt-1">로딩중</p>
        </div>
      </div>
    );
  return { LoaderComponent };
};

export default useInfiniteScrollLoading;
