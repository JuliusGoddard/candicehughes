import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Splash from '../components/splash'
import Bio from '../components/bio'
import Works from '../components/works'
import Videos from '../components/videos'
import Links from '../components/links'
import Head from '../components/head'

const IndexPage = () => {

  return (
    <Layout>
      <Head title="Homepage" />
    <Navbar />
    <Splash />
    <Bio />
    <Works />
    <Videos />
    <Links />
    </Layout>
  )
}

export default IndexPage