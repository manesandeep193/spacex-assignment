import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head'
import FilterContainer from '../components/Filter/FilterContainer';
import ProductList from '../components/ProducList/ProductList';

export default function Home({satelites = []}) {
  const {year, launch, landing} = useSelector(state => state.filtersModuleReducer.FiltersReducer.selected);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const refreshData = () => {
    router.replace(window.location.search);
    setIsLoading(true);
  }
  useEffect(() => {
    refreshData();
  }, [year, launch, landing]);

  useEffect(() => {
    setIsLoading(false);
  }, [satelites]);

  return (
    <main className='flex-container'>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no"/>
        <meta name="Description" content="Webpage that list and browse all launches by SpaceX program."/>
        <title>SpaceX Launch</title>
      </Head>
      <FilterContainer/>
      <ProductList
        isLoading={isLoading}
        products={satelites}
      />
    </main>
  )
}

export async function getServerSideProps({query}) {
  const {year, launch, landing} = query;
  
  const queryParams = `${launch ? `&launch_success=${launch}`: ''}${landing ? `&land_success=${landing}`: ''}${year ? `&launch_year=${year}`:''}`;
  const res = await fetch(`https://api.spaceXdata.com/v3/launches?limit=100&${queryParams}`);
  const satelites = await res.json();
  
  return {
    props: {
      satelites
    }
  }
}
