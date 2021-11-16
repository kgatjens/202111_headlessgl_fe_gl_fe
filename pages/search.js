import Image from 'next/image'
import { useEffect, useState } from 'react';
import Router from 'next/router';

import Container from '../components/layout/container'
import Layout from '../components/layout/layout'
import Header from '../components/layout/header'


import ResultInfo from '../src/components/search/result-info';
import { PER_PAGE_FIRST } from '../lib/utils/pagination';

import { getMainMenu } from '../lib/wp/api'

export default function Search({ data }) {
  
  const pageTitle = "GL - Search";
  const searchQueryString = process.browser ? ( Router?.query?.s ?? '' ) : '';
  const [ searchQuery, setSearchQuery ] = useState( searchQueryString );
  const [ queryResultPosts, setQueryResultPosts  ] = useState( {} );
  const [ showResultInfo, setShowResultInfo ] = useState( false );

  const headerData = {pageTitle, menuItems}

  const [ fetchPosts, { loading } ] = useLazyQuery( GET_SEARCH_RESULTS_WITH_TOTAL_PAGES, {
    notifyOnNetworkStatusChange: true,
    onCompleted: ( data ) => {
      setQueryResultPosts( data?.posts ?? {} );
      setShowResultInfo( true );
    },
    onError: ( error ) => {
      setSearchError( error?.graphQLErrors ?? '' );
    }
  } );

  const { header, menuItems } = data || {};

    useEffect( () => {
    /**
     * If the query params is set, set the searchQuery in the in
     * 1. Set the search input value to that query.
     * 2. Call fetchPosts to get the results as per the query string from query params.
     */
    if ( searchQueryString ) {
      setSearchQuery( searchQueryString );
      fetchPosts( {
        variables: {
          first: PER_PAGE_FIRST,
          after: null,
          query: searchQueryString
        }
      } );
    }

    }, [ searchQueryString ] );

    const totalPostResultCount =  queryResultPosts?.pageInfo?.offsetPagination?.total;

  return (
    <>
      <Layout>
      <Header header={headerData} />
      <Container>
        
      <div className="mx-auto min-h-almost-screen">
        <SearchBox
          searchQuery={ searchQuery }
          setSearchQuery={ setSearchQuery }
          {/*handleSearchFormSubmit={handleSearchFormSubmit}*/}
        />
        <ResultInfo showResultInfo={showResultInfo} totalPostResultCount={totalPostResultCount} classnames="mt-4 text-center"/>
        {/* <ErrorMessage text={searchError} classes="max-w-xl mx-auto -mt-8"/> */ }
        {/* <Loading showSpinner visible={loading} classes="mx-auto text-center -mt-8"/> */}
       
      </div>
      </Container>
    </Layout>
    </>
  )
}



export async function getStaticProps() {

  const menuItems = await getMainMenu()
  return {
    props: { menuItems },
  }
}