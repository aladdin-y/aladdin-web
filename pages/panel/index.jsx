import { useEffect } from 'react';
import Router from 'next/router';

function ReadMore() {
  useEffect(() => {
    Router.push('/panel/Main/statistics');
  }, []);

  return null; // يمكنك إرجاع null لأن هذه المكونة لا تعرض شيئًا
}

export default ReadMore;
